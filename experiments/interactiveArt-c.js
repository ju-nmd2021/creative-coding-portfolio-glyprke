let angle = 0;
let velocity = 0;
let acceleration = 0.01;

// acceleration and velocity inspired by https://www.youtube.com/watch?v=i2ROE_mAhU0

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(RADIANS);
}

function r1(){
  noStroke();
  translate(innerWidth/2 ,innerHeight/2);
  rotate(angle);
  push();
    angleMode(RADIANS);
    for (let i = 0; i < 10; i ++) {
      fill(200, 205, 200, 100);
      ellipse(0, 0, 200, 100);
      rotate(PI / 3 );
    }
  pop();
  angle += velocity;
  velocity += acceleration;
}

function draw() {
  
  background(220);
  r1();
  
}