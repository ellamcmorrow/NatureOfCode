# 07_Random_Gaussian_xLocation

Ellipse drawn in a line on the x axis.
Spread out by the x value using randomGaussian. 
This is a normal distribution. 

Most concentrated ellipses in the centre because of the standard deviation - 60 this is close to one standard deviation thats why it is concentrated.

As it moves away from centre they are more transparent.

```js
function draw(){
  //only manipulating the x direction
	var xloc=randomGaussian();  // --> normal distribution
	var sd=60; // close to one standard deviation
	var mean=width/2; // average 
	xloc = (xloc * sd) + mean; //this formula decides how they will be distributed


}
```
