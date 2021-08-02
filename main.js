// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//add the hidden class to the error modal in html
const modal = document.querySelector('#modal');
modal.className = 'hidden';

//when user clicks empty heart
  //invoke mimicServerCall
  mimicServerCall()
  .then()
  .catch(() => {
    modal.classList.remove('hidden');
    setTimeout(() => {
      modal.className = 'hidden';
    },3000)
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
