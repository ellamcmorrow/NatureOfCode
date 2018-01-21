var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(320,640); //canvas width and height
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
		var choice =floor(random(4)); //random numer 1-4 - floor rounds down i.e takes off the decimal points 
		if (choice===0){
			this.x++; //move right
		}
		else if (choice===1){
			this.x--; //move left 
		}
		else if (choice===2){
			this.y++; //move up 
		}
		else{
			this.y--; //move down 
		}
		constrain(this.x,0,width); //keeps the x on the canvas between two values
		constrain(this.y,0,height);//keeps the y on the canvas between two values
	}
}
