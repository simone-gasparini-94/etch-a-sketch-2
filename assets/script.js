const grid = document.querySelector(".grid");

function createSquares(number) {
    for(i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (j = 0; j < number; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseover", changeColor);
            row.appendChild(square);
        }
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "red";
}


createSquares(16);