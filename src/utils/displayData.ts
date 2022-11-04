import { Data } from './dataInterface';

function displayData(data: Data): void {
  const dataDisplay = document.getElementById('data-display') as HTMLDivElement;
  // const pDisplay = dataDisplay.querySelector(
  //   '.text-display'
  // ) as HTMLParagraphElement;

  // pDisplay.textContent = JSON.stringify(data);

  // TODO: parse data to viewing card
}

export { displayData };
