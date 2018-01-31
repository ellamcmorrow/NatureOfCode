# 08_Random_Gaussian_xLocation_yLocation

Manipulating both the x and y values using randomGaussian. 

Circles will now appear up and down the screen not just left and right.
These circles are more spread out because the standard deviation is equal to 100 i.e close to three standard deviations.

```
function draw(){
//spread circles out in two directions
	var xloc=randomGaussian();  // --> normal distribution
	var yloc=randomGaussian(); 

	var xsd=100; //standard deviation
	var ysd=40;	//maniputlation the y value - more dispersion

	var xMean=width/2; // average x val
	var yMean=width/2; // average y val


	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	

}

```

