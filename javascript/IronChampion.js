class Warrior {
  constructor() {
    this.img = new Image();
    this.img.src = "/images/Warrior-Champion.png";
    this.x = 50;
    this.y = 50;
    this.w = 80;
    this.h = 80;
  }

  drawWarrior = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
