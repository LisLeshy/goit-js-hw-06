// V1

const inpEl = document.querySelector("#name-input");
const lableEl = document.querySelector("#name-output");

function newLable(imp) {
  lableEl.textContent = imp.currentTarget.value;
  if (imp.currentTarget.value === "") {
    lableEl.textContent = "Anonymous";
  }
}

inpEl.addEventListener("input", newLable);
