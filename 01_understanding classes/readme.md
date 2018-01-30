# 01_Random_Cars
An object contains data and functionality eg. car
A class is a template for each object  eg. car type = Volvo

First we define a variable that can hold the object. 

Function setup is a static function called once. Here we create the canvas specifying width and height. And tell it to hold any new object in an object variable.

The draw function loops through each frame and calls methods created in the Car class . 
These methods define behaviours the car should have. In this case we want to display the car on the screen and make it drive.

To drive we increment the xPosition of the car to make it move.

```js
//defining the vars
var myCar;

//static function, called once when the page/app loads
function setup(){
	createCanvas(320,640);
	background(127);
	myCar= new Car();
	console.log(myCar);
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	myCar.display();
	myCar.drive();

}

function Car (){
	
	this.color= 233;
	this.xpos = width/2;


	this.display = function(){
		fill(this.color);
		rect(this.xpos,height/2,1,1);
	}

	this.drive=function(){
		this.xpos=this.xpos+1;
	}
}
```



#02_Random_Walker_4_outcomes
In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces outcomes.


The render function draws a dot at each x,y point.

The inbuilt constrain function makes sure the object does not go off the page.

The step function creates a random number between 0 and 4 and then floors its. Based on that outcome a choice is made using if then else statement which will change the x or y coordinate. Every time the draw function is called it will update their position.

```
var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(320,640); //canvas width and height
	background(127);
	walker= new Walker(); //create new walker object 
	
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	walker.render();
	walker.step();
}
//making the walker class 
function Walker(){
	this.x= width/2;
	this.y= height/2;

	this.render=function(){
		stroke(0);
		point(this.x,this.y); 
	}

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


#03_Random_Walker_9_outcomes

The step function produces nine outcomes. It randomly floors the numbers between (-1,2) for the x,y values this gives 8 outcomes. The ninth comes from not moving. The x,y values are then incremented by these values making the walkers step more random.

```
this.step=function(){
		var stepx=floor(random(-1,2)); //this produces nine outcomes including not moving 
		var stepy=floor(random(-1,2)); // therefor there is a 1/9 chance of the walker stepping in any given direction

```



#04_Uniform_Distribution_pseudo_random_bars
In this example create an empty array defined in a randomCounts variable. We also make the total variable = 20.

In setup we create a for loop which loops 20 times through an array that is populated with 0’s.

In draw we create a variable call index, this chooses a random number between 0-19. The reason it is 19 and not 20 is because we have floored it. This gives the constraint of 0-19.

We then encapsulate this variable in our random counts array and increment it. This means it will loop through 0 + value held in the index variable.

Now we create another for loop in order to build our rectangles. 
We loop through the length of the random counts array
Each bar is created based on the value in the array. 

05_Random_Walker_probabiltity_nonUniformDist_array

The render and step functions are called each time the page is drawn.

The step functions creates an array. Each index in the array is equal to a number. 1 and 3 occur twice increasing the likelihood that will be chosen. There is a 2/4 chance either will be chosen which is equal to 40%.

The index variable chooses a random number from the array and floors it.
The number is held in the index of the prob array, so whatever the probArray index number is random. It is equal to one of the 1,2 or 3.

```
var randomCounts=[];
var total=20; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(320,640); //setup canvas
	background(127);

	for (var i=0; i<total; i++){ //make an array
		randomCounts[i]=0;  //populate it with zeros [0,0,0,0]
	}	
}

//loop function called each frame 
function draw(){
	var index=floor(random(total)); //floor indicates a random number from 0-19 because total is 20 
	randomCounts[index]++; //array of zeros plus floored number

	this.stroke(0);
	this.strokeWeight(2);
	this.fill(255);

	var barWidth=width/randomCounts.length; //calc the width of each bar


    for (var x=0; x<randomCounts.length;x++){ //loop throught random counts array i.e 20times
    	this.rect(x*barWidth,height-randomCounts[x],barWidth-1,randomCounts[x]); //make a rectangle based on what the array value is
    }
}
	

```



#06_Random_Walker_probabiltity_nonUniformDist_if statements
This is another way of implements non uniform probability using if statements.

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




#07_Random_Gaussian_xLocation

Ellipse drawn in a line.
Spread out by the x value using randomGaussian. 
This is a normal distribution. 

Most concentrated ellipses in the centre because of the standard deviation - 60.

As it moves away from centre they are more transparent.

```

//static function called once when page loads
function setup(){
	createCanvas(320,640);
	background(127);

}
//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
  //only manipulating the x direction
	var xloc=randomGaussian();  // --> normal distribution
	var sd=60; // close to one standard deviation
	var mean=width/2; // average 
	xloc = (xloc * sd) + mean;

	this.fill(0,70);
	this.noStroke();
	this.ellipse(xloc,height/2,16,16); 


}
```

#08_Random_Gaussian_xLocation_yLocation

Manipulating both the x and y values using randomGaussian. 

Circles will now appear up and down the screen not just left and right.
These circles are more spread out because the standard deviation is equal to 100 i.e close to three standard deviations.

```
//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
//spread circles out in two directions
	var xloc=randomGaussian();  // --> normal distribution
	var yloc=randomGaussian(); 

	var xsd=100; //standard deviation
	var ysd=40;	//maniputlation the y value - more dispersion

	var xMean=width/2; // average x val
	var yMean=width/2; // average y val


	xloc = (xloc * xsd) + xMean;
	yloc = (yloc * ysd) + yMean;

	var randomColour=240;

	this.fill(randomColour,70); 
	this.noStroke();
	this.ellipse(xloc,yloc,16,16); 


}

```




#09_Perlin_noise_random_ellipse_x
Perlin noise is used so that objects appear on the screen in a more natural and organic way.

Here we are only manipulating the x value.
This.x is equal to the ellipses x in the render function. 

xOff is equal to the offset of a random moment in time.
Here we choose a random moment in time between 0-1000 miliseconds.

In the step function we define what this.x is equal to. 
We use the inbuilt map and noise functions.

Map changes the range values you have and to different set of range values.
Noise is a random value between 0 and 1.

xOff increments slowly +0.05 giving a smoothing effect. 
If you increment it by too much it won’t be smoothe.

```
var walker; //define variables first

//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	background(127);
	walker= new Walker(); //create new walker object 
	
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	fill(0,15); //15% opacity
	rect(0,0,width,height);

	walker.render();
	walker.step();
}
//making the walker class 
function Walker(){
	this.x= width/2;
	this.xOff= random(1000); //choose a random between 0-1000 
	

	this.render=function(){
		noStroke();
		fill(255,45,0,50);//rgb 50% opacity
		ellipse(this.x,500,40,40);
		fill(200,180,80); //fill the ellipse
		
	}

	this.step=function(){
		this.x=map(noise(this.xOff),0,1,0,width); //get noise value for current time --> between 0 and 1  map it between what we want 0 and the width 
		this.xOff+=0.005;

		}
	}
```



#10_Perlin_noise_random_ellipses_x_y
Here we draw multiple ellipses moving around the screen in a natural way.
 We create an empty walkers array and a number of walkers variable which is 10. 
In draw we loop through the number of walkers with each index equating to a single walker in the array. The step and render functions are called for each walker.

The createVector function allows us to hold two locations the x and y positions instead of creating variables. nOff allows us to store two values in time.

The ellipse uses the map function. 
(0,1) is the range we have, (2,200) is the range we want.

We use the inbuilt function add() to add the two values to the moment in time

```
var walkers; //define variables first
var noOfWalkers;

//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	
	noOfWalkers=10 ; //create new walker object 
	walkers=[];//empty walkers array
	for (var i=0; i<noOfWalkers;i++){
		walkers[i] = new Walker(); 

	}
	background(127);
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){
	fill(0,10); //15% opacity
	rect(0,0,width,height);
	for (var i=0; i<noOfWalkers;i++){ //make an array of walkers
		walkers[i].step(); //the index depends on the positions of the ellipse
		walkers[i].render();
	}
}
//making the walker class 
function Walker(){
	noStroke();
	fill(255,45,0,50);//rgb 50% opacity
	this.position= createVector(width/2,height/2); //allows us to store two values instead of position X and position Y 
	this.nOff= createVector(random(1000),random(1000)); //choose two random values between 1000


/*

Map()multiplies any number to scale into a certain range.
*/

this.render=function(){
	ellipse(this.position.x,this.position.y,map(noise(this.nOff.x),0,1,2,200)),map(noise(this.nOff.x),0,1,2,200);
	fill(200,10,80); //fill pink

} //map 0,1 is the range we have and 2,200 is the range we want

this.step=function(){
	this.position.x = map(noise(this.nOff.x),0,1,0-200,width+200);
	this.position.y = map(noise(this.nOff.y),0,1,0-200,height+200);
	this.nOff.add(0.005,0.005); //add is a function used for vectors instead of +

}
}

```



#11_Pixel_Array
We need to use pixelDensity(1); in set up to fix HD retina display issues.
When we want to work with pixels we use the loadPixels() inbuilt function in draw. 
To apply it to the canvas we use updatePixels();
The canvas is made up of pixels. 
We can manipulate these pixels using the pixel array.
We create a nested for loop to loop through the x,y values.
Within this for loop we want to manipulate the colours on the canvas. 
We do this by creating a variable called index and equating it to the formula “x+y width*4”.
This formula targets a pixel. 
Each pixel is made up of an array [R,G,B,A]. 
We equate each pixel array index to one of these values. These allow us to manipulate the colour on the screen.

```
//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	pixelDensity(1); //necessary to fix any HD retina display issues 
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; //formula to manipulat x,y's
	/*R*/	pixels[index+0]=y/2; //change each pixel array value
	/*G*/	pixels[index+1]=255;
	/*B*/	pixels[index+2]=x/2;
	/*A*/	pixels[index+3]=255;
	}

}
	updatePixels(); //apply to canvas

}

```





#12_Fuzzy_pixel_array
 In the nested for loop we create a variable called bright. 
This variable equates to a random number between 0 and 255. 
By making one of the index’s in our pixel array equal to this random number it creates a fuzzy effect. Because t’s refreshing a different number every time the frame loads.
The more indexes we equate to the bright variable the fuzzier it gets.

```
//static function called once when page loads
function setup(){
	createCanvas(1200,1000);
	pixelDensity(1); //necessary to fix any HD retina display issues 
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; //formula to manipulate x,y's
			var brightness=random(255);

	/*R*/	pixels[index+0]=y/2; //change each pixel array value
	/*G*/	pixels[index+1]=brightness;
	/*B*/	pixels[index+2]=brightness;//brightness;
	/*A*/	pixels[index+3]=x; 
}
//fuzzyness created
}
	updatePixels(); //apply to canvas

}

```


#13_pixel_array_clouds_perlin_noise
We create a yOff variable. This is a random moment in time offset by an amount. 

We use perlin noise mapping the offset of a random moment in time to a new range.

xOff and yOff are incremented slowly to create a smooth cloud like effect.

```
var yOff=1000.0;//random moment in time offset by an amount 
//static function called once when page loads
function setup(){
	frameRate(1);
	createCanvas(1200,1000);
	pixelDensity(1); //necessary to fix any HD retina display issues 
	noiseDetail(10);
}

//loop function called each frame eg. 30 frames per sec = 30 calls
function draw(){


	loadPixels(); //load pixels i.e i wanna work with pixels
	for(y =0; y<height; y++){ //creating a nexted for loop to manipulate the x and y pixels
		var xOff=100.0;
	for(x =0; x<width; x++){ //looping through each x,y value

			var index= (x+y*width)*4; 
			var bright=map(noise(xOff,yOff),0,1,0,255); //scale it to this range

	/*R*/	pixels[index+0]=bright; //change each pixel array value
	/*G*/	pixels[index+1]=bright;
	/*B*/	pixels[index+2]=bright;
	/*A*/	pixels[index+3]=255; 
	xOff +=0.02; //increment xOff value by .02
}
yOff +=0.02; // if you increment it by too much clouds won't be seen
}
	updatePixels(); //apply to canvas

}

```
