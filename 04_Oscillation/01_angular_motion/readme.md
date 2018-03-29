# 01_angular_motion
</br> Oscillation is movement back and forth in a regular rhythm.
In this example we create a baton. 
We translate it to the centre of the screen so that we can see it. </br>
When working with angles we use angular positions. </br>
In order to change the positions we use angular acceleration and angular velocity. </br>
So we create two new variables. </br>

```js
var aVelocity = 0;
var aAcceleration = 0.0001;
```

</br>VALV!! </br>
-> (angular) *Velocity* add (angular)*Acceleration*</br>
(angular) *Location* add (angular) *Velocity.* </br>

```js

angle += aVelocity;
aVelocity += aAcceleration;

```
