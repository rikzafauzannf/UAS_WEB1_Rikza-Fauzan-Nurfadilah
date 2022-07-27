$(document).ready(function(){
    $("#lihattanggapanRikzaFauzan").click(function(){
        $("#tampilTanggapan").toggle();
    });


    $("#kirimRikzaFauzan").click(function(){
        var username, tanggapan;

		username  = $("#usernameRikzaFauzan").val();
		tanggapan = $("#tanggapanRikzaFauzan").val();

		$("#hasiltanggapanRikzaFauzan").prepend("<div class='tanggapan'><table><tr><td>"+username+"<hr></td></tr><tr><td>"+tanggapan+"</td></tr></table></div>");
        
    });

	$("#kirimMasukanRikzaFauzan").click(function (){
		var username, gmail, masukan;

		username = $("#usernameRikzaFauzan").val();
		gmail	 = $("#gmailRikzaFauzan").val();
		masukan	 = $("#masukanRikzaFauzan").val();

		alert("Pesan Terkirim ' "+masukan+" ' dari : "+username+" ");

	});

	$("#printRikzaFauzan").click(function(){
		$("#printRikzaFauzan").hide();
		$("#kembaliRikzaFauzan").hide();
		$("body").css("color","black");
		window.print();
	});


    // map
    var map = L.map('mapRikzaFauzan').setView([-7.348740114325566, 108.21936005340768], 13);

	var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	var marker = L.marker([-7.342624698523656, 108.2164506337901]).addTo(map)
		.bindPopup('<img src="IMG/bread_and_wheat_food-wallpaper-1920x1200.jpg" alt="" srcset=""><br />Resep Bread and Wheat').openPopup();
    
    var marker = L.marker([-7.3273043832707865, 108.21544627721492]).addTo(map)
	.bindPopup('<img src="IMG/christmas_cup_of_coffee_winter_mood-wallpaper-1920x1200.jpg" alt="" srcset=""><br />Resep Christmas Cup of Coffee winter').openPopup();

    var marker = L.marker([-7.3344880715163745, 108.21913401179205]).addTo(map)
	.bindPopup('<img src="IMG/homemade_vegetarian_pizza-wallpaper-1920x1200.jpg" alt="" srcset=""><br />Resep CHomemade Vegetarian Pizza').openPopup();


	$("#masukanTempatRikzaFauzan").click(function(){
		var koordinat,namaTempat;

		koordinat = $("#koordinatRikzaFauzan").val();
		namaTempat = $("#namaTempatRikzaFauzan").val();

		var marker = L.marker([koordinat]).addTo(map)
		.bindPopup('namaTempat').openPopup();
	});
	// var circle = L.circle([51.508, -0.11], {
	// 	color: 'red',
	// 	fillColor: '#f03',
	// 	fillOpacity: 0.5,
	// 	radius: 500
	// }).addTo(map).bindPopup('I am a circle.');

	// var polygon = L.polygon([
	// 	[51.509, -0.08],
	// 	[51.503, -0.06],
	// 	[51.51, -0.047]
	// ]).addTo(map).bindPopup('I am a polygon.');


	var popup = L.popup()
		.setLatLng([-7.348740114325566, 108.21936005340768])
		.setContent('lokasi resep dan pemesanan makanan <br> <small>Kota Tasikmalaya</small>')
		.openOn(map);

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent('You clicked the map at ' + e.latlng.toString())
			.openOn(map);
	}

	map.on('click', onMapClick);
  
})