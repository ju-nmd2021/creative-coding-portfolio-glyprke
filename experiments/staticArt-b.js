// inspired by 

function setup() {
    createCanvas(innerWidth, innerHeight);
  }
  
  
function draw() {
  noiseSeed(50);
  noStroke();
  const divider = 300;
  for (let x = 0; x < innerWidth; x++) {
    for (let y = 0; y < innerHeight; y++) {
      const value = noise(x / divider, y / divider) * 255;
      fill(random(0), random(value), random(value),4);
      rect(x, y, 1000, 500);
  
    }
  }
    noLoop();
}