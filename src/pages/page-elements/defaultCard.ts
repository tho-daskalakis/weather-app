import { createCard } from './createCard';

function createDefaultCard(): HTMLDivElement {
  const defaultCard = createCard(
    'http://openweathermap.org/img/wn/02d@2x.png',
    true,
    'Enter a location to get weather data!'
  );
  defaultCard.classList.add('main-display');

  return defaultCard;
}

export { createDefaultCard };
