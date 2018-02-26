# 03_vector_subtraction</br>

Vectors always have a point at 0,0 on the canvas. </br>

In this example we create two vectors using mouse points and centre points.</br> 

```js
var mouse=createVector(mouseX,mouseY);
var centre=createVector(width/2,height/2);
var vectorLine=mouse.sub(centre);
```
In order to get the distance between these points we have to subtract them from eachother i.e. the mouse vector 
minus the centre vector.</br>
We then draw a line so we can see the distance changing depending on where the mouse is on the canvas.