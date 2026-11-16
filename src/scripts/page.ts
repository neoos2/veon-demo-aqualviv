// Progressive enhancements. Every piece of content is in the HTML already; this only adds state.

// 1. "Today" in the hero board and slides schedule: only the published schedule, no "open now".
const day = new Date().getDay(); // 0 = Sunday
const hoursLabel = document.querySelector<HTMLElement>("[data-today-label]");
const hoursValue = document.querySelector<HTMLElement>("[data-today-hours]");
const hoursNote = document.querySelector<HTMLElement>("[data-today-note]");
if (hoursLabel && hoursValue && hoursNote) {
  hoursLabel.textContent = "Сьогодні";
  hoursValue.textContent = day === 0 ? "8:00–21:00" : "7:00–21:00";
  hoursNote.textContent = day === 0 ? "неділя; пн–сб з 7:00" : "пн–сб; у неділю з 8:00";
  hoursLabel.closest(".board__item")?.classList.add("is-today");
}
const slidesKey = day >= 1 && day <= 4 ? "mon-thu" : "fri-sun";
document.querySelectorAll<HTMLElement>(`[data-days="${slidesKey}"]`).forEach((row) => {
  row.classList.add("is-today");
  const mark = row.querySelector<HTMLElement>("[data-today-mark]");
  if (mark) mark.hidden = false;
});

// 2. Header gets a hairline once the page scrolls.
const header = document.querySelector<HTMLElement>("[data-header]");
const onScrollHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
onScrollHeader();

// 3. Mobile menu (native popover): close it after an anchor is chosen.
const menu = document.getElementById("site-menu") as (HTMLElement & { hidePopover?: () => void }) | null;
document.querySelectorAll<HTMLAnchorElement>("[data-menu-link]").forEach((a) =>
  a.addEventListener("click", () => {
    try { menu?.hidePopover?.(); } catch { /* popover already closed */ }
  }),
);

// 4. Sticky reception button on phones: after the hero, hidden once the visit block is on screen.
const bar = document.querySelector<HTMLElement>("[data-callbar]");
const hero = document.getElementById("hero");
const visit = document.getElementById("visit");
const updateBar = () => {
  if (!bar || !hero || !visit) return;
  const pastHero = hero.getBoundingClientRect().bottom < 0;
  const beforeVisit = visit.getBoundingClientRect().top > window.innerHeight;
  bar.classList.toggle("is-shown", pastHero && beforeVisit);
};
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { onScrollHeader(); updateBar(); ticking = false; });
}, { passive: true });
updateBar();

// 5. Price tabs (WAI-ARIA tabs pattern). Without scripts every panel is shown in a list.
const tabsRoot = document.querySelector<HTMLElement>("[data-tabs]");
if (tabsRoot) {
  const tabs = Array.from(tabsRoot.querySelectorAll<HTMLButtonElement>("[role=tab]"));
  const panels = Array.from(tabsRoot.querySelectorAll<HTMLElement>("[role=tabpanel]"));
  tabsRoot.classList.add("is-tabbed");
  const select = (i: number, focus = false) => {
    tabs.forEach((t, j) => {
      const on = i === j;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      panels[j].classList.toggle("is-active", on);
      panels[j].setAttribute("aria-hidden", String(!on));
      if (on) panels[j].removeAttribute("inert"); else panels[j].setAttribute("inert", "");
    });
    if (focus) tabs[i].focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(i));
    t.addEventListener("keydown", (e) => {
      const last = tabs.length - 1;
      let n = -1;
      if (e.key === "ArrowRight") n = i === last ? 0 : i + 1;
      else if (e.key === "ArrowLeft") n = i === 0 ? last : i - 1;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = last;
      if (n >= 0) { e.preventDefault(); select(n, true); }
    });
  });
  select(0);
}

// 6. Automated captures (headless review screenshots) do not scroll: show reveal targets in their final state.
if (navigator.webdriver) document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
