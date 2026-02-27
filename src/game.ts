interface IScreen {
  update(): void;
  draw(): void;
  onMousePressed?(): void;
}

class Game {
  public currentScreen: IScreen;
  public selectedBird: number = 0;
  public selectedSprite: p5.Image = images.birdImg;
<<<<<<< HEAD
  private gameOverScreen: GameOverScreen;
  private levelFactory: LevelFactory;
  public currentLevel: number = 1;
=======
>>>>>>> parent of 1d99083 (Merge pull request #27 from IvoPivo1/12-level-select)

  constructor() {
    this.state = "howto";
    this.howToScreen = new HowToScreen();
    this.startScreen = new StartScreen();
    this.level = null as any;
    this.birdSelect = null as any;
    this.gameOverScreen = new GameOverScreen();
    this.levelFactory = new LevelFactory();
  }

  public startLevel(levelNumber: number = this.currentLevel) {
    // Startar en ny level genom factory
    this.level = this.levelFactory.createLevel(levelNumber);
    this.state = "level";
  }

  public update() {
    this.currentScreen.update();
  }

  public draw() {
    this.currentScreen.draw();
  }

  public onMousePressed() {
    this.currentScreen.onMousePressed?.();
  }
}
