$(document).ready(function() {
	
	$( "#card1" ).click(function() {
  		alert('click1');
	});

	function card(name, imageUrl) {
		this.name = name;
		this.image = imageUrl;
		// alert("creating cart for "+this.name+" with image "+this.image);
	}

	var cards = [];

	var friends = [
		{"name":"marc","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"jeaw","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"korn","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"peth","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"ping","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"gain","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}
	];

	jQuery.each(friends, function(index, person) {
		cards.push(new card(person.name, person.normal));
		cards.push(new card(person.name, person.funny));
	});

	jQuery.each(cards, function(index, person) {
		console.log(person);
	});

	shuffle(cards);

	console.log("===========shuffle=============");

	jQuery.each(cards, function(index, person) {
		console.log(person);
	});

});

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}