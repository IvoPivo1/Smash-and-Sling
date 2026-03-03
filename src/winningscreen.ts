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
    background(0, 0, 0, 180);

    push();
    textAlign(CENTER, CENTER);
    textSize(60);
    fill(255, 200, 0);
    stroke(255, 105, 180);
    strokeWeight(6);
    text("You Win!", width * 0, 5, height * 0.5);

    textSize(30);
    strokeWeight(3);
    text("Click to continue", width * 0.5, height * 0.65);
    pop();
  }
}
