// Initialize the current image index to 0
let currentImageIndex = 0;

// Function to change the displayed image in the carousel
function changeImage(direction) {
  // Get all the image elements in the carousel
  const images = document.querySelectorAll(".carousel img");
  // Remove the "active" class from the current image
  images[currentImageIndex].classList.remove("active");
  // Calculate the new image index based on the direction
  // The modulo operation ensures the index wraps around within the bounds of the array
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  // Add the "active" class to the new current image
  images[currentImageIndex].classList.add("active");
}

// Set an interval to automatically change the image every 3000 milliseconds (3 seconds)
setInterval(() => changeImage(1), 3000);
