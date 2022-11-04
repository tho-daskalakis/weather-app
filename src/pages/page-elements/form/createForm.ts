import { validateForm } from './validateForm';

function createForm(): HTMLFormElement {
  const form = document.createElement('form');
  form.noValidate = true;
  form.classList.add('margin-8');

  // Add input label
  const inputLabel = document.createElement('label');
  inputLabel.htmlFor = 'input';
  inputLabel.textContent = 'Enter a location:';
  form.appendChild(inputLabel);

  // Add a text input field
  const input = document.createElement('input');
  input.id = 'input';
  input.type = 'text';
  input.required = true;
  input.pattern = '[A-Za-z]+';
  form.appendChild(input);

  // Add a submit button
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submit-form';
  submitBtn.textContent = 'Submit';
  form.appendChild(submitBtn);

  // Error message display
  const errorMsg = document.createElement('p');
  errorMsg.id = 'input-error';
  errorMsg.classList.add('error-message');
  form.appendChild(errorMsg);

  // Listeners

  input.addEventListener('input', (e) => {
    errorMsg.textContent = '';
  });

  submitBtn.addEventListener('click', (e) => {
    // console.log(e);
    e.preventDefault();

    // Validate form
    validateForm();

    // Submit request if valid
    // submitForm(input.value);
  });

  return form;
}

export { createForm };
