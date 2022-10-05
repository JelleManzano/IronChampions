class Warrior {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/Warrior-Champion.png";
    this.x = 640;
    this.y = 340;
    this.w = 80;
    this.h = 80;
    this.speed = 10;
    this.hp = 15;
  }

  drawWarrior = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    this.x -= this.speed;
    if (this.x + this.h < 70) {
      this.x = 0;
    }
  };
  shoot = () => {
    const speed = 20;
    const delay = 7;
    const dmg = 1;
    let bulletX = this.x + this.w / 2;
    let bulletY = this.y + this.h / 2;
    this.bulletController.shoot(bulletX, bulletY, speed, dmg, delay);
  };
  moveRight = () => {
    this.x += this.speed;
    if (this.x + this.h > canvas.width) {
      this.x = 1200;
    }
  };

  moveUp = () => {
    this.y -= this.speed;
    if (this.y + this.h < 70) {
      this.y = 0;
    }
  };

  moveDown = () => {
    this.y += this.speed;
    if (this.y + this.h >= 720) {
      this.y = 630;
    }
  };
}
