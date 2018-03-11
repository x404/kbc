$(document).ready(function(){
	ymaps.ready(init);
});

function init(){
	// https://tech.yandex.ru/maps/doc/jsapi/2.0/dg/concepts/geoobjects-docpage/
	// https://jsfiddle.net/r2prk693/
	// https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/layouts-docpage/
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
			center: [55.998180, 92.844331],
			zoom: 12
		});

		myPlacemark = new Array();

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ОБРАЗОВАНИЕ
		// создаем коллекции и параметры меток в ней
		educationCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-education.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		obj = [
			{
				coord: [55.980180, 92.914331],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [56.016768, 92.875012],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [56.013663, 92.800407],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			educationCollection.add(myPlacemark[i])
		}
		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(educationCollection);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// МАГАЗИНЫ
		// создаем коллекции и параметры меток в ней
		shopCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-shop.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		obj = [
			{
				coord: [55.997959, 92.957564],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [55.975586, 92.833046],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [56.011761, 92.887977],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			shopCollection.add(myPlacemark[i])
		};
		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(shopCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// РАЗВЛЕЧЕНИЯ, СПОРТ
		// создаем коллекции и параметры меток в ней
		sportCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-sport.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		obj = [
			{
				coord: [56.005029, 92.899993],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [56.018300, 92.823776],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [56.015607, 92.911666],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			sportCollection.add(myPlacemark[i])
		};

		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(sportCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// МЕДИЦИНА
		// создаем коллекции и параметры меток в ней
		medicineCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-medicine.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		obj = [
			{
				coord: [55.987712, 92.885574],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [55.984392, 92.860340],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [56.001903, 92.814334],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			medicineCollection.add(myPlacemark[i])
		};

		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(medicineCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// КАФЕ, РЕСТОРАНЫ
		// создаем коллекции и параметры меток в ней
		eatCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-eat.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		obj = [
			{
				coord: [56.010366, 92.943767],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [55.994014, 92.900852],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [55.972650, 92.939647],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			eatCollection.add(myPlacemark[i])
		};


		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(eatCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ТРАНСПОРТ
		// создаем коллекции и параметры меток в ней
		transportCollection = new ymaps.GeoObjectCollection({},{
			iconLayout: 'default#image',
			iconImageHref: '/images/icons/balloon-transport.png',
			iconImageSize: [46, 55],
			iconImageOffset: [-23, -55],
			hideIconOnBalloonOpen: false
		});

		// создаем метки и прописываем ее свойства 
		obj = [
			{
				coord: [56.011905, 92.813304],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
				}
			},
			{
				coord: [55.998440, 92.878536],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
				}
			},
			{
				coord: [55.986894, 92.812961],
				properties: {
					hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			transportCollection.add(myPlacemark[i])
		};
		// добавляем коллекцию в геообъект
		myMap.geoObjects.add(transportCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////



// ДОМА
		HouseIconLayout = ymaps.templateLayoutFactory.createClass(
			'<div class="myicon"><img src="/images/icons/balloon-label.png" alt="" /><span class="iconcontent">$[properties.iconContentLayout]</span></div>'
		); 

		ymaps.layout.storage.add('cluster#mystyle', HouseIconLayout);    


		// создаем коллекции и параметры меток в ней
		houseCollection = new ymaps.GeoObjectCollection({},{
			hideIconOnBalloonOpen: false,
			iconLayout: 'cluster#mystyle',
			iconContentLayout: HouseIconLayout
		});



		// создаем метки и прописываем ее свойства 
		obj = [
			{
				coord: [55.991705, 92.830814],
				properties :{
					hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)',
					iconContentLayout: '1.1'
				}
			},
			{
				coord: [55.993052, 92.873386],
				properties: {
					hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)',
					iconContentLayout: '1.6'
				}
			}
		];

		// создаем метки и прописываем им свойства 
		for (var i = 0; i < obj.length; i++) {
			myPlacemark[i] = new ymaps.Placemark(obj[i].coord, obj[i].properties);
			houseCollection.add(myPlacemark[i])
		};


		myMap.geoObjects.add(houseCollection);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////


		// блокируем зум и включаем его по щелчку на карте
		myMap.behaviors.disable('scrollZoom'); 
		myMap.events.add('click', function onMapClick(e) {
			if(myMap.behaviors.isEnabled('scrollZoom')) {
				myMap.events.remove('click', onMapClick);
			} else {
				myMap.behaviors.enable(['scrollZoom']);
			}
		});
	})
}