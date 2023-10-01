 import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({preview, description })=> `
   <li class="item js-item">
    <img src="${preview}" alt="${description}" />
  </li>
  `).join('');
}
container.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));


container.addEventListener('click', handlarClick);
 function handlarClick (event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }

  const selectedImage = event.target.src;
  const instance = basicLightbox.create(`
    <div>
      <img src="${selectedImage}" alt="${event.target.alt}">
    </div>
  `);

  instance.show();
};


















  
 








