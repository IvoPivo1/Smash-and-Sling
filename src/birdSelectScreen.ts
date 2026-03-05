class BirdSelectScreen implements IScreen {
  private birds: {
    x: number;
    y: number;
    r: number;
    unlocked: boolean;
    id: number;
    sprite: p5.Image;
  }[];

  constructor() {
    game.selectedBirds = [];
    // 4 fåglar, bara första upplåst
    this.birds = [
      {
        x: 0,
        y: 0,
        r: 60,
        unlocked: game.unlockedBirds.indexOf(0) !== -1,
        id: 0,
        sprite: images.birdImg,
      },
      {
        x: 0,
        y: 0,
        r: 60,
        unlocked: game.unlockedBirds.indexOf(1) !== -1,
        id: 1,
        sprite: images.bigBird,
      },
      {
        x: 0,
        y: 0,
        r: 60,
        unlocked: game.unlockedBirds.indexOf(2) !== -1,
        id: 2,
        sprite: images.iceBird,
      },
      {
        x: 0,
        y: 0,
        r: 60,
        unlocked: game.unlockedBirds.indexOf(3) !== -1,
        id: 3,
        sprite: images.purpleBird,
      },
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

    push();
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255);
    text(
      `Choose up to ${game.maxBirdsAllowed} birds (${game.selectedBirds.length} selected)`,
      width / 2,
      180,
    );
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

      if (game.selectedBirds.find((b) => b.id === bird.id)) {
        noFill();
        stroke(255, 255, 0);
        strokeWeight(6);
        circle(bird.x, bird.y, bird.r * 2 + 10);
      }

      pop();
    }
  }

  public onMousePressed() {
    for (const bird of this.birds) {
      const d = dist(mouseX, mouseY, bird.x, bird.y);

      if (d < bird.r) {
        if (!bird.unlocked) return; // klickar på låst gör inget

        let selected: Bird;

        switch (bird.id) {
          case 0:
            selected = new Bird(
              0,
              "birdImg",
              images.bird0_idle,
              images.bird0_drag,
              images.bird0_fly,
              35,
              1.0,
              1.0,
              "none",
            );
            break;
          case 1:
            selected = new Bird(
              1,
              "bigBird",
              images.bird1_idle,
              images.bird1_drag,
              images.bird1_fly,
              45,
              1.3,
              1.4,
              "bomb",
            ); // större & starkare
            break;
          case 2:
            selected = new Bird(
              2,
              "iceBird",
              images.bird2_idle,
              images.bird2_drag,
              images.bird2_fly,
              30,
              0.8,
              0.7,
              "dash",
            ); // snabb men lätt
            break;
          case 3:
            selected = new Bird(
              3,
              "purpleBird",
              images.bird3_idle,
              images.bird3_drag,
              images.bird3_fly,
              40,
              1.6,
              1.2,
              "split",
            ); // tung & kraftfull
            break;

          default:
            selected = new Bird(
              0,
              "birdImg",
              images.bird0_idle,
              images.bird0_drag,
              images.bird0_fly,
              35,
              1.0,
              1.0,
              "none",
            );
        }

        const already = game.selectedBirds.find((b) => b.id === bird.id);
        if (already) {
          game.selectedBirds = game.selectedBirds.filter(
            (b) => b.id !== bird.id,
          );
          return;
        }

        if (game.selectedBirds.length >= game.maxBirdsAllowed) return;

        game.selectedBirds.push(selected);

        if (game.selectedBirds.length === game.maxBirdsAllowed) {
  game.currentScreen = new LevelFactory().createLevel(game.selectedLevel);
}


        return;
      }
    }
  }
}
