/// <reference path="entity.ts" />

class Level {
  private entities: Entity[];
  public isGameOver: boolean = false;

  constructor() {
    this.entities = [
      new Player(game.selectedBird, game.selectedSprite),
      new Pig(955, height - 180 - 40),
      new Pig(1055, height - 180 - 40),
      new Pig(1155, height - 280 - 40),
      new Pig(953, height - 312 - 40),
      new Pole(900, height - 200, 12, 200, 0),
      new Pole(1000, height - 200, 12, 200, 0),
      new Pole(1100, height - 300, 12, 300, 0),
      new Pole(1200, height - 300, 12, 300, 0),
      new Pole(900, height - 200, 212, 12),
      new Pole(1100, height - 300, 112, 12),
      new Pole(900, height - 154 - 12 - 154, 12, 120),
      new Pole(1000, height - 154 - 12 - 154, 12, 120),
      new Pole(900, height - 161 - 12 - 160, 112, 12),
    ];
  }

  public getPigs() {
    return this.entities.filter((e) => e instanceof Pig);
  }

  private getPlayer() {
    return this.entities.find((e) => e instanceof Player) as Player;
  }

  public update() {
    // uppdaterar alla entites
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }
    // kolla kollisioner mellan entiteterna
    for (let i = 0; i < this.entities.length; i++) {
      for (let j = i + 1; j < this.entities.length; j++) {
        const a = this.entities[i];
        const b = this.entities[j];

        if (a.isOverlap(b)) {
          a.onCollision(b);
          b.onCollision(a);
        }
      }
    }
    // tar bort entities
    this.entities = this.entities.filter((entity) => entity.alive);
  }

  public draw() {
    imageMode(CORNER);
    image(images.levelbg, 0, 0, width, height);

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }
  }
}
