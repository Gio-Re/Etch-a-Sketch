//check if mouse is pressed
const container = document.querySelector("#container");
let mousePressed = false;
document.addEventListener("mousedown", () => {
  mousePressed = true;
});
document.addEventListener("mouseup", () => {
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
        });
        CreateGrid(sizeRequested);
        cellsToBlack();
    };
};

//function to reset cell
function resetCells() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.setAttribute("style", "background-color: white; opacity: 0.10;")
  });
};

//function to black cells
function cellsToBlack () {
  resetCells();
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (mousePressed) {
        cell.setAttribute("style", "background-color: black; opacity: 1;");
      };
    });
  });
};

//function to Random color cells
function cellsToRandomColor() {
  resetCells();
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);  
    cell.addEventListener("mouseover", () => {
      if (mousePressed) {
        cell.setAttribute("style", "background-color: rgb(" + r + "," + g + "," + b + "); opacity: 1;");
      };
    });
  });
};

//function to black shadows cells
function cellsToShadow() {
  resetCells();
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.replaceWith(cell.cloneNode(false));
  });
  const newcells = document.querySelectorAll(".cell");
  newcells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      if (mousePressed) {
        let currentOpacity = parseFloat(cell.style.opacity) || 0;
        let desiredOpacity = 0;
        if (currentOpacity < 1) {
          desiredOpacity = currentOpacity + 0.1;
          cell.setAttribute("style", "background-color: black; opacity: " + desiredOpacity + ";");
        };
        
      };
    });
  });
};

//Call functions to create grid and to default skectch
const defaultSize = 16;
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
black.addEventListener('click', cellsToBlack);

//Button Random
const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', cellsToRandomColor);

//Button Shadow
const shadow = document.querySelector('#shadow');
shadow.addEventListener('click', cellsToShadow);

