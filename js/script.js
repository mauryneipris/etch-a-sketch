const container = document.getElementById("grid-container");
const btnReset = document.getElementById("reset");
const btnBlack = document.getElementById("black")
const btnRainbow = document.getElementById("rainbow");
const btnGridChange = document.getElementById("gridChange");
let px;

function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute('id', 'div' + i);
        container.appendChild(pixel).className= "grid-item";
        
    };
};

makeRows(16,16);


function destroyPixels() {
    console.log()
    for(i=0; i < (rows * cols); i++) {
        let divName = "div" + i;
        let divToBeRemoved = document.getElementById(divName);
        divToBeRemoved.parentNode.removeChild(divToBeRemoved);
    }
}
function defaultBackgroundColor() {
    style.backgroundColor = "black";
}

function resetGrid() {
    //reset grid size
    destroyPixels();
    makeRows(16,16);
}

function rainbowPixels(e) {
    //randomly choose background color for divs on hover
    const rndCol = 'rgb(' + random(255) + "," + random(255) + "," + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
}

function gridSize() {
// change amount of pixels in grid
var choice = prompt("How many squares do you want each side to have?");
    if (choice == null || isNaN(choice)) {
        prompt("Please enter a valid number. How many squares do you want each side to be?")
    } else {
        let px = Number(choice);
        makeRows(px, px);
    }
}


btnBlack.addEventListener("click", defaultBackgroundColor);
btnReset.addEventListener("click", resetGrid);
btnRainbow.addEventListener("click", rainbowPixels);
btnGridChange.addEventListener("click", gridSize);



