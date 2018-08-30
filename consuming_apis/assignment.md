#### Questions

> Explain the difference between the request/response cycle.

A: The request is when your browser sends a signal requesting data from another
server.  The response is when the server from which your browser requested data
actually sends back a signal with a response.

> List common response codes and their groupings.

A:
200's: Ok/Success (eg. `200`: OK, the request succeeded)
300's: Redirect (eg. `303`: See other, sends another `GET` request to a third URL)
400's: Requester made a mistake (eg. `404`: Not Found, the server does not have this URL)
500's: Server made a mistake (eg. `500`: Internal Server Error, server encountered an
  error that it doesn't know how to handle)

> Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.

A:
`GET`: Is a request to retrieve a page from the server.
`POST`: Is a request to add a new object on the server.
`PATCH`: Is a request to update an existing object on the server.
`PUT`: Is a request to replace an existing object on the server.
`DELETE`: A request to delete an object from the server.


>Explain the difference between synchronous and asynchronous code.

A: Synchronous code means you execute one line of code (eg. make a `GET` HTTP request), wait until it's done (eg. receive response with requested information),
then execute the next line of code.  Asynchronous does the same thing, except, once
you execute a line of code, you don't wait for it to complete to move on to execute the
next line of code.

>Explain what a JavaScript promise is.

A: It is an object returned from a server upon request that executes synchronously even though the request/response protocol is asynchronous.  Within a promise, you typically use `.then` `AJAX` statements to pause the code execution and execute a response handler function or error handler function once the request completes.

>Explain why CORS exists and how we can work around it.

A: CORS exists so that webpages can request resources on another webpage across domains.
This poses risk to virus attack.  To get around this vulnerability in your webpage, all browsers disallow CORS by default.  Instead you can use a proxy webpage (`https://cors-anywhere.herokuapp.com/`) and it will request the information first, then
return it to your webpage.


#### Code

>Create a fetch request in JavaScript.


````JS
let url = "https://cors-anywhere.herokuapp.com/http://recipepuppy.com/api";
fetch(url)
  .then(
    response => {return response.json();}
  )
  .then(
    data => {console.log(data);}
  )
  .catch(
    err => {console.log(`Error: ${err}`);}
  )
````

>It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there. A. Go to News API and click 'Get API Key' sign up for a free API key. B. Use your API key to create a fetch using this URL: `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE>` C. Loop through the result data, and for each story on HackerNews, create an `<li>` tag that contains the contents of the story.


````JS

let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=4d423a10da24490b87bfbe00817fff00";


fetch(url)


  .then(
    response => {
      return response.json();  //JSON formatting
    }
  )


  //999999999999999999999999999999999999999999999999999999999999999999999999
  .then(
    data => {



      //888888888888888888888888888888888888
      let results = data.articles;
      let ul = document.createElement("ul");
      ul.innerText = "Powered by News API";
      let body = document.querySelector("body");
      body.appendChild(ul);
      results.map(recipe => {
        // loop through each recipe object in the array of recipes
      let recipeItem = document.createElement("li"); // create a recipe item `<li>`
      recipeItem.innerHTML =
          '<a href="' + recipe.url + '">' + recipe.title + "</a>"; // add the link to each li with each recipe's title as the text and link as the href
      ul.appendChild(recipeItem); // append each recipe to the `<ul>`
        })
      //888888888888888888888888888888888888888



    })
//9999999999999999999999999999999999999999999999999999999999999999999999999999999


  .catch(
    err => {
      console.log(`Error: ${err}`);
    }
  )

````
