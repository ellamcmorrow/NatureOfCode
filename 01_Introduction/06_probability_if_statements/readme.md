
# 06_Random_Walker_tendency_to_the_right
</br>
Here we create a random walker that has a tendency to move to the right.</br>
This is another way of implements non uniform probability using if statements.</br>
A random number between 1 and 4 is chosen and held in variable choice, this variable represent the four choices that can be made.</br>
We pick a random float and see what range it falls, and hold it in the r variable.
A random floating number is chosen between 0 and 1.</br> 
If its less than 0.4 move right,so it has a 40 % chance of being chosen. </br>
20% chance of moving up (0.4-0.6)</br>
20% chance of moving up (0.6-0.8)</br>
20% chance of moving down . (0.8-1)</br></br>

```
this.step=function(){
		var choice =floor(random(4));  
		var r= random(1);
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


```


