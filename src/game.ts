class Game {
  private level: Level;
  private player: Player;
  private gameOver: GameOver;

  constructor() {
    this.level = new Level();
    this.player = new Player();
    this.gameOver = new GameOver();
  }

  public update() {
    this.level.update();
    this.player.update();
    this.gameOver.update();
  }

  public draw() {
    background(135, 206, 235);
    this.level.draw();
    this.player.draw();
    this.gameOver.draw();
  }

  public mousePressed() {
    this.player.mousePressed();
  }

  public mouseDragged() {
    this.player.mouseDragged();
  }

  public mouseReleased() {
    this.player.mouseReleased();
  }
}
