// Main index file
// This is gonna be kinda messy for a bit, but I'll clean it up later
// Referencing breakout game from "breakout.ts" here

// Grabbing relevant DOM items
var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Initial conditions (start ship in middle of canvas)
var x = canvas.width/2;
var y = canvas.height/2;

// Move speed of ship
var dx = 2;
var dy = 2;

// Directional arrows inital conditions
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

// Handlers for keyboard input (keys going up/down)
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// When key is pressed down
function keyDownHandler(e: KeyboardEvent) {
    if (e.code == "ArrowRight") {
        rightPressed = true;
        console.log("Right!");
    } else if (e.code == "ArrowLeft") {
        leftPressed = true;
        console.log("Left!")
    } else if (e.code == "ArrowUp") {
        upPressed = true;
    } else if (e.code == "ArrowDown") {
        downPressed = true;
    }
}

// When key goes back up (no more press)
function keyUpHandler(e: KeyboardEvent) {
    if(e.code == "ArrowRight") {
        rightPressed = false;
    } else if (e.code == "ArrowLeft") {
        leftPressed = false;
    } else if (e.code == "ArrowUp") {
        upPressed = false;
    } else if (e.code == "ArrowDown") {
        downPressed = false;
    }
}

// Draw spaceship based on center of image
function drawSpaceship(cx: number, cy: number) {

    // spaceship dimensions
    var w = 35;
    var h = 65;
    var linewidth = 3;

    // drawing settings
    ctx!.strokeStyle = "white"
    ctx!.lineWidth = linewidth;

    // starting position
    // movement speed/direction
    var x = cx;
    var y = cy;

    // define points:
    var a = {
        "x" : cx, 
        "y" : cy - (0.5 * h)
    }
    
    var b = {
        "x" : cx - (0.35 * w), 
        "y" : cy + (0.25 * h)
    }

    var c = {
        "x" : cx - (0.5 * w), 
        "y" : cy + (0.5 * h)
    }

    var d = {
        "x" : cx + (0.35 * w), 
        "y" : cy + (0.25 * h)
    }

    var e = {
        "x" : cx + (0.5 * w), 
        "y" : cy + (0.5 * h)
    }
    
    ctx?.beginPath();
    ctx?.moveTo(a.x, a.y);
    ctx?.lineTo(c.x, c.y);
    ctx?.stroke();
    ctx?.moveTo(b.x, b.y);
    ctx?.lineTo(d.x, d.y);
    ctx?.stroke()
    ctx?.moveTo(e.x, e.y);
    ctx?.lineTo(a.x, a.y);
    ctx?.stroke();
    ctx?.closePath();

    return;
}

// main sketch loop, basically what happens every "frame"
function draw() {
    // clear full screen
    ctx?.clearRect(0,0, canvas.width, canvas.height);
    drawSpaceship(x,y);

    // spaceship dimensions
    var shipWidth = 35;
    var shipHeight = 65;

    /* 
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    */

    /*
    if (rightPressed && x < canvas.width-shipWidth) {
        x += dx;
    }
    else if(leftPressed && x > 0) {
        paddleX -= 7;
    }
    */

   // no boundary checking yet
   if (rightPressed) {
    x += dx;
   } else if (leftPressed) {
    x -= dx;
   } else if (upPressed) {
    y -= dy;
   } else if (downPressed) {
    y += dy;
   }

}

setInterval(draw,10);