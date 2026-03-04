class GameOverScreen implements IScreen {
  private retryBtn = { x: 0, y: 0, w: 260, h: 90 }; 
  private backBtn = { x: 0, y: 0, w: 260, h: 90 };

  public update() {
    this.retryBtn.x = width * 0.5 - this.retryBtn.w / 2;
    this.retryBtn.y = height * 0.65;

    this.backBtn.x = width * 0.5 - this.backBtn.w / 2;
    this.backBtn.y = height * 0.80;
  }

  public draw() {
    imageMode(CORNER);
    image(images.gameOver, 0, 0, width, height);

    push();
    textAlign(CENTER, CENTER);
    textSize(89);
    fill(255, 255, 255);
    stroke(255, 105, 180);
    strokeWeight(5);
    text("GAME OVER", width * 0.5, height * 0.25);
    pop();

    this.drawButton(this.retryBtn, "Try Again");
    this.drawButton(this.backBtn, "Level Select");
  }
  
private drawButton(btn: { x: number; y: number; w: number; h: number }, label: string) {
  const hover = this.hitRect(btn);

  push();
  fill(hover ? color(255, 105, 180) : color(255, 0, 150));
  stroke(255);
  strokeWeight(3);
  rect(btn.x, btn.y, btn.w, btn.h, 20);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(30);
  text(label, btn.x + btn.w / 2, btn.y + btn.h / 2);
  pop();
}

  public onMousePressed() {

    if (this.hitRect(this.retryBtn)) {
      game.currentScreen = new LevelFactory().createLevel(game.selectedLevel);
      return;
    }

    if (this.hitRect(this.backBtn)) {
      game.currentScreen = new LevelSelect();
      return;
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
