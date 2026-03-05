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
  
  startscreenbg: p5.Image;
  winningscreenbg: p5.Image;
  howtoplaybg: p5.Image;
  levelbg: p5.Image;
  birdSelectbg: p5.Image;
  levelSelectbg: p5.Image;

  gameOver: p5.Image;
  pole: p5.Image;
  concretePole: p5.Image;
  bird0_idle: p5.Image;
  bird0_drag: p5.Image;
  bird0_fly: p5.Image;
  bird1_idle: p5.Image;
  bird1_drag: p5.Image;
  bird1_fly: p5.Image;
  bird2_idle: p5.Image;
  bird2_drag: p5.Image;
  bird2_fly: p5.Image;
  bird3_idle: p5.Image;
  bird3_drag: p5.Image;
  bird3_fly: p5.Image;
};

let musicOn: boolean = true;
let soundOn: boolean = true;

/**
 * Built in preload function in P5
 * This is a good place to load assets such as
 * sound files, images etc...
 */
function preload() {
  music = { mystery: loadSound("./assets/music/background.mp3") };

  images = {
    pink: loadImage("./assets/images/pink.png"),
    logo: loadImage("./assets/images/logo.png"),
    logo2: loadImage("./assets/images/logo2.png"),
    block: loadImage("./assets/images/block.png"),
    
    pig_pilot: loadImage("./assets/images/pig_pilot.png"),
    pig_king: loadImage("./assets/images/pig_king.png"),
    pig_stinky: loadImage("./assets/images/pig_stinky.png"),
    pig_soldier: loadImage("./assets/images/pig_soldier.png"),
    startscreenbg: loadImage("./assets/images/startScreenbg.jpg"),
    howtoplaybg: loadImage("./assets/images/howScreenbg.jpg"),
    levelbg: loadImage("./assets/images/levelbg.jpg"),
    birdSelectbg: loadImage("./assets/images/birdSelectBackground.jpg"),
    winningscreenbg: loadImage("./assets/images/winningScreenbg.jpg"),
    levelSelectbg: loadImage("./assets/images/levelSelectbg.jpg"),

    gameOver: loadImage("./assets/images/gameover.jpg"),
    pole: loadImage("./assets/images/woodenPole.png"),
    concretePole: loadImage("./assets/images/concretePole.png"),

    bird0_idle: loadImage("./assets/images/bird0_idle.png"),
    bird0_drag: loadImage("./assets/images/bird0_drag.png"),
    bird0_fly: loadImage("./assets/images/bird0_fly.png"),

    bird1_idle: loadImage("./assets/images/bird1_idle.png"),
    bird1_drag: loadImage("./assets/images/bird1_drag.png"),
    bird1_fly: loadImage("./assets/images/bird1_fly.png"),

    bird2_idle: loadImage("./assets/images/bird2_idle.png"),
    bird2_drag: loadImage("./assets/images/bird2_drag.png"),
    bird2_fly: loadImage("./assets/images/bird2_fly.png"),

    bird3_idle: loadImage("./assets/images/bird3_idle.png"),
    bird3_drag: loadImage("./assets/images/bird3_drag.png"),
    bird3_fly: loadImage("./assets/images/bird3_fly.png"),
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
  music.mystery.loop();
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
  game?.onMousePressed();
}
