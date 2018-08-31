#### Code

>In a new JS Bin, create the following functions. Submit a link to the JS Bin.

* Write a function called `even` that accepts a single number as an argument and returns true if the number is even and false if the number is odd.
* Write a function called `squared` that accepts a single number as an argument and returns the perfect square of the number. So `squared(5)` returns 25 and `squared(3)` returns 9.
* Write a function called `food` that accepts no arguments and returns an array of your 3 favorite foods.
* Write a function called `menu` that accepts no arguments and returns an object of your 3 favorite foods with the name of the foods as keys and the price of each item as the values.


Link to JS bin: https://jsbin.com/yasubijuwo/edit?js

````JS
function even(num) {
  if (num%2 === 0) return true
  else return false
}

function squared(num) {
  return num**2
}

function food() {
  return ["pizza", "pasta", "ice cream"]
}


function menu() {
  return {pizza: "$7.99", pasta: "$9.99", iceCream: "$6.99"}
}
````
