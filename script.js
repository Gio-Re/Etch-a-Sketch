const container = document.querySelector('#container');

let numberOfSideCell = 16;
let numberOfCell = numberOfSideCell * numberOfSideCell;
for (let i = 0; i < numberOfSideCell; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
};

const rows = document.querySelectorAll('.row')

rows.forEach((row) => {
    for (let j = 0; j < numberOfSideCell; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    };
})