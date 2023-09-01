let size= 250;
let lineAmount = 150;


function setup() {
  createCanvas(400,400);

}

function draw() {
  
  // random colors of the ellipse
  fill(random(255), random(150), random(165));
  noLoop();
  
  ellipse(250,250,size,size);
  fill(255);
  
  push();
  //lines inside of the ellipse
  translate(250,250);
  // inspired by https://www.youtube.com/watch?v=Efnl8kPL6Kw
  for (let i = 0; i < lineAmount; i ++){
    line(0, 0, 0, size/2);
    rotate(360 /10);
  }
  pop();
      
}