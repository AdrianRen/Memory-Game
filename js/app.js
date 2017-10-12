/*
 * Create a list that holds all of your cards
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
];

// Shuffle function from http://stackoverflow.com/a/2450976
const shuffle = (array) => {
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
};

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

const shuffledList = shuffle(cardList);
const deck = document.querySelector('.deck');

for (let i of shuffledList) {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'card');
  const itemIcon = document.createElement('i');
  itemIcon.setAttribute('class', i);
  deck.appendChild(listItem).appendChild(itemIcon);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
let cards = [];
// Display the card's symbol
let showSymbol = (e) => {
  if(e.target.className === 'deck') return;
  e.target.className += ' open show';
};

// Add the card to a *list* of "open" cards
let addToCards = (e) => {
  cards.push(e.target.childNodes[0].className);
};

// set up the event listener for a card. If a card is clicked
deck.addEventListener('click', (e) => {
	showSymbol(e);
    addToCards(e);
});

let restart = document.querySelector('.restart');
restart.addEventListener('click', ()=> {
  window.location.reload();
});