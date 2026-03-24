(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const mobileQuery = window.matchMedia("(max-width: 520px)");

  function updateHeaderState() {
    if (!mobileQuery.matches) {
      header.classList.remove("nav-compact");
      return;
    }

    if (window.scrollY > 24) {
      header.classList.add("nav-compact");
    } else {
      header.classList.remove("nav-compact");
    }
  }

  window.addEventListener("scroll", updateHeaderState, { passive: true });
  window.addEventListener("resize", updateHeaderState);
  mobileQuery.addEventListener("change", updateHeaderState);
  updateHeaderState();
})();
