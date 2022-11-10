import { createDefaultCard } from './page-elements/defaultCard';
import { createForm } from './page-elements/form/createForm';

// Get container element
const app = document.getElementById('app') as HTMLDivElement;

function createMainPage(): void {
  // Add a description for the page
  const h1 = document.createElement('h1');
  h1.textContent = 'Weather app';
  app.appendChild(h1);
  // TODO: Create a function for the header

  // Add input form to the page
  app.appendChild(createForm());
  app.appendChild(createDefaultCard());
}

export { createMainPage };
