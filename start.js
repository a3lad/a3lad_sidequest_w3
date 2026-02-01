function drawStart() {
  background(30, 30, 60);

  fill(255);
  textAlign(CENTER, CENTER);

  textSize(48);
  text("⭐ Star Catcher ⭐", width / 2, 120);

  textSize(22);
  text(
    "Stars will appear randomly on the screen.\n" +
      "Click as many stars as you can before time runs out!\n\n" +
      "Each star disappears after a short time — be quick!",
    width / 2,
    260,
  );

  // Start button
  fill(255, 204, 0);
  rect(width / 2 - 100, 400, 200, 60, 10);

  fill(0);
  textSize(24);
  text("START GAME", width / 2, 430);
}

function startMousePressed() {
  // Check if start button clicked
  if (
    mouseX > width / 2 - 100 &&
    mouseX < width / 2 + 100 &&
    mouseY > 400 &&
    mouseY < 460
  ) {
    resetGame();
    currentScreen = "game";
  }
}
