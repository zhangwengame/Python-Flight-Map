			AmCharts.ready(function() {
			    map = new AmCharts.AmMap();
			    map.pathToImages = "../ammap/images/";

			    var dataProvider = {
			        mapVar: AmCharts.maps.worldLow
			    };

			    map.areasSettings = {
			        unlistedAreasColor: "#FFCC00"
			    };

			    map.imagesSettings = {
			        color: "#CC0000",
			        rollOverColor: "#CC0000",
			        selectedColor: "#000000"
			    };

			    map.linesSettings = {
			        color: "#CC0000",
			        alpha: 0.4
			    };

				// nimabi
			    var nimabi = {
			        id: "nimabi",
			        color: "#000000",
			        svgPath: targetSVG,
			        title: "nimabi",
			        latitude: 0.0000,
			        longitude: -0.0000,
			        scale: 1.5,
			        zoomLevel: 5,
			        zoomLongitude: -0.0000,
			        zoomLatitude: 0.0000,

			        lines: [
			            {
			            latitudes: [0.0000, 50.4422],
			            longitudes: [-0.0000, 30.5367]},
			        {
			            latitudes: [0.0000, 46.9480],
			            longitudes: [-0.0000, 7.4481]},
			        {
			            latitudes: [0.0000, 59.3328],
			            longitudes: [-0.0000, 18.0645]},
			        {
			            latitudes: [0.0000, 40.4167],
			            longitudes: [-0.0000, -3.7033]},
			        {
			            latitudes: [0.0000, 46.0514],
			            longitudes: [-0.0000, 14.5060]},
			        {
			            latitudes: [0.0000, 48.2116],
			            longitudes: [-0.0000, 17.1547]},
			        {
			            latitudes: [0.0000, 44.8048],
			            longitudes: [-0.0000, 20.4781]},
			        {
			            latitudes: [0.0000, 55.7558],
			            longitudes: [-0.0000, 37.6176]},
			        {
			            latitudes: [0.0000, 38.7072],
			            longitudes: [-0.0000, -9.1355]},
			        {
			            latitudes: [0.0000, 54.6896],
			            longitudes: [-0.0000, 25.2799]},
			        {
			            latitudes: [0.0000, 64.1353],
			            longitudes: [-0.0000, -21.8952]},
			        {
			            latitudes: [0.0000, 40.4300],
			            longitudes: [-0.0000, -74.0000]}
			        ],

			        images: [{
			            label: "Flights from nimabi",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20},
			        {
			            label: "show flights from Vilnius",
			            left: 106,
			            top: 70,
			            labelColor: "#000000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 11,
			            linkToObject: "vilnius"}]
			    };
			   
			    // VILNIUS
			    var vilnius = {
			        id: "vilnius",
			        color: "#000000",
			        svgPath: targetSVG,
			        title: "Vilnius",
			        latitude: 54.6896,
			        longitude: 25.2799,
			        scale: 1.5,
			        zoomLevel: 5,
			        zoomLongitude: 15.4492,
			        zoomLatitude: 50.2631,

			        lines: [{
			            latitudes: [54.6896, 50.8371],
			            longitudes: [25.2799, 4.3676]},
			        {
			            latitudes: [54.6896, 59.9138],
			            longitudes: [25.2799, 10.7387]},
			        {
			            latitudes: [54.6896, 40.4167],
			            longitudes: [25.2799, -3.7033]},
			        {
			            latitudes: [54.6896, 50.0878],
			            longitudes: [25.2799, 14.4205]},
			        {
			            latitudes: [54.6896, 48.2116],
			            longitudes: [25.2799, 17.1547]},
			        {
			            latitudes: [54.6896, 44.8048],
			            longitudes: [25.2799, 20.4781]},
			        {
			            latitudes: [54.6896, 55.7558],
			            longitudes: [25.2799, 37.6176]},
			        {
			            latitudes: [54.6896, 37.9792],
			            longitudes: [25.2799, 23.7166]},
			        {
			            latitudes: [54.6896, 54.6896],
			            longitudes: [25.2799, 25.2799]},
			        {
			            latitudes: [54.6896, 51.5002],
			            longitudes: [25.2799, -0.1262]},
			        {
			            latitudes: [54.6896, 53.3441],
			            longitudes: [25.2799, -6.2675]}],

			        images: [{
			            label: "Flights from Vilnius",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20},
			        {
			            label: "show flights from nimabi",
			            left: 106,
			            top: 70,
			            labelColor: "#000000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 11,
			            linkToObject: "nimabi"}]
			    };

			    // cities
			    var cities = [
			        //london,
			        nimabi,
			        vilnius,
			    {
			        svgPath: targetSVG,
			        title: "Brussels",
			        latitude: 50.8371,
			        longitude: 4.3676,
			        scale: 1.5,
			        zoomLevel: 5,
			        zoomLongitude: 4.3676,
			        zoomLatitude: 50.8371},
			    {
			        svgPath: targetSVG,
			        title: "Prague",
			        latitude: 50.0878,
			        longitude: 14.4205},
			    {
			        svgPath: targetSVG,
			        title: "Athens",
			        latitude: 37.9792,
			        longitude: 23.7166},
			    {
			        svgPath: targetSVG,
			        title: "Reykjavik",
			        latitude: 64.1353,
			        longitude: -21.8952},
			    {
			        svgPath: targetSVG,
			        title: "Dublin",
			        latitude: 53.3441,
			        longitude: -6.2675},
			    {
			        svgPath: targetSVG,
			        title: "Oslo",
			        latitude: 59.9138,
			        longitude: 10.7387},
			    {
			        svgPath: targetSVG,
			        title: "Lisbon",
			        latitude: 38.7072,
			        longitude: -9.1355},
			    {
			        svgPath: targetSVG,
			        title: "Moscow",
			        latitude: 55.7558,
			        longitude: 37.6176},
			    {
			        svgPath: targetSVG,
			        title: "Belgrade",
			        latitude: 44.8048,
			        longitude: 20.4781},
			    {
			        svgPath: targetSVG,
			        title: "Bratislava",
			        latitude: 48.2116,
			        longitude: 17.1547},
			    {
			        svgPath: targetSVG,
			        title: "Ljubljana",
			        latitude: 46.0514,
			        longitude: 14.5060},
			    {
			        svgPath: targetSVG,
			        title: "Madrid",
			        latitude: 40.4167,
			        longitude: -3.7033},
			    {
			        svgPath: targetSVG,
			        title: "Stockholm",
			        latitude: 59.3328,
			        longitude: 18.0645},
			    {
			        svgPath: targetSVG,
			        title: "Bern",
			        latitude: 46.9480,
			        longitude: 7.4481},
			    {
			        svgPath: targetSVG,
			        title: "Kiev",
			        latitude: 50.4422,
			        longitude: 30.5367},
			    {
			        svgPath: targetSVG,
			        title: "Paris",
			        latitude: 48.8567,
			        longitude: 2.3510},
			    {
			        svgPath: targetSVG,
			        title: "New York",
			        latitude: 40.43,
			        longitude: -74}];


			    //dataProvider.linkToObject = london;
			    dataProvider.linkToObject = nimabi;
			    dataProvider.images = cities;
			    map.dataProvider = dataProvider;
				  map.backgroundZoomsToTop = true;
				  map.linesAboveImages = true;
			    //xinjiade
			    map.objectList = new AmCharts.ObjectList("listdiv");
			    map.showImagesInList = true;

			    map.write("mapdiv");

			});
