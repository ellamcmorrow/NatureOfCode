# 12_pixel_array_fuzzy_screen
</br>
In the nested for loop we create a variable called bright. </br>
This variable equates to a random number between 0 and 255. </br>
By making one of the index’s in our pixel array equal to this random number it creates a fuzzy effect.</br>Because it’s refreshing a different number every time the frame loads.</br>

```js
	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; //formula to manipulate x,y's
			var brightness=random(255);

	/*R*/	pixels[index+0]=255; //change each pixel array value
	/*G*/	pixels[index+1]=bright;
	/*B*/	pixels[index+2]=bright;;
	/*A*/	pixels[index+3]=255; 
}
//fuzzyness created
}
	updatePixels(); //apply to canvas

}

```