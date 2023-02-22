// app.js
//
// one day I'll look at this file and think it's the stupidest thing of all time
// but that day is not today!

// triggers on load of body
function on_load () {

    // resizes canvas to be the size of the screen
    document.getElementById('myCanvas').setAttribute("width", document.body.clientWidth);
    document.getElementById('myCanvas').setAttribute("height", document.body.clientHeight);

    // grab canvas context
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // center of canvas
    var cx = canvas.getAttribute("width")/2;
    var cy = canvas.getAttribute("height")/2;

    // spaceship dimensions
    var w = 35;
    var h = 65;
    var linewidth = 3;

    // drawing settings
    ctx.strokeStyle = "white"
    ctx.lineWidth = linewidth;

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


    // Refer to paper notes for in-depth explanation of how this works
    // TODO: Add draw pattern to readme? how document?
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(c.x,c.y);
    ctx.stroke();
    ctx.moveTo(b.x,b.y);
    ctx.lineTo(d.x,d.y);
    ctx.stroke()
    ctx.moveTo(e.x,e.y);
    ctx.lineTo(a.x, a.y);
    ctx.stroke();
    ctx.closePath();

    // TODO: Add the thrusters!!
}