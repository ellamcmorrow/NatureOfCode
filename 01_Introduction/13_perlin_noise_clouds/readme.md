# 13_perlin_noise_clouds
</br>
To color each pixel we call the noise() function.</br>
We create a variable called bright to hold a function which will result in an organic cloud effect.
We create xOff and yOff variables.We  increment the variable xoff each time we move horizontally, and the yoff variable each time we move vertically through the nested loops.
We use perlin noise mapping the offset of a random moment in time to a new range.</br>
xOff and yOff are incremented slowly to create a smooth cloud like effect.</br></br>

```js
var bright=map(noise(xOff,yOff),0,1,0,255); 

```
</br>
The bright variable is made equal to the index in the pixel array.
</br>
```js
	pixels[index+1]=bright;
```