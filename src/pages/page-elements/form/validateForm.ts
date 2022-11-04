import { submitForm } from './submitForm';

function validateForm() {
  const input = document.getElementById('input') as HTMLInputElement;
  const inputError = document.getElementById(
    'input-error'
  ) as HTMLParagraphElement;

  const userInput = input.value;
  if (userInput === '') {
    // Empty input
    console.log('Empty input');
    inputError.textContent = 'Input cannot be empty';
  } else if (input.validity.patternMismatch) {
    // Bad input pattern, only english charcters accepted
    console.log('Input must consist only of upper & lower case letters');
    inputError.textContent =
      'Input must consist only of upper & lower case letters';
  } else {
    // Valid input
    submitForm(userInput);
  }
}

export { validateForm };
