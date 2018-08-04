$(document).ready(function(){
	var altura = $('.container-menu-logo').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.container-menu-logo').addClass('menu-fixed');
		} else {
			$('.container-menu-logo').removeClass('menu-fixed');
		}
	});
 
});