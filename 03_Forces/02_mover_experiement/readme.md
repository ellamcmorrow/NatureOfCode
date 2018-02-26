# 02_Drag_force_liquid
</br>**Liquid class**
Friction occurs when a body passes through gas or liquid. <br/>
Increased difficulty for the object to move through liquid because there is a greater amount of friction.<br/>
Created a liquid object with rectangle parameters and a variable for the coefficient of drag<br/>
checks the x,y location of the mover to see if it is in the liquid.<br/>
<br/><br/>
*calculate drag function*<br/>
In this function we apply the formula to the object.<br/>
copy(); - copies a region of the canvas to another region of the canvas-ensures the balls go through the <br/>liquid in the lower half of the canvas<br/>
The smaller objects fall quicker than the larger because of their a=f/m - smaller mass larger acceleration.
There is no gravity in liquid.<br/>
If liquid contains the mover then the liquid should drag that mover.<br/>
It does this by applying the drag force method created in the liquid class and called in the sketch class.

```js
Liquid.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  var speed = m.velocity.mag();
  var dragMagnitude = this.c * speed * speed;

  var dragForce = m.velocity.copy(); 
  dragForce.mult(-1);
  
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

```
<br/>
**Mover Class**<br/>
The balls now only bounces off the bottom of the window so we are only effecting the y location<br/>
The check edges function creates a slower negative velocity to dampen the effect of the balls bouncing.<br/>

```js
 if (this.location.y > (height - this.mass*8)) {
    
    this.velocity.y *= -0.9;
    this.location.y = (height - this.mass*8);
```

**Sketch Class**

Formula put in a function inside the liquid class.<br/>
If a mover is recieved calculate drag force and return it back. <br/>
This is an example of objects interacting with eachother in our case the liquid and the mover.<br/>
