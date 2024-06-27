const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameErrorDiv = document.getElementById('name-errors')
const emailErrorDiv = document.getElementById('email-errors')
const passwordErrorDiv = document.getElementById('password-errors')
const form = document.getElementById('form')

let nameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;

const validateName = () => {
  const name = nameField.value
  if (name.length < 3) {
    nameErrorDiv.innerText = 'Name must be at least 3 characters long'
    nameIsValid = false;
  } else {
    nameErrorDiv.innerText = ''
    nameIsValid = true;
  }
}

const validateEmail = () => {
  const email = emailField.value
  if (!email.includes('@')) {
    emailErrorDiv.innerText = 'Email must have an @ symbol'
    emailIsValid = false
  } else {
    emailErrorDiv.innerText = ''
    emailIsValid = true
  }
}

const validatePassword = () => {
  const password = passwordField.value
  if (password.length < 6) {
    passwordErrorDiv.innerText = 'Password must be at least 6 characters long'
    passwordIsValid = false
  } else {
    passwordErrorDiv.innerText = ''
    passwordIsValid = true
  }
}

nameField.addEventListener('keyup', validateName)
emailField.addEventListener('keyup', validateEmail)
passwordField.addEventListener('keyup', validatePassword)

form.addEventListener('submit', e => {
  e.preventDefault();
  if (passwordIsValid && emailIsValid && nameIsValid) {
    alert('SUBMITTED SUCCESSFULLY')
  }
  console.log('FAILED SUBMIT')
})

validateName();
validateEmail();
validatePassword();