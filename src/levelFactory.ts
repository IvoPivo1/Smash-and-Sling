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
      /*
      case 5:
        return this.levelFive();
    }
    
     case 6:
        return this.levelSix();
    }
     case 7:
        return this.levelFive();
    }
     case 8:
        return this.levelFive();
    }
     case 9:
        return this.levelFive();
    }
     case 10:
        return this.levelFive();
    }*/
    }
    return this.levelOne();
  }

  // level 1
  private levelOne(): Level {
    // bygger listan med entities för leveln
    const entities: Entity[] = [
      new Player(game.selectedBirdObject!),

      // varje pig får en slumpad bild från pigList
      new Pig(955, 260, random(pigList)),

      // x, y, width, height
      new Pole(900, 550, 12, 500, 0),
      new Pole(1000, 550, 12, 500, 0),
      new Pole(900, 550, 112, 12),
    ];

    return new Level(entities, 0);
  }

  // level 2
  private levelTwo(): Level {
    const entities: Entity[] = [
      new Player(game.selectedBirdObject!),

      //   new Pig(955, 260, random(pigList)),
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
      new Player(game.selectedBirdObject!),

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
      new Player(game.selectedBirdObject!),

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

    return new Level(entities, 0);
  }
}
