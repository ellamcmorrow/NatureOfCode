//var mover;
var movers=[];
function setup(){
	createCanvas(800,800);
	background(255);
	for (var i=0; i<20 ; i++){
		movers[i]= new Mover();
	}

}

function draw(){
	background(255);

	for (var i=0; i<20 ; i++){
	movers[i].render();
	movers[i].update();
	movers[i].checkEdges();
}

}

function Mover(){

	this.position=createVector(Math.floor(random(0,800)),Math.floor(random(0,800)));
	this.velocity=createVector(0.2,0.9);
	this.acceleration=createVector(Math.floor(random(0,1)),Math.floor(random(0,1)));

	this.render=function(){
		noStroke();
		fill(Math.floor(random(150,255)));
		ellipse(this.position.x,this.position.y,30,30);

	}
	this.update=function(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);

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