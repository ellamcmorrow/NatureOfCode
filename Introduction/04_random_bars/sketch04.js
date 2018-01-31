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
	

