jQuery(function () {
  // Window load function

  $(window).load(function () {
    //Open street  Map
    var mapcanvas = document.getElementById("map-canvas");
    if (mapcanvas) {
      // Element exists
      var coord = [39.572025, 3.217715]; // <--- coordinates here

      var map = L.map("map-canvas", { scrollWheelZoom: false }).setView(
        coord,
        18,
      );

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {},
      ).addTo(map);

      var customIcon = L.icon({
        iconUrl: "images/marker_1.png",
        iconSize: [80, 95], // size of the icon
        iconAnchor: [39, 78], // point of the icon which will correspond to marker's location
      });

      var marker = L.marker(coord, { icon: customIcon }).addTo(map);
      const url =
        "https://www.google.com/maps/place/Muebles+Miguel+Sureda/@39.5720197,3.2177146,15z/data=!4m2!3m1!1s0x0:0x74a2d4b50a5c8481?sa=X&ved=2ahUKEwi_-f2I9sLpAhX9AWMBHSX3CswQ_BIwCHoECA4QCA";
      map.on("click", e => {
        window.open(url);
      });
    }
  });
});
