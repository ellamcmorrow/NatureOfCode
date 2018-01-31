# 01_Random_Cars
An object contains data and functionality eg. car
A class is a template for each object  eg. car type = Volvo

First we define a variable that can hold the object. 

Function setup is a static function called once. Here we create the canvas specifying width and height. And tell it to hold any new object in an object variable.

The draw function loops through each frame and calls methods created in the Car class . 
These methods define behaviours the car should have. In this case we want to display the car on the screen and make it drive.

To drive we increment the xPosition of the car to make it move.

```js


function Car (){
	
	this.color= 233;
	this.xpos = width/2;


	this.display = function(){
		fill(this.color);
		rect(this.xpos,height/2,1,1);
	}

	this.drive=function(){
		this.xpos=this.xpos+1;
	}
}
```



