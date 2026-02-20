class Game {
  private level: Level;

  constructor() {
    this.level = new Level();
  }

  public update() {
    this.level.update();
  }

  public draw() {
    background(135, 206, 235);
    this.level.draw();
  }
}
