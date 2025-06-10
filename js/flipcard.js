document.querySelectorAll(".project-item").forEach((card) => {
  let flipTimer;

  card.addEventListener("mouseenter", () => {
    flipTimer = setTimeout(() => {
      card.classList.add("flip");
    }, 200);
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(flipTimer);
    card.classList.remove("flip");
  });
});
