const container = document.querySelector("#container");

let numberOfSideCell = 16;
let numberOfCell = numberOfSideCell * numberOfSideCell;
for (let i = 0; i < numberOfSideCell; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
}

const rows = document.querySelectorAll(".row");

rows.forEach((row) => {
  for (let j = 0; j < numberOfSideCell; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
});

const cells = document.querySelectorAll(".cell");

let mousePressed = false;
document.addEventListener("mousedown", () => {
  mousePressed = true;
});
document.addEventListener("mouseup", () => {
  mousePressed = true;
});

cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    if (mousePressed) {
      e.target.setAttribute("style", "background-color: black;");
    };
  });
});

/* cells.forEach((cell) => {
  cell.addEventListener("mouseleave", (e) => {
    if(e.button != 1) {
    e.target.setAttribute("style", "background-color: white;");
    }
  });
}); */
