
class Player {
  private position: p5.Vector;
  private size: p5.Vector;
  private velocity: p5.Vector;

  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.size = createVector(50, 80);
    this.velocity = createVector(0, 0);
  }

  public update() {
    this.applyGravity();
    this.updatePosition();
    this.move();
  }

  private move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.position.x -= 5;
    }else if (keyIsDown(RIGHT_ARROW)) {
      this.position.x += 5;
    } else{
        this.velocity.x = 0;
    }

    if (keyIsDown(32) && this.position.y >= height - 100) {
      this.velocity.y = -20;
    }
  }


  private updatePosition() {
    this.position.add(this.velocity);
    if (this.position.y > height -100) {
      this.velocity.y = 0;
      this.position.y = height -100;
    }
  }

  private applyGravity() {
    this.velocity.y += 0.8; // Gravity acceleration
  }

  public draw() {
    push();
    fill("white");
    rect(this.position.x, this.position.y, this.size.x, this.size.y);

    pop();
  }
}