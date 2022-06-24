import { refs } from "./refs";
refs.vacancy.addEventListener('click', handleVacancyOpen);
refs.vacancyCloseBtn.addEventListener('click', handleVacancyClose);

function handleVacancyOpen() {
  refs.vacancyDescription.classList.remove('vacancies__details--is-hidden');
}

function handleVacancyClose() {
  refs.vacancyDescription.classList.add('vacancies__details--is-hidden');
}