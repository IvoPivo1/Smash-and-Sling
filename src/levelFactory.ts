class LevelFactory {
  public createLevel(): Level {
    // bygger listan med entities för leveln
    const entites: Entity[] = [
      new Player(game.selectedBird, game.selectedSprite),
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

    return new Level(entites);
  }
}
