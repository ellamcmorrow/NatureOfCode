# 10_Perlin_Noise_Random_Ellipses_Vectors
Here we draw multiple ellipses moving around the screen in a natural way.
 We create an empty walkers array and a number of walkers variable which is 10. 

In draw we loop through the number of walkers with each index equating to a single walker in the array. The step and render functions are called for each walker.
```js	
	noOfWalkers=10 ; //create new walker object 
	walkers=[];//empty walkers array
	for (var i=0; i<noOfWalkers;i++){
		walkers[i] = new Walker(); 
```
The createVector function allows us to hold two locations the x and y positions instead of creating variables. nOff allows us to store two values in time.

```js
function Walker(){
	noStroke();
	fill(255,45,0,50);//rgb 50% opacity
	this.position= createVector(width/2,height/2); //allows us to store two values instead of position X and position Y 
	this.nOff= createVector(random(1000),random(1000)); //choose two random values between 1000
```


The ellipse uses the map function. 
(0,1) is the range we have, (2,200) is the range we want.
Map()multiplies any number to scale into a certain range
```js
this.render=function(){
	ellipse(this.position.x,this.position.y,map(noise(this.nOff.x),0,1,2,200)),map(noise(this.nOff.x),0,1,2,200);
	fill(200,10,80); //fill pink

} 
```

We use the inbuilt function add() to add the two values to the moment in time

```js
	this.nOff.add(0.005,0.005); //add is a function used for vectors instead of +

```
