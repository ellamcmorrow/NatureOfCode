var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	background(127);
	walker= new Walker(); //create new walker object 
	
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	fill(0,15); //15% opacity
	rect(0,0,width,height);

	walker.render();
	walker.step();
}
//making the walker class 
function Walker(){
	this.x= width/2;
	this.xOff= random(1000); //choose a random between 0-1000 
	//deterministic --> the same number will be chosen depending on what value you put in.
	//if there are two values use different numbers

	this.render=function(){
		noStroke();
		fill(255,45,0,50);//rgb 50% opacity
		ellipse(this.x,500,40,40);
		fill(200,180,80); //fill the ellipse
		
	}

	this.step=function(){
		this.x=map(noise(this.xOff),0,1,0,width); //get noise value for current time --> between 0 and 1  map it between what we want 0 and the width 
		this.xOff+=0.005;

		}
	}
