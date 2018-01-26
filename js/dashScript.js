jQuery(document).ready(function($){

	$('.nav li.dropdown').hover(function() {
		$(this).addClass('open');
	}, function() {
		$(this).removeClass('open');
	});

	$('.deleteRow').click(function(ev){
		if (confirm('Are you sure you want to delete this?')) {
			tr = $(this).closest('tr');
			$.post($(this).attr('delpath'), {}, function(data) {
				tr.remove();
			});
		}
	});

	
});