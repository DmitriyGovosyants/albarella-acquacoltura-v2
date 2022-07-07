import { refs } from "./refs";

refs.mapBtn.addEventListener('click', handleMapOpen);

function handleMapOpen(e) {
  refs.map.classList.toggle('google-map__init--is-visible');
}