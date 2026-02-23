class StartScreen {
  private playBtn = { x: 0, y: 0, r: 70 };

  private musicBtn = { x: 90, y: 30, w: 90, h: 80 };
  private soundBtn = { x: 90, y: 50, w: 90, h: 80 };

  constructor() {}

  public update() {
    this.playBtn.x = width * 0.5;
    this.playBtn.y = height * 0.53;
  }

  public onMousePressed() {
    if (this.hitRect(this.musicBtn)) {
      musicOn = !musicOn;
      if (musicOn) {
        if (!music.mystery.isPlaying()) {
          music.mystery.loop();
        }
      } else {
        music.mystery.stop();
      }
      return;
    }
    if (this.hitRect(this.soundBtn)) {
      soundOn = !soundOn;
    }
    if (this.hitCircle(this.playBtn)) {
      game.state = "level";
    }

    {
    }
  }

  private hitRect(btn: { x: number; y: number; w: number; h: number }) {
    return (
      mouseX >= btn.x &&
      mouseX <= btn.x + btn.w &&
      mouseY >= btn.y &&
      mouseY <= btn.y + btn.h
    );
  }

  private hitCircle(btn: { x: number; y: number; r: number }) {
    return dist(mouseX, mouseY, btn.x, btn.y) <= btn.r;
  }
private drawMuteX(btn: { x: number; y: number; w: number; h: number }) {
    const pad = 25;
    const x1 = btn.x + pad;
    const y1 = btn.y + pad;
    const x2 = btn.x + btn.w - pad;
    const y2 = btn.y + btn.h - pad;
    line(x1, y1, x2, y2);
    line(x1, y2, x2, y1);
  }

  public draw() {
    background(245, 200, 0);

    push();
    fill(120);
    stroke(60);
    strokeWeight(6);
    circle(this.playBtn.x, this.playBtn.y, this.playBtn.r * 2);

    noStroke();
    fill(250);
    const x = this.playBtn.x;
    const y = this.playBtn.y;
    triangle(x - 12, y - 20, x - 12, y + 20, x + 22, y);
    image(images.slingshot, 40, 690, 70, 80);
    image(images.logo, 20, 30, 90, 80);
    image(images.logo2, 90, 30, 90, 80);

    push();
    stroke(220,0,0);
    strokeWeight(4);
    strokeCap(SQUARE);
    if (!musicOn) this.drawMuteX(this.musicBtn);
    if (!soundOn) this.drawMuteX(this.soundBtn);
    pop();

    push();
    imageMode("center");
    image(images.pink, width / 2, 150, 600, 500);
    pop();
  }
}
