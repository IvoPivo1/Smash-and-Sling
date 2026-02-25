abstract class Entity {
  // Egenskaper
  protected position: p5.Vector;
  protected size: p5.Vector;
  private image?: p5.Image;

  // Konstruktor
  constructor(
    image: p5.Image | undefined,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    this.image = image;
    this.position = createVector(x, y);
    this.size = createVector(width, height);
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
  public update() {}

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
