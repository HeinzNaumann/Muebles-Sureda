
jQuery(function () {

	// Window load function

	$(window).load(function () {

		//Open street  Map
		var mapcanvas = document.getElementById("map-canvas");
		if (mapcanvas) {
			// Element exists
			var coord = [39.57226778005461, 3.21869090673715]; // <--- coordinates here

			var map = L.map('map-canvas', { scrollWheelZoom: false }).setView(coord, 18);

			L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {

			}).addTo(map);

			var customIcon = L.icon({
				iconUrl: 'images/marker_1.png',
				iconSize: [80, 95], // size of the icon
				iconAnchor: [40, 94] // point of the icon which will correspond to marker's location
			});

			var marker = L.marker(coord, { icon: customIcon }).addTo(map);

		}
	})

});

