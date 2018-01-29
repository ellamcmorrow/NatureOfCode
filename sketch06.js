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
//a different way of implementing 4 outcomes.
	this.step=function(){
		var choice =floor(random(4)); //random numer 1-4 - floor rounds down i.e takes off the decimal points 
		var r= random(1); //random foating no. between 0 and 1 
		if (r<0.4){ //40 % chance of moving right
			this.x++; //move right
		}
		else if (r<0.6){ //0.6 left over after 0.5 i.e move left out of .6
			this.x--; //move left 
		}
		else if (r<0.8){ // 
			this.y++; //move up 
		}
		else{
			this.y--; //move down   
		}
		constrain(this.x,0,width); //keeps the x on the canvas between two values
		constrain(this.y,0,height);//keeps the y on the canvas between two values
	}
}
