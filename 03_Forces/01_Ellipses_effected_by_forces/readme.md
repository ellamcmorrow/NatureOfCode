# 01_ellipses_effected_by_forces<br/>

A force is a vector that causes an object with mass to accelerate.<br/>
The update method is where we apply VALV.<br/>

*Applying Force*<br/>
We create an applyForce method to apply the force to our object.<br/>
We create a static function and user the inbuilt p5.Vector function to divide force times mass.<br/>
The static function causes all the object to fall at the same time. <br/><br/>
```js 
this.applyForce=function(force){ 
		var f =p5.Vector.div(force,this.mass); 
				this.acceleration.add(f); 

	}
```
*Mass*<br/>
The Bigger the mass of the object the smaller the acceleration and vice versa...<br/> the smaller the object the faster the acceleration.<br/>
Mass is the amount of matter in an object.<br/>
Weight is the force of gravity on the object. <br/>
We tighe the mass to the radius of the ellipses.<br/>
We pass m (mass) parameter into our mover object, so each object will have a mass.<br/>
We then create ten random movers with a random mass between 10 and 20.<br/>

```js
for(var i=0;i<numOfMovers;i++){
		movers[i]= new Mover(Math.floor(random(10,20)));
	}
```

this function clears the acceleration each frame<br/>

```js
this.acceleration.mult(0);
```  

A=F/M<br/>
we scale by mass in our gravity variable and then divide in our applyForce function(above). This cancels out <br/>mass to simulate **gravity** which is not effected by mass.
 All the balls will now fall at the same time reguardless of their mass.<br/>

```js
var gravity=createVector(0,0.1 * movers[i].mass);```
</br>