# 03_Random_Walker_9_outcomes

The step function produces nine outcomes.</br>
It randomly floors the numbers between (-1,2) for the x,y values this gives 8 outcomes. </br>
The ninth comes from not moving. The x,y values are then incremented by these values making the walkers step more random.</br>

```
this.step=function(){
		var stepx=floor(random(-1,2)); //this produces nine outcomes including not moving 
		var stepy=floor(random(-1,2)); // therefor there is a 1/9 chance of the walker stepping in any given direction

```




