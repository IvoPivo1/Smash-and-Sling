class Game {
  private level: Level;
  public state: "howto" | "start" | "level";
  private startScreen: StartScreen;
  private howToScreen: HowToScreen;

  constructor() {
    this.state = "howto";
    this.howToScreen = new HowToScreen();
    this.startScreen = new StartScreen();
    this.level = new Level();
  }

  public update() {
    if (this.state === "howto") this.howToScreen.update();
    if (this.state === "start") this.startScreen.update();
    if (this.state === "level") this.level.update();
  }

  public draw() {
    if (this.state === "howto") this.howToScreen.draw();
    if (this.state === "start") this.startScreen.draw();
    if (this.state === "level") {
      background(135, 206, 235);
      this.level.draw();
    }
  }

  public onMousePressed() {
    switch (this.state) {
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
}
