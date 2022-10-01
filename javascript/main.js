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
