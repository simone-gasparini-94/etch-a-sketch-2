const grid = document.querySelector(".grid");
const input = document.querySelector("#input");
const blackBtn = document.querySelector(".black");
const rgbBtn = document.querySelector(".rgb");
const eraseBtn = document.querySelector(".erase");
const clearBtn = document.querySelector(".clear");

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
    if (!mouseDown) return;

    switch (true) {
        case blackBtn.classList.contains("active"):
            event.target.style.backgroundColor = "black";
            break;
        case rgbBtn.classList.contains("active"):
            event.target.style.backgroundColor = getRandomColor();
            break;
        case eraseBtn.classList.contains("active"):
            event.target.style.backgroundColor = "white";
            break;
        default:
            event.target.style.backgroundColor = "black";
            break;
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

function activateBlack() {
    blackBtn.classList.add("active");
    rgbBtn.classList.remove("active");
    eraseBtn.classList.remove("active");
}

function activateRGB() {
    blackBtn.classList.remove("active");
    rgbBtn.classList.add("active");
    eraseBtn.classList.remove("active");
}

function activateErase() {
    blackBtn.classList.remove("active");
    rgbBtn.classList.remove("active");
    eraseBtn.classList.add("active");
}

function isMouseDown() {
    mouseDown = true;
}

function isMouseUp() {
    mouseDown = false;
}

function clearGrid() {
    createSquares();
}

window.addEventListener("load", activateBlack);

input.addEventListener("input", createSquares);

blackBtn.addEventListener("click", activateBlack);
rgbBtn.addEventListener("click", activateRGB);
eraseBtn.addEventListener("click", activateErase);

clearBtn.addEventListener("click", clearGrid)

document.addEventListener("mousedown", isMouseDown);
document.addEventListener("mouseup", isMouseUp);


createSquares();
