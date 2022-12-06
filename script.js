//Gets exhibits from db.json
fetch(" http://localhost:3000/exhibits")
  .then((res) => res.json())
  .then((exhibitsArray) => {
    renderExhibits(exhibitsArray);
    renderDetails(exhibitsArray[0]);
  });
//Image container for image display
const imageContainer = document.querySelector("#image-container");
//Variables set for details
let name = document.querySelector("#name");
let climate = document.querySelector("#section");
let description = document.querySelector("#description");
let imagePic = document.querySelector("#imagePic");
let rating = document.querySelector("#rating");
let comments = document.querySelector("#comments");

//Function to render image display
function renderExhibits(exhibitsArray) {
  exhibitsArray.forEach((exhibit) => {
    let image = document.createElement("img");
    image.src = exhibit.image;
    imageContainer.appendChild(image);
    image.addEventListener("click", () => renderDetails(exhibit));
  });
}

function renderDetails(exhibit) {
  name.textContent = exhibit.name;
  climate.textContent = exhibit.section;
  description.textContent = exhibit.description;
  imagePic.src = exhibit.image;
  rating.textContent = exhibit.rating + " Stars";
  comments.textContents = exhibit.comments;
}
