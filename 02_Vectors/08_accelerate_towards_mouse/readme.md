# 08_Acceleration_towards_mouse
In this example we want to create objects accelerating towards the mouse.</br>
In order to add two PVector objects together and return the result as a new PVector, we must use the static add() function.</b>
The result of a static function is held in a new vector.</br>
We create an empty acceleration vector because it will be  created in a static method later.</br>


	```js
	this.velocity.limit(10);
	this.acceleration=p5.Vector.sub(mouse,this.position);
	this.acceleration.setMag(0.3);
	```

A static function is created for acceleration.</br>
Here  the two vectors mouse and position are kept intact. </br>
The inbuilt p5 vector function allows us to create a new vector.</br>
</br>
 