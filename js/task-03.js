const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// V1
// const galleryEl = document.querySelector(".gallery");

// for (let img of images) {
//   galleryEl.insertAdjacentHTML(
//     "beforeEnd",
//     `<li><img src="${img.url}" alt="${img.alt}"></li>`
//   );
// }
// console.log(galleryEl);

// v2;

// const galleryAllEl = document.querySelector(".gallery");

// images.forEach((img) => {
//   const galleryEl = `<li><img src="${img.url}" alt="${img.alt}"></li>`;
//   console.log(galleryEl);

//   galleryAllEl.insertAdjacentHTML("beforeend", galleryEl);
// });

// V3

const galleryAllEl = document.querySelector(".gallery");

const galleryEl = (img) => `<li><img src="${img.url}" alt="${img.alt}"></li>`;
console.log(galleryEl);

const allList = images.map(galleryEl).join();
console.log(allList);
galleryAllEl.insertAdjacentHTML("beforeend", allList);

// V4 (разобраться с алгоритом )

// const galleryEl = images.map((img) => {
//   const galleryAllEl = document.querySelector(".gallery");
//   galleryAllEl.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src="${img.url}" alt="${img.alt}"></li>`
//   );
// });
// console.log(galleryEl);
