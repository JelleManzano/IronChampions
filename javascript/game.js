class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "/images/mars.png";
    this.warriorObj = new Warrior();
    this.frames = 0;
    this.enemyArr = [];
    this.isGameOver = false;
    this.bulletArr = [];
    this.timer = 120;
    this.healArr = [];
    this.orkArr = [];
    this.nurglingArr = [];
  }

  //Dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  calculateTimeLeft = () => {
    setInterval(() => {
      this.timer -= 1;
      if (this.timer === 0) {
        this.isGameOver = true;
      }
    }, 1000);
  };

  addHealPack = () => {
    setInterval(() => {
      let randomNum = Math.random() * 1200;
      let randomXint = Math.floor(randomNum);
      let newHealPack = new Healpack(randomXint);
      this.healArr.push(newHealPack);
    }, 20000);
  };

  addEnemy = () => {
    this.frames++;
    if (this.frames % 120 === 0) {
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
    if (this.frames % 120 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let leftEnemy = new Enemy(0, randomYint, "left", this.warriorObj);
      this.enemyArr.push(leftEnemy);
    }
  };
  addNurgling = () => {
    setInterval(() => {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let rightNurgling = new Nurgling();
    }, 7000);

    setInterval(() => {
      let randomNum = Math.random() * 650;
      let randomYint= Math.floor(randomNum);
      let leftNurgling = new Nurgling();
    });
  };
  drawHP = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`HP: ${this.warriorObj.hp}`, 30, 30);
  };

  drawTime = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Time left : ${this.timer}`, 520, 30);
  };

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

  //orcPlayerCollision
  //nurglingPlayerCollision

  healPlayerCollision = () => {
    this.healArr.forEach((eachHeal, index) => {
      if (
        this.warriorObj.x < eachHeal.x + eachHeal.w &&
        this.warriorObj.x + this.warriorObj.w > eachHeal.x &&
        this.warriorObj.y < eachHeal.y + eachHeal.h &&
        this.warriorObj.h + this.warriorObj.y > eachHeal.y
      ) {
        this.warriorObj.hp += 3;
        this.healArr.splice(index, 1);
      }
    });
  };

  gameOver = () => {
    //detener juego
    if (this.warriorObj.hp === 0) {
      this.isGameOver = true;
    }
    //ocultar canvas
    if (this.isGameOver === true) {
      canvas.style.display = "none";
    }
    //mostrar pantalla fin
    if (this.isGameOver === true) {
      gameOverScreen.style.display = "flex";
    }
  };

  gameLoop = () => {
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos

    for (let eachEnemy of this.enemyArr) {
      eachEnemy.moveEnemy(this.enemyArr);
    }
    this.addEnemy();
    this.enemyPlayerCollision();
    this.healPlayerCollision();
    this.gameOver();
    for (let eachHealPack of this.healArr) {
      eachHealPack.gravityHealPack(this.healArr);
    }

    //Dibujado de elementos
    this.drawFondo();
    this.warriorObj.drawWarrior();
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    this.healArr.forEach((eachHealPack) => {
      eachHealPack.drawHeal();
    });
    this.drawHP();
    this.drawTime();
    this.bulletArr.forEach((eachBullet, index) => {
      eachBullet.bulletCollision(this.bulletArr, index, this.enemyArr);
      eachBullet.drawBullet();
    });

    //Recursion y control
    if (this.isGameOver === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
