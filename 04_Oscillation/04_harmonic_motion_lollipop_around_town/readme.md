# 04_harmonic_motion
</br>
In order to create harmonic motion we need to look at the sin function. </br>
It gives us a wave pattern. </br>
The range of a sin function is always between 1 and -1.</br>
Waves have properties.</br>
One is amplitude and the other is period. </br>
Frequency is 1/period. -> how many cycles in one unit of time.</br>
Amplitude is the maximum part of the wave to the minimum part of the wave.</br>
Period is the amount of time it takes for a cycle to repeat itself.</br>
A smaller period is faster oscillations. </br>
A longer period is slower oscillation. </br>
In our example we want the lollipop oscillating back and forth. </br>
To do this we make the amplitude width/2. 
The distance from the centre to the edge.</br>
Our unit of time (period) is measured in frames. </br>
```js
  var period = 120;
  var amplitude = 300;
```

We use a formula to calculate the horizontal position for simple harmonic motion.</br>
</br>

```js
  var x = amplitude * sin(TWO_PI * frameCount / period);
```







