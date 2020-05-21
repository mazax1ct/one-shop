//яндекс карты
var myMap;
var locations = [
  [59.883457, 30.266233, '198097, г. Санкт-Петербург, проспект Стачек, д. 48 корп. 2 литера А']
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=cba047df-856c-4d12-a13e-85e5ff327c48&lang=ru_RU&onload=init';
  document.getElementById('map').appendChild(elem);
}, 2000);

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.883457, 30.266233],
    zoom: 17
  }, {
    //searchControlProvider: 'yandex#search'
  });

  myMap.behaviors.disable('scrollZoom');

  /*var iconLayout = 'default#image';
  var iconImageHref = 'images/map_pin.svg';
  var iconImageSize = [95, 108];
  var iconImageOffset = [-47, -108];*/

  var i, placemark;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      balloonContent: locations[i][2]
    }, {
      /*iconLayout: iconLayout,
      iconImageHref: iconImageHref,
      iconImageSize: iconImageSize,
      iconImageOffset: iconImageOffset*/
    });

    myMap.geoObjects.add(placemark);
  }
}
