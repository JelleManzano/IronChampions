class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/mars.png";
    this.warriorObj = new Warrior();
    this.frames = 0;
    this.enemyArr = [];
    this.isGameOver = false;
    this.bulletArr = [];
    this.timer = 120;
    this.healArr = [];
    this.orkArr = [];
    this.nurglingArr = [];
    this.nukeArr = [];
    this.music = new Audio("./music/doom-music.mp3");
  }

  //Dibujado del fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  //Intervalo en main para calcular el tiempo en milisengudos hacia atrás
  calculateTimeLeft = () => {
    setInterval(() => {
      this.timer -= 1;
      if (this.timer === 0) {
        this.isGameOver = true;
      }
    }, 1000);
  };

  //Añadido del healpack con un X random en un array
  addHealPack = () => {
    setInterval(() => {
      let randomNum = Math.random() * 1200;
      let randomXint = Math.floor(randomNum);
      let newHealPack = new Healpack(randomXint);
      this.healArr.push(newHealPack);
    }, 20000);
  };

  //Añadido del nuke con un X random en un array
  addNuke = () => {
    setInterval(() => {
      let randomNum = Math.random() * 1200;
      let randomXint = Math.floor(randomNum);
      let newNuke = new Nuke(randomXint);
      this.nukeArr.push(newNuke);
    }, 30000);
  };

  //Dibujado de los enemigos normales en una Y random, cambiando su orientación para el dibujo y pasandole el warrior para su posición..
  addEnemy = () => {
    if (this.frames % 100 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let rightEnemy = new Enemy(
        canvas.width,
        randomYint,
        "right",
        this.warriorObj
      );
      this.enemyArr.push(rightEnemy);
      let leftEnemy = new Enemy(0, randomYint, "left", this.warriorObj);
      this.enemyArr.push(leftEnemy);
    }
  };

  //Añadido de los orkos, con una Y random, con distintas propiedades para su dibujado aparte de generación en el array. Clase que hereda de enemy
  addOrk = () => {
    if (this.frames % 840 === 0) {
      let randomNum = Math.random() * 650;
      let randomYint = Math.floor(randomNum);
      let rightOrc = new OrknNurg(
        canvas.width,
        randomYint,
        "rightOrc",
        this.warriorObj,
        80,
        80,
        0.5,
        4
      );
      this.orkArr.push(rightOrc);
      let leftOrc = new OrknNurg(
        0,
        randomYint,
        "leftOrc",
        this.warriorObj,
        80,
        80,
        0.5,
        4
      );

      this.orkArr.push(leftOrc);
    }
  };

  //Igual que los orkos. Clase que hereda de Enemy
  addNurgling = () => {
    if (this.frames % 1580 === 0) {
      //1580 frames
      let randomNum = Math.random() * 1200;
      let randomXInt = Math.floor(randomNum);
      let nurgling = new OrknNurg(
        randomXInt,
        0,
        "nurgling",
        this.warriorObj,
        50,
        50,
        1,
        1
      );
      this.nurglingArr.push(nurgling);
    }
  };

  //Dibujado de la vida en una esquina en el canvas
  drawHP = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(`HP: ${this.warriorObj.hp}`, 30, 30);
  };

  //Dibujado del tiempo en el centro de la pantalla del canvas
  drawTime = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Time left : ${this.timer}`, 520, 30);
  };

  //Colisión de los enemigos con el warrior, eliminación de los mismos al choque del array y cambio de la HP del warrior
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
    this.orkArr.forEach((eachOrk, index) => {
      if (
        this.warriorObj.x < eachOrk.x + eachOrk.w &&
        this.warriorObj.x + this.warriorObj.w > eachOrk.x &&
        this.warriorObj.y < eachOrk.y + eachOrk.h &&
        this.warriorObj.h + this.warriorObj.y > eachOrk.y
      ) {
        this.warriorObj.hp = this.warriorObj.hp - 5;
        this.orkArr.splice(index, 1);
      }
    });
    this.nurglingArr.forEach((eachNurg, index) => {
      if (
        this.warriorObj.x < eachNurg.x + eachNurg.w &&
        this.warriorObj.x + this.warriorObj.w > eachNurg.x &&
        this.warriorObj.y < eachNurg.y + eachNurg.h &&
        this.warriorObj.h + this.warriorObj.y > eachNurg.y
      ) {
        this.timer += 10;
        this.nurglingArr.splice(index, 1);
      }
    });
  };

  //Colisión del healpack y el warrior y sumado de vida, eliminación del healpack del array y de la pantalla si sobrepasa el límite
  healPlayerCollision = () => {
    this.healArr.forEach((eachHeal, index) => {
      if (
        this.warriorObj.x < eachHeal.x + eachHeal.w &&
        this.warriorObj.x + this.warriorObj.w > eachHeal.x &&
        this.warriorObj.y < eachHeal.y + eachHeal.h &&
        this.warriorObj.h + this.warriorObj.y > eachHeal.y
      ) {
        this.warriorObj.hp += 5;
        this.healArr.splice(index, 1);
      }
      if (this.healArr[index] > canvas.height) {
        this.healArr.splice(index, 1);
      }
    });
  };

  //Colisión del nuke con el warrior, vaciado de los arrays de enemigos para limpiarlos del canvas mas eliminación al sobrepasar límites
  nukePlayerCollision = () => {
    this.nukeArr.forEach((eachNuke, index) => {
      if (
        this.warriorObj.x < eachNuke.x + eachNuke.w &&
        this.warriorObj.x + this.warriorObj.w > eachNuke.x &&
        this.warriorObj.y < eachNuke.y + eachNuke.h &&
        this.warriorObj.h + this.warriorObj.y > eachNuke.y
      ) {
        this.enemyArr = [];
        this.orkArr = [];
        this.nurglingArr = [];
        this.nukeArr.splice(index, 1);
      }
      if (this.nukeArr[index] > canvas.height) {
        this.nukeArr.splice(index, 1);
      }
    });
  };

  //Funcion para la música teniendo en cuenta si el juego está terminado o no, regulación del volumen
  musicIsOn = () => {
    this.music.volume = 0.05;
    if (this.isGameOver === false) {
      this.music.play();
    }
    if (this.isGameOver === true) {
      this.music.pause();
    }
  };

  //Comprobación del fin del juego si la HP llega a 0, en el timer esta incluida esta funcion en un callback.
  gameOver = () => {
    //detener juego
    if (this.warriorObj.hp <= 0) {
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

  //Bucle principal del juego en reproducción constante hasta el controlador de isGameOver
  gameLoop = () => {
    this.frames++;
    //Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos

    for (let eachEnemy of this.enemyArr) {
      eachEnemy.moveEnemy(this.enemyArr);
    }
    for (let eachOrk of this.orkArr) {
      eachOrk.moveEnemy(this.orkArr);
    }
    for (let eachNurg of this.nurglingArr) {
      eachNurg.moveEnemy(this.nurglingArr);
    }
    this.addOrk();
    this.addNurgling();
    this.addEnemy();
    this.enemyPlayerCollision();
    this.healPlayerCollision();
    this.nukePlayerCollision();
    this.gameOver();
    for (let eachHealPack of this.healArr) {
      eachHealPack.gravityHealPack(this.healArr);
    }
    for (let eachNuke of this.nukeArr) {
      eachNuke.gravityNuke(this.nukeArr);
    }
    this.musicIsOn();
    //Dibujado de elementos
    this.drawFondo();
    this.warriorObj.drawWarrior();
    this.enemyArr.forEach((eachEnemy) => {
      eachEnemy.drawEnemy();
    });
    this.orkArr.forEach((eachOrk) => {
      eachOrk.drawEnemy();
    });
    this.nurglingArr.forEach((eachNurg) => {
      eachNurg.drawEnemy();
    });
    this.healArr.forEach((eachHealPack) => {
      eachHealPack.drawHeal();
    });
    this.nukeArr.forEach((eachNuke) => {
      eachNuke.drawNuke();
    });
    this.drawHP();
    this.drawTime();
    this.bulletArr.forEach((eachBullet, index) => {
      eachBullet.bulletCollision(this.bulletArr, index, this.enemyArr);
      eachBullet.bulletOrkCollision(this.bulletArr, index, this.orkArr);
      eachBullet.bulletNurgCollision(this.bulletArr, index, this.nurglingArr);
      eachBullet.drawBullet();
    });

    //Recursion y control
    if (this.isGameOver === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
