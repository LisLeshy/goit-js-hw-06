const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// V1
// const liAllItems = [];

// for (let i = 0; i < ingredients.length; i++) {
//   const optionItemEl = ingredients[i];

//   const ulItemEl = document.createElement("li");
//   ulItemEl.classList.add("item");
//   ulItemEl.textContent = optionItemEl;
//   liAllItems.push(ulItemEl);
//   console.log(ulItemEl);
// }

// const ulEl = document.querySelector("#ingredients");
// ulEl.append(...liAllItems);
// console.log(liAllItems);

// V2

// const ulEl = document.querySelector("#ingredients");

// const liAllItems = ingredients.map((optionItemEl) => {
//   const ulItemEl = document.createElement("li");
//   ulItemEl.classList.add("item");
//   ulItemEl.textContent = optionItemEl;
//   console.log(ulItemEl);

//   return ulItemEl;
// });

// ulEl.append(...liAllItems);
// console.log(liAllItems);

// V3

const makeliAllItems = (optionItemEls) => {
  return optionItemEls.map((optionItemEl) => {
    const ulItemEl = document.createElement("li");
    ulItemEl.classList.add("item");
    ulItemEl.textContent = optionItemEl;
    console.log(ulItemEl);

    return ulItemEl;
  });
};

const liAllItems = makeliAllItems(ingredients);

const ulEl = document.querySelector("#ingredients");
ulEl.append(...liAllItems);
console.log(liAllItems);
