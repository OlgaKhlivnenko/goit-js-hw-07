import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(`.gallery`);
const cardsMarkup = createImageCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);
galleryContainer.addEventListener(`click`, onImageClick);

function createImageCardsMarkup(items) {
    return items
        .map(({ preview, original, description}) => {
            return `
              <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
                  `;
        })
        .join(``);  
}
function onImageClick(evt) {
    evt.preventDefault();
    
    const lightbox = new SimpleLightbox('.gallery a',
        {
            captionDelay: `250 ms`,

          
        });
   
	console.log(evt.target.alt);
});
    
};
