var movers=[];
var numOfMovers=10;

function setup(){
	createCanvas(800,800);
	for(var i=0;i<numOfMovers;i++){
		movers[i]= new Mover(Math.floor(random(10,20)));
	}


}

function draw(){
	background(105,105,105);

	for(var i=0;i<movers.length;i++)
	{
		var wind =createVector(0.2,0); //blowing in x direction
		var gravity=createVector(0,0.1 * movers[i].mass); //gravity only happens in the y direction 
		//gravity is not effected by mass.

		var c=0.5; //coefficient of friction
		var normal =1; //reactive force
		var frictionMag=c * normal;
		var friction=p5.Vector.mult(movers[i].velocity,-1);
		friction.normalize();
		friction.mult(frictionMag);

	//	movers[i].applyForce(wind);
	//	movers[i].applyForce(gravity);
		movers[i].applyForce(friction);

		movers[i].checkEdges();
		movers[i].update();
		movers[i].display();
}



}

