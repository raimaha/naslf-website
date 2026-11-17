// NASLF UK website: shared script for every page

// ----- Countdown to the event (only the Home page has one) -----
// Change the date/time here if needed (format: YYYY-MM-DDTHH:MM:SS)
const eventDate = new Date("2026-11-28T18:00:00");

function updateCountdown() {
  if (!document.getElementById("cd-days")) return;
  const diff = eventDate - new Date();
  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML =
      '<div style="grid-column:1/-1"><span style="font-size:1.1rem">Happening now / completed</span></div>';
    return;
  }
  document.getElementById("cd-days").textContent  = Math.floor(diff / 86400000);
  document.getElementById("cd-hours").textContent = Math.floor(diff / 3600000) % 24;
  document.getElementById("cd-mins").textContent  = Math.floor(diff / 60000) % 60;
}
updateCountdown();
setInterval(updateCountdown, 30000);

// ----- Close the mobile menu after tapping a link -----
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open"))
);

// ----- Keep the footer year current -----
document.getElementById("year").textContent = new Date().getFullYear();
