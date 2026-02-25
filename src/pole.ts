/// <reference path="entity.ts" />

class Pole extends Entity {
  constructor(x: number, y: number, width: number, height: number) {
    const cx = x + width / 2;
    const cy = y + height / 2;
    super(undefined, cx, cy, width, height);
  }

  public onCollision(other: Entity): void {}

  public draw() {
    push();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
}
