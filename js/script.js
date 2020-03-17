const container = document.getElementById("grid-container");
const btnReset = document.getElementById("reset");
const btnDefault = document.getElementById("default")
const btnRainbow = document.getElementById("rainbow");
const btnShaded = document.getElementById("shaded");
const btnGridChange = document.getElementById("gridChange");
let pixelsPerSide = 16;

function makeRows(rows,cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let pixel = document.createElement("div");
        pixel.setAttribute('id', 'div' + i);
        container.appendChild(pixel).className= "grid-item";     
    };

};

function destroyPixels() {
    var node = document.getElementById('grid-container');
    node.innerHTML = '';
}

function resetGrid() {
    //reset grid size
    destroyPixels();
    makeRows(pixelsPerSide,pixelsPerSide);
    // defaultFill();
}

function clearPixels() {
    let totalPixels = pixelsPerSide * pixelsPerSide;
    for(i = 0; i < totalPixels; i++) {
        let divName = "div" + i;
        let divToUpdate = document.getElementById(divName).style;
        divToUpdate.style = "";
        
    }
}
function defaultFill() {
    let totalPixels = pixelsPerSide * pixelsPerSide;
    for (i=0; i < totalPixels; i++) {
        let divName = "div" + i;
        let divToUpdate = document.getElementById(divName);
        divToUpdate.addEventListener("mouseover", function() {
            divToUpdate.style.background = 'lightblue';
            divToUpdate.style.opacity = 1;
            divToUpdate.style.transitionDuration = '0.1s';
        });
    }
}
function shadedFill() {
    let totalPixels = pixelsPerSide * pixelsPerSide;
    for (i=0; i < totalPixels; i++) {
        let divName = "div" + i;
        let divToUpdate = document.getElementById(divName);
        let dynamicOpacity = 0.1;
        divToUpdate.addEventListener("mouseover", function() {
            divToUpdate.style.background = 'lightblue';
            dynamicOpacity += 0.1;
            divToUpdate.style.opacity = dynamicOpacity;
            divToUpdate.style.transitionDuration = '0.1s';
        });
    }
}

function generateRndColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}
function rainbowPixels() {
    //randomly choose background color for divs on hover
    let totalPixels = pixelsPerSide * pixelsPerSide;
    for (i=0; i < totalPixels; i++) {
        let divName = "div" + i;
        let divToUpdate = document.getElementById(divName);
        divToUpdate.addEventListener("mouseover", function() { 
            divToUpdate.style.background = generateRndColor();
            divToUpdate,style.opacity = 1;
            divToUpdate.style.transitionDuration = '0.1s';
        });
    }
}

function gridSize() {
// change amount of pixels in grid
var choice = prompt("How many squares do you want each side to have?");
    if (choice == null || isNaN(choice) || choice == 0) {
        alert("Please enter a valid number. How many squares do you want each side to be?")
        gridSize();
    } else if (choice > 100) {
        alert("Please enter a number smaller than 100.");
        gridSize();
    }
    else {
        pixelsPerSide = parseInt(choice, 10);
        makeRows(pixelsPerSide, pixelsPerSide);       
    }
}

;

makeRows(pixelsPerSide,pixelsPerSide);
defaultFill();


btnDefault.addEventListener("click", function() {
    resetGrid();
    defaultFill();
});
btnReset.addEventListener("click", function() {
    resetGrid();
    defaultFill();
});
btnRainbow.addEventListener("click", function() { 
    resetGrid(); 
    rainbowPixels();
});
btnShaded.addEventListener("click", function() {
    resetGrid(); 
    shadedFill();
})
btnGridChange.addEventListener("click", function() {
    destroyPixels();
    gridSize();
    defaultFill();
});



