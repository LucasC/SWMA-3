// When the DOM is ready, initialize the scripts.
 jQuery(function( $ ){			  
	// Code here
	container = $('#content');
	ready = 1;
	
	// Prevent click on link
	$('a').live('click',function (event) {
		event.preventDefault();
		
		if(ready == 1) {
			ready = 0;
		
			var link = $(this).attr('href'),
				vslide = $(this).hasClass('vslide'),
				hslide_ltor = $(this).hasClass('hslide_ltor');
				
			$.ajax({
				dataType: 'html',
				type: 'GET',
				url: link,
				cache: false,
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
			
					ready = 1;
					return false;
				}
			});
		}
	});
	
	$('.slider_control').live('click',function (event) {
		$img = $('.slider:visible');
		$img.hide();
		
		if($(this).hasClass('right')){			
			$img.next('.slider').show();
		} else {
			$img.prev('.slider').show();
		}
		
		hideArrows();
	});
	
	var hideArrows = function() {
		if($('.slider:visible').next('.slider').length == 0) {
			$('.right').hide();
		} else {
			$('.right').show();
		}
		
		if($('.slider:visible').prev('.slider').length == 0) {
			$('.left').hide();
		} else {
			$('.left').show();
		}
	}
	
	$('.1up').live('click',function () {
		$this = $(this);
		
		$this.html('<img src="static/img/icon_1up_green.png" width="60" height="67" />');
		$('#popup').fadeIn('slow', function() {
			// Animation complete
			$(this).delay(1000);
			console.log($(this));
			$(this).fadeOut('slow', function() {
				$this.html('<img src="static/img/icon_1up.png" width="60" height="67" />');
			});
		});
	});
});