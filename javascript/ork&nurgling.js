class OrknNurg extends Enemy {
  constructor(xParam, yParam, orientation, warriorObj, wParam, hParam, speed) {
    super(xParam, yParam, orientation, warriorObj);
    if (orientation === "rightOrc") {
      this.img.src = "./images/right-orc.png";
    } else if (orientation === "leftOrc") {
      this.img.src = "/images/left-ork.png";
    } else if (orientation === "nurgling") {
      this.img.src = "./images/nurgling.png";
    }
    this.w = wParam;
    this.h = hParam;
    this.speed = speed;
  }
}
