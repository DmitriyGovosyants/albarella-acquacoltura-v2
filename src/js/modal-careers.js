import { refs } from './refs';

  refs.modalCareersBtnOpen.addEventListener('click', toggleModal);
  refs.modalCareersBtnClose.addEventListener('click', toggleModal);

function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle('backdrop--hidden');
  }