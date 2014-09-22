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