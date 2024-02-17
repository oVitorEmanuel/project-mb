const rigthButton = window.document.querySelector(".button-arrow.-rigth");
const leftButton = window.document.querySelector(".button-arrow.-left");
const elements = window.document.querySelector(".elements");

let pixels = 0;

rigthButton.addEventListener("click", function() {
    pixels = pixels + 65;
    elements.style = `transform: translateX(${pixels}px)`
});

leftButton.addEventListener("click", function() {
    pixels = pixels - 65;
    elements.style = `transform: translateX(${pixels}px)`
});
