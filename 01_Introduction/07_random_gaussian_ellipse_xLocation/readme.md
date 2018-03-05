# 07_Random_Gaussian_Ellipse
</br>
Gaussian is a form of *normal* distribution.</br> 
RandomGaussian is an inbuilt function in p5.</br> 
It helps simulate a more natural form of distribution.</br></br>

Standard deviation is how much something is spread out eg. a population </br>
The standard deviation can be calculated as the square root of the average variance or the mean.</br>
</br>
68% is one standard deviation.</br> 
98% is two standard deviations.</br> 
99.7% is three standard deviations.</br></br>
Ellipse drawn in a line on the x axis.</br>
Spread out by the x value using randomGaussian.</br> 
Most concentrated ellipses in the centre because of the standard deviation - 60 this is close to one standard deviation thats why it is concentrated.</br>
As it moves away from centre they are more transparent.</br></br>

```js
function draw(){
  //only manipulating the x direction
	var xloc=randomGaussian();  // --> normal distribution
	var sd=60; // close to one standard deviation
	var mean=width/2; // average 
	xloc = (xloc * sd) + mean; //this formula decides how they will be distributed


}
```
