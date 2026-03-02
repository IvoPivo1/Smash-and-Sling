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
    }
    return this.levelOne();
  }

  // level 1
  private levelOne(): Level {
    //const bird = new Bird(game.selectedBird, game.selectedSprite);

    // bygger listan med entities för leveln
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),
      // varje pig får en slumpad bild från pigList
      new Pig(955, height - 180 - 40, random(pigList)),
      new Pig(1055, height - 180 - 40, random(pigList)),
      new Pig(1155, height - 280 - 40, random(pigList)),
      new Pig(953, height - 312 - 40, random(pigList)),

      new Pole(900, height - 200, 12, 200, 0),
      new Pole(1000, height - 200, 12, 200, 0),
      new Pole(1100, height - 300, 12, 300, 0),
      new Pole(1200, height - 300, 12, 300, 0),
      new Pole(900, height - 200, 212, 12),
      new Pole(1100, height - 300, 112, 12),
      new Pole(900, height - 154 - 12 - 154, 12, 120),
      new Pole(1000, height - 154 - 12 - 154, 12, 120),
      new Pole(900, height - 161 - 12 - 160, 112, 12),
    ];

    return new Level(entities, 0);
  }

  // Level 2
  private levelTwo(): Level {
    //const bird = new Bird(game.selectedBird, game.selectedSprite);

    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      // Todo
      new Pig(955, height - 180 - 40, random(pigList)),

      new Pole(900, height - 200, 12, 200, 0),
    ];

    return new Level(entities, 1);
  }

  // level 3
  private levelThree(): Level {
    // const bird = new Bird(game.selectedBird, game.selectedSprite);

    // bygger listan med entities för leveln
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),
      // varje pig får en slumpad bild från pigList
      new Pig(955, height - 180 - 40, random(pigList)),
      new Pig(1055, height - 180 - 40, random(pigList)),
      new Pig(1155, height - 280 - 40, random(pigList)),
      new Pig(953, height - 312 - 40, random(pigList)),

      new Pole(900, height - 200, 12, 200, 0),
      new Pole(1000, height - 200, 12, 200, 0),
      new Pole(1100, height - 300, 12, 300, 0),
      new Pole(1200, height - 300, 12, 300, 0),
      new Pole(900, height - 200, 212, 12),
      new Pole(1100, height - 300, 112, 12),
      new Pole(900, height - 154 - 12 - 154, 12, 120),
      new Pole(1000, height - 154 - 12 - 154, 12, 120),
      new Pole(900, height - 161 - 12 - 160, 112, 12),
    ];

    return new Level(entities, 2);
  }

  private levelFour(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(850, height - 180 - 40, random(pigList)),
      new Pig(850, height - 260 - 40, random(pigList)),
      new Pig(850, height - 340 - 40, random(pigList)),

      new Pole(820, height - 200, 12, 200, 0),
      new Pole(880, height - 200, 12, 200, 0),
      new Pole(820, height - 200, 72, 12),

      new Pole(820, height - 280, 12, 200, 0),
      new Pole(880, height - 280, 12, 200, 0),
      new Pole(820, height - 280, 72, 12),

      new Pig(1150, height - 180 - 40, random(pigList)),
      new Pig(1150, height - 260 - 40, random(pigList)),

      new Pole(1120, height - 200, 12, 200, 0),
      new Pole(1180, height - 200, 12, 200, 0),
      new Pole(1120, height - 200, 72, 12),

      new Pole(1120, height - 280, 12, 200, 0),
      new Pole(1180, height - 280, 12, 200, 0),
      new Pole(1120, height - 280, 72, 12),
    ];

    return new Level(entities, 3);
  }

  private levelFive(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirds[0]),

      new Pig(950, height - 260 - 40, random(pigList)),
      new Pig(1050, height - 260 - 40, random(pigList)),
      new Pig(1150, height - 260 - 40, random(pigList)),

      new Pole(900, height - 200, 12, 200, 0),
      new Pole(1000, height - 200, 12, 200, 0),
      new Pole(1100, height - 200, 12, 200, 0),
      new Pole(1200, height - 200, 12, 200, 0),

      new Pole(900, height - 260, 312, 12),
      new Pole(900, height - 280, 312, 12),
    ];

    return new Level(entities, 4);
  }
}
