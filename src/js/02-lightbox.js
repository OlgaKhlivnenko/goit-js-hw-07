import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);


function createImageCardsMarkup(items) {
    return items
        .map(({ preview, original, description}) => {
            return `
              <li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
                  `;
        })
        .join(``);  
}
const lightbox = new SimpleLightbox('.gallery a', {
    captionsType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    });
        
 
