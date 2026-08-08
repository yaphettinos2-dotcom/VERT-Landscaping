const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navBackdrop = document.querySelector(".nav-backdrop");
const themeToggle = document.querySelector(".theme-toggle");
const serviceToggles = document.querySelectorAll(".service-toggle");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

function getPreferredTheme() {
  const savedTheme = localStorage.getItem("vert-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }
}

applyTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("vert-theme", nextTheme);
    applyTheme(nextTheme);
  });
}

function setNavState(isOpen) {
  if (!navToggle || !navLinks) {
    return;
  }

  navLinks.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("nav-open", isOpen);

  if (navBackdrop) {
    navBackdrop.hidden = !isOpen;
    navBackdrop.classList.toggle("open", isOpen);
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = !navLinks.classList.contains("open");
    setNavState(isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setNavState(false);
    });
  });
}

if (navBackdrop) {
  navBackdrop.addEventListener("click", () => {
    setNavState(false);
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
  }
});

serviceToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const panelId = toggle.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    serviceToggles.forEach((otherToggle) => {
      const otherPanelId = otherToggle.getAttribute("aria-controls");
      const otherPanel = document.getElementById(otherPanelId);

      otherToggle.setAttribute("aria-expanded", "false");

      if (otherPanel) {
        otherPanel.classList.remove("open");
        otherPanel.style.maxHeight = null;
      }
    });

    if (!isExpanded && panel) {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#full-name")?.value.trim() || "";
    const email = document.querySelector("#email-address")?.value.trim() || "";
    const message = document.querySelector("#message")?.value.trim() || "";

    const subject = encodeURIComponent("Quote request from " + name);
    const body = encodeURIComponent(
      "Name: " + name + "\n" +
      "Email: " + email + "\n\n" +
      "Project details:\n" + message
    );

    formStatus.textContent = "Opening your email app with the message details.";
    window.location.href = "mailto:Vertlandscaping.eg@gmail.com?subject=" + subject + "&body=" + body;
  });
}

window.addEventListener("load", () => {
  const firstOpenPanel = document.querySelector(".service-panel.open");

  if (firstOpenPanel) {
    firstOpenPanel.style.maxHeight = firstOpenPanel.scrollHeight + "px";
  }
});
