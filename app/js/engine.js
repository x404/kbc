$(document).ready(function(){
	$.fn.ForceNumericOnly =
	function(){
		return this.each(function()	{
			$(this).keydown(function(e){
				var key = e.charCode || e.keyCode || 0;
				// Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
				return (
					key == 8 ||
					key == 9 ||
					key == 46 ||
					key == 110 ||
					(key >= 37 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105) ||
					key == 190);
			});
		});
	};

	$('.calculator-page .params__row .form-control').ForceNumericOnly()

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
		autoplay: true,
		autoplayTimeout: 5000, 
		loop: true, 
		onChanged: function (event) {
			changeclass(event);
		},
		onInitialized: function (event) {
			changeclass(event);
		}
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
	};

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


	var schemeowl = $('#scheme');
	schemeowl.owlCarousel({
		loop:false,
		nav: true,
		dots: false,
		items:1,
		navText: ["", ""],
		stagePadding : 0
	});


	$('.carousel_tab li').click(function(e){
		e.preventDefault();
		let pos = this.dataset.pos;
		let $this = this;
		schemeowl.trigger('to.owl.carousel', pos);
		document.querySelector('.carousel_tab .current').classList.remove('current');
		$this.classList.add('current');
	});


	schemeowl.on('changed.owl.carousel', function(event) {
		document.querySelector('.carousel_tab .current').classList.remove('current');
		$('.carousel_tab li').eq(event.item.index).addClass('current');
	})



	$('#complex').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:1,
		navText: ["", ""],
		stagePadding : 0,
		navContainer: '.manage .owl-nav',
		onInitialized : function(e){
			// document.querySelector('#countphoto').textContent = e.item.count + ' фото';
		}
	});


	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: true,
		items:1,
		navText: ["", ""],
		stagePadding : 0,
		dotsContainer: '.owl-dots',
		navContainer: '.owl-nav',
		animateOut: 'fadeOut',
		autoplay: true,
		autoplayTimeout: 5000, 
		loop: true
	});



	$('#related').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:4,
		navText: ["", ""],
		stagePadding : 0
	});


	$('#navhouses2').owlCarousel({
		loop:false,
		nav:false,
		dots: false,
		items:2,
		navText: ["", ""],
		stagePadding : 50
	});


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



	// selectize
	var $searchSelect = $('.j-search-select');

	$('.j-search-select').selectize({
		plugins: ['clear_button'],
		render: {
			option: function option(item) {
				return '<div class="option ' + item.type + '">' + item.text + '</div>';
			}
		},
		// при выборе не удаляем опцию из выпадающего списка
		hideSelected: false,
		// коллбэк: при инициализации
		onInitialize: function onInitialize() {
			var that = this;
			this.revertSettings.$children.each(function () {
				$.extend(that.options[this.value], $(this).data());
			});

			// находим инпут с текущим плейсхолдером
			$searchSelect.closest('div').find('.selectize-input input').focus(function () {
				var $this = $(this);
				// если ничего не введено, то меняем плейсхолдер и ширину инпута
				if (!$this.parent().hasClass('has-items')) {
					$this.attr('placeholder', 'начните вводить').css('width', '100%');
					// в противном случае удаляем плейсхолдер
				} else {
					$this.attr('placeholder', '');
				}
			}).blur(function () {
				var $this = $(this);
				// получаем плейсхолдер по-умолчанию из дата-аттрибутов родителя
				var placeholderTxt = $this.parents('.j-search-select__wrap').find($searchSelect).data('placeholder');
				// если ничего так и не введено, то при блере возвращаем плейсхолдер по-умолчанию
				if (!$this.parent().hasClass('has-items')) {
					$this.attr('placeholder', placeholderTxt);
					// в противном случае удаляем плейсхолдер
				} else {
					$this.attr('placeholder', '');
				}
			});
		},
		// коллбэк: при открытии списка опций
		onDropdownOpen: function onDropdownOpen($dropdown) {
			var that = this;
			var $dropdownCnt = $('.selectize-dropdown-content');
			// в область стрелочки добавляем невидимый крестик для закрытия списка опций
			$dropdown.append('<div class="selectize-close"></div>');

			var $selectClose = $('.selectize-close');

			// при клике на крестик в области стрелки закрываем список опций и удаляем крестик
			$selectClose.on('click', function () {
				that.close();
				that.blur();
				$selectClose.remove();
			});

			if ($selectClose.length > 1) {
				$selectClose.not(':first').remove();
			}

			// // добавляем кастомный скролл на список опций
			$dropdownCnt.each(function () {
				$(this).perfectScrollbar({
					 maxScrollbarLength: 48,
					 minScrollbarLength: 48
				}).scrollTop(100); // скролл нужен для инициализации кастомного скролла

				 // асинхронно возвращаем скролл с исходную позицию
				setTimeout(function () {
					 $dropdownCnt.scrollTop(0);
				}, 0);
			});
		},
		// коллбэк: при добавлении опции
		onItemAdd: function onItemAdd(value, $item) {
			var that = this;
			var $selected = $item.parent(); // родитель текущей опции
			var count = $selected.children().length - 1; // количество выбранных опций
			var $parent = $selected.parents('.objects-select__wrap').find($searchSelect);
			var countTxt = $parent.data('count'); // слово для вывода количества
			var countTxtPlural = $parent.data('count-plural'); // другая словоформа того же слова
			var countTxtSingle = $parent.data('count-single'); // это же слово в единственном числе
			var removeOption = '.selectize-remove-option'; // класс для удаления опции

			// функция для изменения словоформы в зависимости от числа
			function countTxtForm(n, wordForms) {
				n = Math.abs(n) % 100;
				var n1 = n % 10;

				if (n > 10 && n < 20) {
					return wordForms[1];
				}

				if (n1 > 1 && n1 < 5) {
					return wordForms[0];
				}

				return wordForms[1];
			}

			// если опций больше 1, то добавляем фразу с количеством выбранного чего-либо
			if (count > 1) {
				$selected.find('.item:first-child').html('Выбрано ' + count + ' ' + countTxtForm(count, [countTxt, countTxtPlural]));
			}

			// при выборе опции добавляем внутрь неё невидимый крестик
			$('.option.selected').find(removeOption).remove().end().append('<span class="selectize-remove-option"></span>');

			// при клике на невидимый крестик удаляем текущую опцию из выбора
			$(removeOption).on('click', function (e) {
				var $removingItem = $(e.target).parent(); // родитель опции по которой кликнули
				var removingValue = $removingItem.data('value').toString(); // значение этой опкции

				// удаляем класс "выбранный" и удаляем сам крестик
				$removingItem.removeClass('selected').end().remove();

				// из массива всех выбранных значений удаляем текущее значение
				var newValue = $.grep(that.getValue(), function (currentValues) {
					return currentValues !== removingValue;
				});

				// обновляем значения всего селекта
				that.setValue(newValue);

				if ($('.item').length === 1) {
					$selected.find('.item:first-child').html('Выбрано: 1 ' + countTxtSingle);
				}
			});

		},
		// коллбэк: при изменении
		onChange: function onChange() {
		}
	});


	// reviews page
	$('.object-select').selectize({
		create: true,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

	$('#selectreview').selectize({
		create: true,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});


	$('.select').selectize({
		create: true
	});


	// mask
	$('input.tel').inputmask({
		mask: '+7(999)999-99-99',
		showMaskOnHover : false
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
	let $this = $(this);
	$this.next('.subnav').slideToggle().prev().toggleClass('open');
})


// обратный звонок
$(document).on('click', '[data-toggle="sidemodal"]', function(e){
	e.stopPropagation();
	let target = this.dataset.target,
		title = this.dataset.title;
	document.querySelector(target).classList.add('open');
	document.querySelector('.body').classList.add('m-modal-open');
	if (title != undefined) document.querySelector(target + ' #place').value = title;
});


$(document).on('click', '.close-modal', function(e){
	$(this).closest('.open').removeClass('open');
	document.querySelector('.body').classList.remove('m-modal-open')
});


$('body').keyup(function(e){
	if(e.keyCode == 27 && $('.sidemodal').hasClass('open')){
		$('.close-modal').trigger('click');
	}
});



// faq
$(document).on('click', '.faq__item .toggle', function(e){
	e.preventDefault();
	let $this = $(this),
		item = $this.closest('.faq__item');
	item.find('.answer').slideToggle('normal',function(){
		$this.toggleClass('toggle-collapse');
		item.toggleClass('faq__item-expand');
	})
});


// vacancy
$(document).on('click', '.vacancy__item .toggle', function(e){
	e.preventDefault();
	var $this = $(this),
		item = $this.closest('.vacancy__item');
		$this.toggleClass('toggle-collapse');
		item.toggleClass('vacancy__item-expand');
		item.find('.answer').slideToggle();
});


// меню по иконке, карта
$(document).on('click', '.extra-toggle, .showmap', function(e){
	var modal = $(this).data('popup');
	$('#' + modal).addClass('open')
});


// delete row from FAVORITE page
$(document).on('click', '.delete', function(e){
	e.stopPropagation();
	e.preventDefault();
	$this = $(this);

	$this.closest('tr').addClass('remove').fadeOut('slow', function(){
		$('tr.remove').remove();
	});
});


$(document).on('click', '[data-link]', function(e){
	e.preventDefault;
	e.stopPropagation();
	let url = this.dataset.link;
	window.open(url);
});


$(document).on('click', '.flat a, .place a, .btn-fav', function(e){
	e.stopPropagation();
})

// в избранное
var favto = 'В избранное',
	favin = 'В избранном';

$(document).on('click','.to-fav', function(e){
	e.preventDefault();
	// var $this = $(this);
	// msg = '<div class="added-to-compare"><div class="wrapper"><p>Товар добавлен <br> <a href="#">в избранное</a></p><button type="button" class="close" data-dismiss="modal"><img src="images/close.png" alt="" /></button></div></div>';
	// $('body').append(msg);

	this.classList.remove('to-fav');
	this.classList.add('btn-fav-in');

	// $(this).find('span').text(favin);

	this.querySelector('span').textContent = favin;

	// var timerfav = window.setInterval(function(){
	// 	$('.added-to-compare').fadeOut('normal',function(){
	// 		this.remove();
	// 	});
	// 	window.clearInterval(timerfav);
	// },2000);
});

// из избранного
$(document).on('click','.btn-fav-in', function(e){
	e.preventDefault();
	this.classList.remove('btn-fav-in');
	this.classList.add('to-fav');
	this.querySelector('span').textContent = favto;
});


// sticky header
var fh = document.querySelector('.fixed-header'),
	headerh = document.querySelector('.header').offsetHeight,
	fnavbar = document.querySelector('.fixed-navbar');

window.onscroll = function(){
	if (window.pageYOffset  > 200 ) {
		fh.classList.add('sticky');
		try{
			fnavbar.classList.add('sticky');
		} catch(e){};
	} else {
		if (window.pageYOffset  < 400) {
			fh.classList.remove('sticky');
			try{
				fnavbar.classList.remove('sticky');
			} catch(e){};
		}
	}
};


function getFileName(el){
	var file = el.value;
	file = file.replace(/\\/g, "/").split ('/').pop();
	console.warn(file);
	$(el).closest('.file-upload').find('.file-name').html('Имя файла: ' + file);
}


// присваиваем название вакансии скрытому полю в форме
$('#answer-vacancy').on('shown.bs.modal', function (e) {
	var vacancy = $(e.relatedTarget).data('vacancy');
	document.querySelector('#vacancy').val = vacancy;
})


function doRate(el, num){
	document.querySelector('.unit-rating .current').classList.remove('current');
	el.classList.add('current');
}



$(document).on('click', '.contact__plate .btn', function(e){
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $('#map').offset().top-200
	}, 1000);	
})



$(document).on('click', '[data-targetscroll], .subnav a', function(e){
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top-240
			}, 1000);
			return false;
		}
	}
});



	// // scroll page
	// $('.mainmenu a[href*=\\#]:not([href=\\#]), .graduate_info_box-experts a, .neck_card .graduate_info_box-users .title a').click(function() {

	// });	


$(window).on('load', function(){
	NProgress.set(1);
});
