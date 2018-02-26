var movers = [];
var numOfMovers=15;

// Liquid
var liquid;

function setup() {
  createCanvas(800, 600);
  for(var i=0;i<numOfMovers;i++){
    movers[i]= new Mover(Math.floor(random(4)));
  }
  reset();
  // Create liquid object
  liquid = new Liquid(0, height/2, width, height/2, 0.2);
}

function draw() {
  background(220, 180, 200);
  
  // display liquid class
  liquid.display();

  for (var i = 0; i <movers.length; i++) {

    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) { //.contains function from the liquid class
      // Calculate drag force
      var dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    // gravity scaled by mass 
    var gravity = createVector(0, 0.1*movers[i].mass);
    // apply the force of gravity to the mover object
    movers[i].applyForce(gravity);

    // call functions
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }

}

function mousePressed() {
  reset();
}


// Restart all the Mover objects randomly
function reset() {
  for (var i = 0; i < 9; i++) {
    movers[i] = new Mover(random(0.5, 3), 40+i*70, 0);
  }
}