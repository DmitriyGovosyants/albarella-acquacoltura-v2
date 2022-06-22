import { refs } from './refs';

  refs.modalCareersBtnOpen.addEventListener('click', onModalOpen);
  refs.modalCareersBtnClose.addEventListener('click', onModalClose);

function onModalOpen() {
  document.body.classList.add('modal-open');
  refs.backdrop.classList.remove('backdrop--hidden');
}

function onModalClose() {
  document.body.classList.remove('modal-open');
  refs.backdrop.classList.add('backdrop--hidden');
}