class Game {
  private player: Player;

  constructor() {
    this.player = new Player();
  }

  update() {
    this.player.update();
  }

  draw() {
    background(0);
    this.player.draw();
  }

  mousePressed() {
    this.player.mousePressed();
  }
  mouseDragged() {
    this.player.mouseDragged();
  }
  mouseReleased() {
    this.player.mouseReleased();
  }
}
