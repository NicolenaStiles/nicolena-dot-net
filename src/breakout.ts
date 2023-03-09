/*import { breakout as breakout } from "./breakout";

let test = new breakout();
test.say_hello();
*/

/*
// Breakout game, first stab
// TODO: look into backend frameworks
// also database options: SQL or anything is fine for high scores
*/

// switch canvas resize to this approach
function resize_canvas() {

}

document.addEventListener("DOMContentLoaded", resize_canvas) {

}

var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// TODO: what is the type of "code"?
function keyDownHandler(e: KeyboardEvent) {
    if (e.code == "ArrowRight") {
        rightPressed = true;
        console.log("Right!");
    } else if (e.code == "ArrowLeft") {
        leftPressed = true;
        console.log("Left!")
    }
}
function keyUpHandler(e: KeyboardEvent) {
    if(e.code == "ArrowRight") {
        rightPressed = false;
    } else if (e.code == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawBall() {
    ctx?.beginPath();
    ctx?.arc(x,y,ballRadius,0,Math.PI*2);
    ctx!.fillStyle = '#0095DD'; // not the right way to do this-- ask Cam?
    ctx?.fill();
    ctx?.closePath();
}

function drawPaddle() {
    ctx?.beginPath();
    ctx?.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx!.fillStyle = '#0095DD';
    ctx?.fill();
    ctx?.closePath();
}

// main sketch loop, basically what happens every "frame"
function draw() {
    ctx?.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

setInterval(draw,10);