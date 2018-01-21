var yOff=1000.0;//random moment in time offset by an amount 
//static function called once when page loads
function setup(){
	frameRate(1);
	createCanvas(1200,1000);
	pixelDensity(1); //necessary to fix any HD retina display issues 
	noiseDetail(10);
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
		var xOff=100.0;
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; //formula to manipulate x,y's
			var bright=map(noise(xOff,yOff),0,1,0,255); //scale it to this range

	/*R*/	pixels[index+0]=bright; //change each pixel array value
	/*G*/	pixels[index+1]=bright;
	/*B*/	pixels[index+2]=bright;
	/*A*/	pixels[index+3]=255; 
	xOff +=0.02; //increment xOff value by .02
}
yOff +=0.02; // if you increment it by too much clouds won't be seen
}
	updatePixels(); //apply to canvas

}
