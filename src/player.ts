
class Player {
  private position: p5.Vector;
  private size: p5.Vector;
  private velocity: p5.Vector;
class Player extends Entity {
  velocity: p5.Vector;
  radius: number = 35;

  private gravity: number = 0.4;
  private dragDamping: number = 0.98;

  private isDragging: boolean = false;
  private isLaunched: boolean = false;

  private startPos: p5.Vector;
  private dragPos: p5.Vector;

  constructor() {
    const radius = 35;
    const position = createVector(272, height - 250);
    super(images.birdImg, position.x, position.y, radius * 2, radius * 2);

    this.startPos = position.copy();
    this.dragPos = position.copy();
    this.velocity = createVector(0, 0);
  }

  public onCollision(other: Entity): void {
    // todo....
  }

  private mousePressed() {
    if (!mouseIsPressed || this.isLaunched) return;

    const d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < this.radius) {
      this.isDragging = true;
    }
  }

  private mouseDragged() {
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

  private mouseReleased() {
    if (mouseIsPressed || !this.isDragging || this.isLaunched) return;

    this.isDragging = false;
    this.isLaunched = true;

    // Here you can adjust the speed of the bird
    const force = p5.Vector.sub(this.startPos, this.dragPos).mult(0.45);
    this.velocity.add(force);
  }

  update() {
    this.mousePressed();
    this.mouseDragged();
    this.mouseReleased();
    
    if (!this.isLaunched) return;

    this.velocity.y += this.gravity;
    this.velocity.mult(this.dragDamping);
    this.position.add(this.velocity);
  }

  draw() {
    // Draw slingshot band while dragging
    if (this.isDragging) {
      push();
      stroke(60, 40, 20);
      strokeWeight(6);
      line(this.startPos.x, this.startPos.y, this.position.x, this.position.y);
      pop();
    }

    super.draw();
  }

  reset() {
    this.position.set(this.startPos);
    this.velocity.set(0, 0);
    this.isLaunched = false;
    this.isDragging = false;
  }
}