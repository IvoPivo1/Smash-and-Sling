class Game {
  private player: Player;
  private level1: Level1;

  constructor() {
    this.player = new Player();
    this.level1 = new Level1(); // skapar leveln
  }

  public update() {
    this.player.update();
    this.level1.update(); // uppdaterar leveln
  }

  public draw() {
    background(135, 206, 235);
    this.level1.draw(); // ritar leveln
    this.player.draw();
  }
}
