const grid = document.querySelector(".grid");
const input = document.querySelector("#input-size");
const drawBtn = document.querySelector(".draw");
const eraseBtn = document.querySelector(".erase");

const gridSize = {
    width: parseFloat(getComputedStyle(grid).width),
    height: parseFloat(getComputedStyle(grid).height),
}

let mouseDown = false;

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
            square.addEventListener("mouseover", draw);
            row.appendChild(square);
        }
    }
}

function draw(event) {
    if(mouseDown === false) return;
    if(drawBtn.classList.contains("active")) {
        event.target.style.backgroundColor = getRandomColor();
    } else if(eraseBtn.classList.contains("active")) {
        event.target.style.backgroundColor = "white";
    }
}

function getRandomColor() {
    const colors = [
        "rgb(255, 0, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 0, 255)",
    ]
    let color = colors[Math.floor(Math.random() * 3)];
    return color;
}

function activateDraw() {
    drawBtn.classList.add("active");
    eraseBtn.classList.remove("active");
}

function activateErase() {
    drawBtn.classList.remove("active");
    eraseBtn.classList.add("active");
}

function isMouseDown() {
    mouseDown = true;
}

function isMouseUp() {
    mouseDown = false;
}


input.addEventListener("input", createSquares);

window.addEventListener("load", activateDraw);
drawBtn.addEventListener("click", activateDraw);
eraseBtn.addEventListener("click", activateErase);

document.addEventListener("mousedown", isMouseDown);
document.addEventListener("mouseup", isMouseUp);


createSquares();
