NOTE: to copy this readme structure simply click on RAW on the top right of this gist. There you have the content in the basic Markdown syntax used in readme files. Then paste it on a README.md file in your repository. Always do this directly from VS code, not from github.
 
# NAME OF YOUR PROYECT
 
 
## [See the Game](https://jellemanzano.github.io/IronChampions/)
NOTE: above link will be added later
 
# Description
 
You have to survive 2 minutes dodging enemies that spawn from both sides of the screen. You have 15 hp, each enemy has a different damage output, regular enemies (the "crows") deal 1 damage, orks deal 5 and nurglings add 10 seconds to your timer. You can pick up healthpacks to gain 5 HP and grab nukes to clean the screen off enemies.

# Main Functionalities
- Startscreen with a Play! Button, based on the hero card
- Screen where you can select a hero and start the game
- Be able to move around the map with WASD and attack with spacebar
- Enemies spawn randomnly from both sides of the screen and  the top.
- Enemies track down the player position.
- Timer from 120 seconds to 0 to beat the game.
- Player always spawn in the center, set speed, hp and can move around the map in the 4 axis and also diagonally.
- If your HP reaches 0 is game over.
- Game over screen has a replay and a home button.
- Collisions between the player and the enemies or the health packs/nukes.
- Shooting while holding the space bar, bullets deal damage to clear enemies from the screen and depending in which axis you shoot it appears differently.
 
 
# Backlog Functionalities

- Music plays while the game is on.
- Health packs and nukes.
- Different enemies
- Movement of the enemies improved to track the player.
 
# Proyect Structure
 
- List here the JS files you think you might need. 
- One main.js to manage DOM elements, one for Game class and one for each other class.
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.
 
Example:
 
### main.js
 
- ```startGame() {}```
- ```resetGame() {}```
- ``` goHome() {} ```
 - ``` addEventListeners with clicks for those above ```
 - ``` addEventListeners for the movement and shooting ```

 ### game.js
- ``` class Game{} ```
- ``` drawFondo(){} ```
- ``` calculateTimeLeft(){} ```
- ``` addHealPack(){} ```
- ``` addNuke(){} ```
- ``` addEnemy(){} ```
- ``` addOrk(){} ```
- ``` addNurgling(){} ```
- ``` drawHP(){} ```
- ``` drawTime(){} ```
- ``` enemyPlayerCollision(){} ```
- ``` healPlayerCollision(){} ```
- ``` nukePlayerCollision(){} ```
- ``` musicIsOn(){} ```
- ``` gameOver(){} ```
- ``` gameLoop(){} ```

 
### IronChampion.js
 
- ``` class Warrior {} ```
- ``` drawWarrior(){} ```
- ``` moveLeft(){} ```
- ``` moveRight(){} ```
- ``` moveUp(){} ```
- ``` moveDown(){} ```
 
### enemy.js
- ``` class Enemy {} ```
- ``` drawEnemy(){}```
- ``` moveEnemy(){}```

### ork&nuurgling.js
- ``` class OrknNurg extends Enemy ```

### healpack.js
- ``` class Healpack {}```
- ``` drawHeal(){} ```
- ``` gravityHealPack(){} ```

### nuke.js
- ``` class Nuke{} ```
- ``` drawNuke(){} ```
- ``` gravityNuke(){} ```

### bullet.js
- ``` class Bullet{} ```
- ``` setOrientation(){} ```
- ``` drawBullet(){} ```
- ``` bulletCollision(){} ```
- ``` bulletOrkCollision(){} ```
- ``` bulletNurgCollision(){} ```



 
# States and Transitions
 
- Game Start screen
- Game screen
- Game Over screen
 
### Slides
[Link](www.your-url-here.com)
