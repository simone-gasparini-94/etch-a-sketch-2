const grid = document.querySelector(".grid");
const createBtn = document.querySelector(".create-btn");
const input = document.querySelector("#input-size");

const gridSize = {
    width: parseFloat(getComputedStyle(grid).width),
    height: parseFloat(getComputedStyle(grid).height),
}

function createSquares() {
    grid.innerHTML = "";

    let inputValue = parseInt(input.value);

    if(isNaN(inputValue) || inputValue < 2 || inputValue > 64) {
        inputValue = 16;
    }

    for(let i = 0; i < inputValue; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (let j = 0; j < inputValue; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            const squareSize = {
                width: gridSize.width / inputValue + "px",
                height: gridSize.height / inputValue + "px",
            }
            square.style.width = squareSize.width;
            square.style.height = squareSize.height;
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        }
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "red";
}

createBtn.addEventListener("click", createSquares);

createSquares();