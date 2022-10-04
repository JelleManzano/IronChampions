class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "/images/mars.png";
    this.warriorObj = new Warrior();
    this.frames = 0;
    this.enemyArr = [];
    this.isGameOver = false;
    this.bulletObj = new Bullet()
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
    } 
    if (this.frames % 240 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let leftEnemy = new Enemy(0, randomYint, "left", this.warriorObj);
      this.enemyArr.push(leftEnemy);
    }
  };
  
 
  drawHP = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`HP: ${this.warriorObj.hp}`, 30, 30);
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
  gameOver = () => {
    //detener juego
    if (this.warriorObj.hp === 0) {
      this.isGameOver = true;
    }
    //ocultar canvas
    if (this.isGameOver === true ){
      canvas.style.display = "none";
    }
    //mostrar pantalla fin
    if(this.isGameOver === true) {
      gameOverScreen.style.display = "flex";
    }
  }

  gameLoop = () => {
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos
    for (let eachEnemy of this.enemyArr) {
      eachEnemy.moveEnemy(this.enemyArr);
    }
    this.addEnemy();
    this.enemyPlayerCollision();
    this.gameOver()
    //Dibujado de elementos
    this.drawFondo();
    this.warriorObj.drawWarrior();
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    this.drawHP();
    this.bulletObj.drawBullet()
    //Recursion y control
    if (this.isGameOver === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
