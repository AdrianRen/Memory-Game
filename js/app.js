/*
 *
 * TODO: Please create your own README
 * TODO: More comments required.
 * TODO: Responsive Design
 *
 */

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
 *
 * TODO: Your game counts every click on every card but the moves should be calculated by increasing the count per each flipped pair of cards and not each card or click. Please fix and resubmit.
 *
 *
 */

/*
 * cards manipulation
 */

let gameStarted = false;
let openedCards = [];
let stopwatch;
// TODO: Testing
$('.card').click(flipCards);
function flipCards() {
  // Intial check game status. If game is NOT started -> start stopwatch
  if (gameStarted == false) {
    gameStarted = true;
    stopwatch = setInterval(startStopwatch,1000);
  }

  if (openedCards.length === 0) {
    $(this).toggleClass('open show animated flipInY');
    openedCards.push($(this));
    disableClick();
  } else if(openedCards.length === 1){
    // increment moves
    movesCounter();
    $(this).toggleClass('open show animated flipInY');
    openedCards.push($(this));
    setTimeout(matchCheck, 900)
  }
};

/*
 * Disable click feature on opened cards
 */
function disableClick() {
  openedCards.forEach(card => card.off('click'));
}

 /*
  * Enable click feature on opened cards
  */

function enableClick() {
  openedCards[0].click(flipCards);
}

/*
 * Check if the two opened cards are matching
 */

function matchCheck() {
  let firstCard = openedCards[0][0].firstChild.className;
  let secondCard = openedCards[1][0].firstChild.className;
  if (firstCard == secondCard) {
    console.log(`Cards are matched`);
    openedCards[0].addClass('match');
    openedCards[1].addClass('match');
    disableClick();
    emptyOpenedCards();
    setTimeout(winningCheck, 300);
  } else {
    openedCards[0].toggleClass('open show animated flipInY');
    openedCards[1].toggleClass('open show animated flipInY');
    enableClick();
    emptyOpenedCards();
  }
};

function emptyOpenedCards() {
  openedCards = [];
}

/*
 * Check if all cards are matched
 */

let cardsMatched = 0;
function winningCheck() {
  cardsMatched += 1;
  if (cardsMatched == 8) {
    showModal();
  }
};

/*
 * iziModal
 */


$("#modal").iziModal();

$('#modal-options').iziModal({
 headerColor: '#02ccba',
 width: '40%',
 overlayColor: 'rgba(0, 0, 0, 0.5)',
 fullscreen: true,
 transitionIn: 'fadeInUp',
 transitionOut: 'fadeOutDown'
});


/*
 * Moves Counter
 */

let counter = 0;
function movesCounter() {
    counter += 1;
    counter <= 1 ? $('.moves').html(`${counter} Move`) : $('.moves').html(`${counter} Moves`);
    if (counter === 12) {
      gameRating();
    } else if(counter == 20){
      gameRating();
    }
};

/*
 *
 *
 * TODO: Star rating should go from 3 to 1 but in your case goes from 3 to zero which is incorrect.
 *
 *
 */

/*
 * Remove star while moves increment
 */

function gameRating() {
  $('.stars').children()[0].remove();
  $('.stars').append('<li><i class="fa fa-star-o"></i></li>');
}

/*
 * Generate three stars on initial
 */
(function initalStars() {
  for (var i = 0; i < 3; i++) {
    $('.stars').append('<li><i class="fa fa-star"></i></li>');
  }
})();


/*
 * Stopwatch function
 */

let seconds = 0;
let minutes = 0;
function startStopwatch() {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  $('.second').html(seconds > 9 ? seconds : "0" + seconds);
  $('.minute').html(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00");
};



 /*
  * show modal when all cards matched
  */
function showModal() {
  clearInterval(stopwatch);
  let gameInfo = `
     <h3>Time</h3>
     <p>${minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00"}:${seconds > 9 ? seconds : "0" + seconds}</p>
     <h3>Stars</h3>
       <span><i class="fa fa-star"></i></span>
       <span><i class="fa ${ (counter > 20) ? "fa-star-o" : "fa-star"}"></i></span>
       <span><i class="fa ${ (counter > 12) ? "fa-star-o" : "fa-star"}"></i></span>
     <h3>Moves</h3>
     <p>${counter}</p>
     <button class="restart">PLAY AGAIN</button>`;
  $('#result').append(gameInfo);
  $('.restart').click(resetGame);
  $('#modal-options').iziModal('open');
};

/*
 * Reset game by clicking the restart icon
 */

 $('.restart').click(resetGame);
 function resetGame() {
   window.location.reload(true);
 }
