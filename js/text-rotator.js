const texts = document.querySelectorAll(".dynamic-text");
let index = 0;

function showNextText() {
  texts.forEach((el) => el.classList.remove("active"));

  setTimeout(() => {
    texts[index].classList.add("active");
    index = (index + 1) % texts.length;
  }, 1000);
}

showNextText(); // Initialization
setInterval(showNextText, 3500);
