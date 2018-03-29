//es6
var x=0;
var y=0;
var spacing=30;


function setup() {
	createCanvas(800, 600);
	background(0);

}

function draw() {

	//updatePixels(); //apply to canvas*/
stroke(255,random(0,40),random(180,255));
strokeWeight(random(random(2,4),random(1,2)));
	//probability 

//half the time backward slash half the time forward slash.

//by changing probability you change the design
	if(random(2) < 0.9){//choose a random number greater than .5 less than 1

		line(x,y, x+spacing,y+spacing);
		//0,0,10,10
	}
	else{
		line(x,y+spacing,x+spacing,y);
		//0,10,10,0
	}

x = x+spacing; //every frame move to the next spot...increasing x every time
if (x >width){ //when the it reaches the end restart the pattern
	x=0;
	y=y+spacing;
}


}




