$(document).ready(function(){


	$.ajax({

		type:'GET',
    	url:'js/data.json',
    	success: function(images){
     		$.each(images, function(index, image) {
     			$('.gallery').append('<li><img src=images/square/'+image.path+ ' alt="'+ image.title+'"></li>');
     		});
		}

	});

	$('.gallery').on("mouseenter","li",function(event){
		$(this).children().addClass("gray");
		
		var xPos = event.pageX+30;
		var yPos = event.pageY-30;

		console.log(event.pageX);
		console.log(event.pageY);

		var title = $(this).children().attr('alt');
		
		

		 $.ajax({
							type:"GET",
							url: "js/data.json",
							
							success: function(images) {

								
								$.each(images,function(index,image){
									
									if(image.title == title)
									{
										$('#preview').remove();
										$('body').append('<div id="preview"><img src=images/medium/'+image.path+' alt="'+ image.title+'"><p>'+image.title+'</p><p>'+image.city+','+image.country+'['+image.taken+']</p></div>');
     									$('#preview').fadeIn(400);
     									$('#preview').css({"left":xPos,"top":yPos});
									}
								});
							}
						});

		
	});
	

	$(".gallery").on("mousemove", "li", function(event) {
		var xPos = event.pageX+15;
		var yPos = event.pageY-40;
		$('#preview').css({"left":xPos,"top":yPos});
	
	});

	$('.gallery').on("mouseleave","li",function(){

		$(this).children().removeClass("gray");
		$( "#preview" ).remove();

	});





});