var main = function() {
			
    $(".dropdown").hover(function() {
                $('.dropdown-menu').stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b').toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu').stop( true, true ).fadeOut("slow");
                $(this).toggleClass('open');
                $('b').toggleClass("caret caret-up");                
            
    });
	
	$(document).scroll(function () {
        var y = $(this).scrollTop();
        var x = $("#nav").position();
        if (y > x.top) {
          $('#nav').addClass('sticky');
        } else {
            $('#nav').removeClass('sticky');
        }
        });
			
	$('#respon').click(function(){
		var x = document.getElementById("myTopnav");
			if (x.className === "menu") {
				x.className += " responsive";
			} else {
				x.className = "menu";
			}
		
	});
	
	$("#myBtn").click(function(){
		$("#myModal").modal();
	});
  
  
};

$(document).ready(main);