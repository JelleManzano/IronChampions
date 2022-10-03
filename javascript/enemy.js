class Enemy {
  constructor(xParam, yParam, orientation) {
    this.img = new Image();
    if (orientation === "left") {
      this.img.src = "/images/enemy.png";
    } else if (orientation === "right") {
      this.img.src = "/images/flipped-enemy.png";
    }
    this.orientation = orientation
    this.x = xParam;
    this.y = yParam;
    this.w = 60;
    this.h = 60;
    this.speed = 0.8;
    this.hp = 1;
  }

  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveEnemy = () => {
    if( this.orientation === "left") {
        this.x = this.x + this.speed;
    } else if (this.orientation === "right") {
        this.x = this.x - this.speed
    }
  };
}
