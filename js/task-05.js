// V1

const inpEl = document.querySelector("#name-input");
const lableEl = document.querySelector("#name-output");

function newLable(imp) {
  title.textContent = imp.currentTarget.value;
  if (imp.currentTarget.value === " ") {
    title.textContent = "Anonymous";
  }
}

inpEl.addEventListener("input", newLable);
