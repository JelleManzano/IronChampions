class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "/images/mars.png";
    this.warriorObj = new Warrior();
    this.enemyLeft = new Enemy(0, "./images/enemy.png");
    this.enemyRight = new Enemy(canvas.width, "./images/flipped-enemy.png");
    this.frames = 0;
    this.enemyArr = [];
    this.flippedEnemArr = [];
  }

  //Dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  addEnemy = () => {
    this.frames++;
    if (this.frames % 180 === 0) {
      let randomNum = Math.random();
      let randomYint = Math.floor(randomNum) * 650;
      let leftEnemy = new Enemy(0, randomYint, "left");
      this.enemyArr.push(leftEnemy);

      let rightEnemy = new Enemy(canvas.width, randomYint, "right")
      this.enemyArr.push(rightEnemy)
    }
  };

  //colision provisional
  enemyPlayerCollision = () => {
    if (
      this.warriorObj.x < this.enemyObj.x + this.enemyObj.w &&
      this.warriorObj.x + this.warriorObj.w > this.enemyObj.x &&
      this.warriorObj.y < this.enemyObj.y + this.enemyObj.h &&
      this.warriorObj.h + this.warriorObj.y > this.enemyObj.y
    ) {
      console.log("Colision");
    }
  };
  gameLoop = () => {
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });
    this.addEnemy();

    //Dibujado de elementos
    this.drawFondo();
    this.warriorObj.drawWarrior();

    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    //Recursion y control
    requestAnimationFrame(this.gameLoop);
  };
}
