/// <reference path="entity.ts" />

class Pig extends Entity {
  constructor(x: number, y: number) {
    super(images.pig, x, y, 40, 40);
  }

  public onCollision(other: Entity): void {
    throw new Error("Method not implemented.");
  }
}
