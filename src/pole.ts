/// <reference path="entity.ts" />

class Pole extends Entity {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    gravity = 0.4,
  ) {
    // Entity använder center koordinater
    const cx = x + width / 2;
    const cy = y + height / 2;
    // Skickar vidare till Entity
    super(undefined, cx, cy, width, height, gravity);
  }

  public onCollision(other: Entity): void {
    // Om spelaren träffar stolpen, förstör stolpen
    if (other instanceof Player) {
      this.destroy();
    } else if (other instanceof Pole && this.position.y !== other.position.y) {
      // flytta tillbaka ett steg
      this.position.sub(this.velocity);
      this.velocity.set(0, 0);
    }
  }

  public draw() {
    push();
    imageMode(CENTER);
    image(images.pole, this.position.x, this.position.y, this.size.x, this.size.y);
    
   
    pop();
  }
}

class BlackPole extends Pole {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    gravity = 0,
  ) {
    super(x, y, width, height, gravity);
  }

  public override draw() {
    push();
    imageMode(CENTER);
    image(images.concretePole, this.position.x, this.position.y, this.size.x, this.size.y);
   
    pop();
  }

  public override onCollision(other: Entity): void {
    if (other instanceof Player) {
      // studsa tillbaka
      other.bounceBack(
        -other.getVelocity().x * 0.8,
        -other.getVelocity().y * 0.8,
      );

      return;
    }

    // Annars gör som en vanlig pole
    super.onCollision(other);
  }
}
