#### Questions

> What is the difference between `document.querySelector()` and `document.querySelectorAll()`?

A: `document.querySelector()` selects the first DOM element that matches the group of selectors passed to it.  `document.querySelectorAll()` selects and passes into an array all
DOM elements that match the group of selectors passed to it.

> What is the difference between `getElement(s)By` and `querySelector(All)`?

A: `get Element(s)By` is faster and more specific to a particular selector (eg. `p` or `#hello-world`, but not both).  `querySelector(All)` is slower, but more flexible
in that it can select elements from a combination of selectors (eg. `p .className #hello-world`)

>What do JavaScript event handlers do and what is an example of one?

A: They perform an action upon some event occurrence.  
Eg. `document.getElementsByTagName('p').onclick = () => {
  //insert code to execute here
}`


#### Code

> Using the code from the prior checkpoint, add an Event Handler to the <li> element and console.log() the name of the shirt they selected.

````html
<!DOCTYPE html>
<html>
  <head>
    <title>Shirts</title>
  </head>
  <body>
    <h3>Shirts</h3>
    <ul id='list'>
      <li>Biker Jacket</li>
  	  <li>Mens Shirt</li>
    </ul>
  </body>
</html>
````

````JS
var liElements = document.getElementsByTagName('li');

for (let i = 0; i < liElements.length; i++) {
  liElements[i].onclick = e => {
    console.log(liElements[i].innerText)
  }
}
````
