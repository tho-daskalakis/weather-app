import { createCard } from '../../utils/createCard';

function createInfoDisplay(): HTMLDivElement {
  const display = document.createElement('div');
  display.id = 'data-display';
  display.classList.add('margin-8');

  // // For testing
  // const pDisplay = document.createElement('p');
  // pDisplay.classList.add('text-display');
  // display.appendChild(pDisplay);

  const mainDisplay = document.createElement('div');
  mainDisplay.classList.add('main-display');
  mainDisplay.appendChild(createCard());
  display.appendChild(mainDisplay);

  return display;
}

export { createInfoDisplay };
