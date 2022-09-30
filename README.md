NOTE: to copy this readme structure simply click on RAW on the top right of this gist. There you have the content in the basic Markdown syntax used in readme files. Then paste it on a README.md file in your repository. Always do this directly from VS code, not from github.

# NAME OF YOUR PROYECT

## [See the Game](www.your-url-here.com)

NOTE: above link will be added later

# Description

You have to survive 2 minutes dodging enemies that spawn from both sides of the screen. You have 10 hp, each collision takes 1 hp. (Later you can dmg enemies and they will track you)

# Main Functionalities

- List here the main functionalities your game will have
  - Play music with a button that mutes it or unmutes it
  - Startscreen with a Play! Button
  - Screen where you can select a hero (stage 1 all 3 clicable slides will be the same hero) and start the game
  - Be able to move around the map with WASD or arrow keys (later when you can attack, spacebar = attack)
  - Enemies should spawn randomnly from both sides of the screen and go to the other end.
  - Bigger enemies that deal more damage should also spawn randomly, every 15 secs.
  - Player always spawn in the center, set speed, hp and can move around the map.
  - Set a numeric HP:Number under player
  - Add a timedown counter startgin at 02:00 minutes going back to 0.
  - If your HP reaches 0 GameOver === True => Game over Screen
  - If you survive the 02:00 minutes GameOver ===False => Congratulations screen
  - Both game over and congratulations screen should have a replay button.

# Backlog Functionalities

- List here the cool (but not essential) functionalities your game could have
- Convert the game where enemies also have health, and instead of spawning randomly going from one direction to the other they track you down.
- Be able to attack the enemies (Normal enemies require 1 hit to die, elite enemies need 2, also elite enemies are faster)
- Change the numeric value for the HP to a HP red bar that goes down ever hit you take.
- Add 1 or 2 more heroes with different abilities and stats(for example a mage that instead of melee attacking shoots a snowflake, a barbarian which is faster and deals more dmg that the regular warrior but has less hp)
- Play a dying player sound when hp reaches 0 and gameover screen starts.
- Play a cheerful music when surviving the waves.

# Proyect Structure

- List here the JS files you think you might need.
- One main.js to manage DOM elements, one for Game class and one for each other class.
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.

Example:

## main.js

- startGame()

## game.js

- Game () {
  this.player;
  }
- gameLoop () {}
- checkCollisions () {}

## player.js

- Player () {
  this.x;
  this.y;
  this.w;
  this.h;
  this.hp;
  this.speed;
  }
- drawPlayer () {}
- movePlayer () {}

## enemies.js

-Enemy () {
this.x;
this.y;
this.w;
this.h;
-spawnEnemy()
-enemyMovement()

}

# States and Transitions

- List here the different pages your game will have. For example: Start Screen, Game Screen, Win Screen, etc.
- Startscreen, either separate from the hero selector, or clicking on one of the hero portraits on the start screen initiates the game
- Game screen
- Game Over screen
- Game Won screen

# Tasks (Optional)

- List of individual Tasks you will need to finish the game from zero to an amazing game!
- Note: If using Trello or github proyect to keep track of tasks, then you can remove this section.

# Extra Links (The links can be added later when available)

### Trello

[Link](https://trello.com/w/ironchampionproject/home)

### Slides

[Link](www.your-url-here.com)
