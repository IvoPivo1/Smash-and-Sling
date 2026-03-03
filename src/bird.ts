class Bird {
  public id: number;
  public name: string;
  public sprite: p5.Image;
  public radius: number;
  public power: number;
  public weight: number;
  public ability: string;

  constructor(
    id: number,
    name: string,
    sprite: p5.Image,
    radius: number,
    power: number,
    weight: number,
    ability: string,
  ) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
    this.radius = radius;
    this.power = power;
    this.weight = weight;
    this.ability = ability;
  }
}
