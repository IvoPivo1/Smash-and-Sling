class GameOverScreen implements IScreen {
  private restartBtn = { x: 0, y: 0, w: 260, h: 90 };

  public update() {
    this.restartBtn.x = width * 0.5 - this.restartBtn.w / 2;
    this.restartBtn.y = height * 0.75;
  }

  public draw() {
    imageMode(CORNER);
    image(images.gameOver, 0, 0, width, height);

    const hover = this.hitRect(this.restartBtn);

    push();
    fill(hover ? color(255, 80, 80) : color(255, 0, 0));
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
    textAlign(CENTER, CENTER);
    textSize(32);
    text(
      "Restart Game",
      this.restartBtn.x + this.restartBtn.w / 2,
      this.restartBtn.y + this.restartBtn.h / 2,
    );
    pop();
  }

  public onMousePressed() {
    if (this.hitRect(this.restartBtn)) {
      game.currentScreen = new LevelSelect();
    }
  }

  private hitRect(btn: { x: number; y: number; w: number; h: number }) {
    return (
      mouseX >= btn.x &&
      mouseX <= btn.x + btn.w &&
      mouseY >= btn.y &&
      mouseY <= btn.y + btn.h
    );
  }
}
