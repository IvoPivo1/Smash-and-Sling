class Bird {
  public id: number;
  public name: string;
  public sprite: p5.Image;
  public radius: number;
  public power: number;
  public weight: number;

  constructor(
    id: number,
    name: string,
    sprite: p5.Image,
    radius: number,
    power: number,
    weight: number,
  ) {
    this.id = id;
    this.name = name;
    this.sprite = sprite;
    this.radius = radius;
    this.power = power;
    this.weight = weight;
  }
}
