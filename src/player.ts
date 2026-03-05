/// <reference path="bird.ts" />
/// <reference path="entity.ts" />

class Player extends Entity implements IScreen {
  private bird: Bird;
  private abilityUsed: boolean = false;
  private state: "idle" | "drag" | "fly" = "idle";
  public isClone: boolean = false;

  radius: number;
  private dragDamping: number = 0.98;

  private isDragging: boolean = false;
  public isLaunched: boolean = false;

  private startPos: p5.Vector;
  private dragPos: p5.Vector;
  // Används av blackPole för studseffekt
  public getVelocity() {
    return this.velocity;
  }
  // Sätter ny hastighet när spelaren studsar (blackPole)
  public bounceBack(x: number, y: number) {
    this.velocity.x = x;
    this.velocity.y = y;
  }

  constructor(bird: Bird) {
    const position = createVector(272, height - 250);

    super(
      bird.spriteIdle,
      position.x,
      position.y,
      bird.radius * 2,
      bird.radius * 2,
    );

    this.bird = bird;
    this.radius = bird.radius;

    this.startPos = position.copy();
    this.dragPos = position.copy();
  }

  public onCollision(_other: Entity): void {
    // this.destroy();
  }

  private mousePressed() {
    if (!mouseIsPressed || this.isLaunched) return;

    const d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < this.radius) {
      this.isDragging = true;
      this.state = "drag";
    }
  }

  private mouseDragged() {
    if (!this.isDragging || this.isLaunched) return;

    this.dragPos.set(mouseX, mouseY);

    const maxPull = 120;
    const diff = p5.Vector.sub(this.dragPos, this.startPos);

    if (diff.mag() > maxPull) {
      diff.setMag(maxPull);
      this.dragPos = p5.Vector.add(this.startPos, diff);
    }

    this.position.set(this.dragPos);
  }

  private mouseReleased() {
    if (mouseIsPressed || !this.isDragging || this.isLaunched) return;

    this.isDragging = false;
    this.isLaunched = true;
    this.state = "fly";

    // Here you can adjust the speed of the bird
    const force = p5.Vector.sub(this.startPos, this.dragPos).mult(0.3);
    this.velocity.add(force);
  }

  private handleAbilities() {
    if (!this.abilityUsed && this.bird.ability === "dash") {
      if (mouseIsPressed) {

        game.dashTrials.push(
          new DashTrail(this.position.x, this.position.y, this.velocity, color(255, 255, 100)),
        );

        this.velocity.x *= 2;
        this.velocity.y *= 0.8;
        this.abilityUsed = true;
      }
    }

    if (!this.abilityUsed && this.bird.ability === "split") {
      if (mouseIsPressed) {
        this.splitIntoThree();
        this.abilityUsed = true;
        this.alive = false;
        return;
      }
    }

    if (!this.abilityUsed && this.bird.ability === "bomb") {
      if (mouseIsPressed) {
        this.explode();
        this.abilityUsed = true;
        this.alive = false;
        return;
      }
    }
  }

  update() {
    this.mousePressed();
    this.mouseDragged();
    this.mouseReleased();

    // Destroy om player faller under skärmen
    if (this.position.y > height + 1000) {
      this.alive = false;
      return;
    }

    if (this.isLaunched) {
      this.handleAbilities();
    }

    if (!this.isLaunched) return;

    if (!this.isLaunched && !this.isDragging) {
      this.state = "idle";
    }
 
    this.velocity.y += this.gravity;
    this.velocity.mult(this.dragDamping);
    this.position.add(this.velocity);

    if (frameCount % 2 === 0 && this.velocity.mag() > 0.5) {
      let c: p5.Color;
      if (this.bird.id === 0) c = color(220, 40,40);
      else if(this.bird.id ===1) c = color(40, 200, 80);
      else if(this.bird.id ===2) c = color(60, 120, 255);
      else c = color(170, 80, 220);
      game.feathers.push(
      new Feather(this.position.x, this.position.y, this.velocity, c),
      );
    }
  }

 draw() {
  // Rita slingshot band
  if (this.isDragging) {
    push();
    stroke(112, 0, 0);
    strokeWeight(6);
    line(this.startPos.x, this.startPos.y, this.position.x, this.position.y);
    pop();
  }

  // Välj sprite baserat på state
  let img;
  if (this.state === "idle") img = this.bird.spriteIdle;
  else if (this.state === "drag") img = this.bird.spriteDrag;
  else img = this.bird.spriteFly;

  // Rita fågeln
  push();
  imageMode(CENTER);
  image(img, this.position.x, this.position.y, this.size.x, this.size.y);
  pop();
}

  reset() {
    this.position.set(this.startPos);
    this.velocity.set(0, 0);
    this.isLaunched = false;
    this.isDragging = false;
  }

  private splitIntoThree() {
    if (!game.currentLevel) return;

    const angles = [-0.3, 0, 0.3];

    for (let a of angles) {
      const newVel = this.velocity.copy().rotate(a).mult(0.9);

      const smallBird = new Player(
        new Bird(
  this.bird.id,
  this.bird.name,
  this.bird.spriteIdle,
  this.bird.spriteDrag,
  this.bird.spriteFly,
  this.bird.radius * 0.6,
  this.bird.power * 0.7,
  this.bird.weight * 0.7,
  "none"
)
        
      );
      smallBird.isClone = true;
      smallBird.position = this.position.copy();
      smallBird.velocity = newVel;
      smallBird.isLaunched = true;

      game.currentLevel.entities.push(smallBird);
    }

    this.alive = false;

    game.selectedBirds.shift();

    game.splitDelayActive = true;

   setTimeout(() => {
  game.splitDelayActive = false;
}, 2000);
  }

  private explode() {
    if (!game.currentLevel) return;

    const explosionRadius = 250;

    game.explosions.push(
      new Explosion(this.position.x, this.position.y, color(255, 150, 0)),
    )

    for (let e of game.currentLevel.entities) {
      if (e === this) continue;

      const d = dist(
        this.position.x,
        this.position.y,
        e.position.x,
        e.position.y,
      );

      if (d < explosionRadius) {
        const force = p5.Vector.sub(e.position, this.position).setMag(
          (explosionRadius - d) * 0.2,
        );

        e.applyForce(force);

        if (e instanceof Pig) e.alive = false;
        if (e instanceof Pole) e.alive = false;
      }
    }

    this.alive = false;
    game.selectedBirds.shift();

    if (game.selectedBirds.length > 0) return;

    game.bombDelayActive = true;

    setTimeout(() => {
      game.bombDelayActive = false;
      const pigsLeft = game.currentLevel?.getPigs().length ?? 0;

      if (pigsLeft === 0) {
        game.currentScreen = new WinningScreen();
      } else {
        game.currentScreen = new GameOverScreen();
      }
    }, 2000);
  }
}