class GameOverScreen implements IScreen {
  private restartBtn = { x: 0, y: 0, w: 260, h: 90 };

  constructor() {}

  public update() {
    this.restartBtn.x = width * 0.5 - this.restartBtn.w / 2;
    this.restartBtn.y = height * 0.75;
  }

  public draw() {
    imageMode(CORNER);
    image(images.gameOver0, 0, width, height);

    push();
    fill(255, 0, 0);
    stroke(255);
    strokeWeight(4);
    rect(
      this.restartBtn.x,
      this.restartBtn.y,
      this.restartBtn.w,
      this.restartBtn.h,
      20,
    );

    fill(255);
    noStroke();
    textAlign;
  }

  public onMousePressed() {
    //knappar (restart)
  }
}
