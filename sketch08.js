//static function called once when page loads
function setup(){
	createCanvas(320,640);
	background(200,100,255); //purple background

}
//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
//spread circles out in two directions
	var xloc=randomGaussian();  // --> normal distribution
	var yloc=randomGaussian(); 

	var xsd=100; //standard deviation
	var ysd=40;	//maniputlation the y value - more dispersion

	var xMean=width/2; // average x val
	var yMean=width/2; // average y val


	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	var randomColour=240;

	this.fill(randomColour,70); 
	this.noStroke();
	this.ellipse(xloc,yloc,16,16); 


}

