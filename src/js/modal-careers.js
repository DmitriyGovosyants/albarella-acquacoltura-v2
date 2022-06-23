import { refs } from './refs';

  refs.modalCareersBtnOpen.addEventListener('click', handleModalOpen);
  refs.modalCareersBtnClose.addEventListener('click', handleModalClose);

function handleModalOpen() {
  document.body.classList.add('modal-open');
  refs.backdrop.classList.remove('backdrop--hidden');
  document.addEventListener('keydown', handleModalCloseByEsc);
}

function handleModalClose() {
  document.body.classList.remove('modal-open');
  refs.backdrop.classList.add('backdrop--hidden');
  document.removeEventListener('keydown', handleModalCloseByEsc);
}

function handleModalCloseByEsc({code}) {
  if (code === "Escape") {
    handleModalClose();
  }
}