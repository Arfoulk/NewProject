// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
$(document).ready(function(){

cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

var openedCards = [];

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;

	this.classList.add('flip');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return;
		}
		secondCard = this;
		
		checkForMatch();
	}

	function checkForMatch(){
		var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
		console.log("===");
		console.log(isMatch);
		console.log(firstCard.dataset.framework);
		console.log(secondCard.dataset.framework);
		isMatch ? disableCards() : unFlipCards();

	}

	function disableCards() {
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);
		resetBoard();

	}

	function unFlipCards() {
		lockBoard = true;
		setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			resetBoard();
		}, 1500);
	}
function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

(function shuffle() {
	cards.forEach(card => {
		var randomPos = Math.floor(Math.random() * 12);
		card.style.order = randomPos;
	});
	var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
})();





cards.forEach(card => card.addEventListener('click', flipCard));





});
