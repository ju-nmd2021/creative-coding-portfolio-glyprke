// inspired by https://codepen.io/pixelkind/details/abPdggb

const size = 10;
const gap = 7;
const amount = 100;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(1);

  let y = (height - size * amount - gap * (amount - 1)) / 2;
  let counter = 0;
  for (let i = 0; i < width; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let k = 0; k < 100; k++) {
      push();
      translate(x, y);
      if (Math.random() > 0.3) {
        fill(random(200), 0, 0);
      }
      ellipse(0, 0, size);
      pop();
      counter++;
      x += size + gap;
    }
    y += size + gap;
  }
}