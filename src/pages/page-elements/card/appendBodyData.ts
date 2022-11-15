function appendBodyData(card: HTMLDivElement, data: Array<Object>): void {
  const body = card.querySelector('div.body') as HTMLDivElement;

  data.forEach((obj) => {
    const key = document.createElement('p');
    key.textContent = Object.keys(obj)[0];
    body.appendChild(key);

    const value = document.createElement('p');
    value.textContent = Object.values(obj)[0];
    body.appendChild(value);
  });
}

export { appendBodyData };
