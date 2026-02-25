class Game {
  public level: Level;
  public state: "howto" | "start" | "birdselect" | "level" | "gameover";
  private startScreen: StartScreen;
  private howToScreen: HowToScreen;
  public birdSelect: BirdSelectScreen;
  public selectedBird: number = 0;
  public selectedSprite: p5.Image = images.birdImg;
  private gameOverScreen: GameOverScreen;

  constructor() {
    this.state = "howto";
    this.howToScreen = new HowToScreen();
    this.startScreen = new StartScreen();
    this.level = null as any;
    this.birdSelect = null as any;
    this.gameOverScreen = new GameOverScreen();
  }

  public update() {
    if (this.state === "howto") this.howToScreen.update();
    if (this.state === "start") this.startScreen.update();
    if (this.state === "birdselect") this.birdSelect.update();
    if (this.state === "level") this.level.update();
    if (this.state === "gameover") this.gameOverScreen.update();
  }

  public draw() {
    if (this.state === "howto") this.howToScreen.draw();
    if (this.state === "start") this.startScreen.draw();
    if (this.state === "birdselect") this.birdSelect.draw();

    if (this.state === "level") {
      background(135, 206, 235);
      this.level.draw();

      if (this.level.isGameOver) {
        const win = this.level.getPigs().length === 0;
        this.state = "gameover";
      }
    }
  }

  public onMousePressed() {
    if (this.state === "howto") this.howToScreen.onMousePressed();
    if (this.state === "start") this.startScreen.onMousePressed();
    if (this.state === "birdselect") this.birdSelect.onMousePressed();
    if (this.state === "gameover") this.gameOverScreen.onMousePressed();
  }
}
