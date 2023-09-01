let positionX = 20;
let positionY = 20;
let width = 30;
let height =30;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(250,230,220)
  
  fill(random(255), random(255), random(255));
  rect(positionX, positionY,width, height)
  noLoop();
  
}