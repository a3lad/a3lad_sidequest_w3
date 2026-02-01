let bgStars = [];

for (let i = 0; i < 120; i++) {
  bgStars.push({
    x: random(windowWidth),
    y: random(windowHeight),
    size: random(1, 3),
    twinkle: random(TWO_PI),
  });
}

function drawStart() {
  background(114, 48, 137);
  drawBackgroundStars();
  fill(255);
  textAlign(CENTER, CENTER);

  textSize(48);
  text("⭐ Star Catcher ⭐", width / 2, 180);

  textSize(22);
  text(
    "Capture the stars by clicking on them to increase your score.\n" +
      "Click as many stars as you can before time runs out!\n\n" +
      "Good luck and have fun!",
    width / 2,
    310,
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

function drawBackgroundStars() {
  noStroke();

  for (let s of bgStars) {
    let brightness = map(sin(frameCount * 0.05 + s.twinkle), -1, 1, 150, 255);
    fill(brightness);
    circle(s.x, s.y, s.size);
  }
}

function regenerateBGStars() {
  bgStars = [];
  for (let i = 0; i < 120; i++) {
    bgStars.push({
      x: random(windowWidth),
      y: random(windowHeight),
      size: random(1, 3),
      twinkle: random(TWO_PI),
    });
  }
}
