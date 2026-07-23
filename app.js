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

  const months = SITE_DATA.schedule || [];
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
    const sorted = [...m.items].sort((a, b) => a.day - b.day);

    sorted.forEach((it) => {
      const d = new Date(m.year, m.month - 1, it.day);
      d.setHours(0, 0, 0, 0);
      const isPast = d < today;
      const isToday = d.getTime() === today.getTime();
      const isSoon = !isPast && !isToday && d <= soonLimit;

      const row = el("div", "event" + (isPast ? " past" : ""));

      const dateBox = el("div", "date-box");
      dateBox.appendChild(el("div", "day", it.day));
      dateBox.appendChild(el("div", "weekday", WEEKDAYS[d.getDay()] + "요일"));
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

/* ---------- 찬조/운영 현황 (범용 표) ---------- */
function renderDataTable(cfg, tableId, noteId) {
  const table = $(tableId);
  if (!table || !cfg) return;

  const note = $(noteId);
  if (note) note.textContent = cfg.note || "";

  const cols = cfg.columns || [];
  const rows = cfg.rows || [];

  const thead = el("thead");
  const htr = el("tr");
  cols.forEach((c) => htr.appendChild(el("th", null, c)));
  thead.appendChild(htr);

  const tbody = el("tbody");
  if (rows.length === 0) {
    const tr = el("tr");
    const td = el("td", "empty", "아직 등록된 내용이 없습니다.");
    td.setAttribute("colspan", cols.length || 1);
    tr.appendChild(td);
    tbody.appendChild(tr);
  } else {
    rows.forEach((r) => {
      const tr = el("tr");
      cols.forEach((_, i) => {
        const v = r[i];
        tr.appendChild(el("td", null, v == null ? "" : String(v).replace(/\n/g, "<br>")));
      });
      tbody.appendChild(tr);
    });
  }

  table.innerHTML = "";
  table.appendChild(thead);
  table.appendChild(tbody);
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
  sections.forEach((s, i) => {
    const acc = el("div", "accordion" + (i === 0 ? " open" : ""));
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 초기화 ---------- */
function init() {
  renderClub();
  renderSchedule();
  renderActivities();
  renderDataTable(SITE_DATA.donations, "#donations-table", "#donations-note");
  renderDataTable(SITE_DATA.operations, "#operations-table", "#operations-note");
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
