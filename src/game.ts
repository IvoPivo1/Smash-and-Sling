class Game {
  private state: string;

  private playBtn = { x: 0, y: 0, r: 70 };
  private settingsBtn = { x: 70, y: 70, r: 26 };

  
  private howToStart: number = 0;
  private howToDuration: number = 9000; 
  

  constructor() {
    
    
    this.state = "howto";
    this.howToStart = millis();
    
  }

  public update() {
    this.playBtn.x = width * 0.5;
    this.playBtn.y = height * 0.53;

    
    if (this.state === "howto") {
      const passed = millis() - this.howToStart;
      if (passed > this.howToDuration) {
        this.state = "menu";
      }
    }
    
  }

  public draw() {

    if (this.state === "howto") {
      this.drawHowTo();
    }
    else
    
    if (this.state === "menu") this.drawMenu();
    else if (this.state === "game") this.drawGame();
    else if (this.state === "settings") this.drawSettings();
  }

  public onMousePressed() {

   
    if (this.state === "howto") {
      this.state = "menu";
      return;
    }
    

    if (this.state === "menu") {
      if (this.hitCircle(this.playBtn)) {
        this.state = "game";
        return;
      }
      if (this.hitCircle(this.settingsBtn)) {
        this.state = "settings";
        return;
      }
    } 
    else if (this.state === "settings") {
      this.state = "menu";
    }
  }

  private hitCircle(btn: { x: number; y: number; r: number }) {
    return dist(mouseX, mouseY, btn.x, btn.y) <= btn.r;
  }

  
  private drawHowTo() {
    background(245, 200, 0);

    push();
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    fill(40);
    textSize(width * 0.06);
    text("SLING &", width * 0.5, height * 0.08);

    fill(255, 120, 170);
    textSize(width * 0.08);
    text("SHOOT", width * 0.5, height * 0.15);
    pop();

    push();
    fill(40);
    textAlign(CENTER, CENTER);
    textSize(18);
    text(
      "Everything in this game is controlled\n" +
      "with the Left Mouse Click" +
      "Click and drag to aim." +
      "Release to shoot." +
      "Click mid-air to activate ability." +
      "Have fun!",
      width * 0.5,
      height * 0.55
    );
    pop();
  }
  

  private drawMenu() {
    background(245, 200, 0);

    push();
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    fill(40);
    textSize(width * 0.06);
    text("SLING &", width * 0.5, height * 0.08);

    fill(255, 120, 170);
    textSize(width * 0.080);
    text("SHOOT", width * 0.6, height * 0.15);
    pop();

    push();
    noStroke();
    fill(255, 240);
    circle(this.settingsBtn.x, this.settingsBtn.y, this.settingsBtn.r * 2);
    fill(40);
    textAlign(CENTER, CENTER);
    textSize(22);
    text("settings", this.settingsBtn.x, this.settingsBtn.y - 2);
    pop();

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
    pop();
  }

  private drawGame() {
    background(30);
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text("GAME SCENE ()", width * 0.5, height * 0.5);
    pop();
  }

  private drawSettings() {
    background(220, 190, 0);
    push();
    fill(30);
    textAlign(CENTER, CENTER);
    textSize(34);
    text("SETTINGS (click to go back)", width * 0.5, height * 0.5);
    pop();
  }
}
