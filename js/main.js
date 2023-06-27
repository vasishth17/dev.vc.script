//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone");
    const resetButton = document.getElementById("resetBut");    
//store the dragged piece in a global variable
//we will need it in the handleDrop function    
let draggedPiece;


function changeBGImage() {
    //console.log("changeBGImage called");
    //url('../images/backGround0.jpg');
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`
}

function handleStartDrag() {
    //console.log("Started dragging this piece:", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");

    // Check if the drop zone already contains a puzzle piece
    if (this.firstChild) {
        return; // Return early if a piece already exists in the drop zone
    }

    // Remove any existing puzzle piece from the drop zone
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }

    // Append the dragged puzzle piece to the drop zone
    this.appendChild(draggedPiece);
}

function resetPuzzle() {
    // Move puzzle pieces back to the puzzle pieces section
    puzzlePieces.forEach(piece => {
      // Check if the piece is not already in the puzzle pieces section
      if (!piece.parentNode.classList.contains("puzzle-pieces")) {
        // Append the piece back to the puzzle pieces section
        puzzleBoard.previousElementSibling.appendChild(piece);
      }
    });
  
    // Clear any puzzle pieces from the drop zones
    dropZones.forEach(zone => {
      while (zone.firstChild) {
        zone.removeChild(zone.firstChild);
      }
    });
  }
 
resetButton.addEventListener("click", resetPuzzle);

function changeBGImage() {
    // Reset the puzzle before changing the background image
    resetPuzzle();
  
    // Change the background image
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
  };
  
  
  
  

//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));