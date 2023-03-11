const submitButton = document.getElementById('submit-btn')
const thankYouCard = document.getElementById('thank-you-card')
const ratingSelectorCard = document.getElementById('rating-selector-card')
const ratingButtons = document.getElementsByClassName('number-btn')
const ratingText = document.getElementById('rating-text')

let currentRating = 0;

submitButton.addEventListener('click', () => {
  if(!currentRating) return
  thankYouCard.style.display = 'flex'
  ratingSelectorCard.style.display = 'none'
  ratingText.innerText = ratingText.innerText.replace('X', currentRating)
})

for(let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener('click', () => {
    if(currentRating) {
      ratingButtons[currentRating - 1].removeAttribute('data-active')
    }
    ratingButtons[i].setAttribute('data-active', '')
    currentRating = ratingButtons[i].innerText
  })
}
