// When the DOM is ready, initialize the scripts.
 jQuery(function( $ ){			  
	// Code here
	container = $('#content');
	
	
	// Prevent click on link
	$('a').live('click',function (event) {
		event.preventDefault();
		console.log("Link clicked :");
		console.log(this);
		
		var link = $(this).attr('href');
		
		$.ajax({
			dataType: 'html',
			type: 'GET',
			url: link,
			success:function(data){					
				container.empty().append(data);
				
				var container_step = container.offset();
				container.offset({ top: container_step.top, left: container_step.left + 300 });
				container.animate({
					"left": '-=300',
					}, 400, 'linear');
				
		
				return false;
			}
		});
	});
});