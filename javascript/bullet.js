class Bullet {
  constructor(keyPressedW, keyPressedA, keyPressedS, warriorObj) {
    this.img = new Image();
    this.x = warriorObj.x + warriorObj.w / 2;
    this.y = warriorObj.y + warriorObj.h / 2;
    this.speed = 15;
    this.setOrientation(keyPressedW, keyPressedA, keyPressedS);
  }
  //*Orientación de las balas para poder usar imagenes ajustadas a la dirección a la que se mira, usando los parámetros de las variables flag de Main
  setOrientation = (keyPressedW, keyPressedA, keyPressedS) => {
    //Si no presionamos nada, la bala ira a la derecha por defecto
    this.orientation = "right";
    this.img.src = "./images/bullet-right.png";
    this.w = 50;
    this.h = 10;
    if (keyPressedA) {
      this.orientation = "left";
      this.img.src = "./images/bullet-left.png";
    }
    if (keyPressedW) {
      this.orientation = "up";
      this.img.src = "./images/bullet-up.png";
      this.w = 10;
      this.h = 50;
    }
    if (keyPressedS) {
      this.orientation = "down";
      this.img.src = "./images/bullet-down.png";
      this.w = 10;
      this.h = 50;
    }
  };

  //* Dibujado y movimiento de la balas en una misma función para moverse respecto al eje donde deben aparecer y su dirección
  drawBullet = () => {
    if (this.orientation == "right") {
      this.x += this.speed;
    }
    if (this.orientation == "left") {
      this.x -= this.speed;
    }
    if (this.orientation == "up") {
      this.y -= this.speed;
    }
    if (this.orientation == "down") {
      this.y += this.speed;
    }

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //*Colisión de las balas con lso enemigos, restando su hp y eliminandolos de su array, y eliminando a la propia bala al chocar con los muros del canvas o un enemigo
  bulletCollision = (bulletArr, index, enemyArr) => {
    if (
      this.x > canvas.width ||
      this.x < 0 ||
      this.y > canvas.height ||
      this.y < 0
    ) {
      bulletArr.splice(index, 1);
    }
    let indexEnemy = 0;
    for (let eachEnemy of enemyArr) {
      if (
        this.x < eachEnemy.x + eachEnemy.w &&
        this.x + this.w > eachEnemy.x &&
        this.y < eachEnemy.y + eachEnemy.h &&
        this.h + this.y > eachEnemy.y
      ) {
        eachEnemy.hp = eachEnemy.hp - 1;
        if (eachEnemy.hp <= 0) {
          enemyArr.splice(indexEnemy, 1);
        }
        bulletArr.splice(index, 1);
      }
      indexEnemy++;
    }
  };

  bulletOrkCollision = (bulletArr, index, orkArr) => {
    let indexEnemy = 0;
    for (let eachOrk of orkArr) {
      if (
        this.x < eachOrk.x + eachOrk.w &&
        this.x + this.w > eachOrk.x &&
        this.y < eachOrk.y + eachOrk.h &&
        this.h + this.y > eachOrk.y
      ) {
        eachOrk.hp = eachOrk.hp - 1;
        if (eachOrk.hp <= 0) {
          orkArr.splice(indexEnemy, 1);
        }
        bulletArr.splice(index, 1);
      }
      indexEnemy++;
    }
  };

  bulletNurgCollision = (bulletArr, index, nurgArr) => {
    let indexEnemy = 0;
    for (let eachNurg of nurgArr) {
      if (
        this.x < eachNurg.x + eachNurg.w &&
        this.x + this.w > eachNurg.x &&
        this.y < eachNurg.y + eachNurg.h &&
        this.h + this.y > eachNurg.y
      ) {
        eachNurg.hp = eachNurg.hp - 1;
        if (eachNurg.hp <= 0) {
          nurgArr.splice(indexEnemy, 1);
        }
        bulletArr.splice(index, 1);
      }
    }
  };
}
