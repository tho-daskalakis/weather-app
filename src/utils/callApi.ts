import { displayDataOnMainCard } from '../pages/page-elements/card/displayDataOnMainCard';
import { processData } from './processData';

// Reference the API key
const apiKey = '97a5e879ec1a91f99cf765f030626f72';

// Make API call
async function callApi(location: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
      { mode: 'cors' }
    );
    // console.log(response);

    // Handle no location found
    if (response.ok) {
      const data = await response.json();
      // console.log(data);

      // Handle data
      displayDataOnMainCard(processData(data));
      return data;
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export { callApi };
