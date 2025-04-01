const container = document.querySelector("#container");

let numberOfSideCell = 16;

//create row of grid
for (let i = 0; i < numberOfSideCell; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
}

const rows = document.querySelectorAll(".row");

//create cells in rows
rows.forEach((row) => {
  for (let j = 0; j < numberOfSideCell; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
});

const cells = document.querySelectorAll(".cell");

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

