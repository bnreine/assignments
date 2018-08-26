#### Questions

> In your own words, what is a JavaScript object?

A: An object is a variable that carries a collection of properties and methods

> What is a property of a JavaScript object?

A: A property is a characteristic, like "size" or "color" that has an associated value.


#### Code

> Declare a class called `Clothes` that takes three parameters in the constructor, `name`, `size`, and `price`. Create a variable called `shirt` that is equal to a new instance of `Clothes` with `name = 'V-Neck'``, `size = 'Medium'`` and `price = 20`.

````JS
class Clothes {
  constructor(name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
}
var shirt = new Clothes('V-Neck', 'Medium', 20);
````
