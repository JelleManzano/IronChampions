class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "/images/mars.png";
    this.warriorObj = new Warrior();
    this.frames = 0;
    this.enemyArr = [];
  }

  //Dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  addEnemy = () => {
    this.frames++;
    if (this.frames % 240 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let rightEnemy = new Enemy(
        canvas.width,
        randomYint,
        "right",
        this.warriorObj
      );
      this.enemyArr.push(rightEnemy);
    } //this.frames % 180 === 0
    if (this.frames % 240 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let leftEnemy = new Enemy(0, randomYint, "left", this.warriorObj);
      this.enemyArr.push(leftEnemy);
    }
  };

  removeEnemy = () => {
    if (this.enemyArr[i].x < 0) {
      this.enemyArr.shift();
    }
    if (this.enemyArr[i] > 1280) {
      this.enemyArr.shift();
    }
    console.log("eliminado");
  };

  //colision provisional
  enemyPlayerCollision = () => {
    this.enemyArr.forEach((eachEnemy, index) => {
      if (
        this.warriorObj.x < eachEnemy.x + eachEnemy.w &&
        this.warriorObj.x + this.warriorObj.w > eachEnemy.x &&
        this.warriorObj.y < eachEnemy.y + eachEnemy.h &&
        this.warriorObj.h + this.warriorObj.y > eachEnemy.y
      ) {
        this.warriorObj.hp = this.warriorObj.hp - 1;
        this.enemyArr.splice(index, 1);
      }
    });
  };
  gameLoop = () => {
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos
    /*this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });*/
    for (let eachEnemy of this.enemyArr) {
      eachEnemy.moveEnemy(this.enemyArr);
    }
    this.addEnemy();
    this.enemyPlayerCollision();

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
