var square = null;

function move() {
    window.requestAnimationFrame(move);
    if(square === null){
        return;
    }
    
    var c = document.getElementById("square");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,400);
    draw();
    
    
    if(square.x >= (400-square.w)){
        square.dirX = -1;
    }
    if(square.x <= (0)){
        square.dirX = 1;
    }
    if(square.y >= (400-square.h)){
        square.dirY = -1;
    }
    if(square.y <= (0)){
        square.dirY = 1;
    }
    square.x += (Math.random()+4)*square.dirX;
    square.y += (Math.random()+2)*square.dirY; 
    
    
}

function draw(){
    var c = document.getElementById("square");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(square.x,square.y,square.w,square.w);
}

function makeSquare(){
    
    square = {
        x: 0,
        y: 0,
        h: 20,
        w: 20,
        dirX: 1,
        dirY: 1
    };
}




//setInterval(move,1000/60);

(function(){
    document.getElementById("square").addEventListener("click", makeSquare);
    window.requestAnimationFrame(move);

})();
