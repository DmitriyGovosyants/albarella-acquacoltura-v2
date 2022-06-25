import { refs } from './refs';

for (let i = 0; i < refs.modalCareersBtnsOpen.length; i += 1) {
  refs.modalCareersBtnsOpen[i].addEventListener('click', handleModalOpen);
}

refs.modalCareersBtnClose.addEventListener('click', handleModalClose);

function handleModalOpen(e) {
  console.log(e.currentTarget)
  document.body.classList.add('modal-open');
  refs.backdrop.classList.remove('backdrop--hidden');
  document.addEventListener('keydown', handleModalCloseByEsc);
  window.addEventListener('click', handleFormOutsideClick);
}

function handleModalClose() {
  document.body.classList.remove('modal-open');
  refs.backdrop.classList.add('backdrop--hidden');
  document.removeEventListener('keydown', handleModalCloseByEsc);
  window.removeEventListener('click', handleFormOutsideClick);
}

function handleModalCloseByEsc({code}) {
  if (code === "Escape") {
    handleModalClose();
  }
}

function handleFormOutsideClick(e) {
  if (e.target === refs.backdrop) {
    handleModalClose();
  }
}