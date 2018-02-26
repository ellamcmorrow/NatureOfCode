var mover;

function setup(){
  createCanvas(800,800);
  //var Mover =function(x,y,vx,vy,ax,ay,m)
  mover = new Mover(100,100,0.2,0.1,1,1,40);
 

}

function draw(){
  background(105,105,105);

    mover.checkEdges();
    mover.update();
    mover.display();
  
}





