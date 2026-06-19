jQuery(function($){
	
	$(window).on('load', function() {
		AOS.init({
			once: true,
			offset: 200,
			easing: 'ease-out-cubic',
			anchor: 'top-bottom',
			disable: 'mobile',
			disable: window.innerWidth < 768			
		});
	});	

});