// Reference the API key
const apiKey = '97a5e879ec1a91f99cf765f030626f72';

// Get root element
const app = document.getElementById('app') as HTMLDivElement;

// Make API call
async function callApi(location: string) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

callApi('london');
