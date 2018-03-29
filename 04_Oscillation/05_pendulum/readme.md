# 05_pendulum
</br>
The angle theta is relative to the angle of the pendulum at rest.</br>
We need the static pendulum appearing on the screen first.</br> 
We need the origin x,y, the ball position and the length of the line holding the ball.</br>
We use SOH and CAH. sin of theta equal opp/hyp.</br>
SOH->hyp equals the length, x equals the opp.</br>
CAH->adj equals y divided by the length(hyp).</br>
We then put this into a formula.</br>
This is similar to the polar to cartesian example.</br>
*throwback*
```js
  var x = r * cos(theta);
  var y = r * sin(theta);
```

Except in our example x and y are relative to the origins location. </br>
We have two triangles for different forces on the pendulum.</br>
We seperate a vector into components along a random axis.</br>
The second component (second triangle) is the force on the pendulum. </br>
The components are relative to the axis. </br>

We create a pendulum class. </br>
A damping variable reduces the velocity so that the pendulum can come to rest. </br>

```js
    this.damping = 0.995; 

  ```
</br>The *update* function is important.</br>
We use gravity in the update function to swing the pendulum. F=M/A.</br>
We think of it as a constant scaled by mass.</br>
Here we use VALV.</br>
The acceleration of the pendulum is effected by gravity, the radius and the sine of angle.</br>

```js
  update() {
    var gravity = 0.4; 
    this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle); 
    this.aVelocity += this.aAcceleration; 
    this.aVelocity *= this.damping; 
    this.angle += this.aVelocity; 
  }
  ```

When we create the pendulum object we have a length of arm variable or r -> radius. </br>
Its slower when the arm is smaller and faster when the arm is larger. </br>
.go() runs all the simulations.

```js
  p = new Pendulum(createVector(width / 2, 0), 175);
   ```


