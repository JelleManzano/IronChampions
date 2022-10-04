class Bullet {
  constructor(xParam, yParam, orientation, warriorObj) {
    this.img = new Image();
    if (orientation === "up") {
      this.img.src = "/images/bullet-up.png";
    } else if (orientation === "down") {
      this.img.src = "/images/bullet-down.png";
    } else if (orientation === "right") {
      this.img.src = "/images/bullet-right.png";
    } else if (orientation === "left") {
      this.img.src = "/images/bullet-left .png";
    }
    
    this.x = xParam;
    this.y = yParam;
    this.w = 50;
    this.h = 10;
    this.speed = 20;
    this.warriorPos = warriorObj
  }

  drawBullet = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveBullet = (bulletArr) => {
    if (meMuevo == true) {
        if (this.warriorPos.x > this.x) {
          this.x += this.speed;
        }
        if (this.warriorPos.x < this.x) {
          this.x -= this.speed;
        }
        if (this.warriorPos.y > this.y) {
          this.y += this.speed;
        }
        if (this.warriorPos.y < this.y) {
          this.y -= this.speed;
        }
      }
  }
}
