;(function($){
		$(document).ready(function(){
			$('.ws-slide-container').slick({
				'variableWidth': true,
				'slideToshow' : 3, 
				'infinite' : true,
				
			});
			$('.ws-slide-container .ws-slide').addClass('ws-slide-opacity');
			$('.ws-slide-container .slick-active').removeClass('ws-slide-opacity');
			$('.ws-slide-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('.ws-slide-container .ws-slide').addClass('ws-slide-opacity');
				
			});
			$('.ws-slide-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
				$('.ws-slide-container .slick-active').removeClass('ws-slide-opacity');

			});
});
})(jQuery);