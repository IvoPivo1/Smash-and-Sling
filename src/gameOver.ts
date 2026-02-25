export class GameOverScreen {
  constructor() {}

  update() {
    // Om du vill lägga till knappar senare
  }

  draw() {
    push();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("GAME OVER", width / 2, height / 2 - 40);

    textSize(28);
    text("Tryck på R för att spela igen", width / 2, height / 2 + 40);
    pop();
  }

  onMousePressed() {
    // Om du vill ha knappar senare
  }
}
