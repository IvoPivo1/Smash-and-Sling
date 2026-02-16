class Level1 {
  //  körs varje frame
  public update() {}

  // ritar banan varje frame
  public draw() {
    push();
    fill(255);
    noStroke();

    // Pinne
    rect(900, height - 220, 12, 220);

    rect(1000, height - 220, 12, 220);

    rect(1100, height - 320, 12, 320);

    rect(1200, height - 420, 12, 420);

    pop();
  }
}
