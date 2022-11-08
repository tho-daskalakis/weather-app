function createMainDisplay(): HTMLDivElement {
  // // For testing
  // const pDisplay = document.createElement('p');
  // pDisplay.classList.add('text-display');
  // display.appendChild(pDisplay);

  const mainDisplay = document.createElement('div');
  mainDisplay.classList.add('main-display');

  return mainDisplay;
}

export { createMainDisplay };
