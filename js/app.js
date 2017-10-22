/*
 * Declaration
 */

const cardList = [
    'fa fa-diamond',
    'fa fa-diamond',
    'fa fa-paper-plane-o',
    'fa fa-paper-plane-o',
    'fa fa-anchor',
    'fa fa-anchor',
    'fa fa-bolt',
    'fa fa-bolt',
    'fa fa-cube',
    'fa fa-cube',
    'fa fa-leaf',
    'fa fa-leaf',
    'fa fa-bicycle',
    'fa fa-bicycle',
    'fa fa-bomb',
    'fa fa-bomb'
  ],

  shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
  // Shuffle the list of cards using the provided "shuffle" method
  shuffledList = shuffle(cardList),

  deck = document.querySelector('.deck'),

  restart = document.querySelector('.restart'),

  moves = document.querySelector('.moves'),

  stars = document.querySelector('.stars'),

  stopWatch = document.querySelector('.stopWatch'),

  stopwatchMinute = document.querySelector('.minute'),

  stopwatchSecond = document.querySelector('.second'),

  modal = document.getElementById('myModal'),

  btn = document.getElementById("myBtn"),

  span = document.getElementsByClassName("close")[0]

// Display the card's symbol
showSymbol = (e) => {
    if (e.target.className === 'deck') {
      return false;
    } else if (e.target.className.includes(' open show')) {
      return false;
    } else {
      e.target.className += ' open show';
    }
  },
  // Add the card to a *list* of "open" cards
  addToOpenedCards = (e) => {
    if (e.target.className !== 'deck') {
      let symbolClassName = e.target.childNodes[0].className;
      symbolID = e.target.childNodes[0].id;
      openedCards.push(symbolClassName);
      flippedCards.push(symbolID);
    }
  },

  movesCounter = (e) => {
    if (e.target.className === 'card') {
      counter += 1;
      counter <= 1 ? moves.innerText = `${counter} Move` : moves.innerText = `${counter} Moves`;
    }
  },

  gameRating = () => {
    switch (counter) {
      case 6:
        stars.removeChild(stars.firstElementChild);
        break;
      case 15:
        stars.removeChild(stars.firstElementChild);
        break;
    }
  },

  startStopwatch = () => {
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
    stopwatchSecond.innerHTML = seconds > 9 ? seconds : "0" + seconds;
    stopwatchMinute.innerHTML = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"
  },
  /*
   * set up the event listener for a card. If a card is clicked:
   *  DONE - display the card's symbol (put this functionality in another function that you call from this one)
   *  DONE - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
   *  - if the list already has another card, check to see if the two cards match
   *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
   *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
   *  DONE - increment the move counter and display it on the page (put this functionality in another function that you call from this one)
   *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
   */
  flipCards = (e) => {
    if (e.target.className !== 'deck' && openedCards.length < 2) {
      showSymbol(e);
      if (openedCards.length == 0 && e.target.className !== 'deck') {
        addToOpenedCards(e);
      } else if (openedCards.length == 1 && e.target.className !== 'deck') {
        addToOpenedCards(e);
        if (openedCards[0] == openedCards[1]) {
          cardsFlipped += 2;
          openedCards = [];
          flippedCards = [];
          if (cardsFlipped == cardList.length) {
            modal.style.display = "block";
          }
        } else {
          flipBack = () => {
            let card_1 = document.getElementById(flippedCards[0]),
              card_2 = document.getElementById(flippedCards[1]);

            card_1.parentElement.classList.remove('open');
            card_1.parentElement.classList.remove('show');
            card_2.parentElement.classList.remove('open');
            card_2.parentElement.classList.remove('show');

            openedCards = [];
            flippedCards = [];
          };
          setTimeout(flipBack, 700);
        }
      }
    }
  };

let openedCards = [],

  flippedCards = [],

  counter = 0,

  seconds = 00,

  minutes = 00,

  cardsFlipped = 0,

  interval,

  gameStart = false;
// Modal is inspired by w3schools
// https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

for (const [index, symbol] of shuffledList.entries()) {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'card');
  const itemIcon = document.createElement('i');
  itemIcon.setAttribute('class', symbol);
  itemIcon.setAttribute('id', symbol + index);
  deck.appendChild(listItem).appendChild(itemIcon);
}

deck.addEventListener('click', (e) => {
  if (!gameStart) {
    gameStart = true;
    interval = setInterval(startStopwatch, 1000);
  };
  movesCounter(e);
  gameRating();
  flipCards(e);
});


restart.addEventListener('click', () => {

});
