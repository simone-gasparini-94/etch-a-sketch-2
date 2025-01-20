const grid = document.querySelector(".grid");

const gridSize = {
    width: 960,
    height: 960,
}

function createSquares(number) {
    for(i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (j = 0; j < number; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            const squareSize = {
                width: gridSize.width / number + "px",
                height: gridSize.height / number + "px",
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


createSquares(16);