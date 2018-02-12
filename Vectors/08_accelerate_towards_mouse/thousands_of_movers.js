//var mover;
var movers=[];

function setup(){
	createCanvas(800,800);
	background(255);
	for (var i=0; i<700 ; i++){
		movers[i]= new Mover();
	}

}

function draw(){
	background(0);

	for (var i=0; i<movers.length ; i++){
	movers[i].render();
	movers[i].update();
	movers[i].checkEdges();
 }
}
function Mover(){
	
	this.acceleration=createVector();
	this.velocity=createVector(2,2);
	this.position=createVector(Math.floor(random(0,800)),Math.floor(random(0,800)));

	this.render=function(){
		
		noStroke();
		fill(Math.floor(random(0,255)),Math.floor(random(0,255)),Math.floor(random(0,255)));
		ellipse(this.position.x,this.position.y,3,3);

		this.velocity.add(this.acceleration); //VALV
	    this.position.add(this.velocity);

	}

	this.update=function(){
	var mouse=createVector(mouseX,mouseY);

	this.velocity.limit(10);
	this.acceleration=p5.Vector.sub(mouse,this.position);
	this.acceleration.setMag(0.3);

	
	this.acceleration.mult(2);
}


this.checkEdges=function(){
	if(this.position.x >width || this.position.x<0){
		this.velocity.x=this.velocity.x*-1;
	}
	if(this.position.y > height|| this.position.y<0){
		this.velocity.y=this.velocity.y*-1;
	}
}
}