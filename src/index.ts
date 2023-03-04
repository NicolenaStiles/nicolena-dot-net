console.log("hello world!");

function on_load() {

    function resizeCanvas() {

        // typescript wants us to cast it instead of leaving it generic
        const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
      
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
                    
        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.So this is the main
         * app entry point. 
         */
        // drawStuff(); 
      }

    resizeCanvas();
}

