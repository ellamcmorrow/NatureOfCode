# 04_harmonic_motion
</br>
Period is the amount of time it takes for a cycle to repeat itself.</br>
A smaller period is faster oscillations. </br>
A longer period is slower oscillation. </br>
In this example we have a startAngle and an angle velocity variable.  </br>
The startAngle is incremented by its own angular velocity. </br>

```js

  startAngle += 0.015;
  var angle = startAngle;

```

</br>We create a forloop for multiple ellipses to be spread across the width of the page.</br>
We map the sin of the angle from -1,1 (the sine curve wave) to to 0 to the height. and hold the in a y varibale.</br>
In order to move the way we start at a different angle each time.</br>
This creates the wave motion.</br>
By incrementing the angle by angle velocity the wave movement occurs. </br> 
The angle at which each  ellipse moves is relative to the previous angle thats been drawn.</br>


```js

  for (var x = 0; x <= width; x += 24) {
    var y = map(sin(angle), -1, 1, 0, height);
    stroke(164);
    fill(178, 102, 133);
    strokeWeight(2);
    ellipse(x, y, 48, 48);
    angle += angleVel;
  }
  
```








