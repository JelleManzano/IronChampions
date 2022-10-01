class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "/images/mars.png";
    this.warriorObj = new Warrior();
  }

  //Dibujar el fondo
  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    //Limpiar el canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Acciones y movimientos

    //Dibujado de elementos
    this.drawFondo();
    this.warriorObj.drawWarrior();
    //Recursion y control
    requestAnimationFrame(this.gameLoop);
  };
}
