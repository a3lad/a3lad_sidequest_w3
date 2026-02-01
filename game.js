let stars = [];
let score = 0;
let gameDuration = 30; // seconds
let startTime;

function resetGame() {
  stars = [];
  score = 0;
  startTime = millis();
}

function drawGame() {
  background(10, 10, 30);

  // Timer
  let timeLeft = gameDuration - floor((millis() - startTime) / 1000);
  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text("Time: " + max(timeLeft, 0), 20, 20);
  text("Stars: " + score, 20, 50);

  // End game when time runs out
  if (timeLeft <= 0) {
    currentScreen = "win";
    return;
  }

  // Randomly spawn stars
  if (random(1) < 0.03) {
    stars.push({
      x: random(50, width - 50),
      y: random(80, height - 50),
      size: random(20, 35),
      life: 60, // frames before disappearing
    });
  }

  // Draw stars
  for (let i = stars.length - 1; i >= 0; i--) {
    let s = stars[i];

    drawStar(s.x, s.y, s.size);

    s.life--;
    if (s.life <= 0) {
      stars.splice(i, 1);
    }
  }
}

function drawStar(x, y, r) {
  push();
  translate(x, y);
  fill(255, 215, 0);
  noStroke();
  beginShape();
  for (let i = 0; i < 10; i++) {
    let angle = (TWO_PI * i) / 10;
    let radius = i % 2 === 0 ? r : r / 2;
    vertex(cos(angle) * radius, sin(angle) * radius);
  }
  endShape(CLOSE);
  pop();
}

function gameMousePressed() {
  for (let i = stars.length - 1; i >= 0; i--) {
    let s = stars[i];
    if (dist(mouseX, mouseY, s.x, s.y) < s.size) {
      score++;
      stars.splice(i, 1);
      break;
    }
  }
}
