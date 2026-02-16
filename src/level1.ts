class Level1 {
  //  körs varje frame
  public update() {}

  // ritar banan varje frame
  public draw() {
    push();
    fill(255);
    noStroke();

    // En vit pinne som står på marken
    rect(900, height - 250, 12, 250);

    pop();
  }
}
