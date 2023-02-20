
// sample star drawing
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// really shitty, never do this.
// "spaceship"
// "star"
var draw_select = "spaceship"

if (draw_select == "spaceship") {
    /* 
    ctx.moveTo(400, 300);
    ctx.lineTo(396,340);
    ctx.stroke();
    ctx.moveTo(400, 300);
    ctx.lineTo(404, 340);
    ctx.stroke();
    */
    ctx.strokeStyle = "white"
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(400,300);
    ctx.lineTo(365,400);
    ctx.moveTo(400,300);
    ctx.lineTo(435,400);
    ctx.stroke();
}

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


// spaceship drawing


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