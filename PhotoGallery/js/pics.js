

	$(document).ready(function () {
				$.ajax({
					type:"GET",
					url: "js/data.json",
					dataType: "json",
					success: function(data) {
						
						$.each(data,function(index){

							var pic=data[index];
							
							$(".gallery").append('<li><img src=images/square/'+ pic.path +' alt="'+ pic.title +'"></li>');
						});
					},
					error: function() { alert("In 1 - file loading error");  }
				});
		
			$(".gallery").on("mouseenter","img",function(event)
			{
				$(this).addClass("gray");
			    var title = $(this).attr("alt");

			    $.ajax({
							type:"GET",
							url: "js/data.json",
							dataType: "json",
							success: function(data) {
								
								$.each(data,function(index){
									var pic=data[index];
									if(pic.title == title)
									{
										$("body").append('<div id="preview"><img src=images/medium/'+pic.path+' alt = "'+pic.title+'"><p>'+pic.title+'<br>'+pic.city+','+pic.country+'['+pic.taken+']</p></div>');
										var y_len = event.pageY;
		                				var x_len = event.pageX;
						                $("#preview img").css({'height' : '350'});
						                $("#preview img").css({'width' : '500'});
						                $("#preview p").css({'width' : '500'});
						                $("#preview").css({top: y_len, left: x_len});
						                $("#preview").css({'z-index':'4000'});
						                $("#preview").fadeIn(4);
						                $("#preview").fadeOut(1800);
									}
								});
							},
							error: function() { alert("file loading error");  }
						});
			});

			$(".gallery").on("mousemove", "img", function(event) 
		    	{
		      		var y_len = event.pageY;
		      		var x_len = event.pageX;

		      		$("#preview").css({"top" : y_len, "left" : x_len});
		  		});


			$(".gallery").on("mouseleave", "img", function()
		    {
		      $(this).removeClass("gray"); 
		      $("#preview").remove();
		    });

	});
