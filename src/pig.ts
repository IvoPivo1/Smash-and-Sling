/// <reference path="entity.ts" />

class Pig extends Entity {
  constructor(x: number, y: number) {
    super(images.pig, x, y, 40, 40);
  }

  public onCollision(other: Entity): void {
    if (other instanceof Player) {
      this.destroy();
      return;
    }
    // landa på polen
    if (other instanceof Pole) {
      // kollar om grisen är på väg ner
      const falling = this.velocity.y > 0;

      // räknar ut grisens botten position
      const pigBottom = this.position.y + this.size.y / 2;
      // räkna polens topp position
      const poleTop = other.position.y - other.size.y / 2;

      if (falling && pigBottom >= poleTop) {
        // flytta tillbaka ett steg samma som för poles
        this.position.sub(this.velocity);

        // grisen står kvar
        this.velocity.y = 0;
      }
    }
  }
}
