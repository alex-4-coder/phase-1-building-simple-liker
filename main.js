// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Run the script after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get all heart icons
  const heartIcons = document.querySelectorAll(".like-glyph");

  // Get the modal and the modal message elements
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  // Add click event to each heart icon
  heartIcons.forEach(heart => {
    heart.addEventListener("click", () => {
      // Simulate server call
      mimicServerCall()
        .then(() => {
          // On success, toggle the heart state
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          // On failure, show modal with error message
          modal.classList.remove("hidden");
          modalMessage.textContent = error;

          // Hide modal after 3 seconds
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    });
  });
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
