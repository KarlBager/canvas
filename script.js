//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

let canvas = document.querySelector('#canvas');


//Her fortælles kodeeditoren at der arbejdes med Canvas API i 2d-kontekst og det defineres med CONTEXT-ELEMENTET, at der arbejdes i en 2d-kontekst
/** @type {CanvasRenderingContext2d} */
let ctx = canvas.getContext("2d");


//Sort er standardfarven

let increasingColorHue = 0;
let squareColor = "hsl(" + increasingColorHue + ", 50%, 50%)";

let squareXRange = document.querySelector('#square-x-range');
let squareYRange = document.querySelector('#square-y-range');

function updateSquarePosition(){
   squareX = squareXRange.value;
   squareY = squareYRange.value;
   drawSquares();
}

squareXRange.addEventListener("input", updateSquarePosition);
squareYRange.addEventListener("input", updateSquarePosition);

function drawSquares(){
    console.log(squareColor);
    ctx.fillStyle = squareColor;
    ctx.fillRect(squareX, squareY, 20, 20);
increasingColorHue++;
squareColor = "hsl(" + increasingColorHue + ", 50%, 50%)";
}





let isMouseDown = false;

function drawSquaresMouse(e) {
    if (isMouseDown) {
        console.log(e);

        squareX = e.x - 10;
        squareY = e.y - 115;

        ctx.fillStyle = squareColor;
        ctx.fillRect(squareX, squareY, 20, 20);

        increasingColorHue = increasingColorHue + 10;
        squareColor = "hsl(" + increasingColorHue + ", 50%, 50%)";

        requestAnimationFrame(drawSquaresMouse);
    }
}

canvas.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    drawSquaresMouse(e);
});

canvas.addEventListener("mouseup", () => {
    isMouseDown = false;
});

canvas.addEventListener("mouseout", () => {
    isMouseDown = false;
});
