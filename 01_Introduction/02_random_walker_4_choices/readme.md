# 02_Random_Walker_4_outcomes</br>
</br>
In this file we create a Walker class which creates walker objects.</br> 
The render function draws a dot at each x,y point and renders it to the screen.</br>
Each time the step function is called on this object it selects a random floating number between 0 and 4<br>
and floors it making it an integer.<br>
This produces four possible outcomes.</br>
The inbuilt constrain function makes sure the object does not go off the page.</br>
Every time the draw function is called it will update their position.</br>

```js
	this.step=function(){
		var choice =floor(random(4)); //random numer 1-4 - floor rounds down i.e takes off the decimal points 
		if (choice===0){
			this.x++; //move right
		}
		else if (choice===1){
			this.x--; //move left 
		}
		else if (choice===2){
			this.y++; //move up 
		}
		else{
			this.y--; //move down 
		}

```


