class Warrior {
  constructor() {
    this.img = new Image();
    this.img.src = "/images/Warrior-Champion.png";
    this.x = 640;
    this.y = 340;
    this.w = 80;
    this.h = 80;
    this.speed = 10;
    this.hp = 15;
    this.bulletControl = this.bulletControl;
  }

  drawWarrior = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    this.x = this.x - this.speed;
  };

  moveRight = () => {
    this.x = this.x + this.speed;
  };

  moveUp = () => {
    this.y = this.y - this.speed;
  };

  moveDown = () => {
    this.y = this.y + this.speed;
  };
}
