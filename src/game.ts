class Game {
  private player: Player;

  constructor() {
    this.player = new Player();
  }

  public update() {
    this.player.update();
  }

  public draw() {
    background(135, 206, 235);

    this.player.draw();
  }
}
