#### Questions

> Describe/define DRY and why functions exist.

A: Don't Repeat Yourself.  Functions exist to modularize your execution of code.  Each
function should do exactly one thing, no more, no less.

> Describe/define the difference between creating a function and calling/executing a function.

A: Creating a function just tells the computer what you will be inputting, what you will
be doing with those inputs, and what you will be getting out of that function (returning). You call a function to actually realize those actions.

> Describe/define what arguments/parameters are and how they relate to functions.

A: Parameters are local variables that represent what you input into a function.  arguments
are the actual values that assign to the previously mentioned variables upon functions
declaration.

> Describe/define mutating vs. non-mutating functions.

A: Mutating functions change the object.  Non-mutating functions create a new object that
is different from the original and leaves the original unchanged.


#### Code

> Using the `shoppingCart` variable, create a function that takes the `shoppingCart` variable and returns the total cost of both items as the total variable.


````JS
var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  // code below
  total = prices[0] + prices[1];
  // code above
  return total;
}

getTotalCost(shoppingCart);
````
