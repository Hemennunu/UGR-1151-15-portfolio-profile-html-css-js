document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-item a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active"); // Add 'active' class to the current page link
    }
  });
});

// Toggle menu visibility
function toggleMenu() {
  const menuOverlay = document.getElementById("menu-overlay");
  menuOverlay.classList.toggle("visible"); // Toggle 'visible' class
}
const currentPage = window.location.pathname.split("/").pop(); // Get the current file name

document.querySelectorAll(".menu-items a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
