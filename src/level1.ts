class Level1 {
  public update() {}

  public draw() {
    push();
    stroke(0);
    strokeWeight(2);

    fill(255);
    // image pig
    image(images.pig, 938, height - 200 - 40, 40, 40);

    image(images.pig, 1038, height - 200 - 40, 40, 40);

    image(images.pig, 1138, height - 300 - 40, 40, 40);

    image(images.pig, 938, height - 333 - 40, 40, 40);

    // poles
    rect(900, height - 200, 12, 200);

    rect(1000, height - 200, 12, 200);

    rect(1100, height - 300, 12, 300);

    rect(1200, height - 300, 12, 300);

    // top poles
    rect(900, height - 200, 212, 12);
    rect(1100, height - 300, 112, 12);

    // second floor poles
    rect(900, height - 154 - 12 - 154, 12, 120);
    rect(1000, height - 154 - 12 - 154, 12, 120);

    // second floor top pole
    rect(900, height - 160 - 12 - 160, 112, 12);

    // third floor pole
    rect(900, height - 210 - 12 - 210, 12, 100);
    rect(1000, height - 210 - 12 - 210, 12, 100);

    // third floor top pole
    rect(900, height - 210 - 12 - 210, 112, 12);

    pop();
  }
}
