const input = document.querySelector("#font-size-control");
const lable = document.querySelector("#text");

function onBlurInput(a) {
  lable.style.fontSize = a.currentTarget.value + "px";
  console.log(lable.style.fontSize);
  console.log(a.currentTarget.value);
}

input.addEventListener("blur", onBlurInput);
