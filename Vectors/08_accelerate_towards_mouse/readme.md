# 08_Acceleration_towards_mouse
We want to create objects accelerating towards the mouse.
To do this we must create a vector that holds the mouse points.

We create an empty acceleration vector because it will be  created in a static method later.

	```js
	this.velocity.limit(10);
	this.acceleration=p5.Vector.sub(mouse,this.position); //static function
	this.acceleration.setMag(0.3);
	```

A static function is created for the acceleration method. Here a the two vectors mouse and position are kept intact. 
The p5 vector allows us to create a new vector.
The resulting vector holds the sum of the vectors in a new vector.
 