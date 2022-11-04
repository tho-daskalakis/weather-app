function createCard(): HTMLDivElement {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('image');
  image.src = 'http://openweathermap.org/img/wn/10d@2x.png'; // For testing
  card.appendChild(image);

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Card title'; // For testing
  card.appendChild(title);

  const body = document.createElement('div');
  body.classList.add('body');
  card.appendChild(body);

  return card;
}

export { createCard };
