const container = document.querySelector("#container");

let numberOfSideCell = 16;

//resize grid
const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {
    let sizeRequested = parseInt(prompt("Please enter desired size of the SketchPad:"));
    if (!Number.isInteger(sizeRequested)|| sizeRequested < 2 || sizeRequested > 100) {
        alert('Invalid Value! Tha side size should be an integer between 2 and 100!');
    } else {
        rows.forEach((row) => {
            container.removeChild(row);
        })
    }
})

//create row of grid
function CreateRows(numberOfSideCell) {
    for (let i = 0; i < numberOfSideCell; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }
    return const rows = document.querySelectorAll(".row");
}



//create cells in rows
rows.forEach((row) => {
  for (let j = 0; j < numberOfSideCell; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
});

const cells = document.querySelectorAll(".cell");

CreateRows(numberOfSideCell);

//check if mouse is pressed
let mousePressed = false;
document.addEventListener("mousedown", () => {
  mousePressed = true;
});
document.addEventListener("mouseup", () => {
  mousePressed = false;
});

//change background color if mouseover and pressed
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    if (mousePressed) {
      e.target.setAttribute("style", "background-color: black;");
    };
  });
});

