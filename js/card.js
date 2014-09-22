
var friendList = [
	"Aum",
	"Benzson",
	"Eve",
	"Film",
	"June",
	"Marc",
	"Meng",
	"N_Top",
	"Ong",
	"Ping",
	"Plan",
	"Plug",
	"Poomimy",
	"Punpun",
	"Tan",
	"Tan_Pee",
	"Term",
	"To",
	"Tony",
	"Top",
	"Yod"
];

var fadeDelay = 2000;
var flipDelay = 1000;

$(document).ready(function() {

	function card(name, imageUrl) {
		this.name = name;
		this.image = imageUrl;
	}

	shuffle(friendList); shuffle(friendList);

	var friends = [];

	for (var i=0; i<6; i++) {
		friends.push(
			{"name":friendList[i],
			"normal":friendList[i]+"_normal.jpg",
			"funny":friendList[i]+"_funny.jpg"}
		);
	}

	var cards = [];

	jQuery.each(friends, function(index, person) {
		cards.push(new card(person.name, person.normal));
		cards.push(new card(person.name, person.funny));
	});

	shuffle(cards); shuffle(cards);

	jQuery.each(cards, function(index, person) {
		$(".sponsorListHolder").append(
			'<div class="sponsor ' + person.name + '">'+
				'<div class="sponsorFlip">'+
					'<img alt="" src="">'+
				'</div>'+
				'<div class="sponsorData">'+
					'<img alt="" src="img/friends/'+ person.image +'">'+
				'</div>'+
			'</div>'
		);
	});

	var vmin = 0;
	if ($(window).height()>$(window).width())
		vmin = $(window).width()/100;
	else
		vmin = $(window).height()/100;

	$('#stopwatch').css({
        position : "absolute",
        left : 0,
        fontSize : 6*vmin
    });

    $('#start_wrapper').css({
    	top: 35*vmin
    });

    $('#topbar').fadeTo(0, 0.1);
    $('#main').fadeTo(0, 0.1);
    $('body').hide().fadeIn(fadeDelay);

    $('#start').bind("click", function() {
    	$('#topbar').css('opacity','1').hide().fadeIn(fadeDelay);
    	$('#main').css('opacity','1').hide().fadeIn(fadeDelay);
    	$('#start_wrapper').hide();
    });

	var flippedCards = [];
	var counter = 0;

	$('.sponsorFlip').bind("click", function() {

		if(counter==0) myTimer.Timer.play();

		var card = $(this);
		if(card.data('flipped')||flippedCards.length>=2) {
			return;
		}

		flippedCards.push(card);
		toggleFlip(card);

		if(flippedCards.length==2) {

			var name = [];
			jQuery.each(flippedCards, function(index, value) {
				name.push(value.parent().attr("class").split(" ").pop());
			});

			if (name[0]==name[1]) {

				setTimeout(function() {
					
					jQuery.each(flippedCards, function(index, value) {
						value.fadeTo(flipDelay, 0.4);
					});
					console.log(name + " ======= correct!");
					flippedCards = [];

					counter++;
					if(counter==friends.length) {

						myTimer.Timer.stop();
						console.log("===================================end");

						$('#stopwatch').append(
							'<span id="replay">Replay</span>'
						);


						$('#main').fadeTo(3000, 0.2);

						// Calculate current broser width.
						var vmin = 0;
						if ($(window).height()>$(window).width())
							vmin = $(window).width()/100;
						else
							vmin = $(window).height()/100;
						
						$('#stopwatch').animate({
							left: 0,
							top: 25*vmin,
							fontSize: 20*vmin
						}, 3000);

						$('#replay').animate({
							left: 0,
							top: 30*vmin,
							fontSize: 8*vmin
						});

						$('#replay').bind("click", function() {
							$('body').fadeTo(fadeDelay, 0);
							setTimeout(function() {
								location.reload();
							}, fadeDelay);
						});

					}

				}, flipDelay);

			} else {

				setTimeout(function() {
					
					jQuery.each(flippedCards, function(index, value) {
						toggleFlip(value);
					});
					console.log(name + " ======= wrong!");
					flippedCards = [];
				
				}, flipDelay);

			}

		}

	});

});

function toggleFlip(card) {

	var elem = card;

	if(elem.data('flipped')) {

		elem.revertFlip();
		elem.data('flipped',false)
		elem.css('cursor', 'pointer');

	} else {

		elem.flip( {
			direction:'lr',
			speed: 350,
			onBefore: function(){
				// Insert the contents of the .sponsorData div (hidden
				// from view with display:none) into the clicked
				// .sponsorFlip div before the flipping animation starts:
				elem.html(elem.siblings('.sponsorData').html());
			}
		});
		elem.data('flipped',true);
		elem.css('cursor', 'default');

	}
}

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