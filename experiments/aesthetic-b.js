// all inspired by https://codepen.io/pixelkind/pen/VwqKyoP

class Particle {
    constructor(x, y) {
      this.position = createVector(x, y);
      const a = Math.random() * Math.PI * 2;
      const v = 0.2 + Math.random();
      this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);
      this.lifespan = 100 + Math.random() * 100;
    }
  
    update() {
      this.lifespan--;
  
      this.velocity.mult(0.99);
      this.position.add(this.velocity);
    }
  
    draw() {
      let r = map(this.lifespan, 0, 245, 245, 45);
      let g = map(this.lifespan, 0, 245, 0, 45);
      let b = map(this.lifespan, 0, 255, 0, 50);
      push();
      translate(this.position.x, this.position.y);
      rotate(this.lifespan);
      noStroke();
      fill(r,g,b, this.lifespan);
      ellipse(0, 0, 5, 5);
      pop();
    }
  
    isDead() {
      return this.lifespan <= 0;
    }
  }
  
  function setup() {
    createCanvas(innerWidth, innerHeight);
  }
  
  function generateParticles(x, y) {
    for (let i = 0; i < 20; i++) {
      const px = x + random(-3, 3);
      const py = y + random(-3, 3);
      const particle = new Particle(px, py);
      particles.push(particle);
    }
  }
  
  let particles = [];
  
  function draw() {
    background(255);
  
    for (let particle of particles) {
      particle.update();
      particle.draw();
  
      if (particle.isDead()) {
        particles.splice(particles.indexOf(particle), 1);
      }
    }
     generateParticles(mouseX, mouseY);
  }