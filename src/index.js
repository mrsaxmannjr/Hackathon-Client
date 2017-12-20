const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

var events = ["Black Tie Event", "Western Themed Party", "Interview", "wedding"];

for (let i = 0; i < events.length; i++) {
  var newOption = document.createElement("option");
  newOption.textContent = events[i];
  newOption.value = events[i];
  document.querySelector(".eventSelect").appendChild(newOption);
}

function postData() {
  fetch(baseURL + "selection", {
    method: "post",
    body: JSON.stringify(getFormData()),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(response => response.json())
    .then(() => location.assign("./result.html"))
    .catch(err => console.log(err));
}

document.querySelector(".formContainer").addEventListener("submit", event => {
  event.preventDefault();
  postData();
});

function getFormData() {
  var data = new FormData(document.querySelector(".formContainer"));
  console.log({
    event: data.get("eventSelect"),
    eventType: data.get("subEventSelect"),
    faceURL: data.get("faceURL")
  });
  return {
    event: data.get("eventSelect"),
    eventType: data.get("subEventSelect"),
    faceURL: data.get("faceURL")
  };
}
