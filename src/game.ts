interface IScreen {
  update(): void;
  draw(): void;
  onMousePressed?(): void;
}

class Game {
  public currentScreen: IScreen;
  public selectedBird: number = 0;
  public selectedSprite: p5.Image = images.birdImg;

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
