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
            <div class="gallery__item">
  <a class="gallery__link" href="#">
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
console.log(galleryItems);
function onImageClick(evt) {
    const clickEl = evt.target;
    console.log(clickEl.dataset.source);

}