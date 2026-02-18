class Game {
  private level: Level;
  private player: Player;

  constructor() {
    this.level = new Level();
    this.player = new Player();
  }

  public update() {
    this.level.update();
    this.player.update();
  }

  public draw() {
    background(135, 206, 235);
    this.level.draw();
    this.player.draw();
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
