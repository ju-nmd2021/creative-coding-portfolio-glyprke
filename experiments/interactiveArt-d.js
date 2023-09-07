// all lines inspired by https://editor.p5js.org/codingtrain/sketches/EZeHXBhei then i made changes

let inc = 0.010;
let start = 0.01;


function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(50);
  
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(280, 50);
    let y = noise(xoff) * width ;
    line(x, y, width / 2, height /2);
    xoff += inc;
  }
  endShape();

  start += inc;
  
}