let angle = 0;
let velocity = 0;
let acceleration = 0.005;
let size = 4;
let inc = 3;
let blurEffect= 0;


// acceleration and velocity inspired by https://www.youtube.com/watch?v=i2ROE_mAhU0 then i made changes

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(RADIANS);
}

function r1(){

  translate(innerWidth/2, innerHeight/2);
  rotate(angle);
  let div = 5;
  
  for( let k=0; k < 2; k ++){
    push();
      angleMode(RADIANS);
      for (let i = 0; i < width; i ++) {
        fill(random(50, 230), random(152, 255), random(202, 255), blurEffect);
        ellipse(0, 0, size, 175);
        rotate(PI / 3 );
      }
    pop();
  } 

  size = size - inc;
  if ( size < -400){
    inc = -5;
    blurEffect= blurEffect + 5;
  } else if (size > 400){
    inc = 5;
    blurEffect= blurEffect + 5;
  }
  angle += velocity;
  velocity += acceleration;
}

function draw() {

  r1();
  
}