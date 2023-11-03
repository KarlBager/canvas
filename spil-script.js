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
let points = 5;
let snakeLength = points+1;
let direction = 2;
let snakeX = 20;
let snakeY = 200;
let squareX = snakeX;
let squareY = snakeY;
let snakeSquare = {squareX: squareX, squareY: squareY};
let snakeSquares = [snakeSquare];


function drawSnake(){
    squareX = snakeX;
    squareY = snakeY;

ctx.clearRect(0,0,canvas.width,canvas.height);
    snakeSquare = {squareX: squareX, squareY: squareY};
    snakeSquares.unshift(snakeSquare);

if(snakeSquares.length>=snakeLength){
    snakeSquares.pop();
} else{

}

for(j = 0; j < snakeSquares.length; j++){
    ctx.fillStyle = "green";
    ctx.fillRect(snakeSquares[j].squareX,snakeSquares[j].squareY,10,10);
    console.log(snakeSquares[j].squareX,snakeSquares[j].squareY);
};

if(direction == 2){squareX = squareX - 10;}
if(direction == 4){squareX = squareX + 10;}
if(direction == 1){squareY = squareY + 10;}
if(direction == 3){squareY = squareY - 10;}






if(direction == 2){snakeX = snakeX + snakeSpeed}
if(direction == 4){snakeX = snakeX - snakeSpeed}
if(direction == 1){snakeY = snakeY - snakeSpeed}
if(direction == 3){snakeY = snakeY + snakeSpeed}

requestAnimationFrame(drawSnake);
}



function startGame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    points = 0;
    direction = 2;
drawSnake();
}



function changeDirection(e){
    
    console.log(e);
    if(e.key=="ArrowDown"){direction = 3};
    if(e.key=="ArrowRight"){direction = 2};
    if(e.key=="ArrowLeft"){direction = 4};
    if(e.key=="ArrowUp"){direction = 1};
}




canvas.addEventListener("click", startGame());
  
body.addEventListener("keydown", changeDirection);

