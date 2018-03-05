# 04_Uniform_Distribution_pseudo_random_bars</br>
</br>
In this example create an empty array to keep track of how often each number is picked.</br>
**The setup function** </br>
We create a for loop which loops 20 times through an array that is populated with 0’s.</br>

```js
	for (var i=0; i<total; i++){ //make an array
		randomCounts[i]=0;  
	}	
	```

</br>The draw function:</br>
We create a an index variable, this chooses a random number between 0-19.</br>
The reason it is 19 and not 20 is because we have floored it.</br>

We then encapsulate this variable in our random counts array and increment it. This means it will loop through 0 + value held in the index variable.</br>

```js
var index=floor(random(total)); 
	randomCounts[index]++; //array of zeros plus random floored number

```
Now we create another for loop in order to build our rectangles. </br>
We loop through the length of the random counts array.</br>
Each bar is created based on the value in the array. </br></br>

*note:*</br>
Over time the random function would produce a pattern so it is not truley random.</br>
They are created by a mathematical equation.</br>
It's known as pseudo random numbers. 

</br>