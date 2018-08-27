var liElements = document.getElementsByTagName('li');

for (let i = 0; i < liElements.length; i++) {
  liElements[i].onclick = e => {
    console.log(liElements[i].innerText)
  }
}
