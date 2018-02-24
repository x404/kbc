$(document).ready(function(){

	// карусель
	$('#promocarousel').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:1,
		navText: ["", ""],
		stagePadding : 0,
		dotsContainer: '.owl-dots',
		navContainer: '.owl-nav',
		animateOut: 'fadeOut',
		onChanged: function (event) {
			changeclass(event);
		},
		onInitialized: function (event) {
			changeclass(event);
		}
	});


	$('#objects').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:3,
		navText: ["", ""],
		stagePadding : 0
	});

	$('#intro').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:1,
		navText: ["", ""],
		stagePadding : 0
	});

	function changeclass(event){
		var $this = $(event.target),
			$index = event.item.index,
			$active = $this.find('.owl-item').eq($index).children(),
			$class = 'light';

		if ($active.hasClass('dark')) $class = 'dark';
		if ($active.hasClass('light')) $class = 'light';

		document.querySelector('.manage').classList.remove('dark', 'light');
		document.querySelector('.manage').classList.add($class);
	}

	// mobile-menu
	$('#navbar').each(function(){
		let $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');
			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
				$('#navbar').height('auto');
			};
		init();
	});	

	$(window).resize(function(){
		if ($('body').width() > 640) {
			$('body').removeClass('o-menu');
			$('#navbar').css('height', 'auto');
		}
	});


	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});
	
});

// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE




function showTime(sendform){
	sec = sec-1;
	if (sec <=0) {
		stopClock();

		switch (sendform){
			case 'qorder-form':
				$('.qorder__box .thank').fadeOut('normal',function(){
					$('.qorder__box .thank').remove();
					$('.qorder__box .form-control, .qorder__box textarea').val('');
				});
				break;
			case 'feedback-form':
				$('.feedback .thank').fadeOut('normal',function(){
					$('.feedback .thank').remove();
					$('.feedback .form-control, .feedback textarea').val('');
					$('.feedback__form fieldset').show();
				});
				break;
			case 'cart-form':
				$('.cart .thank').fadeOut('normal',function(){
					$('.cart .thank').remove();
					// $('.cart .form-control, .cart textarea').val('');
					// $('.cart__form fieldset').show();
				});
				break;	
			default:
			console.log(sendform);
				modal = $("#" + sendform);
				modal.fadeOut('normal',function(){
					modal.find('.md-close').trigger('click');
				});
				break;
		}
	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 3;
}

function startClock(sendform){
	if (!timer)
		timer = window.setInterval("showTime('" + sendform + "')",1000);
}


// показываем второй  уровень меню
$(document).on('click', '.o-menu .folder > a, .o-menu .folder > span', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.next('.subnav').slideToggle().prev().toggleClass('open');
})


// sticky header
var fh = document.querySelector('.fixed-header'),
	headerh = document.querySelector('.header').offsetHeight;

window.onscroll = function(){
	if (window.pageYOffset  > 200 ) {
		fh.classList.add('sticky');
	} else {
		if (window.pageYOffset  < 400) {
			fh.classList.remove('sticky');
		}
	}
};