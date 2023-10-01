import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr.map(({preview, original, description })=> `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
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

     let lightbox = new SimpleLightbox('.gallery__item a', {
        captionType: 'attr',
        captionPosition: 'bottom',
         captionDelay: 250,
         captionsData: `alt`
    });
   
};
 








 





