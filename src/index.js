import { run_asteroids } from "./app.js";

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
                
    // main app entry point
    run_asteroids(canvas, ctx);
}

resizeCanvas();