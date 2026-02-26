class LevelSelect {
private ck: { x: number; y: number; r: number; id: number }[] = [];

constructor() {}

public update() {
if (this.ck.length === 0) this.makeCircle();
}

public draw() {
background(250, 200, 0);

push();
fill(50);
textAlign(CENTER, TOP);
textSize(28);
text("Choose level", width / 2, 30);
pop();

for (const c of this.ck) {
const unlocked = this.isUnlocked(c.id);

push();
stroke(60);
strokeWeight(6);
if (unlocked) fill(245);
else fill(170);

circle(c.x, c.y, c.r * 2);

noStroke();
fill(40);
textAlign(CENTER, CENTER);
textSize(22);
text(c.id + 1, c.x, c.y);

this.drawStars(c.x, c.y - c.r - 15, game.stars[c.id]);
pop();
}
}

public onMousePressed() {
for (const c of this.ck) {
const d = dist(mouseX, mouseY, c.x, c.y);
if (d > c.r) continue;

if (!this.isUnlocked(c.id)) continue;

game.level = new Level(c.id);
game.state = "level";
return;
}
}

private isUnlocked(id: number) {
for (let i = 0; i < game.unlocked.length; i++) {
if (game.unlocked[i] === id) return true;
}
return false;
}

private drawStars(x: number, y: number, stars: number) {
for (let i = 0; i < 3; i++) {
if (i < stars) fill(255, 220, 50);
else fill(130);

noStroke();
circle(x + (i - 1) * 16, y, 10);
}
}

private makeCircle() {
this.ck = [];

const cols = 5;
const rows = 2;

const startX = width * 0.2;
const startY = height * 0.4;
const gapX = width * 0.15;
const gapY = height * 0.25;

let id = 0;

for (let r = 0; r < rows; r++) {
for (let c = 0; c < cols; c++) {
this.ck.push({
x: startX + c * gapX,
y: startY + r * gapY,
r: 34,
id: id,
});
id++;
}
}
}
}

