const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameErrorDiv = document.getElementById('name-errors')
const emailErrorDiv = document.getElementById('email-errors')
const passwordErrorDiv = document.getElementById('password-errors')

// TODO: validate all fields at the start

nameField.addEventListener('keyup', () => {
  const name = nameField.value
  if (name.length < 3) {
    nameErrorDiv.innerText = 'Name must be at least 3 characters long'
  } else {
    nameErrorDiv.innerText = ''
  }
})

emailField.addEventListener('keyup', () => {
  const email = emailField.value
  if (!email.includes('@')) {
    emailErrorDiv.innerText = 'Email must have an @ symbol'
  } else {
    emailErrorDiv.innerText = ''
  }
})

passwordField.addEventListener('keyup', () => {
  const password = passwordField.value
  if (password.length < 6) {
    passwordErrorDiv.innerText = 'Password must be at least 6 characters long'
  } else {
    passwordErrorDiv.innerText = ''
  }
})