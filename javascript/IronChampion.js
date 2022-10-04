class Warrior {
  constructor() {
    this.img = new Image();
    this.img.src = "/images/Warrior-Champion.png";
    this.x = 640;
    this.y = 340;
    this.w = 80;
    this.h = 80;
    this.speed = 15;
    this.hp = 15;
  }

  drawWarrior = () => { 
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    this.x -= this.speed
    if(this.x + this.h < 70) {
      this.x = 0
    }
  };

  moveRight = () => {
    this.x += this.speed;
    if(this.x + this.h > canvas.width) {
      this.x = 1200
    }
  };

  moveUp = () => {
    this.y -= this.speed;
    if(this.y + this.h < 70) {
      this.y = 0
    }
  };

  moveDown = () => {
    this.y += this.speed;
    if(this.y + this.h >= 720) {
      this.y = 630
    }
  };
}
