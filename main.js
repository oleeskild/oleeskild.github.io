function drawSquare() {
    var c = document.getElementById("square");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
}


document.getElementById("square").addEventListener("click", drawSquare);
