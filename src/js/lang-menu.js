import { langData } from "./lang-data";
const langMenuBtns = document.querySelectorAll('.js-lang-menu-btn');
const allLang = ['en', 'it'];

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

    for (let key in langData.en) {
        let elem = document.querySelector('.lng-' + key);

        if (elem) {
            elem.innerHTML = langData[lang][key];
        }
    }
}


// function onLangSwitch(e) {
//     const currentLang = e.target.textContent;
//     location.href = window.location.pathname + '#' + currentLang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
    

//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#en';
//         location.reload();
//     }
//     console.log(location.href)
//     // document.querySelector('title').innerHTML = langArr[hash]['unit'];
//     for (let key in langData.en) {
//         let elem = document.querySelector('.lng-' + key);

//         if (elem) {
//             elem.innerHTML = langData[hash][key];
//         }
//     }
// }

// changeLanguage();