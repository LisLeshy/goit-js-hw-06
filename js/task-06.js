const input = document.querySelector("#validation-input");
console.log(input);

function onBlurInput(a) {
  const inputEl = a.currentTarget;
  console.log(inputEl);

  const inpLength = Number(inputEl.dataset.length);
  // const inpLength = inputEl.trim();
  //   const inpLength = inputEl.value.length;

  if (inputEl.value.length === inpLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
  console.log(inputEl.value.length);
  console.log(inpLength);
}
input.addEventListener("blur", onBlurInput);
