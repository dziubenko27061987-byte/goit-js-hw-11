import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader'); // Замініть на ваш селектор лоадера


export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b>${likes}</p>
          <p class="info-item"><b>Views</b>${views}</p>
          <p class="info-item"><b>Comments</b>${comments}</p>
          <p class="info-item"><b>Downloads</b>${downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (loaderElement) {
    loaderElement.classList.add('is-visible'); 
  }
}

export function hideLoader() {
  if (loaderElement) {
    loaderElement.classList.remove('is-visible');
  }
}