/*  
	PC Pet Charities and Projects
	Author: Lindsay Lambert
*/

(function($){
	
	
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




