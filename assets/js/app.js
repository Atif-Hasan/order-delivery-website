$(document).ready(function(){
	$('.js-tilt').tilt();

	$(".menu-open-btn").on("click", function(e){
		e.preventDefault();
		$('body').toggleClass("body-overlay");
		$('.nav-menu-wrapper').toggleClass('nav-menu-active');
	});

	$(".menu-close-btn").on("click", function(e){
		e.preventDefault();
		$('body').removeClass("body-overlay");
		$('.nav-menu-wrapper').removeClass('nav-menu-active');
	});

	$(document).keyup(function(e) {
	  if (e.keyCode === 27) {
	  	$('body').removeClass("body-overlay");
	  	$('.nav-menu-wrapper').removeClass('nav-menu-active');
	  }
	});

	$(window).scroll(function(){
	  	var sticky = $('.menu-fixed-btn'),
	  	target = $(".banner-menu-btn-wrapper").offset().top + 50,
	    scroll = $(window).scrollTop();
	  	if (scroll >= target) sticky.addClass('menu-fixed-btn-appear');
	  	else sticky.removeClass('menu-fixed-btn-appear');
	});
	$('.qtyoutter').spinner({value:1, step:1, min: 1, max: 200});
});