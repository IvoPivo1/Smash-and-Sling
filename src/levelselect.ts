class LevelSelect implements IScreen {
  private ck: { x: number; y: number; r: number; id: number }[] = [];

  constructor() {}

  public update() {
    if (this.ck.length === 0) this.makeCircle();
  }

  public draw() {
    imageMode(CORNER);
    image(images.levelSelectbg, 0, 0, width, height);

    push();
    fill(255, 255, 255);
    textAlign(CENTER, TOP);
    textSize(50);
    text("Choose level", width / 2, 60);
    pop();

    for (const c of this.ck) {
      const unlocked = this.isUnlocked(c.id);

      push();
      stroke(60);
      strokeWeight(6);
      if (unlocked) fill(245);
      else fill(170);

      circle(c.x, c.y, c.r * 2);

      noStroke();
      fill(40);
      textAlign(CENTER, CENTER);
      textSize(22);
      text(c.id + 1, c.x, c.y);

      this.drawStars(c.x, c.y - c.r - 15, game.stars[c.id]);
      pop();
    }
  }

  public onMousePressed() {
    for (const c of this.ck) {
      const d = dist(mouseX, mouseY, c.x, c.y);
      if (d > c.r) continue;

      if (!this.isUnlocked(c.id)) continue;

      game.selectedLevel = c.id + 1;

      // SÄTT MAX FÅGLAR BEROENDE PÅ LEVEL
      if (game.selectedLevel === 1) game.maxBirdsAllowed = 1;
      if (game.selectedLevel === 2) game.maxBirdsAllowed = 1;
      if (game.selectedLevel === 3) game.maxBirdsAllowed = 2;
      if (game.selectedLevel === 4) game.maxBirdsAllowed = 2;
      if (game.selectedLevel === 5) game.maxBirdsAllowed = 3;
      if (game.selectedLevel === 6) game.maxBirdsAllowed = 3;
      if (game.selectedLevel === 7) game.maxBirdsAllowed = 4;
      if (game.selectedLevel === 8) game.maxBirdsAllowed = 4;
      if (game.selectedLevel === 9) game.maxBirdsAllowed = 4;
      if (game.selectedLevel === 10) game.maxBirdsAllowed = 4;
      game.currentScreen = new BirdSelectScreen();
      return;
    }
  }

  private isUnlocked(id: number) {
    for (let i = 0; i < game.unlocked.length; i++) {
      if (game.unlocked[i] === id) return true;
    }
    return false;
  }

  private drawStars(x: number, y: number, stars: number) {
    for (let i = 0; i < 3; i++) {
      if (i < stars) fill(255, 220, 50);
      else fill(130);

      noStroke();
      circle(x + (i - 1) * 22, y, 15);
    }
  }

  private makeCircle() {
    this.ck = [];

    const cols = 5;
    const rows = 2;

    const startX = width * 0.2;
    const startY = height * 0.4;
    const gapX = width * 0.15;
    const gapY = height * 0.25;

    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        this.ck.push({
          x: startX + c * gapX,
          y: startY + r * gapY,
          r: 34,
          id: id,
        });
        id++;
      }
    }
  }
}
