const baseURL = "https://whispering-inlet-64006.herokuapp.com/";

var selectionArray = [];
var clothesArray = [];
var matches = [];

fetch(`${baseURL}selection`)
  .then(response => response.json())
  .then(response => {
    selectionArray.push(response);
    console.log("selectionarray", selectionArray);
  })
  .catch(err => console.log(err));

fetch(`${baseURL}clothes`)
  .then(response => response.json())
  .then(response => {
    clothesArray.push(response);
    console.log("clothesArray", clothesArray);
    for (let i = 0; i < clothesArray[0].length; i++) {
      if (clothesArray[0][i].event.includes(selectionArray[0][0].event)) {
        matches.push(clothesArray[0][i]);
      }
    }
    console.log("matches", matches);
    for (let i = 0; i < matches.length; i++) {
      var aTag = document.createElement("a");
      var imgTag = document.createElement("img");

      aTag.classList.add("carousel-item");
      aTag.href = "#modal1";
      imgTag.src = matches[i].img;

      aTag.appendChild(imgTag);

      if (matches[i].type === "Top") {
        document.querySelector(".carouselTop").appendChild(aTag);
      }
      else if (matches[i].type === "Bottom") {
        document.querySelector(".carouselBottom").appendChild(aTag);
      }
      else if (matches[i].type === "Shoes") {
        document.querySelector(".carouselShoes").appendChild(aTag);
      }

    }

    if (selectionArray[0][0].faceURL !== "") {
      document.querySelector(".carouselFace").src = selectionArray[0][0].faceURL;
    }
  })
  .catch(err => console.log(err));
