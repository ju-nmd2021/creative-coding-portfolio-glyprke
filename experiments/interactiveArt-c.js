let angle = 0;
let velocity = 0;
let acceleration = 0.01;
let gap = 100;


// acceleration and velocity inspired by https://www.youtube.com/watch?v=i2ROE_mAhU0 then i made changes

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(RADIANS);
}

function r1(x, y){
  push();
  noStroke();
  translate(x, y);
  rotate(angle);
    angleMode(RADIANS);
    for (let i = 0; i < 10; i ++) {
      fill(200, 205, 200, 100);
      ellipse(0,0, 200, 100);
      rotate(PI / 3 );
    }
  pop();
  angle += velocity;
  velocity += acceleration;
}

function draw() {
  
  background(255);
  
  for( let x=0; x < innerWidth; x += 250){
    for (let y= 0; y < innerHeight; y += 250){
      r1(x, y);
    }
  }

}