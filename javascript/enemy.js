class Enemy {
    constructor(xParam, yParam, orientation) {
        this.img = new Image();
        if(orientation === "left") {
            this.img.src = "./image/enemy.png"
        } else {
            this.img.src= "./image.flipped-enemy.png"
        }
        this.x = xParam;       
        this.y = yParam;
        this.w = 60;
        this.h = 60;
        this.speed = 0.8;
        this.hp = 1;
    }


    drawEnemy = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }

   moveEnemy = () => {
    this.x = this.x +this.speed
   }
}