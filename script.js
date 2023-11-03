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

// function drawSquares(){
//     console.log(squareColor);
//     ctx.fillStyle = squareColor;
//     ctx.fillRect(squareX, squareY, 20, 20);
// increasingColorHue++;
// squareColor = "hsl(" + increasingColorHue + ", 50%, 50%)";
// }



let isMouseDown = false;

function drawSquares(e){
if(isMouseDown==true){
   console.log(isMouseDown);
   if(isMouseDown == true){canvas.addEventListener("mousemove", drawSquares);};
squareX = e.offsetX;
squareY = e.offsetY;
ctx.fillStyle = squareColor;
ctx.fillRect(squareX, squareY, 20, 20);
increasingColorHue = increasingColorHue + 0.01;
squareColor = "hsl(" + increasingColorHue + ", 50%, 50%)";
squareX = squareX + 20;
requestAnimationFrame(drawSquares);
}
}



canvas.addEventListener("mousedown", ()=>{isMouseDown = true;});
canvas.addEventListener("mousedown", drawSquares);


canvas.addEventListener("mouseup", () => {isMouseDown = false, console.log(isMouseDown)});


function clearCanvas(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
};