/*
 *
 * TODO: Please create your own README
 * TODO: More comments required.
 * TODO: Responsive Design
 *
 */

let counter = 0,
    cardsMatched = 0,
    gameStarted = false,
    openedCards = [];
 /*
  * A List of Cards
  */
const cards = [
   'fa fa-diamond',
   'fa fa-paper-plane-o',
   'fa fa-anchor',
   'fa fa-bolt',
   'fa fa-cube',
   'fa fa-leaf',
   'fa fa-bicycle',
   'fa fa-bomb',
 ];

/*
 * Shuffle function from http://stackoverflow.com/a/2450976
 */
function shuffle(array) {
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
 * Append random cards to Deck
 * TODO: Delete the callback
 */
(function generateCards() {
  for (var x = 0; x < 2; x++) {
    shuffle(cards);
    for (var y = 0; y < cards.length; y++) {
      $('.deck').append(`<li class="card"><i class="fa ${cards[y]}"></i></li>`);
    }
  }
})();

/*
 * 
 */
$('.card').click(function() {
  $(this).addClass('open show animated flipInY');
})

//
//   /*
//    * TODO: toggle jQuery
//    */
//   // Display the card's symbol
//   let showSymbol = (e) => {
//     if (e.target.className === 'deck') {
//       return false;
//     } else if (e.target.className.includes(' open show')) {
//       return false;
//     } else {
//       e.target.className += ' open show';
//     }
//   };
//
//   // Add the card to a *list* of "open" cards
//   let addToOpenedCards = (e) => {
//     if (e.target.className !== 'deck') {
//       let symbolClassName = e.target.childNodes[0].className;
//       symbolID = e.target.childNodes[0].id;
//       openedCards.push(symbolClassName);
//       flippedCards.push(symbolID);
//     }
//   };
//
//   /*
//    *
//    *
//    * TODO: Your game counts every click on every card but the moves should be calculated by increasing the count per each flipped pair of cards and not each card or click. Please fix and resubmit.
//    *
//    *
//    */
  function movesCounter() {
      counter += 1;
      counter <= 1 ? $('.moves').html('${counter} Move') : $('.moves').html('${counter} Moves');
  };
//
// /*
//  *
//  *
//  * TODO: Star rating should go from 3 to 1 but in your case goes from 3 to zero which is incorrect.
//  *
//  *
//  */
//   let gameRating = () => {
//     switch (counter) {
//       case 6:
//         stars.removeChild(stars.firstElementChild);
//         modal_rating.innerHTML = 'Game Rating:  &starf;&starf;';
//         break;
//       case 10:
//         stars.removeChild(stars.firstElementChild);
//         modal_rating.innerHTML = 'Game Rating:  &starf;';
//         break;
//     }
//   }
//
//   let startStopwatch = () => {
//     seconds++;
//     if (seconds > 59) {
//       seconds = 0;
//       minutes++;
//     }
//     stopwatchSecond.innerHTML = seconds > 9 ? seconds : "0" + seconds;
//     stopwatchMinute.innerHTML = minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"
//   };
//   /*
//    * set up the event listener for a card. If a card is clicked:
//    *  DONE - display the card's symbol (put this functionality in another function that you call from this one)
//    *  DONE - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//    *  - if the list already has another card, check to see if the two cards match
//    *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//    *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//    *  DONE - increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//    *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//    */
//   let flipCards = (e) => {
//     if (e.target.className !== 'deck' && openedCards.length < 2 && !e.target.className.includes('open show')) {
//       showSymbol(e);
//       if (openedCards.length == 0 && e.target.className !== 'deck') {
//         addToOpenedCards(e);
//       } else if (openedCards.length == 1 && e.target.className !== 'deck') {
//         addToOpenedCards(e);
//         if (openedCards[0] == openedCards[1]) {
//           let card_1 = document.getElementById(flippedCards[0]),
//               card_2 = document.getElementById(flippedCards[1]);
//           card_1.parentElement.classList.add(`animated`);
//           card_1.parentElement.classList.add(`rubberBand`);
//           card_1.parentElement.classList.add(`match`);
//           card_2.parentElement.classList.add(`animated`);
//           card_2.parentElement.classList.add(`rubberBand`);
//           card_2.parentElement.classList.add(`match`);
//           cardsFlipped += 2;
//           openedCards = [];
//           flippedCards = [];
//           if (cardsFlipped == cardList.length) {
//             modal.style.display = "block";
//             clearInterval(interval);
//             modal_moves.innerHTML = `Moves: ${counter}`;
//             modal_time.innerHTML = `Time: ${minutes} : ${seconds}`;
//           }
//         } else {
//           let card_3 = document.getElementById(flippedCards[0]),
//               card_4 = document.getElementById(flippedCards[1]);
//           card_3.parentElement.classList.add(`animated`);
//           card_3.parentElement.classList.add(`wobble`);
//           card_3.parentElement.classList.add(`unmatch`);
//           card_4.parentElement.classList.add(`animated`);
//           card_4.parentElement.classList.add(`wobble`);
//           card_4.parentElement.classList.add(`unmatch`);
//           flipBack = () => {
//             card_3.parentElement.classList.remove(`animated`);
//             card_3.parentElement.classList.remove(`wobble`);
//             card_3.parentElement.classList.remove(`unmatch`);
//             card_4.parentElement.classList.remove(`animated`);
//             card_4.parentElement.classList.remove(`wobble`);
//             card_4.parentElement.classList.remove(`unmatch`);
//             card_3.parentElement.classList.remove('open');
//             card_3.parentElement.classList.remove('show');
//             card_4.parentElement.classList.remove('open');
//             card_4.parentElement.classList.remove('show');
//
//             openedCards = [];
//             flippedCards = [];
//           };
//           setTimeout(flipBack, 700);
//         }
//       }
//     }
//   };
//
// let openedCards = [],
//
//   flippedCards = [],
//
//   counter = 0,
//
//   seconds = 00,
//
//   minutes = 00,
//
//   cardsFlipped = 0,
//
//   interval,
//
//   gameStart = false;
//
//
// window.onload = generateCards();
// // Modal is inspired by w3schools
// // https://www.w3schools.com/howto/howto_css_modals.asp
//
// // When the user clicks on <span> (x), close the modal
//
// // btn.onclick = () => {
// //   modal.style.display = "block";
// // }
//
// span.onclick = function() {
//   modal.style.display = "none";
// };
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
//
//
// deck.addEventListener('click', (e) => {
//   movesCounter(e);
//   if (!gameStart && counter > 0) {
//     gameStart = true;
//     interval = setInterval(startStopwatch, 1000);
//   };
//   gameRating();
//   flipCards(e);
// });
//
// btn_restart.onclick = () => location.reload();
//
// modal_restart.onclick = () => location.reload();
