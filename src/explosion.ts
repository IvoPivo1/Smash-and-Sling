class ExplosionParticle {
    position: p5.Vector;
    velocity: p5.Vector;
    life: number;
    color: p5.Color;

    constructor(x: number, y: number, color: p5.Color) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D().mult(random(2, 8));
        this.life = 255;
        this.color = color;
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.mult(0.92);
        this.life -= 6;
    }
    
    draw() {
        push();
        noStroke();
        fill(red(this.color), green(this.color), blue(this.color), this.life);
        circle(this.position.x, this.position.y, 12);
        pop();
    }

    isDead() {
        return this.life <= 0;
    }
}

class Explosion {
    particles: ExplosionParticle[] = [];

    constructor(x: number, y: number, color: p5.Color) {
        for (let i = 0; i < 40; i++) {
            this.particles.push(new ExplosionParticle(x, y, color));
        }
    }

    update() {
        for (let p of this.particles) p.update();
        this.particles = this.particles.filter(p=> !p.isDead());
    }

    draw() {
        for (let p of this.particles) p.draw();
    }

    isDone() {
        return this.particles.length === 0;
    }
}