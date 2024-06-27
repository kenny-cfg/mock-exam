const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameErrorDiv = document.getElementById('name-errors')
const emailErrorDiv = document.getElementById('email-errors')
const passwordErrorDiv = document.getElementById('password-errors')

const validateName = () => {
  const name = nameField.value
  if (name.length < 3) {
    nameErrorDiv.innerText = 'Name must be at least 3 characters long'
  } else {
    nameErrorDiv.innerText = ''
  }
}

const validateEmail = () => {
  const email = emailField.value
  if (!email.includes('@')) {
    emailErrorDiv.innerText = 'Email must have an @ symbol'
  } else {
    emailErrorDiv.innerText = ''
  }
}

const validatePassword = () => {
  const password = passwordField.value
  if (password.length < 6) {
    passwordErrorDiv.innerText = 'Password must be at least 6 characters long'
  } else {
    passwordErrorDiv.innerText = ''
  }
}

nameField.addEventListener('keyup', validateName)
emailField.addEventListener('keyup', validateEmail)
passwordField.addEventListener('keyup', validatePassword)

validateName();
validateEmail();
validatePassword();