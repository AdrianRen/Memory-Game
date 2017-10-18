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
      let symbolClassName = e.target.childNodes[0].className;
      openedCards.push(symbolClassName);
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
            console.log(`case 6 called`);
            break;
         case 15:
        	  stars.removeChild(stars.firstElementChild);
        	  console.log(`case 15 called`);
        	  break;
      }
    };

let openedCards = [],

    counter = 0;

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

for (let symbol of shuffledList) {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'card');
  const itemIcon = document.createElement('i');
  itemIcon.setAttribute('class', symbol);
  deck.appendChild(listItem).appendChild(itemIcon);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  DONE - display the card's symbol (put this functionality in another function that you call from this one)
 *  DONE - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// set up the event listener for a card. If a card is clicked
deck.addEventListener('click', (e) => {
  // e.stopPropagation();
  movesCounter(e);
  gameRating();
  showSymbol(e);
  addToOpenedCards(e);
});
console.log(moves.nextSibling);


restart.addEventListener('click', () => {
  window.location.reload();
});
