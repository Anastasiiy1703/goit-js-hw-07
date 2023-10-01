 import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");

const imagesAll = galleryItems.map((image) => `
  <li>
    <img src="${image.preview}" alt="${image.description}" />
  </li>
`).join('');

container.insertAdjacentHTML('beforeend', imagesAll);
container.classList.add("images");

console.log(galleryItems);