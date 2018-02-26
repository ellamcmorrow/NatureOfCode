function Mover(m,x,y) {

  this.mass = m;
  this.location = createVector(x,y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector(0,0);
}


// Newton's 2nd law: F = M * A
//a force has magnitude and direction
Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force,this.mass);
  this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);

  this.location.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  stroke(155);
  strokeWeight(2);
  fill(255);
  ellipse(this.location.x,this.location.y,this.mass*16,this.mass*16);
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.location.y > (height - this.mass*8)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.9;
    this.location.y = (height - this.mass*8);
  }
};