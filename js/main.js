jQuery(document).ready(function($){

	jQuery.noConflict();

	// scroll
	$('[data-scroll]').on('click',function(){
		var scroll = $(this).data('scroll');
		$('html,body').animate({ scrollTop: $('[name='+scroll+']').offset().top }, 'slow');
	});

	// video  youtube
	
	$('#block-1 .video a').on('click',function(){
		var url = $(this).data('video');
		$('#block-1 .video').append('<iframe width="560" height="315" src="'+url+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	});
	


	// video proprio
	/*
	$('#block-1 .video a').on('click',function(){
		var url = $(this).data('video');
		$('#block-1 .video').append('<video width="560" height="315" controls autoplay class="btn-play" ><source src="'+url+'" type="video/mp4">Seu navegador não suporta este vídeo</video>');
	});
*/

	// games - scroll
	// $('#block-3 .scroll').slick({
	// 	arrows: false,
	// 	autoplay: true,
	// 	autoplaySpeed: 0,
	// 	cssEase: 'linear',
	// 	slidesToScroll: 1,
	// 	slidesToShow: 1,
	// 	speed: 1500,
	// 	swipe: false,
	// 	pauseOnHover: false,
	// 	variableWidth: true,
	// });
	$('#block-3 .scroll').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		slidesToScroll: 1,
		slidesToShow: 1,
		swipe: false,
		pauseOnHover: false,
		variableWidth: true
	});

	// counter - timer
	$('#block-10 .counter').countdowntimer({
		hours: 0,
		minutes: 20,
		seconds: 0,
		labelsFormat: true
	});

	// accordion
	$('.questions .item .answer').on('click',function(){
		$('.questions .item .question').not($(this).next()).slideUp('fast');
		$('.questions .item .answer').not($(this)).parent().removeClass('active');
		$(this).parent().toggleClass('active');
		$(this).next('.question').slideToggle('fast');
	});

	// wow
	new WOW().init();

});