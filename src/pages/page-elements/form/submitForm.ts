import { callApi } from '../../../utils/callApi';

function submitForm(location: string) {
  // Request data
  callApi(location).then(() => {
    // Clear input field
    const input = document.getElementById('input') as HTMLInputElement;
    input.value = '';
  });
}

export { submitForm };
