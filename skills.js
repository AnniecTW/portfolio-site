const icons = document.querySelectorAll(".category-icon");
const stickers = document.querySelectorAll(".skill-sticker");

let currentCategory = "frontend"; // 預設顯示 Frontend

function showCategory(category) {
  stickers.forEach((sticker) => {
    sticker.classList.remove("show");
    if (sticker.classList.contains(category)) {
      sticker.classList.add("show");
    }
  });
}

// 初始顯示預設類別
showCategory(currentCategory);

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    const cat = icon.dataset.category;
    showCategory(cat);
  });

  //   如果想要在 hover 之後「記住」目前類別，可以加這個：
  icon.addEventListener("click", () => {
    currentCategory = icon.dataset.category;
  });
});
