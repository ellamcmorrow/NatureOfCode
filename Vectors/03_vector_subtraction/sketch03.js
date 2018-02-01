//static function called once when page loads
function setup(){
	createCanvas(640,360); //canvas width and height
	
	position=createVector(100,100); //holding x,y values for position
	velocity=createVector(2,2); //holding x,y values for position
	
}

function draw(){
	background(127);

var mouse=createVector(mouseX,mouseY);
var centre=createVector(width/2,height/2);
var vectorLine=mouse.sub(centre);
//subtract the vector created by mouse points from the vector from the two points 0,0 -> mouseX,mouseY

	
translate(width/2,height/2); //move grid
	stroke(0);
	strokeWeight(2);
	fill(255,128,99);
	line(0,0,vectorLine.x,vectorLine.y); 
}
