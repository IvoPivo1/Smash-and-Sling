class Level {
  private entities: Entity[];
 private id number;
  constructor(id: number = 0) {
    this.id = id;

    this.entities = [
      new Player(game.selectedBird, game.selectedSprite),
      new Pig(955, height - 180 - 40),
      new Pig(1055, height - 180 - 40),
      new Pig(1155, height - 280 - 40),
      new Pig(953, height - 312 - 40),
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
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].update();
    }
    let pigsLeft = 0 
    for(let i = 0; i < this.entities.length; i++){
      if (this.entities[i]instanceof Pig) pigsLeft++;
    }
    if (pigsLeft === 0)
      game.stars[this.id] =3;

    if(this.id < 9 ) {
      let found = false;
      for(let i = 0; i < game.unlocked.length; i++){
        if (game.unlocked[i] === this.id + 1) found true;
      }
      if(!found)game.unlocked.push(this.id + 1);
    }
    game.currentscene = "levelselect"
    

    
    // kolla kollisioner mellan entiteterna.
  }

  public draw() {
    imageMode(CORNER);
    image(images.levelbg, 0, 0, width, height);
    // for (const entity of this.entities) {
    //   entity.draw();
    // }
    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].draw();
    }
  }
}
