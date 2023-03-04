function on_load() {

    function resizeCanvas() {

        // typescript wants us to cast it instead of leaving it generic
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
      
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

    resizeCanvas();
}