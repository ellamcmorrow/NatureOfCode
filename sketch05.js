var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(320,640);
	background(127);
	walker= new Walker(); //create new walker object 
    console.log(walker);
}
//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
walker.render(); //drawing function written in walker class
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
		var probArray=[]; //create empty array
		//populate array with values
		probArray[0]=1; //more likely for 1 & 3 to be chosen - probability higher
		probArray[1]=1;
		probArray[2]=2;
		probArray[3]=3; //40% chance of choosing  3/1 
	    probArray[4]=3; //2/5 = 0.4 =40%

		var index=floor(random(probArray.length)); //choose random number for the length of array + floor it
		var r = probArray[index]; //
	
		constrain(this.x,0,width-1); //keeps the x on the canvas between two values
		constrain(this.y,0,height-1);//keeps the y on the canvas between two values
	};
}
