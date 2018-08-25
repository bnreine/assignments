#### Questions

> What are the three things you need to provide for a loop? I.e., in for(a ; b ; c){}, what are a, b, and c?

A: initialization (eg. `let i=1`), condition (eg. `i<10`), final expression (eg. `i++`)

> Describe infinite loops and how to avoid them.

A:These are loops that never meet the exit condition to stop.  You avoid these by
making sure that your condition will eventually evaluate to `false`. Make sure to have an endable condition and final expression that actually counts towards that end condition.


#### Code

````JS
var shoppingCart = [
  {
      id: 0,
      name: 'Mens Shirt',
      price: 20,
      size: 'Large'
  },
  {
  id: 1,
  name: 'kids shirt',
  price: 15,
  size: 'small'
}
]

for (let i=0;i<shoppingCart.length;i++) {
  console.log(shoppingCart[i].name)
}
````
