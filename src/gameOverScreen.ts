class GameOverScreen {
  private message: string;
  private subMessage: string;

  constructor() {
    this.message = "GAME OVER";
    this.subMessage = "Tryck på R för att spela igen";
  }

  public setWin(win: boolean) {
    if (win) {
      this.message = "DU VANN!";
      this.subMessage = "Tryck på N för nästa level";
    } else {
      this.message = "GAME OVER";
      this.subMessage = "Tryck på R för att spela igen";
    }
  }

  update() {}

  draw() {
    push();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER);
    textSize(60);
    text(this.message, width / 2, height / 2 - 40);

    textSize(28);
    text(this.subMessage, width / 2, height / 2 + 40);
    pop();
  }

  onMousePressed() {
    //knappar
  }
}
