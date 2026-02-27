class BirdSelectScreen implements IScreen {
  private birds: { x: number; y: number; r: number; unlocked: boolean; id: number; sprite: p5.Image; }[];

  constructor() {
    // 4 fåglar, bara första upplåst
    this.birds = [
      { x: 0, y: 0, r: 60, unlocked: true,  id: 0, sprite: images.birdImg },
      { x: 0, y: 0, r: 60, unlocked: false, id: 1, sprite: images.bigBird },
      { x: 0, y: 0, r: 60, unlocked: false, id: 2, sprite: images.iceBird },
      { x: 0, y: 0, r: 60, unlocked: false, id: 3, sprite: images.purpleBird },
    ];
  }

  public update() {
    // Placera fåglarna i mitten av skärmen
    const spacing = width / 5;

    for (let i = 0; i < this.birds.length; i++) {
      this.birds[i].x = spacing * (i + 1);
      this.birds[i].y = height * 0.55;
    }
  }

  public draw() {
    imageMode(CORNER);
    image(images.birdSelectbg, 0, 0, width, height);

    push();
    textAlign(CENTER, CENTER);
    textSize(55);
    fill(255);
    text("Choose Your Bird", width / 2, 120);
    pop();

    // RITA ALLA FÅGLAR
    for (const bird of this.birds) {
      push();
      imageMode(CENTER);

      // Rita fågeln
      image(bird.sprite, bird.x, bird.y, bird.r * 2, bird.r * 2);

      // Om låst → rita overlay
      if (!bird.unlocked) {
        fill(0, 0, 0, 150);
        circle(bird.x, bird.y, bird.r * 2);

        fill(255);
        textSize(20);
        text("LOCKED", bird.x, bird.y);
      }

      pop();
    }
  }

  public onMousePressed() {
    for (const bird of this.birds) {
      const d = dist(mouseX, mouseY, bird.x, bird.y);

      if (d < bird.r) {
        if (!bird.unlocked) return; // klickar på låst gör inget

        game.selectedBird = bird.id;
        game.selectedSprite = bird.sprite;
        game.level = new Level();
        game.state = "level";
        game.state = "levelselect";
        return;
        game.currentScreen = new Level();
        
      }
    }
  }
}
