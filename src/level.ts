/// <reference path="entity.ts" />

class Level implements IScreen {
  private entities: Entity[];
  private id: number;

  constructor(entities: Entity[], id: number = 0) {
    this.id = id;
    this.entities = entities;
  }

  public getPigs() {
    return this.entities.filter((e) => e instanceof Pig);
  }

  private getPlayer() {
    return this.entities.find((e) => e instanceof Player) as Player;
  }

  public update() {
    // uppdatera alla entities
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }

    // kollisioner
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

    // ta bort döda entities
    this.entities = this.entities.filter((entity) => entity.alive);

    // vinn
    if (this.getPigs().length === 0) {
      game.currentScreen = new WinningScreen();
      game.stars[this.id] = 3;

      // lås upp nästa level
      if (this.id < 9 && game.unlocked.indexOf(this.id + 1) === -1) {
        game.unlocked.push(this.id + 1);
      }

      // lås upp fåglar
      if (this.id === 1 && game.unlockedBirds.indexOf(1) === -1) {
        game.unlockedBirds.push(1);
      }
      if (this.id === 2 && game.unlockedBirds.indexOf(2) === -1) {
        game.unlockedBirds.push(2);
      }
      if (this.id === 3 && game.unlockedBirds.indexOf(3) === -1) {
        game.unlockedBirds.push(3);
      }
    }

    // spelaren dör  då  visas GameOverScreen och restart level
    if (!this.getPlayer().alive) {
      game.currentScreen = new GameOverScreen();
      return;
    }
  }

  public draw() {
    imageMode(CORNER);
    image(images.levelbg, 0, 0, width, height);

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }
  }
}
