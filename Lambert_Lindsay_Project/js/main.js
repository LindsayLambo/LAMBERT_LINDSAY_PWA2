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
	

/*  Registration Button on Index Page ----------------------------------------- */
	
	$('#regisButton').on('click', function(e){
		e.preventDefault();
		window.location.assign('registration.html');
	});
	
	
/*  Submit Button on Registration Page ----------------------------------------- */	

	$('#register').on('click', function(e){
		e.preventDefault();
		window.location.assign('dashboard.html');
	});


/*  Sign Out Buttons on All Pages ----------------------------------------- */

	$('.signOut').on('click', function(e){
		e.preventDefault();
		window.location.assign('index.html');
	});



/*  Project Button on Dashboard Pages ----------------------------------------- */

	$('#projectsButton').on('click', function(e){
		e.preventDefault();
		window.location.assign('projects.html');
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
			


/*  Display Username  ----------------------------------------- */	

	$.getJSON("xhr/check_login.php", function(data){
		console.log(data);
		$.each(data, function(key, val){
			console.log(val.first_name);
			$(".userid").html("Welcome User: "+ val.first_name);
		})
	});
	
	
/*  Modal Add Project Button  ----------------------------------------- */	


	$('#addButton').on('click', function(){
		var projname = $('#projectName').val(),
			projDesc = $('#projectDescription').val(),
			projDue = $('#projectDueDate').val(),
			status = $('input[name="status"]:checked').prop("id");
			
			$.ajax({
				url:"xhr/new_project.php",
				type:"post",
				dataType:"json",
				data: {
					projectName: projname,   //Needs to match your variable Name on line 201
					projectDescription: projDesc,
					dueDate: projDue,
					status: status
				},
				success: function(response){
					console.log('Testing');
					if (response.error){
						alert(response.error);
					} else {
						window.location.assign("projects.html");
					};
				}
			});
	});
						


/*  Display and Delete Page: Projects  ----------------------------------------- */	
	
	var projects = function(){
		$.ajax({
			url: 'xhr/get_projects.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				if(response.error){
					console.log(response.error);
				}else {
					for(var i=0, j=response.projects.length; i < j; i++){
						var result = response.projects[i];
						
						$(".projects").append(
						'<div style="border:1px solid black">' + " <input class= 'projectid' type= 'hidden' value=' " + result.id + " ' > " + " Project Name: " + result.projectName + "<br>" + " Project Description: " + result.projectDescription + "<br>" + "Project Status: " + result.status + "<br>" + '<button class="deletebtn">Delete</button>' + '<button class="editbtn">Edit</button>' + '</div> <br>');
					};
					$('.deletebtn').on('click', function(e){
						console.log('testing delete');
						$.ajax({
							url:'xhr/delete_project.php',
							data: {
								projectID: result.id
							},
							type:'POST',
							dataType:'json',
							success: function(response){
								console.log('Testing');
								if(response.error){
									alert(response.error);
								} else {
									//console.log(result.id);
									window.location.assign("projects.html");
								};
							}
						});
					});
				}
			}
		})
	}
projects();


/*  Datepicker: Projects Modal ----------------------------------------- */	




$(function() {
    $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "images/calendar.gif",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  });
							

	
})(jQuery); // end private scope
























