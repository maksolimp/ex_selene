;(function($) {
	"use strict";

	$('.ba-slider').slick();

	$('.ba-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.ba-slider-nav'
	});

	$('.ba-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.ba-slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});


})(jQuery);

