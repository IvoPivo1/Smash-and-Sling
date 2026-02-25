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
  imageMode(CORNER);
  image(images.howtoplaybg, 0, 0, width, height);

  const baseY = height - 200;

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
    width * 0.5,
    baseY,
    width,
    200
  );

  text(
    "Click mid-air to activate ability.\n" +
    "Have fun!",
    width * 0.5,
    baseY + 110,
    width,
    200
  );

  pop();
}

}
