#### Questions

> What does "lexical scope" mean in JavaScript?

A: Lexical scoping means that you can only reference a variable from within a block
of code in which you defined it.  Global scope is the outermost block of code (eg. the
  script that runs the API)

> What is an advantage of a programming language that uses lexical scoping?

A: You don't need to pass a global variable as an argument into a function in order
to use it.  It's already defined inside.

> What is a closure?

A: A closure is a function with its lexical environment in the time in which it was defined.

> What would be a use case of a closure?

A: If you wanted to multiply two numbers together but wanted to hide one of the
numbers from the global scope, you embed the hidden number definition and
assignment within the inner function expression of a closure.

#### Code

> Create your own example of a closure and see if it works by using the console.log to print values and verifying they are what you expect.

````JS
var numOne = 4;
var product = function(){
  var numTwo = 5;
  function printProduct(){
    console.log(numOne * numTwo);
  }
  return printProduct;
}
var toPrint = product();
toPrint()

````
