/// <reference path="entity.ts" />

class Level implements IScreen {
  public entities: Entity[];
  private id: number;
  private hasWon: boolean = false;

  constructor(entities: Entity[], id: number = 0) {
    this.id = id;
    this.entities = entities;

    game.currentLevel = this;
  }

  public getPigs() {
    return this.entities.filter((e) => e instanceof Pig);
  }

  private getPlayer() {
    return this.entities.find(
      (e) => e instanceof Player && !(e as Player).isClone,
    ) as Player | undefined;
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
    if (this.getPigs().length === 0 && !this.hasWon) {
      this.hasWon = true;
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
      return;
    }

    // Om ingen player finns
    if (!this.hasWon && !this.getPlayer()) {
      // Finns det fler fåglar i kön? ladda nästa
      if (game.selectedBirds.length > 0) {
        const nextBird = game.selectedBirds[0];
        this.entities.push(new Player(nextBird));
        return;
      }

      // Om split/bomb-delay är aktiv vänta
      if (game.splitDelayActive || game.bombDelayActive) return;

      // Annars Game Over
      game.currentScreen = new GameOverScreen();
      return;
    }

    const player = this.getPlayer();

    if (!player && game.selectedBirds.length > 0) {
      const nextBird = game.selectedBirds[0];
      this.entities.push(new Player(nextBird));
      return;
    }

    if (player && player.isLaunched && player.position.y > height + 1000) {
      game.selectedBirds.shift();

      if (game.selectedBirds.length > 0) {
        const nextBird = game.selectedBirds[0];
        this.entities.push(new Player(nextBird));
      } else {
        game.currentScreen = new GameOverScreen();
        return;
      }
    }
  }

  public draw() {
    imageMode(CORNER);
    image(images.levelbg, 0, 0, width, height);

    for (let i = 0; i < game.selectedBirds.length; i++) {
      const b = game.selectedBirds[i];
      image(
        b.spriteIdle,
        80 + i * 60, // X
        height - 120, // Y
        40,
        40,
      );
    }

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }

    for (let ex of game.explosions) {
      ex.update();
      ex.draw();
    }

    game.explosions = game.explosions.filter((ex) => !ex.isDone());

    for (let d of game.dashTrials) {
      d.update();
      d.draw();
    }
    game.dashTrials = game.dashTrials.filter((d) => !d.isDone());
  }
}
