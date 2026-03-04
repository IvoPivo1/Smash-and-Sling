class DashParticle {
    position: p5.Vector;
    velocity: p5.Vector;
    life: number;
    color: p5.Color;

    constructor(x: number, y: number, dir: p5.Vector, color: p5.Color) {
        this.position = createVector(x, y);
        this.velocity = dir.copy().mult(-1).mult(random(2, 6));
        this.life = 200;
        this.color = color;
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.mult(0.9);
        this.life -= 10;
    }

    draw() {
        push();
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color), this.life);
        circle(this.position.x, this.position.y, 10);
        pop();
    }

    isDead() {
        return this.life <= 0;
    }
}

class DashTrail {
    particles: DashParticle[] = [];

    constructor(x: number, y: number, dir: p5.Vector, color: p5.Color) {
        for (let i = 0; i < 12; i++) {
            this.particles.push(new DashParticle(x, y, dir, color));
        }
    }

    update() {
        for (let p of this.particles) p.update();
        this.particles = this.particles.filter(p => !p.isDead());
    }

    draw() {
        for (let p of this.particles) p.draw();
    }

    isDone() {
        return this.particles.length === 0;
    }
}
