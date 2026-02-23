class Game {
  public state: "howto" | "start" | "level";
  private startScreen: StartScreen;
  private howToScreen: HowToScreen;

  constructor() {
    this.state = "howto";
    this.howToScreen = new HowToScreen();
    this.startScreen = new StartScreen();
  }

  public update() {
    if (this.state === "howto") this.howToScreen.update();
    if (this.state === "start") this.startScreen.update();
    // if (this.state === "level") this.level.update();
  }

  public draw() {
    if (this.state === "howto") this.howToScreen.draw();
    if (this.state === "start") this.startScreen.draw();
    if (this.state === "level") this.drawGame();
  }

  public onMousePressed() {
    switch(this.state) {
      case "howto":
        this.howToScreen.onMousePressed();
        break;
      case "start":
        this.startScreen.onMousePressed();
        break;
      case "level":
        // this.level.onMousePressed();
        break;
    }
  }

  private drawGame() {
    background(30);
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("GAME SCENE ()", width * 0.5, height * 0.5);
    pop();
  }
}
