// V1
// const decrementBtn = document.querySelector("[data-action='decrement']");
// const incrementBtn = document.querySelector("[data-action='increment']");
// const valueEl = document.querySelector("#value");
// console.log(decrementBtn);

// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// decrementBtn.addEventListener("click", function () {
//   console.log("click -");
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });

// incrementBtn.addEventListener("click", function () {
//   console.log("click +");
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });

// V2

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

function onClickBtnDescrement() {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
}

function onClickBtnInscrement() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", onClickBtnDescrement);
incrementBtn.addEventListener("click", onClickBtnInscrement);
