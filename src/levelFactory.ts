class LevelFactory {
  public createLevel(levelNumber: number): Level {
    switch (levelNumber) {
      case 1:
        return this.levelOne();

      case 2:
        return this.levelTwo();

      case 3:
        return this.levelThree();

      case 4:
        return this.levelFour();

      case 5:
        return this.levelFive();

      case 6:
        return this.levelSix();

      case 7:
        return this.levelSeven();

      case 8:
        return this.levelEight();

      case 9:
        return this.levelNine();

      case 10:
        return this.levelTen();
    }

    return this.levelOne();
  }

  // level 1
  private levelOne(): Level {
    // bygger listan med entities för leveln
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      // varje pig får en slumpad bild från pigList
      new Pig(955, 260, random(pigList)),

      // x, y, width, height, gravity
      new Pole(900, 550, 12, 500, 0),
      new Pole(1000, 550, 12, 500, 0),
      new Pole(900, 550, 112, 12),
    ];

    return new Level(entities, 0);
  }

  // level 2
  private levelTwo(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pig(1055, 680, random(pigList)),
      new Pig(1155, 580, random(pigList)),
      new Pig(953, 548, random(pigList)),

      new Pole(900, 700, 12, 200, 0),
      new Pole(1000, 700, 12, 200, 0),
      new Pole(1100, 600, 12, 300, 0),
      new Pole(1200, 600, 12, 300, 0),
      new Pole(900, 700, 212, 12),
      new Pole(1100, 600, 112, 12),
      new Pole(900, 580, 12, 120),
      new Pole(1000, 580, 12, 120),
      new Pole(900, 567, 112, 12),
    ];

    return new Level(entities, 1);
  }

  // level 3
  private levelThree(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(1350, 260, random(pigList)),
      new Pig(1350, 580, random(pigList)),
      new Pig(750, 400, random(pigList)),

      new Pole(700, 700, 12, 500, 0),
      new Pole(800, 700, 12, 500, 0),
      new Pole(700, 700, 112, 12),
      new Pole(1300, 500, 12, 500, 0),
      new Pole(1400, 500, 12, 500, 0),
      new Pole(1300, 600, 112, 12),
      new Pole(1300, 800, 12, 500),
      new Pole(1400, 800, 12, 500),
      new Pole(1300, 500, 112, 12),
    ];

    return new Level(entities, 2);
  }

  // level 4
  private levelFour(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 260, random(pigList)),

      new BlackPole(900, 600, 12, 500, 0),
      new Pole(900, 500, 12, 100, 0),
      new Pole(1000, 500, 12, 500, 0),
      new Pole(900, 600, 112, 12),
      new Pole(900, 500, 112, 12),
    ];

    return new Level(entities, 3);
  }

  // level 5
  private levelFive(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(1010, 680, random(pigList)),
      new Pig(1090, 680, random(pigList)),
      new Pig(1050, 590, random(pigList)),
      new Pig(1050, 450, random(pigList)),

      new Pole(900, 700, 12, 220, 0),
      new Pole(1000, 700, 12, 220, 0),
      new Pole(1100, 700, 12, 220, 0),
      new Pole(1200, 700, 12, 220, 0),
      new Pole(900, 700, 312, 12),

      new Pole(980, 610, 12, 100, 0),
      new Pole(1130, 610, 12, 100, 0),
      new Pole(980, 610, 162, 12),

      new BlackPole(950, 640, 12, 140, 0),
      new BlackPole(1180, 640, 12, 140, 0),

      new Pole(1010, 500, 12, 120, 0),
      new Pole(1090, 500, 12, 120, 0),
      new Pole(1010, 500, 92, 12),
    ];

    return new Level(entities, 4);
  }

  // level 6
  private levelSix(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),
      new Pig(955, 680, random(pigList)),
      new Pig(1055, 680, random(pigList)),
      new Pig(1155, 580, random(pigList)),
      new Pig(953, 548, random(pigList)),

      new BlackPole(900, 700, 12, 200, 0),
      new Pole(1000, 700, 12, 200, 0),
      new Pole(1100, 600, 12, 300, 0),
      new Pole(1200, 600, 12, 300, 0),
      new Pole(900, 700, 212, 12),
      new Pole(1100, 600, 112, 12),
      new BlackPole(900, 580, 12, 120),
      new Pole(1000, 580, 12, 120),
      new Pole(900, 567, 112, 12),
    ];

    return new Level(entities, 5);
  }

  // level 7
  private levelSeven(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      // Vänster, 1 pig
      new Pig(900, 560, random(pigList)),

      new BlackPole(760, 680, 12, 220, 0),
      new Pole(840, 720, 12, 240, 0),
      new Pole(940, 720, 12, 240, 0),
      new Pole(840, 600, 112, 12),

      // Mitten, 2 pigs
      new Pig(1110, 680, random(pigList)),
      new Pig(1110, 560, random(pigList)),

      new Pole(1040, 740, 12, 240, 0),
      new Pole(1180, 740, 12, 240, 0),
      new Pole(1040, 740, 152, 12),
      new BlackPole(1000, 650, 12, 180, 0),
      new BlackPole(1220, 650, 12, 180, 0),
      new Pole(1060, 620, 12, 130, 0),
      new Pole(1160, 620, 12, 130, 0),
      new Pole(1060, 620, 112, 12),

      // Höger, 2 pigs
      new Pig(1370, 720, random(pigList)),
      new Pig(1370, 520, random(pigList)),

      new Pole(1320, 740, 12, 260, 0),
      new Pole(1420, 740, 12, 260, 0),
      new Pole(1320, 740, 112, 12),
      new Pole(1340, 600, 12, 150, 0),
      new Pole(1400, 600, 12, 150, 0),
      new Pole(1340, 600, 72, 12),

      // sista svarta pole längst ut
      new BlackPole(1460, 670, 12, 200, 0),
    ];

    return new Level(entities, 6);
  }

  // level 8
  private levelEight(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      // vänster, 1 pig
      new Pig(820, 620, random(pigList)),

      new BlackPole(720, 680, 12, 200, 0),

      new Pole(760, 700, 12, 180, 0),
      new Pole(880, 700, 12, 180, 0),
      new Pole(760, 700, 132, 12),

      // Mitten, 4 pigs
      new Pig(1080, 700, random(pigList)),
      new Pig(1160, 700, random(pigList)),
      new Pig(1115, 600, random(pigList)),
      new Pig(1115, 480, random(pigList)),

      new BlackPole(950, 660, 12, 240, 0),

      // första våning, Mitten
      new Pole(980, 740, 12, 260, 0),
      new Pole(1060, 740, 12, 260, 0),
      new Pole(1140, 740, 12, 260, 0),
      new Pole(1220, 740, 12, 260, 0),
      new Pole(980, 740, 252, 12),

      new BlackPole(1250, 660, 12, 240, 0),

      // andra våning, Mitten
      new Pole(1040, 620, 12, 190, 0),
      new Pole(1180, 620, 12, 190, 0),
      new Pole(1040, 620, 152, 12),

      // tredje våning, Mitten
      new Pole(1080, 520, 12, 100, 0),
      new Pole(1140, 520, 12, 100, 0),
      new Pole(1080, 520, 72, 12),

      // Höger, 1 pig
      new Pig(1320, 700, random(pigList)),

      new Pole(1270, 740, 12, 260, 0),
      new Pole(1340, 740, 12, 260, 0),
      new Pole(1270, 740, 70, 12),

      new BlackPole(1360, 680, 12, 200, 0),
    ];

    return new Level(entities, 7);
  }

  // level 9
  private levelNine(): Level {
    const entities: Entity[] = [new Player(game.selectedBirds[0])];

    return new Level(entities, 8);
  }

  // level 10
  private levelTen(): Level {
    const entities: Entity[] = [new Player(game.selectedBirds[0])];

    return new Level(entities, 9);
  }
}
