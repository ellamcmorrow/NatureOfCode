# 05_vector_magnitude
Magnitude is the length of a vector.
In this example we get the magnitude of the vector line and hold it in a variable. 
We then enter the magnitude of the line into the width of the rectangle.
This allows us to see the magnitude of the vector created from the centre to the mouse vector. 
It is the distance between the two points.
```js
//magnitude is the length of a vector- distance between two points.
var m=vectorLine.mag(); //inbuilt mag function

rect(0,0,m,10); //this rect indicated the length of the vector created in vectorLine

```
