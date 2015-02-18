$(document).ready(function () {
  google.maps.event.addDomListener(window, 'load', init);
      var map;
      function init() {
          var mapOptions = {
              center: new google.maps.LatLng(40.771448,-73.983486),
              zoom: 16,
              zoomControl: true,
              zoomControlOptions: {
                  style: google.maps.ZoomControlStyle.DEFAULT,
              },
              disableDoubleClickZoom: true,
              mapTypeControl: true,
              mapTypeControlOptions: {
                  style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              },
              scaleControl: true,
              scrollwheel: true,
              panControl: true,
              streetViewControl: true,
              draggable : true,
              overviewMapControl: true,
              overviewMapControlOptions: {
                  opened: false,
              },
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              styles: [
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#d3d3d3" }
        ]
      },{
        "featureType": "transit",
        "stylers": [
          { "color": "#808080" },
          { "visibility": "off" }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          { "visibility": "on" },
          { "color": "#b3b3b3" }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#ffffff" },
          { "weight": 1.8 }
        ]
      },{
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#d7d7d7" }
        ]
      },{
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#ebebeb" }
        ]
      },{
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          { "color": "#a7a7a7" }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#ffffff" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#efefef" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          { "color": "#696969" }
        ]
      },{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          { "visibility": "on" },
          { "color": "#737373" }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#d6d6d6" }
        ]
      },{
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      },{
      },{
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#dadada" }
        ]
      }
    ],
          }
          var mapElement = document.getElementById('lincolncenter');
          var map = new google.maps.Map(mapElement, mapOptions);
          var locations = [
    ['Lincoln Center', 'undefined', 'undefined', 'undefined', 'undefined', 40.7714431, -73.98297990000003, 'https://mapbuildr.com/assets/img/markers/hollow-pin-blue.png']
            ];
            for (i = 0; i < locations.length; i++) {
          if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
          if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
          if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
               if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
               if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
                marker = new google.maps.Marker({
                    icon: markericon,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
    link = '';     }

  }
})