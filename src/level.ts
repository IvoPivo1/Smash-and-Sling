/// <reference path="entity.ts" />

class Level implements IScreen {
  private entities: Entity[];
 
  private id: number;
  constructor(entities: Entity[], id: number = 0) {
    this.id = id;

    this.entities = entities;
  }

  // kolla kollisioner mellan entiteterna.
  public getPigs() {
    return this.entities.filter((e) => e instanceof Pig);
  }

  private getPlayer() {
    return this.entities.find((e) => e instanceof Player) as Player;
  }

  public update() {
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }

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

    this.entities = this.entities.filter((entity) => entity.alive);
    

    // kolla om spelet är över
    if (this.getPigs().length === 0) {

      game.currentScreen = new WinningScreen();
      game.stars[this.id] = 3;

        if (this.id < 9) {
          let found = false;
          for (let i = 0; i < game.unlocked.length; i++) {
            if (game.unlocked[i] === this.id + 1) found = true;
          }
          if (!found) game.unlocked.push(this.id + 1);
        }
    }

    if (!this.getPlayer().alive) {
      game.currentScreen = new LevelFactory().createLevel(this.id);
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
