class Enemy {
  constructor(xParam, yParam, orientation, warriorObj) {
    this.img = new Image();
    //Se pasan orientaciones para especificar que imagen queremos usar cuando salgan de un lado u otro.
    if (orientation === "left") {
      this.img.src = "./images/enemy.png";
    } else if (orientation === "right") {
      this.img.src = "./images/flipped-enemy.png";
    }
    this.orientation = orientation;
    this.x = xParam;
    this.y = yParam;
    this.w = 60;
    this.h = 60;
    this.speed = 0.6;
    this.hp = 2;
    this.warriorPos = warriorObj;
  }

  //Dibujado del enemigo
  drawEnemy = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  //Movimiento del enemigo teniendo en cuenta las posiciones entre ellos mismos primeros para evitar solapamientos y después con el player para avanzar hacia el mismo
  moveEnemy = (enemyArr) => {
    let meMuevo = true;
    for (let eachEnemy of enemyArr) {
      if (this.x == eachEnemy.x && this.y == eachEnemy.y) {
        continue;
      }
      if (
        this.x < eachEnemy.x + eachEnemy.w &&
        this.x + (this.w - 20) > eachEnemy.x &&
        this.y < eachEnemy.y + eachEnemy.h &&
        this.h - 70 + this.y > eachEnemy.y
      ) {
        meMuevo = false;
      }
    }
    if (meMuevo == true) {
      if (this.warriorPos.x > this.x) {
        this.x += this.speed;
      }
      if (this.warriorPos.x < this.x) {
        this.x -= this.speed;
      }
      if (this.warriorPos.y > this.y) {
        this.y += this.speed;
      }
      if (this.warriorPos.y < this.y) {
        this.y -= this.speed;
      }
    }
  };
}
