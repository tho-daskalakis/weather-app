import { capitalizeString } from '../../../utils/capitalizeString';
import { Data } from '../../../utils/interfaces/dataInterface';

function createCard(
  imgURL: string,
  isDay: boolean,
  titleText: string,
  bodyData?: Data
): HTMLDivElement {
  const card = document.createElement('div');
  card.classList.add('card');

  const figure = document.createElement('figure');
  figure.classList.add('image');

  const image = document.createElement('img');
  image.src = imgURL;
  // Change the bg-color for readability
  image.style.backgroundColor = isDay ? 'deepskyblue' : 'midnightblue';
  figure.appendChild(image);

  const caption = document.createElement('figcaption');
  caption.textContent = bodyData
    ? `${capitalizeString(bodyData.weather[0].description)}, 
    ${(Math.round(bodyData.main.temp * 10) / 10).toString()} C`
    : '';
  figure.appendChild(caption);

  card.appendChild(figure);

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = titleText;
  card.appendChild(title);

  const body = document.createElement('div');
  body.classList.add('body');
  card.appendChild(body);
  // TODO: Create body dynamically and pass bodyData

  return card;
}

export { createCard };
