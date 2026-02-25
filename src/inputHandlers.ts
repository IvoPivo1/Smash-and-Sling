function keyPressed() {
  if (game.state === "gameover") {
    if (key === "r" || key === "R") {
      game.level = new Level();
      game.state = "level";
    }

    if (key === "n" || key === "N") {
      game.level = new Level();
      game.state = "level";
    }
  }
}
