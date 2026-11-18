/* ============ EDIT YOUR DETAILS HERE ============ */
const CONFIG = {
  names: "Aarathy & Kalaivanan",
  message: "Our forever begins with a promise, made more beautiful by the people we cherish.",

  weddingDateText: "27-01-2027",
  weddingDateTime: "2027-01-27T09:00:00+05:30", // used for the countdown (IST)
  weddingTime: "9:00 AM - 10:00 AM",
  weddingVenue: "Sri Krishna Temple",
  weddingPlace: "Guruvayur, Thrissur Dist.",
  weddingMap: "https://maps.app.goo.gl/kVprNvUfpzrzacX18?g_st=ic",

  receptionDateText: "30-01-2027",
  receptionTime: "5:00 PM Onwards",
  receptionVenue: "Al-Saj Conventions (Comet)",
  receptionPlace: "Kazhakkoottam, Thiruvananthapuram, Keralam",
  receptionMap: "https://maps.app.goo.gl/nB4xeHZ6xdWodGws8?g_st=ic"
};
/* ================================================= */

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fill text and links from CONFIG
document.querySelectorAll("[data-cfg]").forEach(el => { el.textContent = CONFIG[el.dataset.cfg] || ""; });
document.getElementById("mapWedding").href = CONFIG.weddingMap;
document.getElementById("mapReception").href = CONFIG.receptionMap;

// Falling petals on the cover (skipped if reduced motion)
const petalBox = document.getElementById("petals");
if (!reduce) {
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.setProperty("--dx", (Math.random() * 80 - 40) + "px");
    p.style.animationDuration = (9 + Math.random() * 7) + "s";
    p.style.animationDelay = (-Math.random() * 14) + "s";
    p.style.transform = "scale(" + (0.6 + Math.random() * 0.8) + ")";
    petalBox.appendChild(p);
  }
}

// Open invitation
const cover = document.getElementById("cover"), main = document.getElementById("main");
document.getElementById("openBtn").addEventListener("click", () => {
  cover.classList.add("opening");
  main.classList.add("show");
  main.removeAttribute("aria-hidden");
  document.body.classList.remove("locked");
  window.scrollTo(0, 0);
  setTimeout(() => cover.remove(), reduce ? 50 : 1600);
});

// Scroll reveals
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15 }) : null;
document.querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));

// Countdown
const target = new Date(CONFIG.weddingDateTime).getTime();
const $ = id => document.getElementById(id);
function tick() {
  const d = Math.max(0, target - Date.now());
  $("cd-d").textContent = Math.floor(d / 864e5);
  $("cd-h").textContent = String(Math.floor(d % 864e5 / 36e5)).padStart(2, "0");
  $("cd-m").textContent = String(Math.floor(d % 36e5 / 6e4)).padStart(2, "0");
  $("cd-s").textContent = String(Math.floor(d % 6e4 / 1e3)).padStart(2, "0");
}
tick(); setInterval(tick, 1000);

// Back to top
document.getElementById("toTop").addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }));
