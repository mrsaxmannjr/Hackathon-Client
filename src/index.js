const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

fetch(baseURL)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));

fetch(baseURL,  {
  method: "post",
  body: JSON.stringify({greeting: "hello"}),
  headers: new Headers({
    "Content-Type": "application/json"
  })
})
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.log(err));
