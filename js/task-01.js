const categoriesEl = document.querySelector("#categories");
const categoriesItem = categoriesEl.children;
console.log("Number of categories:" + categoriesItem.length);
// V1
// const categoryEl = document.querySelectorAll(".item");
// for (let i = 0; i < categoryEl.length; i += 1) {
//   const categoryElTitle = categoryEl[i].children;

//   const categoryElTitleContent = categoryElTitle[0].textContent;
//   console.log("Category:" + categoryElTitleContent);

//   const categoriesElLength = categoryElTitle[1].children.length;
//   console.log("Elements:" + categoriesElLength);
// }

//

// V2;
const categoryEl = document.querySelectorAll(".item");
categoryEl.forEach((e) => {
  const categoryElTitleContent = e.firstElementChild.textContent;
  console.log("Category:" + categoryElTitleContent);

  const categoriesElLength = e.lastElementChild.children.length;
  console.log("Elements:" + categoriesElLength);
});
