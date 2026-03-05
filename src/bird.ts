class Bird {
  public id: number;
  public name: string;
  public spriteIdle: p5.Image;
  public spriteDrag: p5.Image;
  public spriteFly: p5.Image;
  public radius: number;
  public power: number;
  public weight: number;
  public ability: string;

  constructor(
    id: number,
    name: string,
    spriteIdle: p5.Image,
    spriteDrag: p5.Image,
    spriteFly: p5.Image,
    radius: number,
    power: number,
    weight: number,
    ability: string
  ) {
    this.id = id;
    this.name = name;
    this.spriteIdle = spriteIdle;
    this.spriteDrag = spriteDrag;
    this.spriteFly = spriteFly;
    this.radius = radius;
    this.power = power;
    this.weight = weight;
    this.ability = ability;
  }
}
