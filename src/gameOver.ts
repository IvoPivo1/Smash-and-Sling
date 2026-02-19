class GameOver {
  private position: p5.Vector;
  private restart: p5.Image;

  constructor() {
    this.position = createVector(0, 0);
    this.restart = images.restart;
  }

  update() {}

  draw() {
    (this.position.x, this.position.y);
  }
}
