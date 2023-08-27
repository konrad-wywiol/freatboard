import { Note } from './note';

export const renderHtml = (fretboard: Note[][], highlight: number[][]) => {
  const table = document.createElement('table');
  table.style.cssText =
    'border: 1px solid;width: 100%;font-family: Arial, Helvetica, sans-serif;border-collapse: collapse;padding: 8px;table-layout: fixed';

  const headers = document.createElement('tr');
  fretboard[0].forEach((_, index) => {
    const value = document.createElement('th');
    value.appendChild(document.createTextNode(index.toString()));
    value.style.cssText = 'border: 1px solid;text-align: center;background-color: #a9a9a9;';
    headers.appendChild(value);
  });
  table.appendChild(headers);

  fretboard.forEach((string, i) => {
    const row = document.createElement('tr');
    row.style.cssText = 'height:30px';
    string.forEach((note, j) => {
      const value = document.createElement('td');
      value.appendChild(document.createTextNode(note));
      value.style.cssText = 'border: 1px solid;text-align: center;';

      if (highlight[i][j] === 0) {
        value.style.cssText += 'background-color: #38761d;';
      } else if (highlight[i][j] === 1) {
        value.style.cssText += 'background-color: #6aa84f;';
      } else if (highlight[i][j] === 2) {
        value.style.cssText += 'background-color: #6aa84f;';
      } else if (highlight[i][j] === 3) {
        value.style.cssText += 'background-color: #ffe599;';
      } else if (j === 0) {
        value.style.cssText += 'background-color: #a9a9a9;';
      }

      row.appendChild(value);
    });
    table.appendChild(row);
  });

  const oldTable = document.getElementsByTagName('table');

  if (oldTable.length) {
    oldTable[0].remove();
  }

  document.body.appendChild(table);
};
