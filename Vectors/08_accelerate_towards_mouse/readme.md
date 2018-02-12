We want to create objects accelerating towards the mouse.
To do this we must create a vector to hold the mouse points.
We create an empty acceleration vector because it will be  created in a static method later.
The p5.vector function is a static method it returns a new vector as the answer.
The magnitiude is incread by .2 every frame. The limit function ensures it can't be increased passed 10.
 