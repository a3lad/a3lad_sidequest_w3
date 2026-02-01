let bgStars = [];

function setupBGStars() {
  bgStars = [];
  for (let i = 0; i < 120; i++) {
    bgStars.push({
      x: random(width), // use canvas width
      y: random(height), // use canvas height
      size: random(1, 3),
      twinkle: random(TWO_PI),
    });
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
