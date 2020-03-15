const container = document.getElementById("grid-container");

function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let pixel = document.createElement("div");
        // pixel.innerText = (i+1);
        container.appendChild(pixel).className= "grid-item";
    };
};

makeRows(16,16);


function changeColor() {
    div.style.backgroundColor = "red";
}
const divs = Array.from(document.querySelectorAll(".grid-item"));
divs.forEach(div => div.addEventListener('mouseover', changeColor))