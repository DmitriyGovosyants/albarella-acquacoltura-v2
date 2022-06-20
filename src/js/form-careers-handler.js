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

async function handleFormSend(e) {
  e.preventDefault();

  let error = formValidate();
  const formData = new FormData(e.target);
  // console.log(e.currentTarget.elements)
  // formData.forEach((value, name) => {
  //   formData.append(name, value);
  // })
  // formData.append('name', "fedor");
  // formData.append('files', refs.formResume.files[0]);
  // formData.forEach((value, name) => console.table(name, value))
  const careersFormData = {};

  formData.forEach((value, name) => {
    careersFormData[name] = value;
  })
  console.log(careersFormData)
  
  let currentLang = localStorage.getItem('language');

  if (error !== 0) {
    Notify.failure(langData[currentLang]['form-valid-fields-error']);
  }

  if (error === 0) {
    const option = {
      method: 'POST',
      body: JSON.stringify(careersFormData),
      // body: formData,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
        // "Content-Type": "multipart/form-data"
        // "Content-Type": false
      }
    }
    
    try {
      let response = await fetch('http://localhost:9000/', option);

      if (response.ok) {
        let result = await response.json();
        console.log(result.status);
        if (result.status === 'Data sent failure') {
          return Notify.failure(langData[currentLang]['form-error-send']);
        }

        Notify.success(langData[currentLang]['form-successfully-send']);
        refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn'];
        e.target.reset();
      }
    } catch (error) {
      console.log(error);
      Notify.failure(langData[currentLang]['form-error-send']);
    }
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
  let currentLang = localStorage.getItem('language');

  if (![extDoc, extDocx, extPdf].includes(file.type)) {
    uploadFileError(currentLang, 'form-valid-resume-ext-error');
    return;
  }
  
  if (file.size > 10 * 1024 * 1024) {
    uploadFileError(currentLang, 'form-valid-resume-size-error');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    uploadFileTrue(currentLang);
  };
  reader.onerror = () => {
    uploadFileFalse(currentLang);
  }
  reader.readAsDataURL(file);
}

function uploadFileError(currentLang, error) {
  refs.formResume.value = '';
  Notify.failure(langData[currentLang][error]);
  refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn'];
}

function uploadFileTrue(currentLang) {
  refs.formResumeBtn.innerHTML = langData[currentLang]['form-resume-upload-btn-done'];
}

function uploadFileFalse(currentLang) {
  Notify.failure(langData[currentLang]['form-valid-resume-load-error']);
}
