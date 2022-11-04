import { callApi } from '../../../utils/callApi';

function submitForm(location: string) {
  // Request data
  callApi(location);
}

export { submitForm };
