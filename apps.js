//TODO: Create thumbnail images, so the user can click on them and see them in a fullscreen format

//TODO -  STEP 1: store image data

const imageData = [
  {
    imageName: "PHOTO 1",
    imageSrcThumb: "./assets/images/road-nigeria-small.jpg",
    imageSrcFull: "./assets/images/road-nigeria.webp",
    imageAlt: "An aerial view of a road cutting through open land.",
  },
  {
    imageName: "PHOTO 2",
    imageSrcThumb: "./assets/images/trees-nigeria-small.jpg",
    imageSrcFull: "./assets/images/trees-nigeria.webp",
    imageAlt: "Green trees overlooking mountain during daytime",
  },
  {
    imageName: "PHOTO 3",
    imageSrcThumb: "./assets/images/waterfall-nigeria-small.jpg",
    imageSrcFull: "./assets/images/waterfall-nigeria.webp",
    imageAlt: "Waterfall in the middle of the forest",
  },
  {
    imageName: "PHOTO 4",
    imageSrcThumb: "./assets/images/beach-small.jpg",
    imageSrcFull: "./assets/images/beach.webp",
    imageAlt:
      "Sandy beack in Lagos, Nigeria; people swimming in the ocean in the distance",
  },
  {
    imageName: "PHOTO 5",
    imageSrcThumb: "./assets/images/fruit-small.jpg",
    imageSrcFull: "./assets/images/fruit.webp",
    imageAlt:
      "Fruit basket in the market containing Avocado, Agbalumo (African Star Apple; Pineapple in the background",
  },
  {
    imageName: "PHOTO 6",
    imageSrcThumb: "./assets/images/sunset-small.jpg",
    imageSrcFull: "./assets/images/sunset.webp",
    imageAlt: "A sandy beach with waves crashing; Sunset at Elegushi beach",
  },
  {
    imageName: "PHOTO 7",
    imageSrcThumb: "./assets/images/pepper-small.jpg",
    imageSrcFull: "./assets/images/pepper.webp",
    imageAlt: "Woman selling pepper watches over her wares in a market.",
  },
  {
    imageName: "PHOTO 8",
    imageSrcThumb: "./assets/images/village-small.jpg",
    imageSrcFull: "./assets/images/village.webp",
    imageAlt:
      "An aerial view of a village in the middle of a forest in Nigeria",
  },
];

console.log(imageData);

//
//

// TODO: I CAN'T MAKE THIS FRIGGIN' WORK!!!!!!!???????????
//IMAGE TO BE DISPLAY ON WINDOW LOAD

let thumbContainer = document.getElementById("thumb-container");
let currentImageIndex = 0;
const displayElem = document.getElementById("display");

function init() {
  // await fetchImages()
  console.log(imageData);
  updateDisplayImage(imageData[currentImageIndex]);
  createThumbnails();
}

window.onload = init;

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
    const currentImageData = imageData[i];
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = currentImageData.imageSrcThumb;
    thumbnailImage.alt = currentImageData.imageAlt;
    thumbnailImage.className = "thumbnail-image";
    thumbnailImage.addEventListener("click", function () {
      createFullscreenImages(currentImageData);
    });
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

function createFullscreenImages(currentImageData) {
  const fullscreenContainer = document.getElementById("fullscreen-container");
  fullscreenContainer.innerHTML = null;
  const fullscreenImage = document.createElement("img");
  fullscreenImage.src = currentImageData.imageSrcFull;
  fullscreenImage.alt = currentImageData.imageAlt;
  fullscreenImage.className = "fullscreen-image";
  fullscreenContainer.appendChild(fullscreenImage);
}

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function

// TODO: I CANNOT MAKE THIS FRIGGIN' WORK EITHER !!!!!!!???????????

//TODO: Make the buttons clickable
const prevBtn = document.getElementById("previous");
const nextBtn = document.querySelector("next");

// TODO: Next button
// Need a function as addEventHandler
// We want function to: when button clicked, +1 to currentImageIndex
// We want to validate currentImageIndex against imageData.length-1
// if false, adjust currentImageIndex to 0
// create fullscreen images using imageData[currentImageIndex]

//  nextBtn.addEventListener("click",
//      #EVENTHANDLER FUNCTION);
//    });

function selectNextImage(index) {
  currentImageIndex += index;

  if (currentImageIndex >= imageData.length) currentImageIndex = 0;
  if (currentImageIndex < 0) currentImageIndex = imageData.length - 1;
  console.log(currentImageIndex);
  updateDisplayImage(imageData[currentImageIndex]);
}

//TODO: Previous button
// Do opposite for previous button

function selectPreviousImage(index) {
  currentImageIndex += index;

  if (currentImageIndex <= imageData.length) currentImageIndex = 0;
  if (currentImageIndex > 0) currentImageIndex = imageData.length - 1;
  console.log(currentImageIndex);
  updateDisplayImage(imageData[currentImageIndex]);
}
