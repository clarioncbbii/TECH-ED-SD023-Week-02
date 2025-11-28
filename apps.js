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
  {
    imageName: "PHOTO 4",
    imageSrc: "./assets/images/beach.webp",
    imageAlt:
      "Sandy beack in Lagos, Nigeria; people swimming in the ocean in the distance",
  },
  {
    imageName: "PHOTO 5",
    imageSrc: "./assets/images/fruit.webp",
    imageAlt:
      "Fruit basket in the market containing Avocado, Agbalumo (African Star Apple; Pineapple in the background",
  },
  {
    imageName: "PHOTO 6",
    imageSrc: "./assets/images/sunset.webp",
    imageAlt: "A sandy beach with waves crashing; Sunset at Elegushi beach",
  },
  {
    imageName: "PHOTO 7",
    imageSrc: "./assets/images/pepper.webp",
    imageAlt: "Woman selling pepper watches over her wares in a market.",
  },
  {
    imageName: "PHOTO 8",
    imageSrc: "./assets/images/village.webp",
    imageAlt:
      "An aerial view of a village in the middle of a forest in Nigeria",
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
    const currentImageData = imageData[i];
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = currentImageData.imageSrc;
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
  fullscreenImage.src = currentImageData.imageSrc;
  fullscreenImage.alt = currentImageData.imageAlt;
  fullscreenImage.className = "fullscreen-image";
  fullscreenContainer.appendChild(fullscreenImage);
}

//add the createFullscreenImages function as the event handler of the event above
//call the createThumbnails function

//TODO: Make the buttons clickable
const prevBtn = document.getElementById("previous");
const nextBtn = document.querySelector("next");
let currentImageIndex = 0;

// TODO: Next button
// Need a function as addEventHandler
// We want function to: when button clicked, +1 to currentImageIndex
// We want to validate currentImageIndex against imageData.length-1
// if false, adjust currentImageIndex to 0
// create fullscreen images using imageData[currentImageIndex]

//  nextBtn.addEventListener("click",
//      #EVENTHANDLER FUNCTION);
//    });

//TODO: Previous button
// Do opposite for previous button
