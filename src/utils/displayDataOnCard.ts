import { createCard } from '../pages/page-elements/createCard';
import { Data } from './dataInterface';

function displayDataOnCard(data: Data) {
  const conditionCode = data.weather[0].icon;
  const imgURL = `http://openweathermap.org/img/wn/${conditionCode}@2x.png`;
  const card = createCard(imgURL, data.name);
  card.classList.add('main-display');

  const app = document.getElementById('app') as HTMLDivElement;
  app.appendChild(card);
}

export { displayDataOnCard };
