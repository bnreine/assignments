#### Questions

> What does the acronym DOM stand for and explain in your own words what it is.

A: Document Object Model.  It's a JavaScript object that represents an html document.
You treat the hierarchy of html tags as nested property values within one large
`document` object.


> How does the DOM make web programming more efficient?

A: The DOM is a JavaScript object and so we can manipulate it just like any other
JavaScript object (eg. using enumerable functions, for loops, tree searches, etc.)


#### Code

> Using `createElement` and `getElementById`. Add a new Shirt to the `ul`. Set the `innerText` equal to 'Mens T-shirt'.


````html
<!DOCTYPE html>
<html>
  <head>
    <title>Shirts</title>
  </head>
  <body>
  <div class="main">
    <ul id="ul-id">
      <li class="shirts" id="shirt-1">...</li>
      <li class="shirts" id="shirt-2">...</li>
      <li class="shirts" id="shirt-3">...</li>
    </ul>
  </div>
</body>
<html>
````



````JS
let ul = document.getElementById('ul-id');
let newShirt = document.createElement('li');
newShirt.innerText = 'Mens T-shirt';
ul.prepend(newShirt);
````
