let currentScreen = "start"; // "start" | "game" | "win"

function setup() {
  createCanvas(windowWidth, windowHeight);
  regenerateBGStars();
  textFont("Arial");
}

function draw() {
  background(20);

  if (currentScreen === "start") {
    drawStart();
  } else if (currentScreen === "game") {
    drawGame();
  } else if (currentScreen === "win") {
    drawWin();
  }
}

function mousePressed() {
  if (currentScreen === "start") {
    startMousePressed();
  } else if (currentScreen === "game") {
    gameMousePressed();
  } else if (currentScreen === "win") {
    winMousePressed();
  }
}
