import { langData } from "./lang-data";
import { refs } from "../refs";

refs.langMenuBtns.forEach(btn => btn.addEventListener('click', onLangSwitch));

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

    refs.htmlEl.lang = lang;

    for (let key in langData.en) {
        let elem = document.querySelector('.lng-' + key);

        if (elem) {
            elem.innerHTML = langData[lang][key];
        }
    }
}