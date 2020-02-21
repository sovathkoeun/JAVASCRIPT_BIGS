const cards = document.querySelectorAll('.memory-card');

let firstCard = null;
let secondCard = null;
let FlippedCard = false;

cards.forEach(element => {
  element.addEventListener('click', flipCard);
});

function flipCard() {
  this.classList.add('flip');
  if (!FlippedCard) {
    FlippedCard = true;
    firstCard = this;
  } else {
    FlippedCard = false;
    secondCard = this;
    //this match
    CheckCardMathc();
  }
}
// function use for CheckCard
function CheckCardMathc() {
  let isMatchCard = firstCard.dataset.framework === secondCard.dataset.framework;
  if(isMatchCard){
   removeEventCard();
  }else{
    unFlipCards();
  }
  // isMatchCard ? removeEventCard() : unFlipCards();
}

// Remove for Card
function removeEventCard() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

// function for add FlipCard
function unFlipCards() {
  const TIME_FLIP = 1500;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, TIME_FLIP);
}

(function chooseCard() {
  cards.forEach(card => {
    let randomCard = Math.floor(Math.random() * 12);
    card.style.order = randomCard;
  });
})();