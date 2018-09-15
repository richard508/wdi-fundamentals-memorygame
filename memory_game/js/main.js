console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
    var winner = document.getElementById('winner');
    winnerNum = Number(winner.innerHTML);
    var newNum = winnerNum + 1;
    winner.innerHTML = newNum;

    alert("You found a match!")
  }
  else{
    var loser = document.getElementById('loser');
    loserNum = Number(loser.innerHTML);
    var newNum = loserNum + 1;
    loser.innerHTML = newNum;
    alert("Sorry, try again!")
  }
};
var flipCard = function(){
  cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    setTimeout(function() {
      checkForMatch();
    }, 100);
  }
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}
}

var reset = document.getElementById('reset');
var resetBoard = function(){
  while(cardsInPlay.length > 0) {
    cardsInPlay.pop();
  }
  for (var i = 0; i < cards.length; i++) {
    cardId = document.getElementsByTagName('img')[i];
    if (cardId.getAttribute != 'images/back.png') {
      cardId.setAttribute('src', 'images/back.png');
    }
	}
}

reset.addEventListener('click', resetBoard);

createBoard();
