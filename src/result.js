const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

var selectionArray = [];

fetch(baseURL + "/selection")
  .then(response => response.json())
  .then(response => {
    selectionArray.push(response);
    console.log(response);
    console.log(selectionArray);
  })
  .catch(err => console.log(err))
