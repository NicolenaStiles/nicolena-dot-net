// app.js
//
// one day I'll look at this file and think it's the stupidest thing of all time
// but that day is not today!

// triggers on load of body
function on_load () {

    // resizes canvas to be the size of the screen
    //document.getElementById('myCanvas').setAttribute("width", document.body.clientWidth);
    //document.getElementById('myCanvas').setAttribute("height", document.body.clientHeight);

    // grab canvas context
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // set initial conditions
    // center of canvas
    var cx = canvas.getAttribute("width")/4;
    var cy = canvas.getAttribute("height")/2;

    // spaceship dimensions
    var w = 35;
    var h = 65;
    var linewidth = 3;

    // drawing settings
    ctx.strokeStyle = "white"
    ctx.lineWidth = linewidth;

    // starting position
    // movement speed/direction
    var x = cx;
    var y = cy;
    var dx = 0;
    var dy = -2;

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

    // enter animation loop
    // sketch ship
    function drawShip(dx, dy) {
        // Refer to paper notes for in-depth explanation of how this works
        // TODO: Add draw pattern to readme? how document?
        ctx.beginPath();
        ctx.moveTo(a.x + dx, a.y + dy);
        ctx.lineTo(c.x + dx, c.y + dy);
        ctx.stroke();
        ctx.moveTo(b.x + dx, b.y + dy);
        ctx.lineTo(d.x + dx, d.y + dy);
        ctx.stroke()
        ctx.moveTo(e.x + dx, e.y + dy);
        ctx.lineTo(a.x + dx, a.y + dy);
        ctx.stroke();
        ctx.closePath();
    }
    // apply animation
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawShip(x,y);

        if (x + dx > canvas.width) {
            x = 0;
            console.log("x1");
        } else if (x + dx < 0) {
            x = canvas.width;
            console.log("x2");
        } else {
            x += dx;
            console.log("x3");
        }
        
        if (y + dy > canvas.height) {
            y = 0;
            console.log("y1");
        } else if (y + dy < 0) {
            y = canvas.height;
            console.log("y2");
        } else {
            y += dy;
            console.log("y3");
        }
        //console.log(x);
        //console.log(y);
        //console.log(canvas.width);
        //console.log(canvas.height);

    }

    setInterval(draw, 10);
}