class Player {
  position: p5.Vector;
  velocity: p5.Vector;
  radius: number = 35; 

  private gravity: number = 0.4;
  private dragDamping: number = 0.98;

  private isDragging: boolean = false;
  private isLaunched: boolean = false;

  private startPos: p5.Vector;
  private dragPos: p5.Vector;

  private sprite: p5.Image;

  constructor() {
    this.sprite = images.birdImg;

    this.startPos = createVector(200, height - 150);
    this.position = this.startPos.copy();
    this.dragPos = this.startPos.copy();
    this.velocity = createVector(0, 0);
  }

  mousePressed() {
    if (this.isLaunched) return;

    const d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < this.radius) {
      this.isDragging = true;
    }
  }

  mouseDragged() {
    if (!this.isDragging || this.isLaunched) return;

    this.dragPos.set(mouseX, mouseY);

    const maxPull = 120;
    const diff = p5.Vector.sub(this.dragPos, this.startPos);

    if (diff.mag() > maxPull) {
      diff.setMag(maxPull);
      this.dragPos = p5.Vector.add(this.startPos, diff);
    }

    this.position.set(this.dragPos);
  }

  mouseReleased() {
    if (!this.isDragging || this.isLaunched) return;

    this.isDragging = false;
    this.isLaunched = true;

    // Here you can adjust the speed of the bird 
    const force = p5.Vector.sub(this.startPos, this.dragPos).mult(0.45);
    this.velocity.add(force);
  }

  update() {
    if (!this.isLaunched) return;

    this.velocity.y += this.gravity;
    this.velocity.mult(this.dragDamping);
    this.position.add(this.velocity);
  }

  draw() {
    // Draw slingshot band while dragging
    if (this.isDragging) {
      stroke(60, 40, 20);
      strokeWeight(6);
      line(
        this.startPos.x,
        this.startPos.y,
        this.position.x,
        this.position.y
      );
    }

    // Draw the bird sprite
    imageMode(CENTER);
    image(
      this.sprite,
      this.position.x,
      this.position.y,
      this.radius * 2,
      this.radius * 2
    );
  }

  reset() {
    this.position.set(this.startPos);
    this.velocity.set(0, 0);
    this.isLaunched = false;
    this.isDragging = false;
  }
}
