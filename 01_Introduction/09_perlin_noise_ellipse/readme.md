# 09_Perlin_noise_random_ellipse_x 
Perlin noise is used so that objects appear on the screen in a more natural and organic way.</br>

Here we are only manipulating the x value.</br>
This.x is equal to the ellipses x in the render function. </br>

xOff is equal to the offset of a random moment in time.</br>
Here we choose a random moment in time between 0-1000 miliseconds.</br>

In the step function we define what this.x is equal to. </br>
We use the inbuilt map and noise functions.</br>

Noise is random value between 0 and 1. It maps a moment in time to the number.</br>
Map changes the range values you have and to different set of range values.</br>


xOff increments slowly +0.05 giving a smoothing effect. </br>
If you increment it by too much it won’t be smoothe.</br>

```js
//making the walker class 
function Walker(){
	this.x= width/2;
	this.xOff= random(1000); 
	

	this.render=function(){
		noStroke();
		fill(255,45,0,50);//rgb 50% opacity
		ellipse(this.x,500,40,40);
		fill(200,180,80); //fill the ellipse
		
	}

	this.step=function(){
		this.x=map(noise(this.xOff),0,1,0,width); //get noise value for current time --> between 0 and 1  map it between what we want 0 and the width 
		this.xOff+=0.005;

		}
	}
```