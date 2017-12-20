const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

fetch(baseURL + "clothes")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err))
