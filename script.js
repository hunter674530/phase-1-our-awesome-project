//Gets exhibits from db.json
fetch(" http://localhost:3000/exhibits")
  .then((res) => res.json())
  .then((exhibitsArray) => {
    renderExhibits(exhibitsArray);
    renderDetails(exhibitsArray[0]);
  });
//Image container for image display(renderExhibits)
const imageContainer = document.querySelector("#image-container");
//Variables set for details(renderDetails)
let name = document.querySelector("#name");
let climate = document.querySelector("#section");
let description = document.querySelector("#description");
let imagePic = document.querySelector("#imagePic");
let rating = document.querySelector("#rating");
let comments = document.querySelector("#comments");
//Form for submitting comments (commentSubmitter)
let form = document.querySelector("#form");
form.addEventListener("submit", (e) => commentSubmitter(e));
//Set in renderDetails, used in commentSubmitter
let exhibitForForm = {};
//

//Function to render image display
function renderExhibits(exhibitsArray) {
  exhibitsArray.forEach((exhibit) => {
    let image = document.createElement("img");
    image.src = exhibit.image;
    imageContainer.appendChild(image);
    image.addEventListener("click", () => renderDetails(exhibit));
    image.addEventListener("mouseover", () => {
      image.style.maxHeight = 180 + "px";
      image.style.maxWidth = 240 + "px";
      console.log(image.style.maxHeight);
    });
    image.addEventListener("mouseout", () => {
      image.style.maxHeight = 200 + "px";
      image.style.maxWidth = 240 + "px";
      console.log(image.style.maxHeight);
    });
  });
}

function renderDetails(exhibit) {
  exhibitForForm = exhibit;
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
    "|" + e.target.text.value + "| " + exhibitForForm.comments;
  renderDetails(exhibitForForm);
  form.reset();
}
