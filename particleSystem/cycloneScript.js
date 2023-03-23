let particles = [];
let stopped = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(220, 100, 30);

  if (!stopped) {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle());
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    if (particles[i].isOutside() || particles[i].lifetime <= 0) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  stopped = !stopped;
}

class Particle {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.size = random(2, 8);
    this.lifetime = random(100, 200);
    this.hue = random(180, 230);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    let mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);

    if (mouseDist < 100) {
      let force = p5.Vector.sub(this.pos, createVector(mouseX, mouseY));
      force.normalize();
      force.mult(1 - mouseDist / 100);
      this.applyForce(force);
    }

    let center = createVector(width / 2, height / 2);
    let centerForce = p5.Vector.sub(center, this.pos);
    centerForce.normalize();
    centerForce.mult(0.1);
    this.applyForce(centerForce);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.limit(3);
    this.lifetime -= 1;
  }

  isOutside() {
    return (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    );
  }

  display() {
    noStroke();
    fill(this.hue, 100, 100, this.lifetime);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
