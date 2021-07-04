/* =====================================

========================================
[End Activation Code]
========================================*/ 
(function ($) {
	"use strict";
    $(document).ready(function(){
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
			Onepage Nav JS
		======================================*/ 
		if ($.fn.onePageNav) {
			$('.onepage .mainmenu .nav').onePageNav({
				currentClass: 'active',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		/*==============================
			Mobile Menu JS
		================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-menu",
		});
		/*====================================
			Search Form JS
		======================================*/ 	
		$('.search-form .icon').on( "click", function(){
			$('.search-form').toggleClass('active');
		});	
		$('.mobile-arrow').on( "click", function(){
			$('.mobile-menu').toggleClass('active');
		});	
		
		/*====================================
			Wow JS
		======================================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
		
		/*====================================
			Main Slider JS
		======================================*/ 	
		$(".slider-area").owlCarousel({
			loop:true,
			autoplay:false,
			smartSpeed: 700,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			margin:30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:1,
			dots:true,
			nav:true,
			navText: ['<i class="fa fa-angle-up" aria-hidden="true"></i>', '<i class="fa fa-angle-down" aria-hidden="true"></i>'],
			responsive:{
				320: {
					dots:false,
					nav:false,
				},
				768: {
					dots:true,
					nav:true,
				},
				1170: {
					dots:true,
					nav:true,
				},
			}
		});	
		
		/*====================================
			Service Slider JS
		======================================*/ 
		$(".service-slider").slick({
			autoplay:true,
			speed: 800,
			autoplaySpeed: 3500,
			slidesToShow: 4,
			pauseOnHover: true,
			centerMode: true,
			centerPadding: '0px',
			dots: false,
			arrows:true,
			cssEase: 'ease',
			speed: 700,
			draggable: true,
			prevArrow: '<button class="Prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>',
			nextArrow: '<button class="Next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
				responsive: [{
					breakpoint: 800,
					settings: {
						arrows:true,
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						arrows:false,
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 350,
					settings: {
						arrows:false,
						slidesToShow: 1,
					}
				},
			]
		});
		
		/*====================================
			Service Single Slider JS
		======================================*/ 	 		
		// $(".service-single-slider").owlCarousel({
		// 	loop:true,
		// 	autoplay:true,
		// 	smartSpeed: 700,
		// 	autoplayTimeout:3500,
		// 	singleItem: true,
		// 	autoplayHoverPause:true,
		// 	margin:0,
		// 	items:1,
		// 	dots:true,
		// 	nav:false ,
		// });				
		

				
		
		
	
		/*======================================
			Parallax JS
		
		
		/*====================================
			Nice Select JS
		======================================*/	
		$('select').niceSelect();
		

		
    });	
		
		
})(jQuery);	