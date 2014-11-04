var square = null;

function move() {
    if(square === null){
        return;
    }
    var c = document.getElementById("square");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,400,400);
    draw();
    
    
    if(square.x >= (400-square.w)){
        square.dir = -1;
    }
    if(square.x <= (square.w)){
        square.dir = 1;
    }
    square.x += 4*square.dir;
    
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
        dir: 1
    };
}



//window.requestAnimationFrame(move);
setInterval(move,1000/60);
document.getElementById("square").addEventListener("click", makeSquare);
