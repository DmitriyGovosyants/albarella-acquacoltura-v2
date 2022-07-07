import { refs } from "./refs";

refs.mapBtn.addEventListener('click', handleMapOpen);

function handleMapOpen() {
  refs.map.classList.toggle('google-map__init--is-visible');

  if (refs.map.classList.contains('google-map__init--is-visible')) {
    return document.documentElement.style.setProperty("--display", "none");
  }
  
  document.documentElement.style.setProperty("--display", "block");
}