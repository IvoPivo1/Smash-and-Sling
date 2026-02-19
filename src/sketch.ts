//---- GLOBAL VARIABLES ----//
let game: Game;
let gameOverScreen: GameOver;
let gameIsOver: false;

let music: {
  mystery: p5.SoundFile;
};

let images: {
  pig: p5.Image;
  birdImg: p5.Image;
  levelbg: p5.Image;
  restart: p5.Image;
};

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = {
    mystery: loadSound("/assets/music/mystery.mp3"),
  };

  images = {
    birdImg: loadImage("/assets/images/bird.png"),
    pig: loadImage("/assets/images/pig.png"),
    levelbg: loadImage("/assets/images/levelbg.jpg"),
    restart: loadImage("/assets/images/restart.png"),
  };
}

/**
 * Built in setup function in P5
 * This is a good place to create your first class object
 * and save it as a global variable so it can be used
 * in the draw function belows
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  music.mystery.setVolume(0.8);

  game = new Game();
  gameOverScreen = new GameOver();
}

function draw() {
  background(0);
  if (gameIsOver) {
    gameOverScreen.draw();
  } else {
    game.update();
    game.draw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  game.mousePressed();
  if (gameIsOver && gameOverScreen.isClicked(mouseX, mouseY)) {
    restartGame();
  }
}

function restartGame() {
  gameIsOver = false;
  game = new Game();
}

function mouseDragged() {
  game.mouseDragged();
}

function mouseReleased() {
  game.mouseReleased();
}
