// Напиши скрипт, который изменяет цвета фона элемента <body> через
// инлайн стиль при клике на button.change -
//   color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function onClickButton() {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    "style",
    "background-color: " + spanEl.textContent
  );
}

buttonEl.addEventListener("click", onClickButton);
