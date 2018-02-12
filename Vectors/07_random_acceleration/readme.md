# 07 The mover 
Here we are creating objects that can move around the screen.
In order to do this we must use acceleration. 
Acceleration is the rate of change to velocity.
We keep the acceleration small so that the magnitude of the velocity is kept in a reasonable range. 
Therefor it effects the velocity. 
Velocity affects the location. 
Here we need to remember 
VALV:
Velocity -> Acceleration 
Location -> Velocity

Acceleration is used to steer as it effects the velocity, it doesn't just speed it up.
```js
this.update=function(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);

	}
 ```
We implement two new methods:
Update() which updates the screen every frame. Thus every time the acceleration is changed it makes the object move. 
The checkEdges() function ensures the object doesn't move off the screen.
A random number between 0 and 1 is chosen for the acceleration vector. 
If the number is too large the ball is drawn too far up or down the screen because acceleration effects the velocity.
This gives a better bouncing effect.
