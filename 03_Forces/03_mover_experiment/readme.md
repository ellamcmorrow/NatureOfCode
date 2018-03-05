# 03_mover_experiment

</br>In this example we create multiple movers in multiple liquids.</br> 
We added rgbo to the end of each mover and liquid so we could manipulate the fill each specific object.</br>

**Liquid Class** </br> 
This contains methods to check the location of the mover.
The calculateDrag method checks how much force to add depending on the mass of the object.<br/>
It uses one of Newtons formulas to calculate the magnitude.</br></br>

**Mover Class** </br> 
The mover class uses the same methods we created in the last example except here we</br>
passed r,g,b,o in as each mover and liquid so we could manipulate the fill each specific object.</br>
In this example we passed in rgbo to the parameters of the object so the colour could be changed.</br></br>

**Sketch Class** </br> 
In our sketch class we created two arrays. One for liquids and one for movers. <br/>
We can easily add objects now because of the classes we created in liquid.js and mover.js.<br/>
We get to specify the values of the variables in the sketch class.<br/>
By using indexes we can create multiple objects with different specifications.<br/>

```js
 //var Liquid=function(x,y,w,h,c,r,g,b,o)
  liquids[0] = new Liquid(0,500,800,400,0.5,255,179,71);
  liquids[1]= new Liquid(0,200,800,100,0.3,240,0,255);
  liquids[2]= new Liquid(0,300,800,200,0.5,254,213,0);

  //var Mover =function(x,y,vx,vy,ax,ay,mr,g,b,o)
  movers[0] = new Mover(100,100,2,3,1,1,40,253,202,150);
  movers[1] = new Mover(400,200,2,3,0.8,0.9,100,253,253,150);
  movers[2] = new Mover(800,100,1.5,2.5,1,0.5,70,253,175,253);
```

We created a nested forloop for the the movers and liquids. <br/>
Within the nested forloop we target the index of the mover moving through the canvas and check weather <br/>
it is in the liquid using the dragForce method created in the liquid class.</br>
If it is in the liquid we apply force using the dragforce method in the liquid class.<br/>

```js
var dragForce=liquids[i].calculateDrag(movers[x]);
			movers[x].applyForce(dragForce);
```