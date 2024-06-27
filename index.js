const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const nameErrorDiv = document.getElementById('name-errors')
const emailErrorDiv = document.getElementById('email-errors')
const passwordErrorDiv = document.getElementById('password-errors')

console.log(nameField, emailField, passwordField)

nameField.addEventListener('keyup', () => {
  const name = nameField.value
  if (name.length < 3) {
    passwordErrorDiv.innerText = 'Name must be at least 3 characters long'
  } else {
    passwordErrorDiv.innerText = ''
  }
})