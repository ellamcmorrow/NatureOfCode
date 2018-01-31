

#02_Random_Walker_4_outcomes
In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces outcomes.


The render function draws a dot at each x,y point.

The inbuilt constrain function makes sure the object does not go off the page.

The step function creates a random number between 0 and 4 and then floors its. Based on that outcome a choice is made using if then else statement which will change the x or y coordinate. Every time the draw function is called it will update their position.

```
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
		constrain(this.x,0,width); //keeps the x on the canvas between two values
		constrain(this.y,0,height);//keeps the y on the canvas between two values
	}
}

```


