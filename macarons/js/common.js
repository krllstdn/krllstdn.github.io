$(document).ready(function(){

	$(".slider").slick({ //for
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-nav',
		arrows: false,
		fade: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					prevArrow: $('#left-r'),
					nextArrow: $('#right-r'),
					// autoplay: true,
					
				}
			}
		]
	});

	$(".slider-nav").slick({ //nav
		infinite: true,
		slidesToScroll: 1,
		asNavFor: '.slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		speed: 600,
		// autoplaySpeed: 1900,
		prevArrow: $('#left'),
		nextArrow: $('#right'),
		adaptiveHeight: true,
		pauseOnFocus: true,
		pauseOnHover: true,
		slidesToShow: 5,
		// rows: 1,
		// slidesPerRow: 13,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				},
				breakpoint: 1000,
				settings: {
					slidesToShow: 1,
					// slidesToScroll: 1,
					// respondTo: 'slider'
				},
				breakpoint: 769,
				settings: {
					slidesToShow: 6,
					respondTo: 'slider'
				},
				breakpoint: 768,
				settings: "unslick",	
			}
		]
	});

	$('#phonenumber').mask("+38(099)-999-9999");

	$('.menu-btn').on('click', function(e){
		e.preventDefault;
		$(this).toggleClass('menu-btn-active');
		$("#nav").toggleClass('showing');
		$(".navbar").toggleClass('align-items-center');
	});

	if ($(document).height() <= $(window).height())
  		$("footer").addClass("navbar-fixed-bottom");

  	 $('.popup').magnificPopup({type:'image'});

  	$(".toggle-form").hide();
  	$('.recall').click(function() {
  		$(".order-form").slideToggle();
  	});


  	$('.feedback-slider').slick({
		// prevArrow: $('#f-left'),
		// nextArrow: $('#f-right'),
		// adaptiveHeight: true
  	});

	// $(".main_text").addClass("anim_bounceIn");
	// var waypoint = new waypoint({
	// 	element: document.getElementsByClassName(".welcome"),
	// 	handler: function() {
	// 		$(".welcome h2").addClass("bounceIn");
	// 	}
	// })


});