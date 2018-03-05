# 05_Random_Walker_probArray
</br>
Probability can be calculated by didviding the event by the number of outcomes.</br>
eg. a coin toss has two outcomes, that's a probability of 1/2.</br>
The render and step functions are called each time the page is drawn.</br>
The step function creates an empty array called probArray.</br>
We then populate the array with numbers. </br>
Some numbers are repeated which increases their porbability of being chosen.</br>
1 and 3 occur twice increasing the likelihood that will be chosen.</br>
There is a 2/4 chance either will be chosen which is equal to 40%.</br>
The index variable chooses a random number from the array and floors it.</br>
A random position in the probArray is chosen and held in the index variable.</br>
This number is then passed into the variable 'r'.</br>

```js
		probArray[0]=1; 
		probArray[1]=1;
		probArray[2]=2; 
		probArray[3]=3; 
	    probArray[4]=3; //2/5 = 0.4 =40%

```

