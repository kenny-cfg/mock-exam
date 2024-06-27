const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

console.log(nameField, emailField, passwordField)

nameField.addEventListener('keyup', () => {
  console.log('NAME FIELD CHANGED')
})