<<<<<<< HEAD
$(document).ready(function(){

	var matchno = ['1','2','3','4','5','6','1','2','3','4','5','6'];
	matchno = shuffle(matchno);
	var i;
	for (i = 0; i < matchno.length; i++) { 
    	//alert("card no."+i+ " | match no."+matchno[i]);
	}
   
    function shuffle(o){ //v1.0
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};
    $( ".sponsorFlip" ).click(function() {
   		var id = this.id;
   	    var cardno = id.substring(4)-1;
  		alert("card no."+cardno+ " | match no."+matchno[cardno]);
  		//idcard = "card"+cardno+1;
  		$("#card1").html("<img src='http://www.langevin.com/wp-content/uploads/2009/05/smile.png'>");
  		//$("#img1").attr('src', 'http://www.langevin.com/wp-content/uploads/2009/05/smile.png');
	});
});
=======
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
>>>>>>> origin/master
