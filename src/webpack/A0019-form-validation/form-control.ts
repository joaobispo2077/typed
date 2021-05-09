import validator from 'validator';

/*
- Validar se os campos estão vazios
- Checar se o email está correto
- Checar se as senhas dão match
*/

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('#form') as HTMLFormElement;

form.addEventListener('submit', function (event) {
  event.preventDefault();
  hiddenErrorMessage(this);

  const username = document.querySelector('#username') as HTMLInputElement;
  const email = document.querySelector('#email') as HTMLInputElement;
  const password = document.querySelector('#password') as HTMLInputElement;
  const confirmPass = document.querySelector('#password2') as HTMLInputElement;

  validateForm(username, email, password, confirmPass);
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'O campo precisa ser preenchido');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!validator.isEmail(input.value))
    showErrorMessage(input, 'O email inserido não está em um formato válido');
};

const checkEqualPasswords = (
  password: HTMLInputElement,
  confirmPass: HTMLInputElement,
): void => {
  if (!(password.value === confirmPass.value))
    showErrorMessage(
      confirmPass,
      'A senha precisa ser igual a digitada anteriormente',
    );
};

function validateForm(
  username: HTMLInputElement,
  email: HTMLInputElement,
  password: HTMLInputElement,
  confirmPass: HTMLInputElement,
) {
  checkForEmptyFields(username, email, password, confirmPass);
  checkEmail(email);
  checkEqualPasswords(password, confirmPass);
}

function hiddenErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGE}`)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formField = input.parentElement as HTMLDivElement;
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerHTML = message;
  formField.classList.add(SHOW_ERROR_MESSAGE);
}
