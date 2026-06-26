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
  set("#foot-name", c.name);

  set("#gate-title", c.name);
  set("#gate-district", c.district);
  set("#gate-slogan", c.slogan);

  if (c.logo) {
    document.querySelectorAll(".banner-logo, .gate-logo").forEach((img) => (img.src = c.logo));
  }

  const founded = c.foundedYear ? `${c.foundedYear} 창립 · ` : "";
  $("#foot-info").innerHTML =
    `${founded}${c.region || ""}<br>` +
    (c.contactPhone ? `📞 <a href="tel:${c.contactPhone}">${c.contactPhone}</a> ` : "") +
    (c.contactEmail ? `· ✉️ <a href="mailto:${c.contactEmail}">${c.contactEmail}</a>` : "");
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
      info.appendChild(el("h4", null, it.title));
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
window.addEventListener("DOMContentLoaded", () => {
  renderClub();
  renderSchedule();
  renderDataTable(SITE_DATA.donations, "#donations-table", "#donations-note");
  renderDataTable(SITE_DATA.operations, "#operations-table", "#operations-note");
  renderMembers();

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
});
