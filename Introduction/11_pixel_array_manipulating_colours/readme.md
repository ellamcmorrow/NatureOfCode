# 11_Pixel_Array_Maipulating_Colours
We need to use pixelDensity(1); in set up to fix HD retina display issues.
When we want to work with pixels we use the loadPixels() inbuilt function in draw. 
To apply it to the canvas we use updatePixels();
The canvas is made up of pixels. 
We can manipulate these pixels using the pixel array.
We create a nested for loop to loop through the x,y values.
Within this for loop we want to manipulate the colours on the canvas. 
We do this by creating a variable called index and equating it to the formula “x+y width*4”.
This formula targets a pixel. 
Each pixel is made up of an array [R,G,B,A]. 
We equate each pixel array index to one of these values. These allow us to manipulate the colour on the screen.

```js
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; //formula to manipulat x,y's
	/*R*/	pixels[index+0]=y/2; //change each pixel array value
	/*G*/	pixels[index+1]=255;
	/*B*/	pixels[index+2]=x/2;
	/*A*/	pixels[index+3]=255;
	}

}
	updatePixels(); //apply to canvas

}

```