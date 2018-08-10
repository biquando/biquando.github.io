class Ball {
    
    constructor(canvas, size, color, speed) {
        
        this.canvas = canvas;
        this.size = size;
        this.color = color;
        
        this.pX = canvas.width / 2;
        this.pY = canvas.height / 2;
        
        this.vX = speed * (Math.round(Math.random()) * 2 - 1);
        this.vY = speed * (Math.round(Math.random()) * 2 - 1);
        
    }
    
    update() {
        
        if(this.pX < this.size || this.pX > this.canvas.width - this.size) {
            this.vX *= -1;
            console.log("Horizontal boop");
        }
        if(this.pY < this.size || this.pY > this.canvas.height - this.size) {
            this.vY *= -1;
            console.log("Vertical boop");
        }
        
        this.pX += this.vX;
        this.pY += this.vY;
        
    }
    
    
    draw(c) {
        
        c.beginPath();
        c.arc(this.pX, this.pY, this.size, 0, 2 * Math.PI);
        
        c.fillStyle = this.color;
        c.fill();
        
    }
    
}