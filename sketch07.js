

//static function called once when page loads
function setup(){
	createCanvas(320,640);
	background(127);

}
//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){

	var xloc=randomGaussian();  // --> normal distribution
	var sd=60; //standard deviation
	var mean=width/2; // average 
	xloc = (xloc * sd) + mean;

	this.fill(0,70);
	this.noStroke();
	this.ellipse(xloc,height/2,16,16); 


}

