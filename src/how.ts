class HowToScreen implements IScreen {
  private howToStart: number = 0;
  private howToDuration: number = 9000;

  constructor() {
    this.howToStart = millis();
  }

  public update() {
    const passed = millis() - this.howToStart;
    if (passed > this.howToDuration) {
      game.currentScreen = new StartScreen();
    }
  }

  public onMousePressed() {
    game.currentScreen = new StartScreen();
  }

  public draw() {
    imageMode(CORNER);
    image(images.howtoplaybg, 0, 0, width, height);

    const baseY = height - 300;

    push();
    textAlign(CENTER, CENTER);
    textSize(26);
    strokeWeight(4);
    stroke(255, 105, 180);
    fill(255);

    text(
      "Everything in this game is controlled\n" +
        "with the Left Mouse Click.\n" +
        "Click and drag to aim.\n" +
        "Release to shoot.",
      0,
      baseY,
      width,
      200,
    );

    text(
      "Click mid-air to activate ability.\n" + "Have fun!",
      0,
      baseY + 100,
      width,
      200,
    );

    pop();
  }
}
