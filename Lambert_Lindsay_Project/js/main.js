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
	
/*  Login  ----------------------------------------- */		

	$('#signinButton').click(function(){
		var user = $('#user').val();
		var pass = $('#pass').val();
		console.log("This lets you know whether or not the password works.");
		$.ajax({
			url:'xhr/login.php',
			type:'post',
			dataType:'json',
			data: {
				username: user,
				password: pass
			},
			success:function(response) {
				console.log("Test User");
				if (response.error){
					alert(response.error);
			} else {
				window.location.assign('dashboard.html')
			};
		}
	});
});


/*  Logout  ----------------------------------------- */	

	$('#logOut').click(function(e){
		e.preventDefault();
		$.get('xhr/logout.php', function(){
			window.location.assign('index.html')
		})
	});
	

/*  Registration  ----------------------------------------- */	
	
	$('#register').on('click', function(){
		var firstname = $('#first').val(),
			lastname = $('#last').val(),
			username = $('#userName').val(),
			email = $('#email').val(),
			password = $('#password').val();
			console.log(firstname+' '+lastname+' '+username+' '+email+' '+password);
			
		$.ajax({
			url:'xhr/register.php',	
			type:'post',
			dataType:'json',
			data: {
				firstname: firstname,
				lastname: lastname,
				username: username,
				email: email,
				password: password,
			},
			
			success:function(response){
				if (response.error){
					alert(response.error);
				} else {
					window.location.assign('dashboard.html');
				}
			}
		});
	});
			

	
})(jQuery); // end private scope
























