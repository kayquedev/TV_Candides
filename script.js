var boxContainer = document.querySelector(".box-container");
var boxes = document.querySelectorAll(".box");
var leftArrow = document.querySelector(".arrow.left");
var rightArrow = document.querySelector(".arrow.right");

var boxWidth = boxes[0].offsetWidth; // Get the width of one box
var boxContainerWidth = boxContainer.offsetWidth; // Get the width of the box container
var numVisibleBoxes = Math.floor(boxContainerWidth / boxWidth); // Calculate the number of visible boxes
var maxOffset = boxes.length - numVisibleBoxes; // Calculate the maximum offset for the boxes

var currentOffset = 0; // Initialize the offset to 0

// Move the boxes to the left by one box width
function moveLeft() {
  if (currentOffset > 0) {
    currentOffset--;
    boxContainer.style.left = -currentOffset * boxWidth + "px";
  }
}

// Move the boxes to the right by one box width
function moveRight() {
  if (currentOffset < maxOffset) {
    currentOffset++;
    boxContainer.style.left = -currentOffset * boxWidth + "px";
  }
}

// Add event listeners to the arrow buttons
leftArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", moveRight);


themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-mode');
});