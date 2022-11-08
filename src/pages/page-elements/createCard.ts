import { Data } from '../../utils/dataInterface';

function createCard(
  imgURL: string,
  titleText: string,
  bodyData?: Data
): HTMLDivElement {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('image');
  image.src = imgURL;
  card.appendChild(image);

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
