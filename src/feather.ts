class Feather {
private pos: p5.Vector;
private vel: p5.Vector;
private life: number;
private col: p5.Color;

constructor(x: number, y: number, baseVel: p5.Vector, col: p5.Color) {
this.pos = createVector(x, y);
this.vel = baseVel.copy().mult(-0.15);
this.vel.x += random(-1.5, 1.5);
this.vel.y += random(-1.5, 1.5);
this.life = 40;
this.col = col;
}

public update() {
this.life--;
this.vel.y += 0.05;
this.vel.mult(0.98);
this.pos.add(this.vel);
}

public draw() {
push();
const a = map(this.life, 0, 40, 0, 150);
noStroke();
fill(red(this.col), green(this.col), blue(this.col), a);
ellipse(this.pos.x, this.pos.y, 10, 4);
pop();
}

public isDead() {
return this.life <= 0;
}
}