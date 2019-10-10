'use strict';

(function () {
  var form = document.querySelector('.reg-form');
  var createAccountBtn = form.querySelector('.reg-form__create-account');
  var firstPage = form.querySelector('.reg-form__form-container');
  var firstPageForm = firstPage.querySelector('form');
  var formCloseBtn = form.querySelector('.popup__button-close');
  var errorMessage = form.querySelector('.reg-form__form-container input.error-message + p');

  var userNameField = form.querySelector('#user-name');


  userNameField.setCustomValidity('Поле обязательно для заполнения и может содержать только: От 3 до 40 символов, латинские буквы, цифры и символы "_" и ";". ');

  var lastTimeout;


  var onUserNameFieldInput = function (evt) {
    console.log(evt.currentTarget);
  }
  userNameField.addEventListener('input', onUserNameFieldInput); /*function(evt) {
    var input = evt.currentTarget;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }

    lastTimeout = window.setTimeout(function () {


      errorMessage.textContent ='';
      if (input.validity.patternMismatch) {
        errorMessage.textContent = errorMessage.textContent + 'Никнейм может содержать латинские буквы, цифры и символы "_" и ";"';
      };

      if (input.minLength > input.value.length) {
        errorMessage.textContent = errorMessage.textContent + 'Слишком короткий';
      }

      if (input.maxLength < input.value.length) {
        errorMessage.textContent = errorMessage.textContent + 'Очень длинный';
      }

      if (!/^[a-zA-z]+/.test(input.value)) {
        errorMessage.textContent = errorMessage.textContent + 'Должен начинаться с буквы';
      }

      if (/[^0-9a-zA-z/_/;]+/.test(input.value)) {
        input.textContent = input.textContent + 'Что за дивный символ... ';
      }

      if (input.validity.valid == false) {input.setCustomValidity(errorMessage.textContent);
      }
         }, 3000);
  });*/

  userNameField.addEventListener('keyup', function(evtV) {
    var input = evtV.currentTarget;
    console.log(input.validity.valid);
    if (input.validity.valid) {
      errorMessage.textContent ='';
    }
  });

  var onFormCloseBtnClick = function () {
    createAccountBtn.classList.toggle('show');
    firstPage.classList.toggle('show');
    firstPageForm.reset();
  };

  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function() {
      createAccountBtn.classList.toggle('show');
      firstPage.classList.toggle('show');
      formCloseBtn.addEventListener('click', onFormCloseBtnClick);
    })
  }


})();
