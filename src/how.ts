class HowToScreen {
  private howToStart: number = 0;
  private howToDuration: number = 9000;

  constructor() {
    this.howToStart = millis();
  }

  public update() {
      const passed = millis() - this.howToStart;
      if (passed > this.howToDuration) {
        game.state = "start";
      }
  }

  public onMousePressed() {
      game.state = "start";
  }

  public draw() {
    background(245, 200, 0);
     imageMode(CENTER);
    image(images.pink, width / 2, 150, 600, 500)


    push();
    fill(40);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(
      "Everything in this game is controlled\n" +
        "with the Left Mouse Click" +
        "Click and drag to aim." +
        "Release to shoot." +
        "Click mid-air to activate ability." +
        "Have fun!",
      width * 0.5,
      height * 0.55,
    );
    pop();
  }
}
