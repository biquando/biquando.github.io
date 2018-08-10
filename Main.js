setup();



var canvas;
var c;
var backgroundColor;


var ball;



function setup() {
    
    canvas = document.getElementById("canvas");
    c = canvas.getContext("2d");
    
    ball = new Ball(canvas, 30, "#a33", 2);
    
    
    setInterval(loop, 15);
    
}



function loop() {
    
    update();
    draw();
    
}




function draw() {
    
    // Draw background
    
    backgroundColor = "#FFF";

    c.fillStyle = backgroundColor;
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    
    
    
    ball.draw(c);
    
}


function update() {
    
    ball.update();
    
}