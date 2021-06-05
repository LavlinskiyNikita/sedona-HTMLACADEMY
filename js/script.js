ymaps.ready(function () {
  var myMap = new ymaps.Map('map', { // 'map' это твой id в разметке, куда ты хочешь засунуть карту
          center: [34.8697400, -111.7609900],
          zoom: 10
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([34.8697400,  -111.7609900], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'HTML Academy, first level',
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'https://pngicon.ru/file/uploads/geometka-256x256.png', // здесь мы указываем путь до нашей картинки пина (метки)
          // Размеры метки.
          iconImageSize: [40, 40], // здесь уже все просто и понятно , если переводить с английского названия свойств
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-27, -48],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

  myMap.geoObjects
      .add(myPlacemarkWithContent);
});
