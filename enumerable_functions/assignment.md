#### Questions

> Describe the map() function.

A: `map()` iterates over all elements in an array changing them all in the same way.

> Describe the filter() function.

A: `filter` filters out elements in an array if a certain condition is `false`

> What is the difference between the map() and filter() functions?

A: `map()` changes all the pre-existing elements in an array in the same way, while
`filter()` removes specific elements based on a condition.


#### Code

> Using the numbers provided in the editor, use the `filter()` function to keep any numbers that are greater than three, then use the `reduce()` function to sum the filtered numbers.

````JS
var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];
numbers.filter(items=>items>3).reduce((total,item)=>total + item);
````
