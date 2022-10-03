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
    if (this.frames % 120 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum) ;
      let rightEnemy = new Enemy(canvas.width, randomYint, "right");
      this.enemyArr.push(rightEnemy);
    }
    if (this.frames % 180 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum) ;
      let leftEnemy = new Enemy(0, randomYint, "left");
      this.enemyArr.push(leftEnemy);
    }
  };

  //colision provisional
  enemyPlayerCollision = () => {
    this.enemyArr.forEach((eachEnemy) => {
      if (
        this.warriorObj.x < eachEnemy.x + eachEnemy.w &&
        this.warriorObj.x + this.warriorObj.w > eachEnemy.x &&
        this.warriorObj.y < eachEnemy.y + eachEnemy.h &&
        this.warriorObj.h + this.warriorObj.y > eachEnemy.y
      ) {
        console.log("Colision");
        this.warriorObj.hp = this.warriorObj.hp - 1;
      }
      console.log(this.warriorObj.hp);
    });
  };
  gameLoop = () => {
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.moveEnemy();
    });
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
