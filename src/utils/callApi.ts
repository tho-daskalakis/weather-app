import { displayDataOnCard } from './displayDataOnCard';
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
    const data = await response.json();

    // Handle data
    displayDataOnCard(processData(data));

    return data;
  } catch (error) {
    console.log(error);
  }
}

export { callApi };
