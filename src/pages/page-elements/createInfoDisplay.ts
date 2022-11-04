function createInfoDisplay(): HTMLDivElement {
  const display = document.createElement('div');
  display.id = 'data-display';

  const pDisplay = document.createElement('p');
  pDisplay.classList.add('text-display');
  display.appendChild(pDisplay);

  return display;
}

export { createInfoDisplay };
