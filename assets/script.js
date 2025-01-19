const grid = document.querySelector(".grid");

function createSquares(number) {
    for(i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);
        for (j = 0; j < number; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }
    }
}

createSquares(16);