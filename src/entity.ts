abstract class Entity {
  // Egenskaper
  protected position: p5.Vector;
  protected size: p5.Vector;
  protected velocity: p5.Vector;
  protected gravity: number = 0.4;
  private image?: p5.Image;

  public alive: boolean = true;

  public destroy(): void {
    this.alive = false;
  }

  // Konstruktor
  constructor(
    image: p5.Image | undefined,
    x: number,
    y: number,
    width: number,
    height: number,
    gravity = 0.4,
  ) {
    this.image = image;
    this.position = createVector(x, y);
    this.size = createVector(width, height);
    this.velocity = createVector(0, 0);
    this.gravity = gravity;
  }

  public isOverlap(other: Entity): boolean {
    // överlappar this & other?
    const dx = Math.abs(this.position.x - other.position.x);
    const dy = Math.abs(this.position.y - other.position.y);

    return (
      dx < this.size.x / 2 + other.size.x / 2 &&
      dy < this.size.y / 2 + other.size.y / 2
    );
  }

  public abstract onCollision(other: Entity): void;

  // Metoder
  public update() {
    this.velocity.y += this.gravity;
    this.position.add(this.velocity);
  }

  public draw() {
    if (!this.image) return;
    push();
    imageMode("center");
    image(
      this.image,
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y,
    );
    pop();
  }
}
