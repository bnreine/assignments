
````JS

//Loops through each result article and creates imbedded website in 10 li list items on
//web page

//***********************************************************
//Loops through all articles, fetches each of them, and add the contents to each of 10 li bullet points on document
for (let j = 3; j < 4/*data.articles.length*/; j++) {
  fetch(`https://cors-anywhere.herokuapp.com/` + data.articles[j].url)


    .then(
      r => {
        return r.text();  //Each article is in XML format
      }
    )



    //**********************
    .then(
      d => {
        console.log(d)

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
    //*****************



    .catch(
      e => {
        console.log(`Error: ${e}`);
      }
    )



}
//**********************************************************

````





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
      console.log('Hello')
    }
  )
  .then(
    data => {
      console.log(data)
      //Loops through all articles, fetches each of them, and add the contents to each of 10 li bullet points on document
      for (let j = 3; j < 4/*data.articles.length*/; j++) {
        fetch(`https://cors-anywhere.herokuapp.com/` + data.articles[j].url)
          .then(
            r => {
              return r.text();  //Each article is in XML format
            }
          )
          .then(
            d => {
              console.log(d)

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
