interface IScreen {
  update(): void;
  draw(): void;
  onMousePressed?(): void;
}

class Game {
  public currentScreen: IScreen;
  public currentLevel: Level | null = null;
  public selectedBird: number = 0;
  public selectedSprite: p5.Image = images.birdImg;
  public selectedBirdObject: Bird | null = null;
  public bombDelayActive: boolean = false;
  public splitDelayActive: boolean = false;
  public selectedLevel: number = 1;
  public selectedBirds: Bird[] = [];
  public maxBirdsAllowed: number = 1;
  public unlocked: number[] = [0];
  public unlockedBirds: number[] = [0];
  public stars: number[] = new Array(10).fill(0);

  constructor() {
    this.currentScreen = new HowToScreen();
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
