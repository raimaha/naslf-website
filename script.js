// Nepalese Arts, Sciences & Literature Forum UK: shared script for every page

// ----- Mobile menu -----
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );
}

// ----- Countdown to the event -----
// Event start: Saturday 28 November 2026, 6:00 pm UK time (UK time = GMT in November)
const eventDate = new Date("2026-11-28T18:00:00Z");

function updateCountdowns() {
  document.querySelectorAll("[data-countdown]").forEach(box => {
    const diff = eventDate - new Date();
    if (diff <= 0) {
      box.innerHTML = '<p class="done">Thank you to everyone who joined us</p>';
      return;
    }
    box.querySelector("[data-days]").textContent  = Math.floor(diff / 86400000);
    box.querySelector("[data-hours]").textContent = Math.floor(diff / 3600000) % 24;
    box.querySelector("[data-mins]").textContent  = Math.floor(diff / 60000) % 60;
  });
}
updateCountdowns();
setInterval(updateCountdowns, 30000);

// ----- Keep the footer year current -----
document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
