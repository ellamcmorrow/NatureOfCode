var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(320,640);
	background(127);
	walker= new Walker(); //create new walker object 
	
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	walker.render();
	walker.step();
}
//making the walker class 
function Walker(){
	this.x= width/2;
	this.y= height/2;

	this.render=function(){
		stroke(0);
		point(this.x,this.y); 
	}

	this.step=function(){
		var stepx=floor(random(-1,2)); //this produces nine outcomes including not moving 
		var stepy=floor(random(-1,2)); // therefor there is a 1/9 chance of the walker stepping in any given direction

		this.x=this.x+stepx; 
		this.y=this.y+stepy;
	
		
		constrain(this.x,0,width); //keeps the x on the canvas between two values
		constrain(this.y,0,height);//keeps the y on the canvas between two values
	}
}
