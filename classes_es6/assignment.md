#### Questions

> What is object-oriented programming?

A: It is a way of programming that uses the idea of 'objects' which can have
both attributes (property name/value pairs) and methods (things that the object can do).
In ESMAscript 2015 (6), you can define classes that generate instances of an
object that all have certain basic characteristics and behaviors.


> What is a constructor?

A: A special function within a class that creates and initializes the instance of
class (object).

> What is the purpose of the keyword `super`?

A: You use this syntax in a subclass to access properties and methods of its parent class.

> What are classes that do not use the keyword `extends` called?

A: Parent classes


#### Code

>Using the `Clothes` class we previously created, create a `Shirt` class that extends the `Clothes` class. Don't forget the `super()`.

````JS
var shirtName = "Nike"
var shirtSize = "Large"
var shirtPrice = "$18.99"

var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

var Shirt = class extends Clothes {
  constructor (name, size, price) {
    super(name, size, price);
  }
}

var MyShirt = new Shirt(shirtName, shirtSize, shirtPrice)

````
