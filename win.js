function drawWin() {
  background(20, 60, 40);
  drawBackgroundStars();
  fill(255);
  textAlign(CENTER, CENTER);

  textSize(46);
  text("⏰ Time's Up!", width / 2, 150);

  textSize(28);
  text("You collected " + score + " stars!", width / 2, 250);

  // Button back to instructions
  fill(255, 204, 0);
  rect(width / 2 - 130, 380, 260, 60, 12);

  fill(0);
  textSize(22);
  text("PLAY AGAIN", width / 2, 410);
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
