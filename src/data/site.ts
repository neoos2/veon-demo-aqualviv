// All facts come from veon/client.json (checked 2026-11-16). Nothing here is invented.
export const FUTURE = "Розділ у розробці";

export const phone = (display: string) => ({
  display,
  href: "tel:" + display.replace(/[^\d+]/g, ""),
});

export const contacts = {
  reception: phone("+38 (067) 373 71 73"),
  receptionCity: phone("+38 (032) 263 60 55"),
  fitness: phone("+38 (032) 263 14 15"),
  fitnessMobile: phone("+38 (098) 901 12 87"),
  groups: phone("+38 (093) 641 70 73"),
  groupsEmail: "corporate.aqua77@gmail.com",
  groupsManager: "Ксенія Крилова",
  groupsHours: "пн–пт 9:00–18:00",
  address: "79060, м. Львів, вул. Княгині Ольги, 114",
  addressShort: "вул. Княгині Ольги, 114",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("вул. Княгині Ольги, 114, Львів, 79060"),
  instagram: "https://www.instagram.com/aquaparklviv/",
  facebook: "https://www.facebook.com/Aqualviv",
  legalName: "ТОВ «КОМПЛЕКС ВОДНИХ ВИДІВ СПОРТУ»",
};

export const nav = [
  { href: "#prices", label: "Ціни" },
  { href: "#family", label: "Дітям" },
  { href: "#zones", label: "Що всередині" },
  { href: "#abonements", label: "Абонементи" },
  { href: "#groups", label: "Групам" },
  { href: "#visit", label: "Візит" },
];

export const futureSections = [
  "Аквапарк",
  "Фітнес-центр",
  "Басейн 50 м",
  "Спортивні секції",
  "Релакс",
  "Дитячий день народження",
  "Усі абонементи",
  "Скеледром «Скеля»",
  "Магазин «Акваспорт»",
  "Яммі бар",
  "Тарифи парковки",
  "АКВА лаб",
  "Новини",
  "Вакансії",
  "English",
];

export type PriceCell = { label: string; price: string };
export type PriceGroup = { title?: string; cells: PriceCell[] };
export type Ticket = { id: string; tab: string; title: string; who: string; groups: PriceGroup[]; note?: string };

export const tickets: Ticket[] = [
  {
    id: "standard",
    tab: "Стандарт",
    title: "Загальний квиток «Стандарт»",
    who: "Загальний квиток. Учасникам бойових дій і АТО — знижка 20%.",
    groups: [{ cells: [
      { label: "1 година", price: "400" },
      { label: "2 години", price: "600" },
      { label: "Весь день", price: "900" },
    ] }],
  },
  {
    id: "reduced",
    tab: "Пільговий",
    title: "Пільговий квиток",
    who: "Діти до 150 см, особи з інвалідністю I–II груп. Без зони «Релакс».",
    groups: [{ cells: [
      { label: "1 година", price: "300" },
      { label: "2 години", price: "450" },
      { label: "Весь день", price: "650" },
    ] }],
  },
  {
    id: "family-ticket",
    tab: "Сімейний",
    title: "Сімейний квиток",
    who: "3 особи, з них не більше 2 дорослих.",
    groups: [{ cells: [
      { label: "2 години", price: "1450" },
      { label: "Весь день", price: "2100" },
    ] }],
    note: "Кожна додаткова дитина — 600 грн за 2 години або 900 грн за весь день.",
  },
  {
    id: "group-ticket",
    tab: "Груповий",
    title: "Груповий квиток",
    who: "Від 15 осіб, за попереднім записом за телефоном.",
    groups: [
      { title: "Стандарт", cells: [
        { label: "2 години", price: "550" },
        { label: "Весь день", price: "700" },
      ] },
      { title: "Пільговий", cells: [
        { label: "2 години", price: "400" },
        { label: "Весь день", price: "600" },
      ] },
    ],
  },
];

export const extras = [
  { what: "Джакузі та зона «Релакс»", price: "10 грн/хв" },
  { what: "Перевищення оплаченого часу", price: "5 грн/хв" },
  { what: "Діти до 1 м з дорослим", price: "безкоштовно" },
  { what: "Учасники бойових дій і АТО", price: "−20% на «Стандарт»" },
];

export const slides = ["Гойдалка", "Воронка", "Пантонна синя", "Пантонна чорна", "Турбо", "Камікадзе 1", "Анаконда", "Сімейна"];

export const abonements = [
  { name: "ПРЕМІУМ пляж", month: "3900", long: "3 міс. — 10 500 грн, 6 міс. — 19 200 грн, 12 міс. — 35 700 грн" },
  { name: "ДЕННИЙ пляж", month: "2700", long: "3 міс. — 7 500 грн, 6 міс. — 12 600 грн, 12 міс. — 24 000 грн" },
  { name: "АКВАПАРК пляж", month: "2900", long: "" },
  { name: "АКВАПАРК «KIDS» і АКВАmама", month: "2000", long: "Ціна кожного з двох абонементів" },
];
