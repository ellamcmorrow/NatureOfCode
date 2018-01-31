
# 06_Random_Walker_probabiltity_nonUniformDist_if statements
This is another way of implements non uniform probability using if statements.
A random number between 1 and 4 is chosen and held in variable choice, these represent the four choices that can be made.
A random floating number is chosen between 0 and 1. 
If its less than 0.4 move right, so it has a 40 % chance of being chosen. 

20% chance of moving up (0.4-0.6)
20% chance of moving up (0.6-0.8)

20% chance of moving down . (0.8-1)

```
this.step=function(){
		var choice =floor(random(4)); //random numer 0-4 - floor rounds down i.e takes off the decimal points 
		var r= random(1); //random foating no. between 0 and 1 
		if (r<0.4){ //40 % chance of moving right
			this.x++; //move right
		}
		else if (r<0.6){ //20%
			this.x--; //move left 
		}
		else if (r<0.8){ // 20%
			this.y++; //move up 
		}
		else{
			this.y--; //move down (20%)   
		}
		constrain(this.x,0,width); //keeps the x on the canvas between two values
		constrain(this.y,0,height);//keeps the y on the canvas between two values
	}
}

```


