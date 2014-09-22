<<<<<<< HEAD
=======
$(document).ready(function() {

	function card(name, imageUrl) {
		this.name = name;
		this.image = imageUrl;
	}

	var friends = [
		{"name":"marc","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"jeaw","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"korn","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"peth","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"ping","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}, 
		{"name":"gain","normal":"marc_normal.jpg", "funny":"marc_funny.jpg"}
	];

	var cards = [];

	jQuery.each(friends, function(index, person) {
		cards.push(new card(person.name, person.normal));
		cards.push(new card(person.name, person.funny));
	});

	// jQuery.each(cards, function(index, person) {
	// 	console.log(person);
	// });

	shuffle(cards);

	// console.log("===========shuffle=============");

	jQuery.each(cards, function(index, person) {
		// console.log(person);
		// alert("adding " + person.name + "to screen");
		$(".sponsorListHolder").append(
			'<div title="Click to flip" class="sponsor">'+
				'<div class="sponsorFlip">'+
					'<img alt="" src="img/sponsors/google.png">'+
				'</div>'+
				'<div class="sponsorData">'+
					'<img alt="" src="img/'+ person.image +'">'+
				'</div>'+
		'</div>');
	});

	$('.sponsorFlip').bind("click",function(){

        // $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):

        var elem = $(this);

        // data('flipped') is a flag we set when we flip the element:

        if(elem.data('flipped'))
        {
            // If the element has already been flipped, use the revertFlip method
            // defined by the plug-in to revert to the default state automatically:

            elem.revertFlip();

            // Unsetting the flag:
            elem.data('flipped',false)
        }
        else
        {
            // Using the flip method defined by the plugin:

            elem.flip({
                direction:'lr',
                speed: 350,
                onBefore: function(){
                    // Insert the contents of the .sponsorData div (hidden
                    // from view with display:none) into the clicked
                    // .sponsorFlip div before the flipping animation starts:

                    elem.html(elem.siblings('.sponsorData').html());
                }
            });

            // Setting the flag:
            elem.data('flipped',true);
        }
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
>>>>>>> 5780263daefecb497c0671cf4981996edf4c03df
