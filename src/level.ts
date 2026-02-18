class Level {
  private entities: Entity[];

  constructor() {
    this.entities = [
      new Pig(938, height - 200 - 40),
      new Pig(1038, height - 200 - 40),
      new Pig(1138, height - 300 - 40),
      new Pig(938, height - 333 - 40),
      new Pole(900, height - 200, 12, 200),
      new Pole(1000, height - 200, 12, 200),
      new Pole(1100, height - 300, 12, 300),
      new Pole(1200, height - 300, 12, 300),
      new Pole(900, height - 200, 212, 12),
      new Pole(1100, height - 300, 112, 12),
      new Pole(900, height - 154 - 12 - 154, 12, 120),
      new Pole(1000, height - 154 - 12 - 154, 12, 120),
      new Pole(900, height - 160 - 12 - 160, 112, 12),
    ];
  }

  public update() {
    // kolla kollisioner mellan entiteterna.
  }

  public draw() {
    // for (const entity of this.entities) {
    //   entity.draw();
    // }
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }
  }
}
