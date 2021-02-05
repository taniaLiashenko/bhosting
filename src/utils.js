import CLASSES from './consts.js';

export function openPopup(e, id) {
  e.preventDefault();

  const popup = document.querySelector(`#${id}`);
  const html = document.querySelector('html');

  popup.classList.add(CLASSES.active);
  html.classList.add(CLASSES.overlayOpen);
}