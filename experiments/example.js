
let size= 250;
let lineAmount = 150;
let xPosition = 0;
let yPosition = 100;
let randomWeight;

function setup() {
    createCanvas(innerWidth, innerHeight);
    
}

function shape(){
  
  // random colors of the ellipse
  fill(random(255), random(150), random(165));
  ellipse(xPosition, yPosition,size,size);
  fill(255);
  push();
  
  //lines inside of the ellipse
  translate(xPosition, yPosition);
  
  // inspired by https://www.youtube.com/watch?v=Efnl8kPL6Kw
  for (let i = 0; i < lineAmount; i ++){
    line(0, 0, 0, size/2);
    rotate(360 /8);
  }

  pop();
}

function draw() {
  
  for (let i = 0; i < 10; i++){
      xPosition = xPosition + 100
    for (let k = 0; k < 10; k++){
       shape()
       yPosition = yPosition + 100
    }   
    yPosition =100;
  }  
}
