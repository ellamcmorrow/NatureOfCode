class Pendulum {

  constructor(origin, r) {
    // Fill all variables
    this.origin = origin.copy();
    this.position = createVector();
    this.r = r;
    this.angle = PI / 4;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995; 
    this.ballr = 48.0; 
  }
  go() {
    this.update();
    this.display();
  };

  // Function to update position
  update() {
    var gravity = 0.4; 
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle); // Calculate acceleration 
    this.aVelocity += this.aAcceleration; 
    this.aVelocity *= this.damping; 
    this.angle += this.aVelocity; // Increment angle
  }

  display() {
    this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0); // Polar to cartesian conversion
    this.position.add(this.origin); // Make sure the position is relative to the pendulum's origin

    stroke(255);
    strokeWeight(2);
    // Draw the arm
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    ellipseMode(CENTER);
    fill(255,255,224);
    // Draw the ball
    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  }
}