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
		}),

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

		// создаем метки и прописываем ее свойства 
		educationCollection.add(new ymaps.Placemark(
			[55.980180, 92.914331],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		educationCollection.add(new ymaps.Placemark(
			[56.016768, 92.875012],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		educationCollection.add(new ymaps.Placemark(
			[56.013663, 92.800407],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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

		// создаем метки и прописываем ее свойства 
		shopCollection.add(new ymaps.Placemark(
			[55.997959, 92.957564],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		shopCollection.add(new ymaps.Placemark(
			[55.975586, 92.833046],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		shopCollection.add(new ymaps.Placemark(
			[56.011761, 92.887977],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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

		// создаем метки и прописываем ее свойства 
		sportCollection.add(new ymaps.Placemark(
			[56.005029, 92.899993],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		sportCollection.add(new ymaps.Placemark(
			[56.018300, 92.823776],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		sportCollection.add(new ymaps.Placemark(
			[56.015607, 92.911666],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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

		// создаем метки и прописываем ее свойства 
		medicineCollection.add(new ymaps.Placemark(
			[55.987712, 92.885574],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		medicineCollection.add(new ymaps.Placemark(
			[55.984392, 92.860340],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		medicineCollection.add(new ymaps.Placemark(
			[56.001903, 92.814334],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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

		// создаем метки и прописываем ее свойства 
		eatCollection.add(new ymaps.Placemark(
			[56.010366, 92.943767],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		eatCollection.add(new ymaps.Placemark(
			[55.994014, 92.900852],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		eatCollection.add(new ymaps.Placemark(
			[55.972650, 92.939647],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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
		transportCollection.add(new ymaps.Placemark(
			[56.011905, 92.813304],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)'
			}
		));

		transportCollection.add(new ymaps.Placemark(
			[55.998440, 92.878536],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)'
			}
		));

		transportCollection.add(new ymaps.Placemark(
			[55.986894, 92.812961],
			{
				hintContent: 'Офис продаж «Октябрьский» (г. Красноярск, ул. Академика Киренского, 71)'
			}
		));
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
			// iconLayout: 'default#image',
			// iconImageHref: '/images/icons/balloon-label.png',
			// iconImageSize: [58, 60],
			// iconImageOffset: [-29, -60],
			hideIconOnBalloonOpen: false,
			iconLayout: 'cluster#mystyle',
			iconContentLayout: HouseIconLayout
		});

		houseCollection.add(new ymaps.Placemark(
			[55.991705, 92.830814],
			{
				hintContent: 'Головной офис (660019, г. Красноярск, ул. Мусоргского, 18)',
				iconContentLayout: '1.1'
			}
		));

		houseCollection.add(new ymaps.Placemark(
			[55.993052, 92.873386],
			{
				hintContent: 'Офис продаж «Центр» (г. Красноярск, ул. Ады Лебедевой, 18)',
				iconContentLayout: '1.6'
			}
		));
		myMap.geoObjects.add(houseCollection);



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