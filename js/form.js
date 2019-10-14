'use strict';

(function () {
  var form = document.querySelector('.reg-form');
  var createAccountBtn = form.querySelector('.reg-form__create-account');
  var firstPage = form.querySelector('.reg-form__form-container');
  var firstPageForm = firstPage.querySelector('form');
  var formCloseBtn = form.querySelector('.popup__button-close');
  var errorMessage = form.querySelector('.reg-form__form-container input.error-message + p');
  var userNameField = form.querySelector('#user-name');
  var userMailField = form.querySelector('#email');
  var userPasswordField = form.querySelector('#userPassword');
  var coincidence = form.querySelector('.reg-form__coincidence');
  var lastTimeout;


  userNameField.setCustomValidity('Поле обязательно для заполнения и может содержать только: От 3 до 40 символов, латинские буквы, цифры и символы "_" и ";". ');
  userPasswordField.setCustomValidity('Пароль должен содержать: От 6 до 32 символов, минимум по одной заглавной и строчной букве, цифру, не должен совпадать с ником или почтовым адресом');

  userPasswordField.addEventListener('input', function(evtPasswordInput) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    };
    var input = evtV.currentTarget;
    input.setCustomValidity('');
    if (input.validity.valid) {
      errorMessage.textContent ='';
    };

    else {
      lastTimeout = setTimeout(function () {
        if (input.value === userNameField.value) {
          coincidence.classList.add('error');
        }
      }, 1000);
    }
  });



  var onUserNameFieldInput = function (evt) {
    console.log(evt.currentTarget);
  }

  userNameField.addEventListener('input', function(evtV) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    };
    var input = evtV.currentTarget;
    input.setCustomValidity('');
    console.log(input.validity.valid);
    if (input.validity.valid) {
      errorMessage.textContent ='';
    }

    else { 
      
      lastTimeout = setTimeout(function () {


      errorMessage.innerHTML ='';
      if (input.validity.patternMismatch) {
        errorMessage.innerHTML = errorMessage.innerHTML + 'Никнейм может содержать латинские буквы, цифры и символы "_" и ";"' + "<br>";
      };

      if (input.minLength > input.value.length) {
        errorMessage.innerHTML = errorMessage.innerHTML + 'Слишком короткий' + "<br>";
      }

      if (input.maxLength < input.value.length) {
        errorMessage.innerHTML = errorMessage.innerHTML + 'Очень длинный' + "<br>";
      }

      if (!/^[a-zA-z]+/.test(input.value)) {
        errorMessage.innerHTML = errorMessage.innerHTML + 'Должен начинаться с буквы' + "<br>";
      }

      if (/[^0-9a-zA-z/_/;]+/.test(input.value)) {
        input.innerHTML = input.innerHTML + 'Что за дивный символ... ' + "<br>";
      }

      if (input.validity.valid == false) {input.setCustomValidity(errorMessage.textContent);
      }
    }, 1000);
    }
  });

  var onFormCloseBtnClick = function () {
    createAccountBtn.classList.toggle('show');
    firstPage.classList.toggle('show');
    firstPageForm.reset();
    formCloseBtn.removeEventListener('click', onFormCloseBtnClick);
  };

  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function() {
      createAccountBtn.classList.toggle('show');
      firstPage.classList.toggle('show');
      formCloseBtn.addEventListener('click', onFormCloseBtnClick);
      userMailField.focus();
    })
  }
})();
