const container = document.querySelector("#container");
let numberOfSideCell = 16;

//function to resize grid
function resizeGrid() {
  let sizeRequested = parseInt(prompt("Please enter desired size of the SketchPad:"));
    if (!Number.isInteger(sizeRequested)|| sizeRequested < 2 || sizeRequested > 100) {
        alert('Invalid Value! Tha side size should be an integer between 2 and 100!');
    } else {
        const rows = document.querySelectorAll(".row");
        rows.forEach((row) => {
            container.removeChild(row);
        })
        CreateGrid(sizeRequested);
        cellsToBlack();
    };
};

//function to black cells
function cellsToBlack () {
  const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
          cell.addEventListener("mouseover", (e) => {
            if (mousePressed) {
              e.target.setAttribute("style", "background-color: black;");
            };
          });
        });
}


//function to create row of grid
function CreateRows(numberOfSideCell) {
  for (let i = 0; i < numberOfSideCell; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  };
};

//function to create cells in rows
function CreateCells(numberOfSideCell){
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let j = 0; j < numberOfSideCell; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    };
  });
};

//function to create the grid
function CreateGrid(numberOfSideCell) {
  CreateRows(numberOfSideCell);
  CreateCells(numberOfSideCell);
};

//Call functions to create grid and to default skectch
CreateGrid(numberOfSideCell);
cellsToBlack();

//Button resize
const resize = document.querySelector('#resize');
resize.addEventListener('click', resizeGrid);

//check if mouse is pressed
let mousePressed = false;
container.addEventListener("mousedown", () => {
  mousePressed = true;
});
container.addEventListener("mouseup", () => {
  mousePressed = false;
});

