// Код для плавной прокрутки страницы
// $(document).bind( 'mousewheel', function (e) { 
//     var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
//     e.preventDefault(); 
//     e.stopPropagation(); 
//     $(document.body).stop().animate( { 
//          scrollTop : nt 
//      } , 500 , 'easeInOutCubic' );  
// } )

	// var slideCount = 3; //Количество слайдов
	// var slideNow = 1;// Номер текущего слайда
	// // var slideSm1 =  2;
	// // var slideSm2 =  3;//1
	// var slideInterval = 2000;

	$(document).ready(function(){
	// var switchInterval = setInterval(nextSlide(), 2000);
	

	$('.main_img').mouseenter(function(){
		$('.about').fadeIn('fast');
	}).mouseleave(function(){
		$('.about').css('display', 'none');
	})

	$(".item_slider").slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		autoplay:true,
		autoplaySpeed: 2000,
		arrows:true,
		prevArrow:$('.ar_left'),
		nextArrow:$('.ar_right')
	});
	
	$('.m_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		autoplay:true,
		autoplaySpeed: 2500,
		prevArrow:$('#left'),
		nextArrow:$('#right')
	});

	$('.product_slider').slick({
		infinite:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.m_product_slider',
		swipe: false
	});
	$('.m_product_slider').slick({
		infinite:true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product_slider',
		// centerMode: true,
		focusOnSelect: true
	});

	$("#accord_header").click(function(){
		// $(this).toggleClass('active');
		$(".description").slideToggle(200);
	});

	// Привязка футера к низу страницы
	if ($(document).height() <= $(window).height)
		$('.footer').addClass("navbar-fixed-bottom");

	// .animate({
	// 		height:"toggle,",
	// 		transition: "all ease .2s"
	// 	}, 500)

	// $("#accord_header").click(function(){
	// 	// $(this).toggleClass('active');
	// 	$(".accordeon").css("display", "block");
	// 	$(".accordeon").css("transition", "all ease .3s");
	// });
});	


