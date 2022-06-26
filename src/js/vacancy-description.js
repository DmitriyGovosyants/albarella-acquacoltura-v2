import { refs } from "./refs";

refs.vacancies.forEach(el => {
  el.addEventListener('click', handleVacancyOpen);
});

refs.vacanciesCloseBtn.forEach(el => {
  el.addEventListener('click', handleVacanciesClose);
});

function handleVacancyOpen(e) {
  handleVacanciesClose();
  const vacancyLink = e.currentTarget.dataset.id;

  for (let i = 0; i < refs.vacancies.length; i += 1) {
    let currentDescr = refs.vacanciesDescription[i];

    if (currentDescr.dataset.id === vacancyLink) {
      currentDescr.classList.remove('vacancies__details--is-hidden');
    }
  }
}

function handleVacanciesClose() {
  refs.vacanciesDescription.forEach(el => {
    el.classList.add('vacancies__details--is-hidden')
  });
}