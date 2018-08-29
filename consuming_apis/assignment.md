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

//Creates and appends a ul to body of html template (index.html)
var ul = document.createElement('ul');
document.body.appendChild(ul);
ul.innerText = "Powered by News API";

let url = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=4d423a10da24490b87bfbe00817fff00";

//Fetch first url that links to all 10 articles
fetch(url)
  .then(
    response => {
      return response.json();  //JSON formatting
    }
  )
  .then(
    data => {

      //Loops through all articles, fetches each of them, and add the contents to each of 10 li bullet points on document
      for (let j = 0; j < data.articles.length; j++) {
        fetch(`https://cors-anywhere.herokuapp.com/` + data.articles[j].url)
          .then(
            r => {
              return r.text();  //Each article is in XML format
            }
          )
          .then(
            d => {


              //This converts the text html into a DOM object
              let parser = new DOMParser();
              let doc = parser.parseFromString(d, "text/html");  /*returns a DOM
                      document object for html*/


              //Creates a li and appends it to the ul
              let li = document.createElement('li');
              ul.appendChild(li);


              //Appends all children of body of incoming file to current li element
              let incomingBodyContainer = doc.getElementsByTagName('body')[0]
              let childrenBodyNodeList = incomingBodyContainer.querySelectorAll('body *')
              for (let i = 0; i < childrenBodyNodeList.length; i++) {
                li.appendChild(childrenBodyNodeList[i]);
              }


              //This takes care of appending the head files
              let incomingHeadContainer = doc.getElementsByTagName('head')[0]
              let childrenHeadNodeList = incomingHeadContainer.querySelectorAll('head *')
              let outgoingHeadContainer = document.head
              for (let i = 0; i < childrenHeadNodeList.length; i++) {
                outgoingHeadContainer.appendChild(childrenHeadNodeList[i]);
                }


              }
          )
          .catch(
            e => {
              console.log(`Error: ${e}`);
            }
          )
      }
    }
  )
  .catch(
    err => {
      console.log(`Error: ${err}`);
    }
  )



````






Add "Powered by News API"
API key:   4d423a10da24490b87bfbe00817fff00
