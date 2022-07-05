import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRootEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(item =>
  createGalleryItem({
    previewImage: item.preview,
    fullsizeImage: item.original,
    description: item.description,
  })
);

galleryRootEl.innerHTML = galleryMarkup.join(' ');
var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function createGalleryItem({ previewImage, fullsizeImage, description }) {
  return `<a class="gallery__item" href=${fullsizeImage}>
            <img class="gallery__image" src=${previewImage} alt=${description} />
        </a>`;
}
