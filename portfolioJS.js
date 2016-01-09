$(document).ready(function() {

	var menuFade = function() {
		$('.menuButton').on('click', function() {
			$(this).fadeOut();
			$('#mobileNavContainer').fadeIn();
			$('.mobileMenuClose').fadeIn();
		});

		$('.mobileMenuClose').on('click', function() {
			$(this).fadeOut();
			$('#mobileNavContainer').fadeOut();
			$('.menuButton').fadeIn();
		});

	 }();
	 
	 $('#mobileNavContainer').hide();

}); // end document.ready
