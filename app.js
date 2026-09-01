/* =========================================================================
   태화라이온스클럽 - 동작 스크립트
   (이 파일은 수정할 필요 없습니다. 내용은 data.js 에서 바꾸세요.)
   ========================================================================= */

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

/* ---------- 1. 기본 정보 렌더 ---------- */
function renderClub() {
  const c = SITE_DATA.club;
  const set = (sel, val) => { const e = $(sel); if (e && val != null) e.textContent = val; };

  document.title = c.name;
  set("#brand-name", c.name);
  set("#brand-sub", c.district);

  set("#gate-title", c.name);
  set("#gate-district", c.district);
  set("#gate-slogan", c.slogan);

  set("#foot-name", c.name);
  set("#foot-district", c.district);
  set("#foot-slogan", c.slogan);

  if (c.logo) {
    document.querySelectorAll(".banner-logo, .gate-logo").forEach((img) => (img.src = c.logo));
  }
}

/* ---------- 행사 일정표 (월별 드롭다운) ---------- */
function renderSchedule() {
  const wrap = $("#events");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const soonLimit = new Date(today);
  soonLimit.setDate(soonLimit.getDate() + 14); // 14일 이내 = 곧 다가옴

  // 최신 월이 위로 오도록 정렬(연·월 내림차순)
  const months = [...(SITE_DATA.schedule || [])].sort(
    (a, b) => (b.year - a.year) || (b.month - a.month)
  );
  if (months.length === 0) {
    wrap.appendChild(el("p", null, "등록된 일정이 없습니다."));
    return;
  }

  months.forEach((m) => {
    const acc = el("div", "accordion" + (m.open ? " open" : ""));

    // 펼침 헤더
    const header = el("button", "acc-header");
    header.innerHTML =
      `<span class="acc-title">${m.month}월 행사 일정표</span>` +
      `<span class="acc-count">${m.items.length}건</span>` +
      `<span class="acc-arrow">▾</span>`;
    header.addEventListener("click", () => acc.classList.toggle("open"));
    acc.appendChild(header);

    // 내용
    const body = el("div", "acc-body");
    // 날짜 미정(day 없음)은 맨 아래로
    const sorted = [...m.items].sort(
      (a, b) => (Number(a.day) || 99) - (Number(b.day) || 99)
    );

    sorted.forEach((it) => {
      const hasDay = Number.isFinite(Number(it.day)) && it.day;
      const d = hasDay ? new Date(m.year, m.month - 1, Number(it.day)) : null;
      if (d) d.setHours(0, 0, 0, 0);
      const isPast = d ? d < today : false;
      const isToday = d ? d.getTime() === today.getTime() : false;
      const isSoon = d ? !isPast && !isToday && d <= soonLimit : false;

      const row = el("div", "event" + (isPast ? " past" : ""));

      const dateBox = el("div", "date-box" + (hasDay ? "" : " tbd"));
      if (hasDay) {
        dateBox.appendChild(el("div", "day", it.day));
        dateBox.appendChild(el("div", "weekday", WEEKDAYS[d.getDay()] + "요일"));
      } else {
        dateBox.appendChild(el("div", "tbd-label", "날짜<br>미정"));
      }
      row.appendChild(dateBox);

      const info = el("div", "info");
      info.appendChild(el("h4", null, (it.title || "").replace(/\n/g, "<br>")));
      row.appendChild(info);

      if (isToday) row.appendChild(el("span", "badge-soon", "오늘"));
      else if (isSoon) row.appendChild(el("span", "badge-soon", "곧 다가옴"));

      body.appendChild(row);
    });

    acc.appendChild(body);
    wrap.appendChild(acc);
  });
}

/* ---------- 5. 회원명부 (비밀번호) ---------- */
function renderMembers() {
  const tbody = $("#member-tbody");
  SITE_DATA.members.forEach((m) => {
    const tr = el("tr");
    tr.appendChild(el("td", null, `<b>${m.name}</b>`));
    tr.appendChild(el("td", "role-cell", (m.role || "").replace(/\n/g, "<br>")));
    tr.appendChild(el("td", null, m.phone ? `<a href="tel:${m.phone}">${m.phone}</a>` : ""));
    tr.appendChild(
      el(
        "td",
        null,
        m.paid
          ? '<span class="pay-o">납부</span>'
          : '<span class="pay-x">미납</span>'
      )
    );
    tbody.appendChild(tr);
  });
  $("#member-count").textContent = `총 ${SITE_DATA.members.length}명`;
}

/* ---------- 월별 활동내역 (사진 앨범) ---------- */
function renderActivities() {
  const wrap = $("#activities-content");
  if (!wrap) return;

  const list = SITE_DATA.activities || [];
  if (list.length === 0) {
    wrap.innerHTML = '<p class="empty-msg">아직 등록된 활동내역이 없습니다.</p>';
    return;
  }

  const hasContent = list.some((m) => (m.posts || []).length);
  if (!hasContent) {
    wrap.innerHTML = '<p class="empty-msg">아직 등록된 활동내역이 없습니다.</p>';
    return;
  }

  // 날짜(예: "7월 6일")에서 일(day) 숫자 추출 — 정렬용
  const dayOf = (s) => {
    const m = String(s || "").match(/(\d+)\s*일/);
    return m ? +m[1] : 0;
  };

  // 최신순: 월 내림차순, 같은 달 안에서는 날짜 내림차순
  const months = [...list].sort((a, b) => (b.year - a.year) || (b.month - a.month));

  wrap.innerHTML = "";
  months.forEach((m) => {
    const posts = [...(m.posts || [])].sort((a, b) => dayOf(b.date) - dayOf(a.date));
    const acc = el("div", "accordion" + (m.open ? " open" : ""));

    const header = el("button", "acc-header");
    header.innerHTML =
      `<span class="acc-title">${m.month}월 활동내역</span>` +
      `<span class="acc-count">${posts.length}건</span>` +
      `<span class="acc-arrow">▾</span>`;
    header.addEventListener("click", () => acc.classList.toggle("open"));
    acc.appendChild(header);

    const body = el("div", "acc-body");
    if (posts.length === 0) body.appendChild(el("p", "empty-msg", "준비 중입니다."));

    posts.forEach((p) => {
      const card = el("div", "activity-post");
      if (p.title) card.appendChild(el("h3", "post-title", p.title));
      if (p.date) card.appendChild(el("div", "post-date", "📅 " + p.date));
      if (p.body) card.appendChild(el("p", "post-body", p.body.replace(/\n/g, "<br>")));

      const photos = p.photos || [];
      if (photos.length) {
        const grid = el("div", "photo-grid");
        photos.forEach((src) => {
          const img = el("img", "photo-thumb");
          img.src = src;
          img.loading = "lazy";
          img.alt = p.title || "활동사진";
          img.addEventListener("click", () => openLightbox(src));
          grid.appendChild(img);
        });
        card.appendChild(grid);
      }
      body.appendChild(card);
    });

    acc.appendChild(body);
    wrap.appendChild(acc);
  });
}

function openLightbox(src) {
  const lb = $("#lightbox");
  const img = $("#lightbox-img");
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add("open");
  document.body.classList.add("locked");
}

function closeLightbox() {
  const lb = $("#lightbox");
  if (!lb) return;
  lb.classList.remove("open");
  document.body.classList.remove("locked");
}

/* 금액 포맷 */
function won(n) {
  if (n === null || n === undefined || n === "") return "";
  return Number(n).toLocaleString("ko-KR");
}
function wonZero(n) {
  if (!n) return "-";
  return Number(n).toLocaleString("ko-KR");
}

/* ---------- 찬조현황 (회원별 누적) ---------- */
function renderDonations() {
  const wrap = $("#donations-content");
  const d = SITE_DATA.donations;
  if (!wrap || !d) return;

  let html = "";
  html += `<div class="fin-caption">${d.title || ""}${
    d.round ? ` <span class="fin-round">(${d.round})</span>` : ""
  }</div>`;

  html += '<div class="member-table-wrap"><table class="members fin-table">';
  html +=
    "<thead>" +
    '<tr><th rowspan="2">순번</th><th rowspan="2">회원명</th>' +
    '<th rowspan="2">자진<br>봉사금</th><th rowspan="2">발전<br>기금</th>' +
    '<th colspan="4">써클활동비</th><th rowspan="2">합계</th></tr>' +
    "<tr><th>골프회</th><th>산악회</th><th>급식<br>봉사</th><th>소계</th></tr>" +
    "</thead><tbody>";

  const rowHtml = (m, addL) =>
    `<tr>
       <td>${m.no ?? ""}</td>
       <td class="fin-name">${(m.name || "").replace(/\n/g, "")}${addL ? "L" : ""}</td>
       <td class="num">${wonZero(m.jajin)}</td>
       <td class="num">${wonZero(m.fund)}</td>
       <td class="num">${wonZero(m.golf)}</td>
       <td class="num">${wonZero(m.san)}</td>
       <td class="num">${wonZero(m.meal)}</td>
       <td class="num">${wonZero(m.sub)}</td>
       <td class="num fin-total">${wonZero(m.total)}</td>
     </tr>`;

  (d.members || []).forEach((m) => (html += rowHtml(m, true)));

  if (d.extra && d.extra.length) {
    html += `<tr class="fin-sep"><td colspan="9">※ 명부 외 (전표상 이름)</td></tr>`;
    d.extra.forEach((m) => (html += rowHtml(m, false)));
  }

  html += "</tbody>";
  if (d.totals) {
    const t = d.totals;
    html += `<tfoot><tr class="fin-grand">
      <td colspan="2">합 계</td>
      <td class="num">${won(t.jajin)}</td>
      <td class="num">${won(t.fund)}</td>
      <td class="num">${won(t.golf)}</td>
      <td class="num">${won(t.san)}</td>
      <td class="num">${won(t.meal)}</td>
      <td class="num">${won(t.sub)}</td>
      <td class="num">${won(t.total)}</td>
    </tr></tfoot>`;
  }
  html += "</table></div>";
  html += '<p class="fin-hint">표가 넓으면 좌우로 밀어서 보실 수 있습니다.</p>';

  wrap.innerHTML = html;
}

/* ---------- 운영현황 (회차별 수지계산서 + 계정별원장) ---------- */
function renderOperations() {
  const wrap = $("#operations-content");
  const o = SITE_DATA.operations;
  if (!wrap || !o) return;

  // 회차 최신순 (구버전 단일 회차 구조도 지원)
  const rounds = o.rounds
    ? [...o.rounds].sort((a, b) => b.round - a.round)
    : [{ round: o.round, statement: o.statement, ledger: o.ledger, attendance: o.attendance }];

  let html = "";
  rounds.forEach((R, ri) => {
    html += renderOneRound(R, ri === 0);
  });

  wrap.innerHTML = html;

  // 아코디언 토글
  wrap.querySelectorAll(".acc-header").forEach((h) =>
    h.addEventListener("click", () => h.parentElement.classList.toggle("open"))
  );
}

/* 한 회차(수지계산서 + 계정별원장) HTML */
function renderOneRound(o, isLatest) {
  let html = "";
  const s = o.statement;

  /* === 1) 수지계산서 === */
  if (s) {
    html += `<div class="accordion${isLatest ? " open" : ""}"><button class="acc-header">
        <span class="acc-title">${s.title}</span>
        ${isLatest ? '<span class="acc-count">최신</span>' : ""}
        <span class="acc-arrow">▾</span></button>
      <div class="acc-body">`;
    html += `<div class="stmt-head">${s.org || ""}<br><span>${s.period || ""}</span></div>`;

    html += '<div class="member-table-wrap"><table class="members stmt-table"><thead><tr>' +
      "<th>수입 과목</th><th>금액</th><th>지출 과목</th><th>금액</th></tr></thead><tbody>";
    const inc = s.incomes || [], exp = s.expenses || [];
    const n = Math.max(inc.length, exp.length);
    for (let i = 0; i < n; i++) {
      const a = inc[i], b = exp[i];
      html += `<tr>
        <td>${a ? a.name : ""}</td><td class="num">${a ? won(a.amount) : ""}</td>
        <td>${b ? b.name : ""}</td><td class="num">${b ? won(b.amount) : ""}</td>
      </tr>`;
    }
    html += `<tr class="stmt-sub"><td>소계</td><td class="num">${won(s.subIn)}</td><td>소계</td><td class="num">${won(s.subOut)}</td></tr>`;
    html += `<tr><td>자진봉사금</td><td class="num">${won(s.jajinIn)}</td><td>자진봉사금</td><td class="num">${won(s.jajinOut)}</td></tr>`;
    html += `<tr><td>써클활동비</td><td class="num">${won(s.circleIn)}</td><td>써클활동비</td><td class="num">${won(s.circleOut)}</td></tr>`;
    html += `<tr class="stmt-sub"><td>수입합계</td><td class="num">${won(s.totIn)}</td><td>지출합계</td><td class="num">${won(s.totOut)}</td></tr>`;
    html += "</tbody></table></div>";

    html += `<div class="stmt-summary">
      <div><span>금월 잔액</span><b>${won(s.balance)}원</b></div>
      <div><span>정기예탁금</span><b>${won(s.deposit)}원</b></div>
      <div class="hl"><span>자산 총액</span><b>${won(s.assets)}원</b></div>
    </div>`;
    html += "</div></div>";
  }

  /* === 2) 계정별원장 === */
  const ledger = o.ledger || [];
  html += `<div class="accordion"><button class="acc-header">
      <span class="acc-title">제${o.round}차 계정별 원장</span>
      <span class="acc-count">${ledger.length}개 계정</span>
      <span class="acc-arrow">▾</span></button><div class="acc-body">`;

  ledger.forEach((g) => {
    html += `<div class="ledger-group"><div class="ledger-title">${g.title}</div>`;
    html += '<div class="member-table-wrap"><table class="members ledger-table"><thead><tr>' +
      "<th>일자</th><th>내역</th><th>회원명</th><th>수입</th><th>지출</th><th>적요</th></tr></thead><tbody>";
    (g.rows || []).forEach((r) => {
      if (r.sub) {
        html += `<tr class="ledger-subsum"><td colspan="3">${r.label}</td><td class="num">${won(r.in)}</td><td class="num">${won(r.out)}</td><td></td></tr>`;
      } else {
        html += `<tr>
          <td class="nowrap">${r.date || ""}</td>
          <td>${r.desc || ""}</td>
          <td class="nowrap">${r.member || ""}</td>
          <td class="num">${won(r.in)}</td>
          <td class="num">${won(r.out)}</td>
          <td class="ledger-note">${r.note || ""}</td>
        </tr>`;
      }
    });
    html += `<tr class="ledger-sum"><td colspan="3">소계</td><td class="num">${won(g.subIn)}</td><td class="num">${won(g.subOut)}</td><td></td></tr>`;
    html += "</tbody></table></div></div>";
  });

  /* 참석인원 집계 */
  const att = o.attendance || [];
  if (att.length) {
    html += '<div class="ledger-group"><div class="ledger-title">◆ 참석인원 집계 (써클활동비 = 인원 × 1인당 단가)</div>';
    html += '<div class="member-table-wrap"><table class="members ledger-table"><thead><tr>' +
      "<th>구분</th><th>1인당 단가</th><th>금액</th><th>인원</th><th>참석자</th></tr></thead><tbody>";
    att.forEach((a) => {
      const isTotal = String(a.group).replace(/\s/g, "") === "합계";
      html += `<tr class="${isTotal ? "ledger-sum" : ""}">
        <td class="nowrap">${a.group}</td>
        <td class="num">${won(a.unit)}</td>
        <td class="num">${won(a.amount)}</td>
        <td class="num">${a.count ?? ""}${isTotal ? "" : "명"}</td>
        <td class="ledger-note">${a.note || ""}</td>
      </tr>`;
    });
    html += "</tbody></table></div></div>";
  }
  html += "</div></div>";

  return html;
}

/* ---------- 회비 납부안내 ---------- */
function renderFee() {
  const f = SITE_DATA.fee;
  const wrap = $("#fee-content");
  if (!f || !wrap) return;

  const itemsHtml = f.items
    .map(
      (it, i) =>
        `<tr>
           <td class="fee-no">${i + 1}</td>
           <td>${it.name}${it.detail ? ` <span class="fee-detail">${it.detail}</span>` : ""}</td>
           <td class="fee-amt">${it.amount}</td>
         </tr>`
    )
    .join("");

  wrap.innerHTML =
    (f.greeting ? `<p class="fee-greeting">${f.greeting.replace(/\n/g, "<br>")}</p>` : "") +
    `<div class="member-table-wrap">
       <table class="members fee-table">
         <thead><tr><th>No</th><th>항목</th><th>금액</th></tr></thead>
         <tbody>${itemsHtml}</tbody>
         <tfoot><tr class="fee-total"><td colspan="2">합계</td><td class="fee-amt">${f.total}</td></tr></tfoot>
       </table>
     </div>` +
    (f.totalNote ? `<p class="fee-note">※ ${f.totalNote}</p>` : "") +
    (f.closing ? `<p class="fee-closing">${f.closing}</p>` : "") +
    `<div class="account-box">
       <div class="account-label">💳 회비 입금계좌</div>
       <div class="account-number" id="acct-num">${f.account.bank} ${f.account.number}</div>
       <div class="account-holder">예금주 : ${f.account.holder}</div>
       <button class="account-copy" id="acct-copy">계좌번호 복사</button>
     </div>` +
    (f.signature ? `<p class="fee-sign">${f.signature}</p>` : "");

  const copyBtn = $("#acct-copy");
  if (copyBtn)
    copyBtn.addEventListener("click", () => {
      const txt = f.account.number;
      const done = () => {
        copyBtn.textContent = "복사됨 ✓";
        setTimeout(() => (copyBtn.textContent = "계좌번호 복사"), 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, done);
      else done();
    });
}

/* ---------- 클럽정관 (장별 드롭다운) ---------- */
function renderBylaws() {
  const wrap = $("#bylaws-content");
  if (!wrap) return;

  const b = SITE_DATA.bylaws || {};
  const note = $("#bylaws-note");
  if (note) note.textContent = b.note || "";

  const sections = b.sections || [];
  if (sections.length === 0) {
    wrap.innerHTML = '<p class="empty-msg">정관 내용이 곧 등록될 예정입니다.</p>';
    return;
  }

  wrap.innerHTML = "";
  sections.forEach((s) => {
    // 처음에는 모두 접힌 상태(목차만 보이기)
    const acc = el("div", "accordion");
    const header = el("button", "acc-header");
    header.innerHTML =
      `<span class="acc-title">${s.title || ""}</span>` +
      `<span class="acc-arrow">▾</span>`;
    header.addEventListener("click", () => acc.classList.toggle("open"));
    acc.appendChild(header);

    const html = (s.body || "")
      .split("\n")
      .map((line) => {
        const t = line.trim();
        if (!t) return '<div class="bylaws-gap"></div>';
        if (/^제\s*\d+\s*장/.test(t) || /^부\s*칙/.test(t))
          return `<div class="bylaws-chapter">${t}</div>`;
        if (/^제\s*\d+\s*조/.test(t)) return `<div class="bylaws-article">${t}</div>`;
        return `<div class="bylaws-line">${t}</div>`;
      })
      .join("");

    const body = el("div", "acc-body");
    body.appendChild(el("div", "bylaws-body", html));
    acc.appendChild(body);
    wrap.appendChild(acc);
  });
}

/* ---------- 사이트 접속 비밀번호 게이트 ---------- */
function openSite() {
  $("#gate").classList.add("hidden");
  document.body.classList.remove("locked");
  sessionStorage.setItem("taehwa_unlocked", "1");
}

function tryUnlock() {
  const input = $("#gate-pw");
  const err = $("#gate-error");
  if (input.value === SITE_DATA.sitePassword) {
    err.textContent = "";
    openSite();
  } else {
    err.textContent = "비밀번호가 올바르지 않습니다.";
    input.select();
  }
}

/* ---------- 화면(페이지) 전환 ---------- */
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll("nav a").forEach((a) => a.classList.remove("active"));
  const page = document.getElementById(id);
  if (page) page.classList.add("active");
  const link = document.querySelector(`nav a[data-page="${id}"]`);
  if (link) link.classList.add("active");
  const hdr = document.querySelector("header");
  if (hdr) hdr.classList.remove("nav-hidden"); // 메뉴 이동 시 상단 다시 보이기
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 초기화 ---------- */
function init() {
  renderClub();
  renderSchedule();
  renderActivities();
  renderDonations();
  renderOperations();
  renderMembers();
  renderFee();
  renderBylaws();

  // 네비게이션 클릭
  document.querySelectorAll("nav a, [data-goto]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = a.dataset.page || a.dataset.goto;
      if (target) {
        e.preventDefault();
        showPage(target);
      }
    });
  });

  // 모바일: 아래로 스크롤하면 상단 숨김, 위로 올리면 다시 표시
  const header = document.querySelector("header");
  let lastY = window.scrollY;
  window.addEventListener(
    "scroll",
    () => {
      if (!header) return;
      const y = window.scrollY;
      if (y > 150 && y > lastY + 6) header.classList.add("nav-hidden");
      else if (y < lastY - 6 || y < 90) header.classList.remove("nav-hidden");
      lastY = y;
    },
    { passive: true }
  );

  // 사진 크게보기 닫기 (아무 곳이나 클릭)
  const lb = $("#lightbox");
  if (lb) lb.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // 접속 비밀번호
  $("#gate-submit").addEventListener("click", tryUnlock);
  $("#gate-pw").addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryUnlock();
  });

  // 같은 방문 중 이미 입장했다면 게이트 건너뜀
  if (sessionStorage.getItem("taehwa_unlocked") === "1") {
    openSite();
  } else {
    document.body.classList.add("locked");
    $("#gate-pw").focus();
  }

  showPage("schedule");
}

// app.js가 동적으로(나중에) 로드돼도 안전하게 초기화
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
