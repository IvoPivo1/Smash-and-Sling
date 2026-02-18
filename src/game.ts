class Game {
  private level1: Level1;

  constructor() {
    this.level1 = new Level1();
  }

  public update() {
    this.level1.update();
  }

  public draw() {
    background(135, 206, 235);
    this.level1.draw();
  }
}
