//check if mouse is pressed
const container = document.querySelector("#container");
let mousePressed = false;
container.addEventListener("mousedown", () => {
  mousePressed = true;
});
container.addEventListener("mouseup", () => {
  mousePressed = false;
});

//function to create row of grid
function CreateRows(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
  };
};

//function to create cells in rows
function CreateCells(size){
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);
    };
  });
};

//function to create the grid
function CreateGrid(size) {
  CreateRows(size);
  CreateCells(size);
};

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

//function to reset cell
function resetCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.setAttribute("style", "background-color: white;")
  });
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
};

//function to Random color cells
function randomColorToCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);  
    cell.addEventListener("mouseover", (e) => {
      if (mousePressed) {
        e.target.setAttribute("style", "background-color: rgb(" + r + "," + g + "," + b + ");");
      };
    });
  });

}

//Call functions to create grid and to default skectch
const defaultSize = 16;
let mode;
CreateGrid(defaultSize);
cellsToBlack();

//Button Resize
const resize = document.querySelector('#resize');
resize.addEventListener('click', resizeGrid);

//Button Reset
const reset = document.querySelector("#reset");
reset.addEventListener('click', resetCells);

//Button Black
const black = document.querySelector('#black');
black.addEventListener('click', () => {
  mode = "black";
});

//Button Random
const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', () => {
  mode = "randomColor";
});

