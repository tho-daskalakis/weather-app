function validateForm() {
  const input = document.getElementById('input') as HTMLInputElement;
  const inputError = document.getElementById(
    'input-error'
  ) as HTMLParagraphElement;

  if (input.value === '') {
    console.log('Empty input');
    inputError.textContent = 'Input cannot be empty';
  } else {
    console.log(input.value);
  }
}

export { validateForm };
