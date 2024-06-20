const container = document.querySelector(".container-divs");
const gridSizeBtn = document.querySelector(".container button");

let gridSize = 16;

function createSquareEl(squareSize) {
  const squareEl = document.createElement("div");
  squareEl.classList.add("square");
  squareEl.style.width = `${squareSize}px`;
  squareEl.style.height = `${squareSize}px`;

  return squareEl;
}

function addActiveClass(e) {
  e.target.classList.add("square-active");
}

function generateGrid() {
  for (let i = 1; i <= gridSize * gridSize; i++) {
    squareSize = container.clientWidth / gridSize;
    squareEl = createSquareEl(squareSize);
    squareEl.addEventListener("mouseenter", addActiveClass);
    container.appendChild(squareEl);
  }
}

function removeGrid() {
  const divs = container.childNodes;
  for (let i = 0; i < divs.length; i++) {
    divs[i].removeEventListener("mouseenter", addActiveClass);
    divs[i].remove();
    i--;
  }
}

function getUserInput() {
  userInput = parseInt(prompt("Grid size:"));
  while (typeof userInput !== "number" || userInput <= 0 || userInput >= 100) {
    userInput = parseInt(prompt("Grid size:"));
  }
  removeGrid();
  gridSize = userInput;
  generateGrid();
}

gridSizeBtn.addEventListener("click", getUserInput);

generateGrid();
