# 01_creating_vectors
Vectors allow us to store two values x and y so we don't have to write it out twice. </br>
Vectors can be created for different variables including position and velocity. </br>
There are alot of variables that can affect an object such as wind, friction and acceleration. </br>
By holding two values it makes it less complicated as code gets more advanced.</br>
Position is equal to the location of the object on the screen. </br>
Velocity is equal to the speed in a given direction.</br>

```js
position=createVector(100,100); //holding x,y values for position
velocity=createVector(2,2); //holding x,y values for position
```
We can target either the x or y values using the variable name and a .x or .y </br>

```js
	position.x=position.x+velocity.x;
	position.y=position.y+velocity.y;
```

In the code above we increment the position by a velocity making it move.</br>