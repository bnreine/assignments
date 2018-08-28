#### Questions

> What is recursion?

A: It is a technique to iterate over an operation by calling a function inside of a
function until it reaches one of multiple base cases.

> When would a programmer want to write a recursive function instead of an iterative one?

A: When there are many subproblems (eg. searching a large tree structure).

> What is a base case and what is its role in a recursive function?

A: It's when you reach a condition that ends the recursion and returns something concrete
to the previous recursive calls.

> What would happen if a programmer did not utilize a base case within a recursive function?

A: The recursion would continue forever.

#### Code

> Create a recursive function that will take a positive integer parameter n and return the factorial of n.

````JS
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n-1);
}
factorial(4); // returns 24
````
