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
//Form for submitting comments (commentSubmitter)
let form = document.querySelector("#form");
form.addEventListener("submit", (e) => commentSubmitter(e));
let exhibitForForm = {};

//Function to render image display
function renderExhibits(exhibitsArray) {
  exhibitsArray.forEach((exhibit) => {
    exhibitForForm = exhibit;
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
  comments.textContent = exhibit.comments;
}

function commentSubmitter(e) {
  e.preventDefault();
  exhibitForForm.comments =
    exhibitForForm.comments + "\n/" + e.target.text.value;
  renderDetails(exhibitForForm);
  form.reset();
}
