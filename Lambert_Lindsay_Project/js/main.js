/*  
	PC Pet Charities and Projects
	Author: Lindsay Lambert
*/

(function($){
	
/* Accordion  ----------------------------------------- */	
 
 
  $('#tab-acc p').hide().eq(0).show();
  $('#tab-acc p:not(:first)').hide();
  $('.tabs li').click(function(e) {
	  e.preventDefault();
	  $('#tab-acc p').hide();
  	  
	  $('.tabs .current').removeClass("current");
	  $(this).addClass('current');
	  var clicked = $(this).find('a:first').attr('href');
	  $('#tab-acc ' + clicked).fadeIn(3000);
 	  }).eq(0).addClass('current');
 	

/*  Modal  ----------------------------------------- */


	$('.clickModal').on('click', function(event) {
		event.preventDefault();
		$('#overlay').fadeIn().find('#modal').fadeIn();
	});
	
	$('.x').on('click', function(event) {
		event.preventDefault();
		$('#overlay').fadeOut().find('#modal').fadeOut();
	});
	
	$('.myStatus').mouseover(function() {
		$(this).fadeTo(100, .3);
	});
	
	$('.myStatus').mouseout(function() {
		$(this).fadeTo(100, 1);
	});
	
	
/*  Tooltips  ----------------------------------------- */	
	
	
	$('.masterTooltip').hover(function() {
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('slow');
	},  function() {
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function(e) {
		var mousex = e.pageX + 20;
		var mousey = e.pageY + 10;
		$('.tooltip').css({ top: mousey, left: mousex })
});
		
	
	
	/*$("#fadein").click(function() {
                $("#theDiv").fadeIn("normal");
            });
            $("#fadeout").click(function() {
                $("#theDiv").fadeOut("normal");
            });
            $("#fadeto3").click(function() {
                $("#theDiv").fadeTo("slow", 0.3);
            });
            $("#fadeup").click(function() {
                $("#theDiv").fadeTo("slow", 1.0);
            });

	*/
	
		

	
})(jQuery); // end private scope




