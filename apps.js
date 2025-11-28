//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

//TODO -  STEP 1: store image data

const imageData = [
  {
    imageName: "PHOTO 1",
    imageSrc: "./assets/images/road-nigeria.webp",
    imageAlt: "An aerial view of a road cutting through open land.",
  },
  {
    imageName: "PHOTO 2",
    imageSrc: "./assets/images/trees-nigeria.webp",
    imageAlt: "Green trees overlooking mountain during daytime",
  },
  {
    imageName: "PHOTO 3",
    imageSrc: "./assets/images/waterfall-nigeria.webp",
    imageAlt: "Waterfall in the middle of the forest",
  },
];

console.log(imageData);

//
//

//TODO - STEP 2: create thumbnail images
// function createThumbnails() {
//select the DOM element (thumbnail-container) to contain our thumbnails
//this is a repetitive task --> for loop (for, forEach() ...)
//Loop task:
// - create img element
// - update the src and alt attributes (properties) of the img element to match those in the array (parameters)
// - give each img a className (img.className)
// - add an event listener to each image --> the event handler of this event is the function you write to create the fullscreen images
// - append the created images to the thumbnail-container
// }

function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  for (let i = 0; i < imageData.length; i++) {
    const currentImageData = imageData[i]; //MOVE TO CREATE GLOBAL SCOPE
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = currentImageData.imageSrc;
    thumbnailImage.alt = currentImageData.imageAlt;
    thumbnailImage.className = "thumbnail-image";
    //   thumbnailImage.addEventListener("click", function (event){createFullscreenImages}; ????
    thumbnailContainer.appendChild(thumbnailImage);
  }
}
createThumbnails();

//
//

//TODO - STEP 3: create fullscreen images
// function createFullscreenImages() {
//this is the event handler
//select the fullscreen-container
//delete the current fullscreen image
// fullscreenContainer.innerHTML = "" OR null
//create image
//update its values (properties)
//add className for styling (making the image full screen)
//append the image to the container
// }

function createFullscreenImages() {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  document.fullscreenContainer;
  //delete image how?
  fullscreenContainer.innerHTML = null;
  const fullscreenImage = document.createElement("img");
  fullscreenImageImage.src = currentImageData.imageSrc;
  fullscreenImageImage.alt = currentImageData.imageAlt;
  fullscreenImageImage.className = "fullscreen-image";
  fullscreenContainer.appendChild(fullscreenImageImage);
}

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function
