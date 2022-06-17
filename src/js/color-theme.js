import { refs } from "./refs";

let colorThemeLoad = localStorage.getItem('colorTheme');

if (!colorThemeLoad) {
  localStorage.setItem('colorTheme', 'dark');
}

if (colorThemeLoad === 'ligth') {
  refs.htmlEl.classList.add('color-theme-ligth');
  refs.colorModeSun.classList.toggle('visible');
  refs.colorModeMoon.classList.toggle('visible');
}

refs.colorModeToggle.addEventListener('click', handleColorThemeChange);

function handleColorThemeChange() {
  let currentColorTheme = localStorage.getItem('colorTheme');

  if (currentColorTheme === 'ligth') {
    localStorage.setItem('colorTheme', 'dark');
  } else {
    localStorage.setItem('colorTheme', 'ligth');
  }

  refs.htmlEl.classList.toggle('color-theme-ligth');
  refs.colorModeSun.classList.toggle('visible');
  refs.colorModeMoon.classList.toggle('visible');
}