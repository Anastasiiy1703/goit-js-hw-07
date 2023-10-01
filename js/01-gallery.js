 import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({preview, original, description })=> `
   <li class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
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



















  
 








