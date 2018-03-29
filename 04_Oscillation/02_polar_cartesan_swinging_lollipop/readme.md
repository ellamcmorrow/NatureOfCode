# 02_polar_coords_trig
</br>
</br>For oscillating motion we need to know about trignometry.</br>
**SOH CAH TOA** is important.</br>
We use radius for the side and thetha for the angle.</br>
So we can rotate by this angle and the radius is equal to the length of one of the triangles sides.</br>
In order to draw this we need to use cartesian coordinates.</br>
We use SOH CAH TOA subbing in radius for one of the sides. </br>
If you know the radius and angle of a polar cooordinates you know the x or y .</br>
If you think in terms of polar coordinates we can draw in terms of cartesian coordinates.</br></br>
We create two variables r and angle thetha. </br>

```js
var r;
var theta;
```

</br>and then convert them from polar to cartesian coordinates.</br>

```js
  var x = r * cos(theta);
  var y = r * sin(theta);
```

</br>We draw and line and a circle to create a lollipop. </br>
To make it move we create variables angular velocity and angular acceleration and incrememnt them. </br>
This gives the lollipop a swinging effect.</br>
