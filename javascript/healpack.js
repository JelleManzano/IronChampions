class Healpack {
  constructor(xParam) {
    this.img = new Image();
    this.img.src ="/images/healpack.png"
    this.x = xParam;
    this.y = 1;
    this.w = 30;
    this.h = 30;
    this.speed = 0.7;
  }

  drawHeal = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  };

  gravityHealPack = () => {
    if (this.y > 0) {
        this.y += this.speed
    }
  }
}
