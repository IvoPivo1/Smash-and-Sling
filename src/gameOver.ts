class GameOver {
  private position: p5.Vector;
  icon: p5.Image;

  constructor() {
    this.position = createVector(0, 0);
    this.icon = images.restartImg;
  }

  update() {}

  draw() {
    (this.position.x, this.position.y);
  }
}
