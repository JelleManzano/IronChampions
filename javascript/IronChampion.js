class Warrior {
  constructor() {
    this.img = new Image();
    this.img.src = "./images/warrior-Champion.png";
    this.x = 640;
    this.y = 340;
    this.w = 80;
    this.h = 80;
    this.speed = 20;
    this.hp = 15;
  }

  //Dibujado del warrior
  drawWarrior = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //Movimiento a la izquierda en eje X
  moveLeft = () => {
    this.x -= this.speed;
    if (this.x + this.h < 70) {
      this.x = 0;
    }
  };
  //Movimiento a la derecha en eje X
  moveRight = () => {
    this.x += this.speed;
    if (this.x + this.h > canvas.width) {
      this.x = 1200;
    }
  };
  //Movimiento haca arriba en el eje Y
  moveUp = () => {
    this.y -= this.speed;
    if (this.y + this.h < 70) {
      this.y = 0;
    }
  };
  //Movimiento haca abajo en el eje Y
  moveDown = () => {
    this.y += this.speed;
    if (this.y + this.h >= 720) {
      this.y = 630;
    }
  };
}
