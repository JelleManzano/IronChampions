//Globals
const canvas = document.querySelector("#my-canvas");
const startScreen = document.querySelector("#splash-screen");
const gameOverScreen = document.querySelector("#gameover-screen");
const startBtn1 = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#replay-btn");
const homeBtn = document.querySelector("#home-btn");
let ctx = canvas.getContext("2d");
let gameObJ;

//* Start Game

const startGame = () => {
  console.log("iniciando el juego");
  startScreen.style.display = "none";
  canvas.style.display = "block";
  gameObJ = new Game();
  gameObJ.calculateTimeLeft();
  gameObJ.addHealPack();
  gameObJ.gameLoop();
};

const resetGame = () => {
  gameOverScreen.style.display = "none";
  startGame();
};

const goHome = () => {
  gameOverScreen.style.display = "none";
  startScreen.style.display = "flex";
};

//Event listeners
startBtn1.addEventListener("click", startGame);

restartBtn.addEventListener("click", resetGame);

homeBtn.addEventListener("click", goHome);

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code === "KeyW") {
    this.keyPressedW = true;
  } else if (event.code === "KeyD") {
    this.keyPressedD = true;
  } else if (event.code === "KeyS") {
    this.keyPressedS = true;
  } else if (event.code === "KeyA") {
    this.keyPressedA = true;
  }

  if (this.keyPressedW) {
    gameObJ.warriorObj.moveUp();
  }
  if (this.keyPressedD) {
    gameObJ.warriorObj.moveRight();
  }
  if (this.keyPressedS) {
    gameObJ.warriorObj.moveDown();
  }
  if (this.keyPressedA) {
    gameObJ.warriorObj.moveLeft();
  }
  if (event.code === "Space") {
    gameObJ.bulletArr.push(
      new Bullet(
        this.keyPressedW,
        this.keyPressedA,
        this.keyPressedS,
        gameObJ.warriorObj
      )
    );
  }
});

window.addEventListener("keyup", (event) => {
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
