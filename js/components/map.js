(function(){
	function initialize() {
		var resLatLng 		= new google.maps.LatLng(10.753726, 106.675004);
		var resMarkerIcon = {
			url: 'img/marker.png',
			scaledSize: new google.maps.Size(185, 56),
			anchor: new google.maps.Point(10, 50)
		}
		var mobileCenter	= new google.maps.LatLng(
								resLatLng.lat() + 0.001,
								resLatLng.lng() + 0.003);
		var desktopCenter 	= new google.maps.LatLng(
								resLatLng.lat() - 0.0105,
								resLatLng.lng() );

		function decideCenter() {
			if (matchMedia(Foundation.media_queries['medium']).matches) {
				return desktopCenter;
			}
			return mobileCenter;
		}

		var mapOptions = {
			center: decideCenter(),
			zoom: 15,

			disableDefaultUI: true,
			disableDoubleClickZoom: true,
			scrollwheel: false,
			navigationControl: false,
			scaleControl: false,

			styles: [
				{
					"featureType": "road",
					"elementType": "geometry.stroke",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "administrative",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "transit",
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
					"featureType": "water",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "road.local",
					"elementType": "labels",
					"stylers": [
						{ "visibility": "off" }
					]
				},{
					"featureType": "road.arterial",
					"elementType": "labels.text.fill",
					"stylers": [
						{ "color": "#999999" }
					]
				},{
					"featureType": "road.highway",
					"stylers": [
						{ "visibility": "off" }
					]
				}
			]
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		// set marker
		var resMarker = new google.maps.Marker({
			position: resLatLng,
			icon: resMarkerIcon,
			clickable: false,
			map: map
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	// google.maps.event.addDomListener(window, 'resize', function() {
	// 	map.setCenter(decideCenter());
	// });
})();