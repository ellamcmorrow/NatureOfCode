# 07 The_mover 
Here we are creating objects that can move around the screen.</br>
In order to do this we must use acceleration. </br>
Acceleration is the rate of change to velocity.</br>
We keep the acceleration small so that the magnitude of the velocity is kept in a reasonable range. </br>
Therefor it effects the velocity. </br>
Velocity affects the location. </br>
Here we need to remember </br>
VALV:</br>
Velocity -> Acceleration </br>
Location -> Velocity</br>
Acceleration is used to steer as it effects the velocity, it doesn't just speed it up.</br>
```js
this.update=function(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);

	}
 ```
</br>We implement two new methods:</br>
Update() which updates the screen every frame. Thus every time the acceleration is changed it makes the object move. </br>
The checkEdges() function ensures the object doesn't move off the screen.</br>
A random number between 0 and 1 is chosen for the acceleration vector. </br>
If the number is too large the ball is drawn too far up or down the screen because acceleration effects the velocity.</br>
This gives a better bouncing effect.
