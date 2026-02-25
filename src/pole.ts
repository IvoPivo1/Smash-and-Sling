/// <reference path="entity.ts" />

class Pole extends Entity {
  constructor(x: number, y: number, width: number, height: number) {
    super(undefined, x, y, width, height);
  }

  public onCollision(other: Entity): void {}

  public draw() {
    push();
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size.x, this.size.y);
    pop();
  }
}
