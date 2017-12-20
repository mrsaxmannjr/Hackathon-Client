const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

for (let i = 0; i < events.length; i++) {
  var newOption = document.createElement("option");
  newOption.textContent = events[i];
  newOption.value = events[i];
  document.querySelector("eventSelect").appendChild(newOption);
}

fetch(baseURL)
  .then(response => response.json())
  .then(response => {
  })
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
