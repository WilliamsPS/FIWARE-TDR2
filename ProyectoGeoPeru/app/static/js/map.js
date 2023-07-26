document.addEventListener("DOMContentLoaded", function() {
  // Código para inicializar el mapa y personalizarlo
  var map = L.map("map").setView([-9.189967, -75.015152], 5);
  
  // Capa de teselas del mapa base de OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  // Código para agregar el marcador a Tumbes
  var tumbes = L.marker([-3.824139, -80.568830]).addTo(map);
  tumbes.bindPopup("Tumbes").openPopup();
  
  // Código para hacer zoom al hacer clic en el marcador de Tumbes
  tumbes.on("click", function() {
      map.setView(tumbes.getLatLng(), 10);
      showCustomIconOnce(); // Llamar a la función para mostrar el icono SVG
      
  });

  // Función para mostrar el icono SVG una vez
  function showCustomIconOnce() {
    if (!showCustomIconOnce.hasShown) {
      var customIcon = L.divIcon({
        className: "custom-icon",
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none">'+
        '<path d="M42.7421 34.9685C35.1526 27.379 22.8474 27.379 15.2579 34.9685" stroke="#69DC56" stroke-width="4"/>'+
        '<path d="M37.5889 40.1218C32.8454 35.3783 25.1547 35.3783 20.4112 40.1218" stroke="#69DC56" stroke-width="4"/>'+
        '<path d="M47.8954 29.8152C37.4598 19.3796 20.5402 19.3796 10.1046 29.8152" stroke="#69DC56" stroke-width="4"/>'+
        '<path d="M53.0488 24.6619C39.767 11.3802 18.233 11.3802 4.95129 24.6619" stroke="#69DC56" stroke-width="4"/>'+
        '<path d="M34.2893 43.2893C33.6327 42.6327 32.8532 42.1119 31.9953 41.7565C31.1374 41.4011 30.2179 41.2182 29.2893 41.2182C28.3607 41.2182 27.4412 41.4011 26.5833 41.7565C25.7254 42.1119 24.9459 42.6327 24.2893 43.2893L29.2893 48.2893L34.2893 43.2893Z" fill="#69DC56"/>'+
        '</svg>'
     
      });

      // Agregar el marcador con el icono SVG a las coordenadas deseadas
      var thing03 = L.marker([-3.8503363602720975, -80.40632815428121], { icon: customIcon }).addTo(map);
      thing03.bindPopup("Thing 03").openPopup();


      // Marcar como mostrado
      showCustomIconOnce.hasShown = true;
    }

   

  }

});
