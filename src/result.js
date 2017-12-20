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
      if (
        clothesArray[0][i].event.includes(selectionArray[0].event) &&
        clothesArray[0][i].eventType === selectionArray[0].eventType
      ) {
        matches.push(clothesArray[0][i]);
      }
    }
    console.log("matches", matches);
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].type == "Top") {
        if (
          document.querySelector(".carouselImageTop1").style.backgroundImage ===
          ""
        ) {
          document.querySelector(".carouselImageTop1").style.backgroundImage =
            matches[i].img;
        } else if (document.querySelector(".carouselImageTop2").src === "") {
          document.querySelector(".carouselImageTop2").src = matches[i].img;
        } else if (document.querySelector(".carouselImageTop3").src === "") {
          document.querySelector(".carouselImageTop3").src = matches[i].img;
        } else if (document.querySelector(".carouselImageTop4").src === "") {
          document.querySelector(".carouselImageTop4").src = matches[i].img;
        }
      } else if (matches[i].type == "Bottom") {
        if (document.querySelector(".carouselImageBottom1").src === "") {
          document.querySelector(".carouselImageBottom1").src = matches[i].img;
        } else if (document.querySelector(".carouselImageBottom2").src === "") {
          document.querySelector(".carouselImageBottom2").src = matches[i].img;
        } else if (document.querySelector(".carouselImageBottom3").src === "") {
          document.querySelector(".carouselImageBottom3").src = matches[i].img;
        } else if (document.querySelector(".carouselImageBottom4").src === "") {
          document.querySelector(".carouselImageBottom4").src = matches[i].img;
        }
      } else if (matches[i].type == "Shoes") {
        if (document.querySelector(".carouselImageShoes1").src === "") {
          document.querySelector(".carouselImageShoes1").src = matches[i].img;
        } else if (document.querySelector(".carouselImageShoes2").src === "") {
          document.querySelector(".carouselImageShoes2").src = matches[i].img;
        } else if (document.querySelector(".carouselImageShoes3").src === "") {
          document.querySelector(".carouselImageShoes3").src = matches[i].img;
        } else if (document.querySelector(".carouselImageShoes4").src === "") {
          document.querySelector(".carouselImageShoes4").src = matches[i].img;
        }
      }
    }

    if (selectionArray[0].faceURL !== "") {
      document.querySelector(".facePlaceholder").src =
        selectionArray[0].faceURL;
    }
  })
  .catch(err => console.log(err));
