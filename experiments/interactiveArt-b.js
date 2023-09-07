let angle = 0;
let velocity = 0;
let acceleration = 0.009;
let size = 15;
let inc = 5;


// acceleration and velocity inspired by https://www.youtube.com/watch?v=i2ROE_mAhU0

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function r1(){

  translate(200,200);
  rotate(angle);
  let div = 5;
  
  for( let k=0; k < 2; k ++){
    push();
      angleMode(RADIANS);
      for (let i = 0; i < 10; i ++) {
        fill(200, 205, 200, 100);
        ellipse(0, 0, size, 175);
        rotate(PI / 3 );
      }
    pop();
  } 

  size = size - inc;
  angle += velocity;
  velocity += acceleration;
}

function draw() {
  
  background(220);
  r1();
  
}