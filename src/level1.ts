class Level1 {
  public update() {}

  // ritar banan varje frame
  public draw() {
    push();
    stroke(0);
    strokeWeight(2);

    fill(255);
    // bilder pig
    image(images.pig, 938, height - 220 - 40, 40, 40);

    image(images.pig, 1038, height - 220 - 40, 40, 40);

    image(images.pig, 1138, height - 320 - 40, 40, 40);

    image(images.pig, 938, height - 432 - 40, 40, 40);

    // stolpar
    rect(900, height - 220, 12, 220);

    rect(1000, height - 220, 12, 220);

    rect(1100, height - 320, 12, 320);

    rect(1200, height - 320, 12, 320);

    // top pinnar
    rect(900, height - 220, 212, 12);
    rect(1100, height - 320, 112, 12);

    // andra våningen stolpar
    rect(900, height - 210 - 12 - 210, 12, 210);
    rect(1000, height - 210 - 12 - 210, 12, 210);

    // andra våningen top pinne
    rect(900, height - 210 - 12 - 210, 112, 12);

    pop();
  }
}
