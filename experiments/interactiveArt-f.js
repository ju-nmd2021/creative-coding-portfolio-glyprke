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
      push();
      translate(this.position.x, this.position.y);
      rotate(this.lifespan);
      noStroke();
      fill(random(140, 255), random(0, 255), random(125, 255), this.lifespan);
      rect(0, 0, 10, 10);
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
    for (let i = 0; i < 200; i++) {
      const px = x + random(-5, 5);
      const py = y + random(-5, 5);
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
  }
  
  function mouseClicked() {
    generateParticles(mouseX, mouseY);
  }