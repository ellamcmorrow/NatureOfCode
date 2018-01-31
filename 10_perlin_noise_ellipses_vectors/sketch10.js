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
