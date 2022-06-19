import { refs } from "./refs";

refs.formCareers.addEventListener('submit', handleFormSend);

function handleFormSend(e) {
  e.preventDefault();

  let error = formValidate();

  if (error === 0) {
    
  } else {
    alert('Заполните обязательные поля');
  }
  console.log(error);
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