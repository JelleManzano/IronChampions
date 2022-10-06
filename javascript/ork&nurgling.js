class OrknNurg extends Enemy {
  constructor(
    xParam,
    yParam,
    orientation,
    warriorObj,
    wParam,
    hParam,
    speed,
    hp
  ) {
    super(xParam, yParam, orientation, warriorObj); //Necesario para heredar los parámetros del padre, por el constructor hay que pasar en mismo  orden los parámetros que hereda y luego los nuevos
    if (orientation === "rightOrc") {
      this.img.src = "./images/right-orc.png";
    } else if (orientation === "leftOrc") {
      this.img.src = "./images/left-ork.png";
    } else if (orientation === "nurgling") {
      this.img.src = "./images/nurgling.png";
    }
    this.w = wParam;
    this.h = hParam;
    this.speed = speed;
    this.hp = hp;
  }
}
