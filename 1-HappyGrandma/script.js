$(document).ready(function() {
    $(document).keydown(function(key) {
		var posGrandy = $("#grandma").position();
		var posChair = $("#chair").position();
		var lastWord = "<p class='text'>Thank you my child :)</p>";
		if (posChair.left !== posGrandy.left){
			switch(parseInt(key.which,10)) {	
				case 65:
					$('#chair').animate({left: "-=10px"}, 'fast');
					break;
				case 68:
					$('#chair').animate({left: "+=10px"}, 'fast');
					break;
				default:
					break;
			}
		}
		else {
			$('#chair').removeAttr('id');
			$('#grandma').removeAttr('id');
			$("p").remove();
			$("div").append(lastWord);
		
		}
    });
});