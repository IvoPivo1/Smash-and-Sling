/// <reference path="bird.ts" />
/// <reference path="entity.ts" />

class Player extends Entity implements IScreen {
  private bird: Bird;
  private abilityUsed: boolean = false;
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
      bird.sprite,
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

  public onCollision(other: Entity): void {
    // this.destroy();
  }

  private mousePressed() {
    if (!mouseIsPressed || this.isLaunched) return;

    const d = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (d < this.radius) {
      this.isDragging = true;
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

    // Here you can adjust the speed of the bird
    const force = p5.Vector.sub(this.startPos, this.dragPos).mult(0.3);
    this.velocity.add(force);
  }

  private handleAbilities() {

    if (!this.abilityUsed && this.bird.ability === "dash"){
      if (mouseIsPressed){
        this.velocity.x *= 2.5;
        this.velocity.y *= 0.8;
        this.abilityUsed = true;
      }
    }

    if (!this.abilityUsed && this.bird.ability === "split"){
      if (mouseIsPressed){
        this.splitIntoThree();
        this.abilityUsed = true;
        this.alive = false;
        return;
      }
    }

    if (!this.abilityUsed && this.bird.ability === "bomb"){
      if (mouseIsPressed){
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

    if (this.isLaunched){
      this.handleAbilities();
    }

    if (!this.isLaunched) return;

    this.velocity.y += this.gravity;
    this.velocity.mult(this.dragDamping);
    this.position.add(this.velocity);
  }

  draw() {
    // Draw slingshot band while dragging
    if (this.isDragging) {
      push();
      stroke(60, 40, 20);
      strokeWeight(6);
      line(this.startPos.x, this.startPos.y, this.position.x, this.position.y);
      pop();
    }

    super.draw();
  }

  reset() {
    this.position.set(this.startPos);
    this.velocity.set(0, 0);
    this.isLaunched = false;
    this.isDragging = false;
  }

  private splitIntoThree() {
    const angle = [-0.3, 0, 0.3];
    
    for (let a of angle) {
      const newVel = this.velocity.copy().rotate(a).mult(0.9);

      const smallBird = new Player(
        new Bird(
          this.bird.id,
          this.bird.name,
          this.bird.sprite,
          this.bird.radius * 0.6,
          this.bird.power * 0.7,
          this.bird.weight * 0.7,
          this.bird.ability,
        )
      );
      smallBird.position = this.position.copy();
      smallBird.velocity = newVel;
      smallBird.isLaunched = true;
      if (game.currentLevel) {
      game.currentLevel.entities.push(smallBird);
      }
      this.alive = false;
      game.selectedBirds.shift();
    }
  }

  private explode() {
  if (!game.currentLevel) return;

  const explosionRadius = 150;

  for (let e of game.currentLevel.entities) {
    if (e === this) continue;

    const d = dist(this.position.x, this.position.y, e.position.x, e.position.y);

    if (d < explosionRadius) {
      const force = p5.Vector.sub(e.position, this.position)
        .setMag((explosionRadius - d) * 0.2);

      e.applyForce(force);

      if (e instanceof Pig) e.alive = false;
      if (e instanceof Pole) e.alive = false;
    }
  }

  this.alive = false;
  game.selectedBirds.shift();
}

}
