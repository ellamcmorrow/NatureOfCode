# 09_Perlin_noise
</br>
Perlin noise is used so that objects appear on the screen in a more natural and organic way.</br>
It can be used to created things such as clouds, landscapes, and patterned textures like marble.</br>
Perlin noise always returns a value between 0 and 1.</br>
noise() is an inbuilt function in p5.js.</br>
The map() function takes five arguments. First up is the value we want to map. Then we have to give it the value’s current range (minimum and maximum), followed by our desired range.</br>
</br>
In this example we are only manipulating the x value.</br>
xOff is equal to the offset of a random moment in time.</br>
We choose a random moment in time between 0-1000 miliseconds.</br>
The step function maps a moment in time to the x value.</br>
xOff increments slowly by +0.05 giving a smoothing effect. </br>
If you increment it by too much it won’t be smoothe.</br></br>

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
</br>