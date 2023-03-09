// Main index file
// This is gonna be kinda messy for a bit, but I'll clean it up later
// Referencing breakout game from "breakout.ts" here

// Grabbing relevant DOM items
var canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Initial conditions (start ship in middle of canvas)
// r = rotation (starts at 0)
var x = canvas.width/2;
var y = canvas.height/2;
var r = 0;

// Speed/rotation rates of ship
var dx = 2;
var dy = 2;
var dr = 2;

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

function rotate_point(pointX : number, pointY : number, originX : number, originY : number, angle : number) {
    angle = angle * Math.PI / 180.0;
    return {
        x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
        y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
    };
}

// Draw spaceship based on center of image
function drawSpaceship(cx: number, cy: number, rotation: number) {

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

    var f_a = rotate_point(a.x,a.y,cx,cy,rotation);
    var f_b = rotate_point(b.x,b.y,cx,cy,rotation);
    var f_c = rotate_point(c.x,c.y,cx,cy,rotation);
    var f_d = rotate_point(d.x,d.y,cx,cy,rotation);
    var f_e = rotate_point(e.x,e.y,cx,cy,rotation);
    
    ctx?.beginPath();
    ctx?.moveTo(f_a.x, f_a.y);
    ctx?.lineTo(f_c.x, f_c.y);
    ctx?.stroke();
    ctx?.moveTo(f_b.x, f_b.y);
    ctx?.lineTo(f_d.x, f_d.y);
    ctx?.stroke()
    ctx?.moveTo(f_e.x, f_e.y);
    ctx?.lineTo(f_a.x, f_a.y);
    ctx?.stroke();
    ctx?.closePath();

    return;
}

// main sketch loop, basically what happens every "frame"
function draw() {
    // clear full screen
    ctx?.clearRect(0,0, canvas.width, canvas.height);
    drawSpaceship(x,y,r);

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
   /*
   if (rightPressed) {
    x += dx;
   } else if (leftPressed) {
    x -= dx;
   } else if (upPressed) {
    y -= dy;
   } else if (downPressed) {
    y += dy;
   }
   */

   // testing rotation
    if (rightPressed) {
        r += dr;
    } else if (leftPressed) {
        r -= dr;
    }

    if (upPressed) {
        x += dx * Math.sin(r * Math.PI / 180.0);
        y -= dy * Math.cos(r * Math.PI / 180.0);
    }

}

setInterval(draw,10);