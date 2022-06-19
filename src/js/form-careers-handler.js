import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { langData } from "./lang-data";
import { refs } from "./refs";

Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '100px',
  opacity: 1,
  timeout: 3000,
  clickToClose: true,
  pauseOnHover: false,
  fontSize: '18px',
});

refs.formCareers.addEventListener('submit', handleFormSend);
refs.formResume.addEventListener('change', handleFileLoad);

function handleFormSend(e) {
  e.preventDefault();

  let error = formValidate();

  if (error === 0) {
    
  } else {
    const currentLang = localStorage.getItem('language');
    Notify.failure(langData[currentLang]['form-validate-message-error']);
  }
}

function formValidate() {
  let error = 0;

  for (let i = 0; i < refs.formReq.length; i += 1) {
    const input = refs.formReq[i];
    formRemoveError(input);

    if (input.classList.contains('_email')) {
      if (formEmailTest(input)) {
        formAddError(input);
        error += 1;
      }
    } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error += 1;
    } else {
      if (input.value === "") {
        formAddError(input);
        error += 1;
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}

function formEmailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function handleFileLoad() {
  uploadFile(refs.formResume.files[0]);
}

function uploadFile(file) {
  const extDoc = 'application/msword';
  const extDocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  const extPdf = 'application/pdf';
  const currentLang = localStorage.getItem('language');

  if (![extDoc, extDocx, extPdf].includes(file.type)) {
    Notify.failure(langData[currentLang]['form-validate-resume-ext-error']);
    refs.formResume.value = '';
    refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn'];
    return;
  }
  
  if (file.size > 10 * 1024 * 1024) {
    Notify.failure(langData[currentLang]['form-validate-resume-size-error']);
    refs.formResume.value = '';
    refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn'];
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn-done'];
  };
  reader.onerror = () => {
    alert('nonono');
  }
  reader.readAsDataURL(file);
}