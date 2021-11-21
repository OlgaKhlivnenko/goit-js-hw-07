import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
  
const cardsMarkup = createImageCardsMarkup(galleryItems);



function createImageCardsMarkup(items) {
    return items
        .map(({ preview, original, description}) => {
            return `
              <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </div>
                  `;
        })
        .join(``);  
}
galleryContainer.insertAdjacentHTML(`beforeend`, cardsMarkup);
galleryContainer.addEventListener(`click`, onImageClick);


function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== `IMG`) {
    return
  }
  const url = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${url}">`);
  instance.show();
  
  
  document.addEventListener(`keydown`, onImageClose) 
 
  
  function onImageClose(evt) {
    if (evt.key === 'Escape') {
      console.log(evt.key);
      instance.close();
      document.removeEventListener(`keydown`, onImageClose);
    }
};
};

