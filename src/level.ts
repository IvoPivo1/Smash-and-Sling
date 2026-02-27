/// <reference path="entity.ts" />

class Level {
  private entities: Entity[];
  public isGameOver: boolean = false;

  constructor(entities: Entity[]) {
    // Tar emot färdigbyggda entities istället för att skapa dem här
    this.entities = entities;
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
