// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.querySelector('#modal');
modal.className = 'hidden';
mimicServerCall()
.then(likeButton)
.catch(() => {
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.className = 'hidden';
  },3000)
})
  
function likeButton() {
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener('click', activateHeart);
  })
}

function activateHeart(e) {
  if (e.target.textContent === EMPTY_HEART) {
    e.target.textContent = FULL_HEART;
    e.target.classList.add('activated-heart');
  } else {
    e.target.textContent = EMPTY_HEART;
    e.target.classList.remove('activated-heart');
  }
}


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
