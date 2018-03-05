# 01_mover_experiment

<br/> In this example we create a mover.<br/>
We pass multiple parameters into the mover object which we can then manipulate in the sketch class.
These include the position, velocity,acceleration and mass. <br/>

**Mover Class** <br/>
In the update function we need to clear acceleration each frame.<br/>

```js

this.acceleration.mult(0);

```

The apply force function passes in force as a parameter.<br/>
The f variable contains a static function.<br/>
This static function divides the force by the movers mass.</br>
So each mover will move at different speeds depending on what mass is passed in.</br>
A new vector will be created from the result of this vector.<br/>
We add the resultant vector to the acceleration to change the speed at which each mover is moving are moving.<br/>

```js

this.applyForce=function(force){ //apply force as a parameter
  var f =p5.Vector.div(force,this.mass);
  this.acceleration.add(f);

```

**Sketch Class**
In the sketch class we create a new object specifying the parameters. <br/>
We then call the functions we created in the mover class. <br/>


