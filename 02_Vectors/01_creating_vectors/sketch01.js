var position;//location
var velocity; //speed


//static function called once when page loads
function setup(){
	createCanvas(640,360); //canvas width and height
	
	position=createVector(100,100); //holding x,y values for position
	velocity=createVector(2,2); //holding x,y values for position
	
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	background(127);
	position.x=position.x+velocity.x;
	position.y=position.y+velocity.y;

	if(position.x > width || position.x<0){
		velocity.x=velocity.x*-1;  //keep ball on the screen
	}
	if(position.y > height || position.y<0){
		velocity.y=velocity.y*-1;
	}

	stroke(0);
	strokeWeight(2);
	fill(255,128,200);
	ellipse(position.x,position.y,50,50);
}
