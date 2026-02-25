//---- GLOBAL VARIABLES ----//
let game: Game;

let music: { mystery: p5.SoundFile };

let images: {
  slingshot: p5.Image;
  pink: p5.Image;
  logo: p5.Image;
  logo2: p5.Image;
  block: p5.Image;
  pig: p5.Image;
  pig_pilot: p5.Image;
  pig_king: p5.Image;
  pig_stinky: p5.Image;
  pig_soldier: p5.Image;
  birdImg: p5.Image;
  levelbg: p5.Image;
  bigBird: p5.Image;
  iceBird: p5.Image;
  purpleBird: p5.Image;
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
    slingshot: loadImage("/assets/images/slingshot.png"),
    pink: loadImage("/assets/images/pink.png"),
    logo: loadImage("/assets/images/logo.png"),
    logo2: loadImage("/assets/images/logo2.png"),
    block: loadImage("/assets/images/block.png"),
    birdImg: loadImage("/assets/images/bird.png"),
    pig: loadImage("/assets/images/pig.png"),
    pig_pilot: loadImage("/assets/images/pig_pilot.png"),
    pig_king: loadImage("/assets/images/pig_king.png"),
    pig_stinky: loadImage("/assets/images/pig_stinky.png"),
    pig_soldier: loadImage("/assets/images/pig_soldier.png"),
    levelbg: loadImage("/assets/images/levelbg.jpg"),
    bigBird: loadImage("/assets/images/bigBird.png"),
    iceBird: loadImage("/assets/images/iceBird.png"),
    purpleBird: loadImage("/assets/images/purpleBird.png"),
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
}

/**
 * Built in draw function in P5
 * This is a good place to call public methods of the object
 * you created in the setup function above
 */
function draw() {
  background(0);
  game.update();
  game.draw();
}

/**
 * Built in windowResize listener function in P5
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  game.onMousePressed();
}
