# 10_Perlin_Noise_Random_Ellipses_Vectors
</br>
In this example we draw multiple ellipses moving around the screen in a natural way.</br>
We create an empty walkers array and declare the number of walkers as 10.</br>
We create a for loop to loop through the noOfWalkers array.</br>
The index of the walkers array is equal to a new walker object.</br>
The step and render functions are called for each walker.</br></br>
```js	
	noOfWalkers=10 ; //create new walker object 
	walkers=[];//empty walkers array
	for (var i=0; i<noOfWalkers;i++){
		walkers[i] = new Walker(); 
```
</br></br>
The createVector function allows us to hold two locations the x and y positions instead of creating variables. </br>
nOff allows us to store two random time values in a vector.</br></br>

```js
function Walker(){
	noStroke();
	fill(255,45,0,50);//rgb 50% opacity
	this.position= createVector(width/2,height/2); //allows us to store two values instead of position X and position Y 
	this.nOff= createVector(random(1000),random(1000)); //choose two random values between 1000
```
</br></br>
The ellipse uses the map function. </br>
(0,1) is the range we have, (2,200) is the range we want.</br>
Map()multiplies any number to scale into a certain range.</br></br>

```js
this.render=function(){
	ellipse(this.position.x,this.position.y,map(noise(this.nOff.x),0,1,2,200)),map(noise(this.nOff.x),0,1,2,200);
	fill(200,10,80); //fill pink

} 
```

</br>We use the inbuilt function add() to add the two values to the moment in time.</br>

```js
	this.nOff.add(0.005,0.005); //add is a function used for vectors instead of +

```
</br>