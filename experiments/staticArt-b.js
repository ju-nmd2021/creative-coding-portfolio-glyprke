// Perlin Noise inspired by https://codepen.io/pixelkind/pen/wvRMVwy

let t = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function bBackground(){
  noiseSeed(100);
  noStroke();
  const divider = 0.010;
  for (let x = 0; x < innerWidth; x++) {
    for (let y = 0; y < innerHeight; y++) {
      const value = noise(x * divider , y * divider) * 300;

// I was looking for ways to change color of the project. Chatgpt suggested me to change color by using map function to change the color. To understand how map function works i checked the reference page. Line 16 & 17 inspired by https://p5js.org/reference/#/p5/map line & Chatgpt
      const g = map(value, 0, 255, 40, 255);
      const b = map(value, 0, 255, 200, 255);
      
      fill(0, g, b, 100);
      rect(x, y, 20, 1);
    }
  }

}


function draw() {
  background(255);
  bBackground();
}