class Game {
  private player: Player;

  constructor() {
    this.player = new Player();
  }

  public update() {
    this.player.update();
  }
    

  public draw() {
    background(0);
    this.player.draw();
  }

}
