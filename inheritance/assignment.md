#### Questions

> What does "DRY" stand for? What does the "DRY principle" imply in programming or software development?

A: Don't Repeat Yourself.  It implies that you should create modular code that does one
action at a time that does not repeat itself.  Often times, this means that you can
piggy back off of something else that exists already and alter it slightly.  This way,
you don't need to reinvent the wheel.

#### Code

> Following the examples above, create a new prototype called `Product` and three instances of it. Each instance should be a separate product (for example, a shirt, a jacket, and a scarf).

````JS
function Product (name, type) {
  this.name = name;
  this.type = type;
}

var Shirt = new Product('Nike', 'shirt')
var Jacket = new Product('Adidas', 'jacket')
var Scarf = new Product('Ralph Lauren', 'scarf')

````
