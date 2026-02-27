class YouWon {
  private position: p5.Vector;
  private levelup: p5.Image;
  private width: number;
  private height: number;

  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.levelup = images.levelup;
    this.width = this.levelup.width;
    this.height = this.levelup.height;
  }

  update() {}

  draw() {
    imageMode(CENTER);
    image(this.levelup, this.position.x, this.position.y);
  }
  isClicked(): boolean {
    return (
      mouseX > this.position.x - this.width / 2 &&
      mouseX < this.position.x + this.width / 2 &&
      mouseY > this.position.y - this.height / 2 &&
      mouseY < this.position.y - this.height / 2
    );
  }
}
