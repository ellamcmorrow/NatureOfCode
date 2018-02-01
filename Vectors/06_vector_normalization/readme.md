# 05_vector_normalization
Normalization is making a vector unit. 
When we normalize an object we give it a length of one. 
You then multiply it by how much you want that one unit to be equal to . 
In this case we multiply by fifty. 
The line remains at this length- doesn't change.

```js
vectorLine.normalize(); //keeps it standard, turns into a unit vector
vectorLine.mult(50); //constant length of 50 =1unit
```