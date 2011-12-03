// When the DOM is ready, initialize the scripts.
 jQuery(function( $ ){			  
	// Code here
	container = $('#content');
	
	
	// Prevent click on link
	$('a').live('click',function (event) {
		event.preventDefault();
		console.log("Link clicked :");
		console.log(this);
		
		var link = $(this).attr('href'),
			vslide = $(this).hasClass('vslide'),
			hslide_ltor = $(this).hasClass('hslide_ltor');
		
		$.ajax({
			dataType: 'html',
			type: 'GET',
			url: link,
			success:function(data){					
				container.empty().append(data);
				
				var container_step = container.offset();

				if(vslide){					
					container.offset({ top: container_step.top + 600, left: container_step.left });
					container.animate({
						"top": '-=600',
						}, 400, 'linear');
				} else {
					if(hslide_ltor) {
						container.offset({ top: container_step.top, left: container_step.left - 300 });
						container.animate({
							"left": '+=300',
							}, 200, 'linear');
					} else {
						container.offset({ top: container_step.top, left: container_step.left + 300 });
						container.animate({
							"left": '-=300',
							}, 200, 'linear');
					}
				}
		
				return false;
			}
		});
	});
});