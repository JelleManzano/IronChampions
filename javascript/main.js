//Globals
const canvas = document.querySelector("#my-canvas");
const startScreen = document.querySelector("#splash-screen");
const startBtn1 = document.querySelector("#start-btn");
let ctx = canvas.getContext("2d");
let gameObJ;

//* Start Game

const startGame = () => {
  console.log("iniciando el juego");
  startScreen.style.display = "none";
  canvas.style.display = "block";
  gameObJ = new Game();
  gameObJ.gameLoop();
};

//Event listeners
startBtn1.addEventListener("click", startGame);

/*window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    gameObJ.warriorObj.moveLeft();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    gameObJ.warriorObj.moveRight();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    gameObJ.warriorObj.moveUp();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    gameObJ.warriorObj.moveDown();
  }
});*/

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW") {
      this.keyPressedW = true;
  } else if (event.code === "KeyD") {
      this.keyPressedD = true;
  } else if (event.code === "KeyS") {
      this.keyPressedS = true;
  } else if (event.code === "KeyA") {
      this.keyPressedA = true;
  }

  if (this.keyPressedW) gameObJ.warriorObj.moveUp();
  if (this.keyPressedD) gameObJ.warriorObj.moveRight();
  if (this.keyPressedS) gameObJ.warriorObj.moveDown();
  if (this.keyPressedA) gameObJ.warriorObj.moveLeft();
});

window.addEventListener("keyup", (event) => {
  console.log(this.keyPressedW);
  if (event.code === "KeyW") {
      this.keyPressedW = false;
  } else if (event.code === "KeyD") {
      this.keyPressedD = false;
  } else if (event.code === "KeyS") {
      this.keyPressedS = false;
  } else if (event.code === "KeyA") {
      this.keyPressedA = false;
  }

});
