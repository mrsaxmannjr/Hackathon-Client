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
      // var divTag = document.createElement("div");
      // var aTag = document.createElement("a");
      // var imgTag = document.createElement("img");
      //
      // divTag.classList.add("carousel-item", "white-text", "active");
      // imgTag.src = matches[i].img;
      // aTag.classList.add("btn", "waves-effect", "white", "grey-text", "darken-text-2", "modal-trigger");
      // aTag.href = "#modal1";
      // aTag.textContent = "Item Details";
      //
      // divTag.appendChild(imgTag);
      // divTag.appendChild(aTag);

      if (matches[i].type == "Top") {
        if (
          document.querySelector(".carouselImageTop1").src === "") {
          document.querySelector(".carouselImageTop1").src = matches[i].img;
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
      var allButtons = document.querySelectorAll(".btn");
      for (let j = 0; j < allButtons.length; j++) {
        allButtons[j].addEventListener("click", event => {
          var src = event.target.previousElementSibling.src;

          if (matches[i].img === src) {
            document.querySelector(".itemBrand").textContent = matches[i].brand;
            document.querySelector(".itemName").textContent =
              matches[i].itemName;
            document.querySelector(".itemDesc").textContent =
              matches[i].description;
            document.querySelector(".itemPrice").textContent =
              "$" + matches[i].price;
            document.querySelector(".itemSize").textContent =
              matches[i].sizeRange;
            document.querySelector(".iteColor").textContent = matches[i].color;
            document.querySelector(".itemStoreName").textContent =
              matches[i].storeName;
            document.querySelector(".itemWebsite").textContent =
              matches[i].website;
          }
        });
      }
    }

    if (selectionArray[0].faceURL !== "") {
      document.querySelector(".facePlaceholder").src =
        selectionArray[0].faceURL;
    }
  })
  .catch(err => console.log(err));
