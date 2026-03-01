class Bird {
    public type: number;
    public sprite: p5.Image;
    public radius: number;
    public power: number;
    public weight: number;

    constructor(type: number, sprite: p5.Image, radius =35, power = 1, weight = 1){
        this.type = type;
        this.sprite= sprite;
        this.radius = radius;
        this.power = power;
        this.weight = weight;
    }


}