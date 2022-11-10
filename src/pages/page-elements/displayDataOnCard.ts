import { Data } from '../../utils/dataInterface';
import { createCard } from './createCard';

function displayDataOnMainCard(data: Data): void {
  // Get weather image
  const conditionCode = data.weather[0].icon;
  // Check if icon is for daytime, to apply a proper bg-color for readability
  const isDay = conditionCode.at(-1) === 'd';

  const imgURL = `http://openweathermap.org/img/wn/${conditionCode}@2x.png`;

  // Create card title
  const title =
    data.name +
    ', ' +
    data.sys.country +
    ', ' +
    // Round temperature to one decimal place
    (Math.round(data.main.temp * 10) / 10).toString() +
    'C, ' +
    data.weather[0].description;

  // Create card
  const card = createCard(imgURL, isDay, title);
  card.classList.add('main-display');

  const app = document.getElementById('app') as HTMLDivElement;
  const currentMain = app.querySelector('.main-display') as HTMLDivElement;
  app.replaceChild(card, currentMain);
}

export { displayDataOnMainCard };
