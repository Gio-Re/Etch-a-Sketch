const container = document.querySelector('#container');

let numberOfSideCell = 16;
let numberOfCell = numberOfSideCell * numberOfSideCell;
for (let i = 0; i < numberOfCell; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
};