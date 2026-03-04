class WinningScreen {
  public timeStart: number;
  public duration: number = 5000;

  constructor() {
    this.timeStart = millis();
  }

  public update() {
    const passed = millis() - this.timeStart;

    if (passed > this.duration) {
      game.currentScreen = new LevelSelect();
    }
  }

  public onMousePressed() {
    game.currentScreen = new LevelSelect();
  }

  public draw() {
    imageMode(CORNER);
    image(images.winningscreenbg, 0, 0, width, height);

    push();
    textAlign(CENTER, CENTER);
    textSize(89);
    fill(255, 255, 255);
    stroke(255, 105, 180);
    strokeWeight(5);
    text("You Win!", width * 0.5, height * 0.5);

    textSize(30);
    strokeWeight(3);
    text("Click to continue", width * 0.5, height * 0.65);
    pop();
  }
}
