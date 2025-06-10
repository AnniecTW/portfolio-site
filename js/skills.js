const icons = document.querySelectorAll(".category-icon");
const stickers = document.querySelectorAll(".skill-sticker");

let currentCategory = "frontend";

function showCategory(category) {
  stickers.forEach((sticker) => {
    sticker.classList.remove("show");
    if (sticker.classList.contains(category)) {
      sticker.classList.add("show");
    }
  });
}

// default display Frontend part
showCategory(currentCategory);

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    const cat = icon.dataset.category;
    showCategory(cat);
  });

  // keep current category
  icon.addEventListener("mouseleave", () => {
    currentCategory = icon.dataset.category;
  });
});
