# 11_Pixel_Array_Maipulating_Colours
We need to use pixelDensity(1); in set up to fix HD retina display issues.</br>
When we want to work with pixels we use the loadPixels() inbuilt function in draw. </br>
To apply it to the canvas we use updatePixels();</br>
The canvas is made up of pixels. </br>
We can manipulate these pixels using the pixel array.</br>
We create a nested for loop to loop through the x,y values.</br>
Within this for loop we want to manipulate the colours on the canvas. </br>
We do this by creating a variable called index and equating it to the formula.</br>
This formula targets a pixel.</br> 
Each pixel is made up of an array [R,G,B,A]. </br>
We equate each pixel array index to one of these values.</br> These allow us to manipulate the colour on the screen.</br>

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