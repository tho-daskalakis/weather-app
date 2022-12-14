import { Data } from '../../../utils/interfaces/dataInterface';
import { convertDegreesToDirection } from '../../../utils/windRepresentation';
import { appendBodyData } from './appendBodyData';
import { createCard } from './createCard';

function displayDataOnMainCard(data: Data): void {
  // Get weather image
  const conditionCode = data.weather[0].icon;
  // Check if icon is for daytime, to apply a proper bg-color for readability
  const isDay = conditionCode.at(-1) === 'd';

  const imgURL = `http://openweathermap.org/img/wn/${conditionCode}@2x.png`;

  // Create card title
  const title = data.name + ', ' + data.sys.country;

  // Create card
  const card = createCard(imgURL, isDay, title, data);
  card.classList.add('main-display');

  const app = document.getElementById('app') as HTMLDivElement;
  const currentMain = app.querySelector('.main-display') as HTMLDivElement;
  app.replaceChild(card, currentMain);

  // Represent data
  const dataArr = [
    { 'Max temp': data.main.temp_max },
    { 'Min temp': data.main.temp_min },
    { 'Feels like': data.main.feels_like },
    { Humidity: data.main.humidity },
    {
      Wind: `${data.wind.speed} km/h, ${convertDegreesToDirection(
        data.wind.deg
      )}`,
    },
  ];

  // Append bodyData
  appendBodyData(card, dataArr);
}

export { displayDataOnMainCard };
