// When the DOM is ready, initialize the scripts.
 jQuery(function( $ ){			  
	// Code here
	container = $('#content_wrapper');
	
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
				container.empty();
				container.append(data);
				return false;
			}
		});
	});
});