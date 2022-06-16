import { langData } from "./lang-data";
const langMenuBtns = document.querySelectorAll('.js-lang-menu-btn');
const htmlEl = document.querySelector('html');

langMenuBtns.forEach(btn => btn.addEventListener('click', onLangSwitch));
changeLanguage();

function onLangSwitch(e) {
    localStorage.setItem('language', `${e.target.textContent}`);
    location.reload();
}

function changeLanguage() {
    if (!localStorage.getItem('language')) {
        return;
    }

    const lang = localStorage.getItem('language')

    htmlEl.lang = lang;

    for (let key in langData.en) {
        let elem = document.querySelector('.lng-' + key);

        if (elem) {
            elem.innerHTML = langData[lang][key];
        }
    }
}