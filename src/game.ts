interface IScreen {
  update(): void;
  draw(): void;
  onMousePressed?(): void;
}

class Game {
  public currentScreen: IScreen;
  public selectedBird: number = 0;
  public selectedSprite: p5.Image = images.birdImg;
  public unlocked: number[] = [0];
  public stars: number[] = new Array(10).fill(0);
  public levelFactory: LevelFactory;
  public currentLevel: number = 0;

  constructor() {
    this.currentScreen = new HowToScreen();
    this.levelFactory = new LevelFactory();
  }

  public startLevel(levelNumber: number) {
    this.currentLevel = levelNumber;
    this.currentScreen = this.levelFactory.createLevel(levelNumber);
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
