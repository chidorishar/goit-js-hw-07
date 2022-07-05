import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRootEl = document.querySelector('.gallery');
let modalWindow = null;

galleryRootEl.addEventListener('click', onPictureClick);
const galleryMarkup = galleryItems.map(item =>
  createGalleryItem({
    previewImage: item.preview,
    fullsizeImage: item.original,
    description: item.description,
  })
);

galleryRootEl.innerHTML = galleryMarkup.join(' ');

function createGalleryItem({ previewImage, fullsizeImage, description }) {
  return `<div class="gallery__item">
            <a class="gallery__link" href=${fullsizeImage}>
                <img
                class="gallery__image"
                src=${previewImage}
                data-source=${fullsizeImage}
                alt=${description}
                />
            </a>
        </div>`;
}

function onPictureClick(event) {
  const clickTarget = event.target;

  event.preventDefault();
  if (clickTarget.nodeName != 'IMG') {
    return;
  }

  modalWindow = basicLightbox.create(`<img
                src=${clickTarget.dataset.source}
                alt=${clickTarget.alt}
                />`);
  modalWindow.show();
  document.body.addEventListener('keydown', onKeyDown);
}

function onModalClose() {
  document.body.removeEventListener('keydown', onKeyDown);
}

function onKeyDown(event) {
  if (event.code != 'Escape') {
    return;
  }

  modalWindow.close(onModalClose);
}
