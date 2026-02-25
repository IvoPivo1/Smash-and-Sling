/// <reference path="entity.ts" />

class Pig extends Entity {
  constructor(x: number, y: number) {
    super(images.pig, x, y, 40, 40);
  }

  public onCollision(other: Entity): void {
    if (other instanceof Player) {
      // flytta bort den långt utanför skärm
      this.position.set(-9999, -9999);
    }
  }
}
