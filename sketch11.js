
//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	pixelDensity(1); //necessary to fix any HD retina display issues 
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
	for(x =0; x<width; x++){

			var index= (x+y*width)*4; //formula to manipulat x,y's
	/*R*/	pixels[index+0]=y/2; //change each pixel array value
	/*G*/	pixels[index+1]=random(255);
	/*B*/	pixels[index+2]=x/2;
	/*A*/	pixels[index+3]=255;
	}

}

	updatePixels(); //apply to canvas

}
