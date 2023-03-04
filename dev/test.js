
// sample star drawing
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// really shitty, never do this.
// "spaceship"
// "star"
// "bullet"
var draw_select = "asteroid"

console.log("in the test file!");
console.log(document.body.clientWidth);
console.log(document.body.clientHeight);

// center of canvas (800x600)
var cx = canvas.getAttribute("width")/2;
var cy = canvas.getAttribute("height")/2;

console.log(cx);
console.log(cy);

// spaceship dimensions
var w = 35;
var h = 65;
var linewidth = 3;

// bullet dimension
var bulletRadius = 2;

// asteroid radius
var asteroidRadius = 50;

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
    ctx.closePath();

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

// function for int generation
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// sketch asteroid
// base unit is octagon (check unit circle for magic numbers)
if (draw_select == "asteroid") {
    var a = {
        "x" : cx - asteroidRadius,
        "y" : cy, 
        "arc" : true
    }
    var b = {
        "x" : cx - (asteroidRadius * Math.sqrt(2)/2),
        "y" : cy - (asteroidRadius * Math.sqrt(2)/2),
        "arc" : true
    }
    var c = {
        "x" : cx,
        "y" : cy - asteroidRadius,
        "arc" : true 
    }
    var d = {
        "x" : cx + (asteroidRadius * Math.sqrt(2)/2),
        "y" : cy - (asteroidRadius * Math.sqrt(2)/2),
        "arc" : true
    }
    var e = {
        "x" : cx + asteroidRadius,
        "y" : cy,
        "arc" : true
    }
    var f = {
        "x" : cx + (asteroidRadius * Math.sqrt(2)/2),
        "y" : cy + (asteroidRadius * Math.sqrt(2)/2),
        "arc" : true
    }
    var g = {
        "x" : cx,
        "y" : cy + asteroidRadius,
        "arc" : true
    }
    var h = {
        "x" : cx - (asteroidRadius * Math.sqrt(2)/2),
        "y" : cy + (asteroidRadius * Math.sqrt(2)/2),
        "arc" : true
    }

    // throw all those points into an array for numbered access
    // this is redundant but whatever
    let hex_points = [a,b,c,d,e,f,g,h];

    // run as octagon or rand
    var run_mode = "oct"

    // generates early test graphic, which is just an octogon
    if (run_mode == "oct") {
        // style settings
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        // draw shape
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
        ctx.lineTo(c.x,c.y);
        ctx.stroke();
        ctx.lineTo(d.x,d.y);
        ctx.stroke();
        ctx.lineTo(e.x,e.y);
        ctx.stroke();
        ctx.lineTo(f.x,f.y);
        ctx.stroke();
        ctx.lineTo(g.x,g.y);
        ctx.stroke();
        ctx.lineTo(h.x,h.y);
        ctx.stroke();
        ctx.lineTo(a.x,a.y);
        ctx.stroke();
        ctx.closePath();
    } 

    // actual end goal so they look asteroid-y
    if (run_mode == "rand") {
        // 8 segments in hexagon
        // 4 of those are "regular" arcs
        let num_arcs = 4;

        // which ones will be regular arcs?
        // magic number because hexagon
        for (let i = 0; i < num_arcs; i++) {
            let rand_arc = getRandomInt(7)
            hex_points[rand_arc].arc = false;
        } 
        console.log(hex_points);

        // loop over points and draw appropriately
        // number of points varies by number of arcs
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";

        // magic number because octogon again
        for (let i = 0; i < 7; i++) {
            
        }

        ctx.closePath();
    }
    
    // draw asteroid
    /*
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white"
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x,b.y);
    ctx.stroke();
    ctx.lineTo(c.x,c.y);
    ctx.stroke();
    ctx.lineTo(d.x,d.y);
    ctx.stroke();
    ctx.lineTo(e.x,e.y);
    ctx.stroke();
    ctx.lineTo(f.x,f.y);
    ctx.stroke();
    ctx.lineTo(a.x,a.y);
    ctx.stroke();
    ctx.closePath();
    */
}

// sketch enemy spaceship
if (draw_select == "enemy") {
    // enemy dimensions
    var ew = 75;
    var eh = 25;

    // TEMP
    var ch = 15;

    var debug_sel = "true"

    var a = {
        "x" : cx - (0.5 * ew),
        "y" : cy
    }
    var b = {
        "x" : cx - ((0.75) * (0.5 * ew)),
        "y" : cy - (0.5 * eh)
    }
    var c = {
        "x" : cx - ((0.6) * (0.5 * ew)),
        "y" : cy - (0.5 * eh)
    }
    var d = {
        "x" : cx - ((0.45) * (0.5 * ew)),
        "y" : cy - (0.5 * eh) - ch
    }
    var e = {
        "x" : cx + ((0.45) * (0.5 * ew)),
        "y" : cy - (0.5 * eh) - ch            
    }
    var f = {
        "x" : cx + ((0.6) * (0.5 * ew)),
        "y" : cy - (0.5 * eh)
    }
    var g = {
        "x" : cx + ((0.75) * (0.5 * ew)),
        "y" : cy - (0.5 * eh)
    }      
    var h = {
        "x" : cx + (0.5 * ew),
        "y" : cy
    }
    var i = {
        "x" : cx + ((0.75) * (0.5 * ew)),
        "y" : cy + (0.5 * eh)
    }
    var j = {
        "x" : cx - ((0.75) * (0.5 * ew)),
        "y" : cy + (0.5 * eh)
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "white"
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x,b.y);
    ctx.stroke();
    ctx.lineTo(c.x,c.y);
    ctx.stroke();
    ctx.lineTo(d.x,d.y);
    ctx.stroke();
    ctx.lineTo(e.x,e.y);
    ctx.stroke();
    ctx.lineTo(f.x,f.y);
    ctx.stroke();
    ctx.lineTo(c.x,c.y);
    ctx.stroke();
    ctx.lineTo(g.x,g.y);
    ctx.stroke();
    ctx.lineTo(h.x,h.y);
    ctx.stroke();
    ctx.lineTo(a.x,a.y);
    ctx.stroke();
    ctx.lineTo(j.x,j.y);
    ctx.stroke();
    ctx.lineTo(i.x,i.y);
    ctx.stroke();
    ctx.lineTo(h.x,h.y);
    ctx.stroke();
    ctx.closePath();
}

// debug only: draw star from tutorial
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