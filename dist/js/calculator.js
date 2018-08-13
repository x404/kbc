var moneyFormat = wNumb({
	mark: '.',
	thousand: ' ',
	prefix: '',
	suffix: ' Р/Мес',
	decimals: '0'
});

var payFormat = wNumb({
	mark: '.',
	thousand: ' ',
	prefix: '',
	suffix: '',
	decimals: '0'
});

var calcSlider1 = document.querySelector('#slider-costflat'),
	costflat = document.querySelector('#costflat'),
	calcSlider2 = document.querySelector('#slider-firstpayment'),
	first_payment = document.querySelector('#first-payment');


// стоимость квартиры
noUiSlider.create(calcSlider1, {
	start: 3650000,
	connect: [true, false],
	behaviour: 'snap',
	step: 5000, 
	range: {
		'min': 500000,
		'max': 25000000
	}
});

// первоначальный взнос
noUiSlider.create(calcSlider2, {
	start: 1250000,
	connect: [true, false],
	behaviour: 'snap',
	step: 5000, 
	range: {
		'min': 10000,
		'max': 25000000
	}
});



costflat.addEventListener('input', function ( ) {
	var value = this.value;
	value = value.replace(/\D+/g,"");
	calcSlider1.noUiSlider.set([value]);
});	


$(document).ready(function(){
	$('#calc-gnk-form #costflat').inputmask({
		alias : 'numeric',
		groupSeparator: ' ',
		autoGroup: true,
		digits: 0,
		digitsOptional: false,
		suffix: ' Р',
		placeholder: '0'
	}).on("input", function () {
		var value = this.value;
		value = value.replace(/\D+/g,"");
		calcSlider1.noUiSlider.set(value);
	});


	$('#calc-gnk-form #first-payment').inputmask({
		alias : 'numeric',
		groupSeparator: ' ',
		autoGroup: true,
		digits: 0,
		digitsOptional: false,
		suffix: ' Р',
		placeholder: '0'
	}).on("input", function () {
		var value = this.value;
		value = value.replace(/\D+/g,"");
		calcSlider2.noUiSlider.set(value);
	});



	calcSlider1.noUiSlider.on('update', function(values, handle){
		costflat.value =parseInt(values[0]) ;
		calc();
	});
	calcSlider2.noUiSlider.on('update', function(values, handle){
		first_payment.value =parseInt(values[0]) ;
		calc();
	});
});


$(document).on('click', '#calc-gnk-form input[type="radio"]', function(e){
	calc();
})

var price = document.getElementById('costflat').value.replace(/\D+/g,""),
	nal = document.getElementById('first-payment').value.replace(/\D+/g,""),
	procent = document.querySelector('#calc-gnk-form input[type="radio"]:checked').value;

function calc(){
	var msg = '',
		price0 = 0;;
	price = document.getElementById('costflat').value.replace(/\D+/g,"");
	nal = document.getElementById('first-payment').value.replace(/\D+/g,"");
	procent = document.querySelector('#calc-gnk-form input[type="radio"]:checked').value;	

	if (nal<price*0.1) {
		price0 = price * 0.1;
		msg = 'Минимальный первоначальный взнос для данного срока <br/> ' + payFormat.to(price0) + declOfNum(price0, [' рубль', ' рубля', ' рублей']);
		output = 0;
	} 
	if(nal>=price*0.3 && procent=='3'){
		console.log('Сумма ежемесячного платежа составит: ' + Math.round(getPay()+getPlata()) + ' рублей.' + ' Из них сумма членского взноса (%): ' + Math.round(getPlata()));// 3года 5%
		output = Math.round(getPay()+getPlata());
	}

	if(nal>=price*0.1 && nal<price*0.3 && procent=='3'){
		console.log('Сумма ежемесячного платежа составит: ' +  + ' рублей.' + ' Из них сумма членского взноса (%): ' + Math.round(getPlata2()) + ' Членский взнос 15%');// 3 года 15%
		output = Math.round(getPay2()+getPlata2());
	}

	if(nal<price*0.3 && procent=='5'){
		msg = 'При первоначальном взносе менее 30% рассрочка предоставляется только на 3-и года!';
		output = 0;
	}

	if(nal>=price*0.3 && procent=='5'){
		console.log('Сумма ежемесячного платежа составит: ' + Math.round(getPay1()+getPlata1())+ ' рублей.' + ' Из них сумма членского взноса (%): ' + Math.round(getPlata1())); //5 лет 8%
		output = Math.round(getPay1()+getPlata1());
	}

	else if(procent!='3' && procent!='5'){
		console.log('Вы ввели неверное количество лет, нужно ввести 3 или 5 - попробуйте снова')
	} 

	(output > 0) ? output = moneyFormat.to(output) : output = '';

	if (msg != ''){
		document.querySelector('.alert').classList.add('show');
		document.querySelector('.alert').innerHTML = msg + '<button type="button" class="close"></button>';
		astartClock()

	} else {
		document.querySelector('.alert').classList.remove('show') ;
	};

	$('#calcpayment').text(output);
}


var atimer,
	asec = 4;


function ashowTime(sendform){
	asec = asec-1;
	if (asec <=0) {
		astopClock();
		document.querySelector('.alert').classList.remove('show') ;
	}
}

function astopClock(){
	window.clearInterval(atimer);
	atimer = null;
	asec = 4;
}

function astartClock(sendform){
	if (!atimer)
		atimer = window.setInterval("ashowTime()",1000);
}


$(document).on('click', '.alert .close', function(e){
	e.preventDefault();
	let $this = $(this);
	document.querySelector('.alert.show').classList.remove('show')
})

//сумма процентов за месяц при 5%
function getPlata(){
	var k=price-nal;
	var n=30 //период усредненный 30 дней
	var ps=5;
	var ps1=8;
	var sp=(k*n*ps/100)/365;

	return sp;
}
//сумма процентов за месяц при 8%
function getPlata1(){
	var k=price-nal;
	var n=30 //период усредненный 30 дней
	var ps=5;
	var ps1=8;
	var sp1=(k*n*ps1/100)/365;

	return sp1;
}

//сумма процентов за месяц при 15%
function getPlata2(){
	var k=price-nal;
	var n=30 //период усредненный 30 дней
	var ps2=15;
	var sp1=(k*n*ps2/100)/365;

	return sp1;
}

// Выводим сумму платежа + 5%
function getPay(){
	var m=0.004; // это прроценты наши
	var z=0.1545524338; // это производная от %
	var y=(m/z)*(price-nal);//результат

	return y;
}

// Выводим сумму платежа + 8%
function getPay1(){
	var m=0.007; // это прроценты наши
	var z=0.5197362867; // это производная от %
	var y=(m/z)*(price-nal); //Результат

	return y;
}

// Выводим сумму платежа + 15%
function getPay2(){
	var m=0.0125; // это прроценты наши
	var z=0.5639438187; // это производная от %
	var y=(m/z)*(price-nal); //Результат
	return y;
}


function declOfNum(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];  
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}