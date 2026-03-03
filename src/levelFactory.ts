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

      new Pig(955, 260, random(pigList)),
      new Pig(955, 580, random(pigList)),

      new BlackPole(900, 600, 12, 500, 0),
      new Pole(900, 500, 12, 100, 0),
      new Pole(1000, 500, 12, 500, 0),

      new Pole(900, 600, 112, 12),

      new Pole(900, 500, 112, 12),
    ];

    return new Level(entities, 0);
  }

  // level 3
  private levelThree(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),
      // varje pig får en slumpad bild från pigList
      new Pig(955, height - 180 - 40, random(pigList)),
      new Pig(1055, height - 180 - 40, random(pigList)),
      new Pig(1155, height - 280 - 40, random(pigList)),
      new Pig(953, height - 312 - 40, random(pigList)),

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

    return new Level(entities, 0);
  }

  // level 4
  private levelFour(): Level {
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

    return new Level(entities, 3);
  }

  // level 5
  private levelFive(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }

  // level 6
  private levelSix(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }

  // level 7
  private levelSeven(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }

  // level 8
  private levelEight(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }

  // level 9
  private levelNine(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }

  // level 10
  private levelTen(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(955, 680, random(pigList)),
      new Pole(900, 700, 12, 200, 0),
    ];

    return new Level(entities, 3);
  }
}
