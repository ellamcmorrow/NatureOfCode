# 04_Uniform_Distribution_pseudo_random_bars</br>
In this example create an empty array defined in a randomCounts variable. We also make the total variable = 20.</br>

In setup we create a for loop which loops 20 times through an array that is populated with 0’s.</br>
```js
	for (var i=0; i<total; i++){ //make an array
		randomCounts[i]=0;  //populate it with zeros [0,0,0,0]
	}	```

In draw we create a variable call index, this chooses a random number between 0-19. The reason it is 19 and not 20 is because we have floored it.</br>

We then encapsulate this variable in our random counts array and increment it. This means it will loop through 0 + value held in the index variable.</br>

```js
var index=floor(random(total)); //floor indicates a random number from 0-19 because total is 20 
	randomCounts[index]++; //array of zeros plus floored number

```
Now we create another for loop in order to build our rectangles. </br>
We loop through the length of the random counts array.</br>
Each bar is created based on the value in the array. </br>

```js
 for (var x=0; x<randomCounts.length;x++){ //loop throught random counts array i.e 20times
    	this.rect(x*barWidth,height-randomCounts[x],barWidth-1,randomCounts[x]); //make a rectangle based on what the array value is
    }
```

