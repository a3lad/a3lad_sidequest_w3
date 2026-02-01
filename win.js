function drawWin() {
  background(114, 48, 137);
  drawBackgroundStars();
  fill(255);
  textAlign(CENTER, CENTER);

  textSize(46);
  text("TIME'S UP!", width / 2, 180);

  textSize(28);
  text("You collected " + score + " stars!", width / 2, 280);

  // Button back to instructions
  fill(255, 204, 0);
  rect(width / 2 - 130, 380, 260, 60, 12);

  fill(114, 48, 137);
  textSize(26);
  text("PLAY AGAIN", width / 2, 413);
}

function winMousePressed() {
  if (
    mouseX > width / 2 - 130 &&
    mouseX < width / 2 + 130 &&
    mouseY > 380 &&
    mouseY < 440
  ) {
    currentScreen = "start";
  }
}
