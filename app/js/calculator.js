var calcapp = new Vue({
	el: "#calcapp",
	data () {
		return {
			// price : document.querySelector('#costflat').value,
			// nal : document.querySelector('#first-payment').value,
			price: 3650000,
			nal: 1250000,
			procent : document.querySelector('[name="radio"]:checked').value,
			money: {
				decimal: ',',
				thousands: ' ',
				prefix: '',
				suffix: ' Р',
				precision: 0,
				masked: false
			}
		}
	},

	computed: {
		payment: function(){
			// bus.$emit('id-selected', 1)

			price = this.price;
			nal = this.nal;
			procent = this.procent;
			// console.log (price);
			// console.log (nal);
			// console.log (procent);

			if (nal<price*0.1) {
				console.log ('Первоначальный взнос должен быть не менее 10% от стоимости квартиры. Нажмите F5 или обновите окно в браузере');
				output = ''
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
				console.log('При первоначальном взносе менее 30% рассрочка предоставляется только на 3-и года! Повторите расчет закрыв это окно и обновив страницу');
				output = '';
			}

			if(nal>=price*0.3 && procent=='5'){
				console.log('Сумма ежемесячного платежа составит: ' + Math.round(getPay1()+getPlata1())+ ' рублей.' + ' Из них сумма членского взноса (%): ' + Math.round(getPlata1())); //5 лет 8%
				output = Math.round(getPay1()+getPlata1());
			}

			else if(procent!='3' && procent!='5'){
				console.log('Вы ввели неверное количество лет, нужно ввести 3 или 5 - попробуйте снова')
				output = '';
			} 

			return output;
		}
	},
	methods: {
		upd: function(){
			updateSlider(this.price);
		}
	}
});


function updateSlider(price){
	console.log(price);
	// var slider = document.querySelector('.slider-1 > div');
		// slider.noUiSlider.set(price);
}

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

//выводим результаты на экран
