
let circleSize;
let randomWeight;

function setup() {
    createCanvas(innerWidth, innerHeight);
    
}

function draw() {
  background(0);
  push();
  
  circleSize = random(5,50);
  randomWeight = random(1,5);
  
  strokeWeight(randomWeight);
  stroke(255);
  fill(255);
  circle(50, 200,circleSize);
  pop();
    
}
