
// sample star drawing
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// really shitty, never do this.
// "spaceship"
// "star"
// "bullet"
var draw_select = "bullet"

// center of canvas (800x600)
var cx = 400;
var cy = 300;

// spaceship dimensions
var w = 35;
var h = 65;
var linewidth = 3;

// bullet dimension
var bulletRadius = 2;

// sketch spaceship
if (draw_select == "spaceship") {

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

    // TODO: Add the thrusters!!
}

// sketch bullet
if (draw_select == "bullet") {
    ctx.beginPath();
    ctx.arc(cx, cy, bulletRadius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

// sketch asteroid
if (draw_select == "asteroid") {

}

if (draw_select == "star") {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(108, 0.0);
    ctx.lineTo(141, 70);
    ctx.lineTo(218, 78.3);
    ctx.lineTo(162, 131);
    ctx.lineTo(175, 205);
    ctx.lineTo(108, 170);
    ctx.lineTo(41.2, 205);
    ctx.lineTo(55, 131);
    ctx.lineTo(1, 78);
    ctx.lineTo(75, 68);
    ctx.lineTo(108, 0);
    ctx.closePath();
    ctx.fill();
}

/* // changes the background display and makes the main menu disappear
function bg_button() {
    document.body.style.backgroundImage = "url('images/oceans_brawl.jpeg')";
    document.getElementById("ctr").setAttribute("class","d-none");
}

function draw_star(ctx) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(108, 0.0);
    ctx.lineTo(141, 70);
    ctx.lineTo(218, 78.3);
    ctx.lineTo(162, 131);
    ctx.lineTo(175, 205);
    ctx.lineTo(108, 170);
    ctx.lineTo(41.2, 205);
    ctx.lineTo(55, 131);
    ctx.lineTo(1, 78);
    ctx.lineTo(75, 68);
    ctx.lineTo(108, 0);
    ctx.closePath();
    ctx.fill();
}

class game_object {
    constructor(canvas_ctx) {
        this.ctx = canvas_ctx;
    }
} */