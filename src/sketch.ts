//---- GLOBAL VARIABLES ----//
let game: Game;
let pigList: p5.Image[];
let music: { mystery: p5.SoundFile };

let images: {
  pink: p5.Image;
  logo: p5.Image;
  logo2: p5.Image;
  block: p5.Image;
  pig_pilot: p5.Image;
  pig_king: p5.Image;
  pig_stinky: p5.Image;
  pig_soldier: p5.Image;
  birdImg: p5.Image;
  startscreenbg: p5.Image;
  howtoplaybg: p5.Image;
  levelbg: p5.Image;
  birdSelectbg: p5.Image;
  bigBird: p5.Image;
  iceBird: p5.Image;
  purpleBird: p5.Image;
  gameOver: p5.Image;
};

let musicOn: boolean = true;
let soundOn: boolean = true;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = { mystery: loadSound("/assets/music/mystery.mp3") };

  images = {
    pink: loadImage("/assets/images/pink.png"),
    logo: loadImage("/assets/images/logo.png"),
    logo2: loadImage("/assets/images/logo2.png"),
    block: loadImage("/assets/images/block.png"),
    birdImg: loadImage("/assets/images/bird.png"),
    pig_pilot: loadImage("/assets/images/pig_pilot.png"),
    pig_king: loadImage("/assets/images/pig_king.png"),
    pig_stinky: loadImage("/assets/images/pig_stinky.png"),
    pig_soldier: loadImage("/assets/images/pig_soldier.png"),
    startscreenbg: loadImage("/assets/images/startScreenbg.jpg"),
    howtoplaybg: loadImage("/assets/images/howScreenbg.jpg"),
    levelbg: loadImage("/assets/images/levelbg.jpg"),
    birdSelectbg: loadImage("/assets/images/birdSelectBackground.jpg"),
    bigBird: loadImage("/assets/images/bigBird.png"),
    iceBird: loadImage("/assets/images/iceBird.png"),
    purpleBird: loadImage("/assets/images/purpleBird.png"),
    gameOver: loadImage("/assets/images/gameover.jpg"),
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
  // lista med alla pig bilder som senare ska slumpas igenom
  pigList = [
    images.pig_pilot,
    images.pig_king,
    images.pig_stinky,
    images.pig_soldier,
  ];
  music.mystery.setVolume(0.8);
  game = new Game();
  game.currentScreen = new LevelSelect();
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background(0);
  if (game.currentScreen) {
    game.currentScreen.update();
    game.currentScreen.draw();
  }
}

/**
 * Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (game.currentScreen && game.currentScreen.onMousePressed) {
    game.currentScreen.onMousePressed();
  }
}
