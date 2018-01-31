#05_Random_Walker_probabiltity_nonUniformDist_array

The render and step functions are called each time the page is drawn.

The step functions creates an array. Each index in the array is equal to a number. 1 and 3 occur twice increasing the likelihood that will be chosen. There is a 2/4 chance either will be chosen which is equal to 40%.

The index variable chooses a random number from the array and floors it.
The number is held in the index of the prob array, so whatever the probArray index number is random. It is equal to one of the 1,2 or 3.

```js
this.step=function(){
		var probArray=[]; //create empty array
		//populate array with values
		probArray[0]=1; //more likely for 1 & 3 to be chosen - probability higher
		probArray[1]=1;
		probArray[2]=2; 
		probArray[3]=3; //40% chance of choosing  3/1 
	    probArray[4]=3; //2/5 = 0.4 =40%

		var index=floor(random(probArray.length)); //choose random number for the length of array + floor it
		var r = probArray[index]; //

```

