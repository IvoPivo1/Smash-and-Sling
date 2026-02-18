//---- GLOBAL VARIABLES ----//
let game: Game;

let music: {
  mystery: p5.SoundFile;
};

let images: {
  pig: p5.Image;
  birdImg: p5.Image;
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

function draw() {
  game.update();
  game.draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  game.mousePressed();
}

function mouseDragged() {
  game.mouseDragged();
}

function mouseReleased() {
  game.mouseReleased();
}
