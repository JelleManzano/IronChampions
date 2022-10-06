class Nuke {
  constructor(xParam) {
    this.img = new Image();
    this.img.src = "./images/nuke.png";
    this.x = xParam;
    this.y = 1;
    this.w = 30;
    this.h = 40;
    this.speed = 0.7;
  }

  drawNuke = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  gravityNuke = () => {
    if (this.y > 0) {
      this.y += this.speed;
    }
  };
}
