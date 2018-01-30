//defining the vars
var myCar;

//static function, called once when the page/app loads
function setup(){
	createCanvas(320,640);
	background(127);
	myCar= new Car();
	console.log(myCar);
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	myCar.display();
	myCar.drive();

}


function Car (){
	
	this.color= 233;
	this.xpos = width/2;


	this.display = function(){
		fill(this.color);
		rect(this.xpos,height/2,1,1);
	}

	this.drive=function(){
		this.xpos=this.xpos+1;
	}
}
