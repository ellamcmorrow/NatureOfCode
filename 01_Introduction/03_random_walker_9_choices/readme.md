# 03_Random_Walker_9_outcomes
</br>
In the random walker classes the probability that the Walker will take a step in a given</br>
direction is equal to the probability that the Walker will take a step in any direction...</br>
so if there are four possible steps, there is a 1 in 4 chance the Walker will take any given step.
With nine possible steps, it’s a 1 in 9 chance.</br>
In this example the step function produces nine outcomes.</br>
It randomly floors the numbers between (-1,2) for the x,y values this gives 8 outcomes. </br>
The ninth comes from not moving.</br>
 The x,y values are then incremented by these values making the walkers step more random.</br></br>

```js
this.step=function(){
		var stepx=floor(random(-1,2)); //this produces nine outcomes including not moving 
		var stepy=floor(random(-1,2)); // therefor there is a 1/9 chance of the walker stepping in any given direction

```




</br>