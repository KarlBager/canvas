// Add a keydown event listener to the window or document.
window.addEventListener('keydown', function(event) {
    // Check if the pressed key is an arrow key.
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      // Prevent the default action (scrolling).
      event.preventDefault();
    }
  });


let canvas = document.querySelector('#canvas');
let body = document.querySelector('body');



/** @type {CanvasRenderingContext2d} */
let ctx = canvas.getContext("2d");


let snakeSpeed = 0.3;
let points = 10;
let snakeLength = points+1;
let direction = 2;
let snakeX = 200;
let snakeY = 200;
let squareX = snakeX;
let squareY = snakeY;
let snakeSquare = {squareX: squareX, squareY: squareY};
let snakeSquares = [snakeSquare];

function drawSnake(){
ctx.clearRect(0,0,canvas.width,canvas.height);
for (i = 0; i < snakeLength; i++){
    squareX = snakeX + 10;
    squareY = snakeY;
    snakeSquare = {squareX: squareX, squareY: squareY};
    snakeSquares.unshift(snakeSquare);

    for(j = 0; j < snakeLength; j++){
        ctx.fillStyle = "green";
        ctx.fillRect(snakeSquares[j].squareX,snakeSquares[j].squareY,10,10);
    };
}

if(direction == 2){snakeX = snakeX + snakeSpeed}
if(direction == 4){snakeX = snakeX - snakeSpeed}
if(direction == 1){snakeY = snakeY - snakeSpeed}
if(direction == 3){snakeY = snakeY + snakeSpeed}
snakeSquares.pop();
requestAnimationFrame(drawSnake);
}



function startGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    points = 0;
    direction = 2;
drawSnake();
}

function changeDirection(e){
    
    // function clearTrail(clearRectX, clearRectY, clearRectW, clearRectH){
    //     ctx.fillStyle = "red";
    //     ctx.fillRect(clearRectX, clearRectY, clearRectW, clearRectH);
    
    // }

    console.log(e);
    if(e.key=="ArrowDown"){direction = 3};
    if(e.key=="ArrowRight"){direction = 2};
    if(e.key=="ArrowLeft"){direction = 4};
    if(e.key=="ArrowUp"){direction = 1};
}




canvas.addEventListener("click", startGame());
  
body.addEventListener("keydown", changeDirection);

