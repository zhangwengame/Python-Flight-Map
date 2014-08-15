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

    var Toronto = {
                    id: "Toronto" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Toronto",
                    latitude: 43.6772,
                    longitude: -79.6306,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -79.6306,
                    zoomLatitude: 43.6772,
                    lines: [
                    {
                        latitudes: [43.6772,50.9014],
                        longitudes: [-79.6306,4.4844],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,32.8968],
                        longitudes: [-79.6306,-97.0380],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,36.0801],
                        longitudes: [-79.6306,-115.1522],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,33.9425],
                        longitudes: [-79.6306,-118.4081],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.7933],
                        longitudes: [-79.6306,-80.2906],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.9786],
                        longitudes: [-79.6306,-87.9048],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,24.4330],
                        longitudes: [-79.6306,54.6511],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,35.2140],
                        longitudes: [-79.6306,-80.9431],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,55.6179],
                        longitudes: [-79.6306,12.6560],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,39.8617],
                        longitudes: [-79.6306,-104.6732],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,32.8968],
                        longitudes: [-79.6306,-97.0380],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6925],
                        longitudes: [-79.6306,-74.1687],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,50.0264],
                        longitudes: [-79.6306,8.5431],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,22.3089],
                        longitudes: [-79.6306,113.9146],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,29.9844],
                        longitudes: [-79.6306,-95.3414],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.9769],
                        longitudes: [-79.6306,28.8146],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,36.0801],
                        longitudes: [-79.6306,-115.1522],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,33.9425],
                        longitudes: [-79.6306,-118.4081],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,19.4363],
                        longitudes: [-79.6306,-99.0721],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.7933],
                        longitudes: [-79.6306,-80.2906],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,44.8820],
                        longitudes: [-79.6306,-93.2218],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,48.3538],
                        longitudes: [-79.6306,11.7861],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,35.7647],
                        longitudes: [-79.6306,140.3864],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.9786],
                        longitudes: [-79.6306,-87.9048],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.0801],
                        longitudes: [-79.6306,116.5846],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,31.1434],
                        longitudes: [-79.6306,121.8052],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,37.6190],
                        longitudes: [-79.6306,-122.3749],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,48.1103],
                        longitudes: [-79.6306,16.5697],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.8045],
                        longitudes: [-79.6306,12.2508],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.0777],
                        longitudes: [-79.6306,121.2328],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.0801],
                        longitudes: [-79.6306,116.5846],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,31.1434],
                        longitudes: [-79.6306,121.8052],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,22.3089],
                        longitudes: [-79.6306,113.9146],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,52.3086],
                        longitudes: [-79.6306,4.7639],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.8045],
                        longitudes: [-79.6306,12.2508],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,36.0801],
                        longitudes: [-79.6306,-115.1522],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.7933],
                        longitudes: [-79.6306,-80.2906],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,44.8820],
                        longitudes: [-79.6306,-93.2218],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.2528],
                        longitudes: [-79.6306,55.3644],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,24.4330],
                        longitudes: [-79.6306,54.6511],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.9786],
                        longitudes: [-79.6306,-87.9048],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.0801],
                        longitudes: [-79.6306,116.5846],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,37.4691],
                        longitudes: [-79.6306,126.4505],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,52.3086],
                        longitudes: [-79.6306,4.7639],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,55.6179],
                        longitudes: [-79.6306,12.6560],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,50.0264],
                        longitudes: [-79.6306,8.5431],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,48.3538],
                        longitudes: [-79.6306,11.7861],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,48.1103],
                        longitudes: [-79.6306,16.5697],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,35.7647],
                        longitudes: [-79.6306,140.3864],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,48.1103],
                        longitudes: [-79.6306,16.5697],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,55.6179],
                        longitudes: [-79.6306,12.6560],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,50.9014],
                        longitudes: [-79.6306,4.4844],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.9769],
                        longitudes: [-79.6306,28.8146],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.1481],
                        longitudes: [-79.6306,-0.1903],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,53.3537],
                        longitudes: [-79.6306,-2.2750],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,39.8617],
                        longitudes: [-79.6306,-104.6732],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,32.8968],
                        longitudes: [-79.6306,-97.0380],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6925],
                        longitudes: [-79.6306,-74.1687],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,29.9844],
                        longitudes: [-79.6306,-95.3414],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,33.9425],
                        longitudes: [-79.6306,-118.4081],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,44.8820],
                        longitudes: [-79.6306,-93.2218],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,41.9786],
                        longitudes: [-79.6306,-87.9048],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,37.6190],
                        longitudes: [-79.6306,-122.3749],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,49.0128],
                        longitudes: [-79.6306,2.5500],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,50.0264],
                        longitudes: [-79.6306,8.5431],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,51.4775],
                        longitudes: [-79.6306,-0.4614],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,35.2140],
                        longitudes: [-79.6306,-80.9431],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,32.8968],
                        longitudes: [-79.6306,-97.0380],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,40.6398],
                        longitudes: [-79.6306,-73.7789],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,36.0801],
                        longitudes: [-79.6306,-115.1522],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,33.9425],
                        longitudes: [-79.6306,-118.4081],
                        color:"#999999",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [43.6772,25.7933],
                        longitudes: [-79.6306,-80.2906],
                        color:"#993039",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [25.7933,41.9786],
                        longitudes: [-80.2906,-87.9048],
                        color:"#993039",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218],
                        color:"#993039",
			            			alpha:"1.0",
			            		  thickness:"3.0"
                    }],
                images: [{
			            label: "Flights from Toronto",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Brussels = {
                    id: "Brussels" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Brussels",
                    latitude: 50.9014,
                    longitude: 4.4844,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 4.4844,
                    zoomLatitude: 50.9014,
                    lines: [
                    {
                        latitudes: [50.9014,19.0887],
                        longitudes: [4.4844,72.8679]
                    },
                    {
                        latitudes: [50.9014,28.5665],
                        longitudes: [4.4844,77.1031]
                    },
                    {
                        latitudes: [50.9014,40.6925],
                        longitudes: [4.4844,-74.1687]
                    },
                    {
                        latitudes: [50.9014,43.6772],
                        longitudes: [4.4844,-79.6306]
                    },
                    {
                        latitudes: [50.9014,51.4775],
                        longitudes: [4.4844,-0.4614]
                    },
                    {
                        latitudes: [50.9014,43.6772],
                        longitudes: [4.4844,-79.6306]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,41.8045],
                        longitudes: [4.4844,12.2508]
                    },
                    {
                        latitudes: [50.9014,51.4775],
                        longitudes: [4.4844,-0.4614]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,49.0128],
                        longitudes: [4.4844,2.5500]
                    },
                    {
                        latitudes: [50.9014,24.4330],
                        longitudes: [4.4844,54.6511]
                    },
                    {
                        latitudes: [50.9014,41.2971],
                        longitudes: [4.4844,2.0785]
                    },
                    {
                        latitudes: [50.9014,55.6179],
                        longitudes: [4.4844,12.6560]
                    },
                    {
                        latitudes: [50.9014,41.8045],
                        longitudes: [4.4844,12.2508]
                    },
                    {
                        latitudes: [50.9014,40.4936],
                        longitudes: [4.4844,-3.5668]
                    },
                    {
                        latitudes: [50.9014,40.0801],
                        longitudes: [4.4844,116.5846]
                    },
                    {
                        latitudes: [50.9014,41.2971],
                        longitudes: [4.4844,2.0785]
                    },
                    {
                        latitudes: [50.9014,40.4936],
                        longitudes: [4.4844,-3.5668]
                    },
                    {
                        latitudes: [50.9014,52.3086],
                        longitudes: [4.4844,4.7639]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,52.3086],
                        longitudes: [4.4844,4.7639]
                    },
                    {
                        latitudes: [50.9014,40.6925],
                        longitudes: [4.4844,-74.1687]
                    },
                    {
                        latitudes: [50.9014,50.0264],
                        longitudes: [4.4844,8.5431]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,48.3538],
                        longitudes: [4.4844,11.7861]
                    },
                    {
                        latitudes: [50.9014,48.1103],
                        longitudes: [4.4844,16.5697]
                    },
                    {
                        latitudes: [50.9014,55.6179],
                        longitudes: [4.4844,12.6560]
                    },
                    {
                        latitudes: [50.9014,52.3086],
                        longitudes: [4.4844,4.7639]
                    },
                    {
                        latitudes: [50.9014,24.4330],
                        longitudes: [4.4844,54.6511]
                    },
                    {
                        latitudes: [50.9014,41.2971],
                        longitudes: [4.4844,2.0785]
                    },
                    {
                        latitudes: [50.9014,13.6811],
                        longitudes: [4.4844,100.7473]
                    },
                    {
                        latitudes: [50.9014,19.0887],
                        longitudes: [4.4844,72.8679]
                    },
                    {
                        latitudes: [50.9014,49.0128],
                        longitudes: [4.4844,2.5500]
                    },
                    {
                        latitudes: [50.9014,55.6179],
                        longitudes: [4.4844,12.6560]
                    },
                    {
                        latitudes: [50.9014,28.5665],
                        longitudes: [4.4844,77.1031]
                    },
                    {
                        latitudes: [50.9014,55.4086],
                        longitudes: [4.4844,37.9061]
                    },
                    {
                        latitudes: [50.9014,40.6925],
                        longitudes: [4.4844,-74.1687]
                    },
                    {
                        latitudes: [50.9014,41.8045],
                        longitudes: [4.4844,12.2508]
                    },
                    {
                        latitudes: [50.9014,50.0264],
                        longitudes: [4.4844,8.5431]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,51.4775],
                        longitudes: [4.4844,-0.4614]
                    },
                    {
                        latitudes: [50.9014,40.4936],
                        longitudes: [4.4844,-3.5668]
                    },
                    {
                        latitudes: [50.9014,53.3537],
                        longitudes: [4.4844,-2.2750]
                    },
                    {
                        latitudes: [50.9014,48.3538],
                        longitudes: [4.4844,11.7861]
                    },
                    {
                        latitudes: [50.9014,41.9786],
                        longitudes: [4.4844,-87.9048]
                    },
                    {
                        latitudes: [50.9014,40.0801],
                        longitudes: [4.4844,116.5846]
                    },
                    {
                        latitudes: [50.9014,48.1103],
                        longitudes: [4.4844,16.5697]
                    },
                    {
                        latitudes: [50.9014,43.6772],
                        longitudes: [4.4844,-79.6306]
                    },
                    {
                        latitudes: [50.9014,55.6179],
                        longitudes: [4.4844,12.6560]
                    },
                    {
                        latitudes: [50.9014,13.6811],
                        longitudes: [4.4844,100.7473]
                    },
                    {
                        latitudes: [50.9014,40.9769],
                        longitudes: [4.4844,28.8146]
                    },
                    {
                        latitudes: [50.9014,40.6925],
                        longitudes: [4.4844,-74.1687]
                    },
                    {
                        latitudes: [50.9014,40.6398],
                        longitudes: [4.4844,-73.7789]
                    },
                    {
                        latitudes: [50.9014,53.3537],
                        longitudes: [4.4844,-2.2750]
                    },
                    {
                        latitudes: [50.9014,41.9786],
                        longitudes: [4.4844,-87.9048]
                    },
                    {
                        latitudes: [50.9014,24.4330],
                        longitudes: [4.4844,54.6511]
                    },
                    {
                        latitudes: [50.9014,40.4936],
                        longitudes: [4.4844,-3.5668]
                    },
                    {
                        latitudes: [50.9014,41.2971],
                        longitudes: [4.4844,2.0785]
                    }],
                images: [{
			            label: "Flights from Brussels",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Frankfurt = {
                    id: "Frankfurt" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Frankfurt",
                    latitude: 50.0264,
                    longitude: 8.5431,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 8.5431,
                    zoomLatitude: 50.0264,
                    lines: [
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,2.7456],
                        longitudes: [8.5431,101.7099]
                    },
                    {
                        latitudes: [50.0264,51.4775],
                        longitudes: [8.5431,-0.4614]
                    },
                    {
                        latitudes: [50.0264,24.4330],
                        longitudes: [8.5431,54.6511]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,55.4086],
                        longitudes: [8.5431,37.9061]
                    },
                    {
                        latitudes: [50.0264,51.4775],
                        longitudes: [8.5431,-0.4614]
                    },
                    {
                        latitudes: [50.0264,40.4936],
                        longitudes: [8.5431,-3.5668]
                    },
                    {
                        latitudes: [50.0264,48.1103],
                        longitudes: [8.5431,16.5697]
                    },
                    {
                        latitudes: [50.0264,43.6772],
                        longitudes: [8.5431,-79.6306]
                    },
                    {
                        latitudes: [50.0264,49.0128],
                        longitudes: [8.5431,2.5500]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,19.0887],
                        longitudes: [8.5431,72.8679]
                    },
                    {
                        latitudes: [50.0264,28.5665],
                        longitudes: [8.5431,77.1031]
                    },
                    {
                        latitudes: [50.0264,52.3086],
                        longitudes: [8.5431,4.7639]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,40.4936],
                        longitudes: [8.5431,-3.5668]
                    },
                    {
                        latitudes: [50.0264,41.8045],
                        longitudes: [8.5431,12.2508]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,51.4775],
                        longitudes: [8.5431,-0.4614]
                    },
                    {
                        latitudes: [50.0264,55.6179],
                        longitudes: [8.5431,12.6560]
                    },
                    {
                        latitudes: [50.0264,30.5785],
                        longitudes: [8.5431,103.9471]
                    },
                    {
                        latitudes: [50.0264,40.0801],
                        longitudes: [8.5431,116.5846]
                    },
                    {
                        latitudes: [50.0264,31.1434],
                        longitudes: [8.5431,121.8052]
                    },
                    {
                        latitudes: [50.0264,25.0777],
                        longitudes: [8.5431,121.2328]
                    },
                    {
                        latitudes: [50.0264,22.3089],
                        longitudes: [8.5431,113.9146]
                    },
                    {
                        latitudes: [50.0264,36.0801],
                        longitudes: [8.5431,-115.1522]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,25.2528],
                        longitudes: [8.5431,55.3644]
                    },
                    {
                        latitudes: [50.0264,24.4330],
                        longitudes: [8.5431,54.6511]
                    },
                    {
                        latitudes: [50.0264,59.8003],
                        longitudes: [8.5431,30.2625]
                    },
                    {
                        latitudes: [50.0264,48.1103],
                        longitudes: [8.5431,16.5697]
                    },
                    {
                        latitudes: [50.0264,41.2971],
                        longitudes: [8.5431,2.0785]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,40.4936],
                        longitudes: [8.5431,-3.5668]
                    },
                    {
                        latitudes: [50.0264,35.7647],
                        longitudes: [8.5431,140.3864]
                    },
                    {
                        latitudes: [50.0264,37.4691],
                        longitudes: [8.5431,126.4505]
                    },
                    {
                        latitudes: [50.0264,52.3086],
                        longitudes: [8.5431,4.7639]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,40.4936],
                        longitudes: [8.5431,-3.5668]
                    },
                    {
                        latitudes: [50.0264,52.3086],
                        longitudes: [8.5431,4.7639]
                    },
                    {
                        latitudes: [50.0264,24.4330],
                        longitudes: [8.5431,54.6511]
                    },
                    {
                        latitudes: [50.0264,41.2971],
                        longitudes: [8.5431,2.0785]
                    },
                    {
                        latitudes: [50.0264,13.6811],
                        longitudes: [8.5431,100.7473]
                    },
                    {
                        latitudes: [50.0264,19.0887],
                        longitudes: [8.5431,72.8679]
                    },
                    {
                        latitudes: [50.0264,50.9014],
                        longitudes: [8.5431,4.4844]
                    },
                    {
                        latitudes: [50.0264,49.0128],
                        longitudes: [8.5431,2.5500]
                    },
                    {
                        latitudes: [50.0264,35.2140],
                        longitudes: [8.5431,-80.9431]
                    },
                    {
                        latitudes: [50.0264,55.6179],
                        longitudes: [8.5431,12.6560]
                    },
                    {
                        latitudes: [50.0264,30.5785],
                        longitudes: [8.5431,103.9471]
                    },
                    {
                        latitudes: [50.0264,28.5665],
                        longitudes: [8.5431,77.1031]
                    },
                    {
                        latitudes: [50.0264,39.8617],
                        longitudes: [8.5431,-104.6732]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,55.4086],
                        longitudes: [8.5431,37.9061]
                    },
                    {
                        latitudes: [50.0264,51.2895],
                        longitudes: [8.5431,6.7668]
                    },
                    {
                        latitudes: [50.0264,25.2528],
                        longitudes: [8.5431,55.3644]
                    },
                    {
                        latitudes: [50.0264,40.6925],
                        longitudes: [8.5431,-74.1687]
                    },
                    {
                        latitudes: [50.0264,41.8045],
                        longitudes: [8.5431,12.2508]
                    },
                    {
                        latitudes: [50.0264,22.3089],
                        longitudes: [8.5431,113.9146]
                    },
                    {
                        latitudes: [50.0264,29.9844],
                        longitudes: [8.5431,-95.3414]
                    },
                    {
                        latitudes: [50.0264,37.4691],
                        longitudes: [8.5431,126.4505]
                    },
                    {
                        latitudes: [50.0264,40.9769],
                        longitudes: [8.5431,28.8146]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,33.9425],
                        longitudes: [8.5431,-118.4081]
                    },
                    {
                        latitudes: [50.0264,59.8003],
                        longitudes: [8.5431,30.2625]
                    },
                    {
                        latitudes: [50.0264,51.4775],
                        longitudes: [8.5431,-0.4614]
                    },
                    {
                        latitudes: [50.0264,40.4936],
                        longitudes: [8.5431,-3.5668]
                    },
                    {
                        latitudes: [50.0264,53.3537],
                        longitudes: [8.5431,-2.2750]
                    },
                    {
                        latitudes: [50.0264,19.4363],
                        longitudes: [8.5431,-99.0721]
                    },
                    {
                        latitudes: [50.0264,25.7933],
                        longitudes: [8.5431,-80.2906]
                    },
                    {
                        latitudes: [50.0264,48.3538],
                        longitudes: [8.5431,11.7861]
                    },
                    {
                        latitudes: [50.0264,35.7647],
                        longitudes: [8.5431,140.3864]
                    },
                    {
                        latitudes: [50.0264,41.9786],
                        longitudes: [8.5431,-87.9048]
                    },
                    {
                        latitudes: [50.0264,40.0801],
                        longitudes: [8.5431,116.5846]
                    },
                    {
                        latitudes: [50.0264,31.1434],
                        longitudes: [8.5431,121.8052]
                    },
                    {
                        latitudes: [50.0264,37.6190],
                        longitudes: [8.5431,-122.3749]
                    },
                    {
                        latitudes: [50.0264,1.3502],
                        longitudes: [8.5431,103.9944]
                    },
                    {
                        latitudes: [50.0264,48.1103],
                        longitudes: [8.5431,16.5697]
                    },
                    {
                        latitudes: [50.0264,43.6772],
                        longitudes: [8.5431,-79.6306]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,2.7456],
                        longitudes: [8.5431,101.7099]
                    },
                    {
                        latitudes: [50.0264,31.1434],
                        longitudes: [8.5431,121.8052]
                    },
                    {
                        latitudes: [50.0264,35.7647],
                        longitudes: [8.5431,140.3864]
                    },
                    {
                        latitudes: [50.0264,37.6190],
                        longitudes: [8.5431,-122.3749]
                    },
                    {
                        latitudes: [50.0264,48.1103],
                        longitudes: [8.5431,16.5697]
                    },
                    {
                        latitudes: [50.0264,37.4691],
                        longitudes: [8.5431,126.4505]
                    },
                    {
                        latitudes: [50.0264,25.2528],
                        longitudes: [8.5431,55.3644]
                    },
                    {
                        latitudes: [50.0264,35.2140],
                        longitudes: [8.5431,-80.9431]
                    },
                    {
                        latitudes: [50.0264,55.4086],
                        longitudes: [8.5431,37.9061]
                    },
                    {
                        latitudes: [50.0264,55.6179],
                        longitudes: [8.5431,12.6560]
                    },
                    {
                        latitudes: [50.0264,50.9014],
                        longitudes: [8.5431,4.4844]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,1.3502],
                        longitudes: [8.5431,103.9944]
                    },
                    {
                        latitudes: [50.0264,59.8003],
                        longitudes: [8.5431,30.2625]
                    },
                    {
                        latitudes: [50.0264,13.6811],
                        longitudes: [8.5431,100.7473]
                    },
                    {
                        latitudes: [50.0264,40.9769],
                        longitudes: [8.5431,28.8146]
                    },
                    {
                        latitudes: [50.0264,39.8617],
                        longitudes: [8.5431,-104.6732]
                    },
                    {
                        latitudes: [50.0264,32.8968],
                        longitudes: [8.5431,-97.0380]
                    },
                    {
                        latitudes: [50.0264,40.6925],
                        longitudes: [8.5431,-74.1687]
                    },
                    {
                        latitudes: [50.0264,29.9844],
                        longitudes: [8.5431,-95.3414]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,33.9425],
                        longitudes: [8.5431,-118.4081]
                    },
                    {
                        latitudes: [50.0264,25.7933],
                        longitudes: [8.5431,-80.2906]
                    },
                    {
                        latitudes: [50.0264,41.9786],
                        longitudes: [8.5431,-87.9048]
                    },
                    {
                        latitudes: [50.0264,37.6190],
                        longitudes: [8.5431,-122.3749]
                    },
                    {
                        latitudes: [50.0264,43.6772],
                        longitudes: [8.5431,-79.6306]
                    },
                    {
                        latitudes: [50.0264,35.2140],
                        longitudes: [8.5431,-80.9431]
                    },
                    {
                        latitudes: [50.0264,40.6398],
                        longitudes: [8.5431,-73.7789]
                    },
                    {
                        latitudes: [50.0264,1.3502],
                        longitudes: [8.5431,103.9944]
                    },
                    {
                        latitudes: [50.0264,41.2971],
                        longitudes: [8.5431,2.0785]
                    }],
                images: [{
			            label: "Flights from Frankfurt",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Duesseldorf = {
                    id: "Duesseldorf" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Duesseldorf",
                    latitude: 51.2895,
                    longitude: 6.7668,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 6.7668,
                    zoomLatitude: 51.2895,
                    lines: [
                    {
                        latitudes: [51.2895,40.6398],
                        longitudes: [6.7668,-73.7789]
                    },
                    {
                        latitudes: [51.2895,51.4775],
                        longitudes: [6.7668,-0.4614]
                    },
                    {
                        latitudes: [51.2895,25.7933],
                        longitudes: [6.7668,-80.2906]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,24.4330],
                        longitudes: [6.7668,54.6511]
                    },
                    {
                        latitudes: [51.2895,41.2971],
                        longitudes: [6.7668,2.0785]
                    },
                    {
                        latitudes: [51.2895,55.6179],
                        longitudes: [6.7668,12.6560]
                    },
                    {
                        latitudes: [51.2895,55.4086],
                        longitudes: [6.7668,37.9061]
                    },
                    {
                        latitudes: [51.2895,41.8045],
                        longitudes: [6.7668,12.2508]
                    },
                    {
                        latitudes: [51.2895,40.6398],
                        longitudes: [6.7668,-73.7789]
                    },
                    {
                        latitudes: [51.2895,40.4936],
                        longitudes: [6.7668,-3.5668]
                    },
                    {
                        latitudes: [51.2895,25.7933],
                        longitudes: [6.7668,-80.2906]
                    },
                    {
                        latitudes: [51.2895,48.3538],
                        longitudes: [6.7668,11.7861]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,48.1103],
                        longitudes: [6.7668,16.5697]
                    },
                    {
                        latitudes: [51.2895,49.0128],
                        longitudes: [6.7668,2.5500]
                    },
                    {
                        latitudes: [51.2895,52.3086],
                        longitudes: [6.7668,4.7639]
                    },
                    {
                        latitudes: [51.2895,55.6179],
                        longitudes: [6.7668,12.6560]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,52.3086],
                        longitudes: [6.7668,4.7639]
                    },
                    {
                        latitudes: [51.2895,49.0128],
                        longitudes: [6.7668,2.5500]
                    },
                    {
                        latitudes: [51.2895,51.4775],
                        longitudes: [6.7668,-0.4614]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,53.3537],
                        longitudes: [6.7668,-2.2750]
                    },
                    {
                        latitudes: [51.2895,40.0801],
                        longitudes: [6.7668,116.5846]
                    },
                    {
                        latitudes: [51.2895,25.2528],
                        longitudes: [6.7668,55.3644]
                    },
                    {
                        latitudes: [51.2895,24.4330],
                        longitudes: [6.7668,54.6511]
                    },
                    {
                        latitudes: [51.2895,59.8003],
                        longitudes: [6.7668,30.2625]
                    },
                    {
                        latitudes: [51.2895,41.2971],
                        longitudes: [6.7668,2.0785]
                    },
                    {
                        latitudes: [51.2895,40.4936],
                        longitudes: [6.7668,-3.5668]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,41.8045],
                        longitudes: [6.7668,12.2508]
                    },
                    {
                        latitudes: [51.2895,52.3086],
                        longitudes: [6.7668,4.7639]
                    },
                    {
                        latitudes: [51.2895,41.2971],
                        longitudes: [6.7668,2.0785]
                    },
                    {
                        latitudes: [51.2895,49.0128],
                        longitudes: [6.7668,2.5500]
                    },
                    {
                        latitudes: [51.2895,55.6179],
                        longitudes: [6.7668,12.6560]
                    },
                    {
                        latitudes: [51.2895,40.6925],
                        longitudes: [6.7668,-74.1687]
                    },
                    {
                        latitudes: [51.2895,41.8045],
                        longitudes: [6.7668,12.2508]
                    },
                    {
                        latitudes: [51.2895,50.0264],
                        longitudes: [6.7668,8.5431]
                    },
                    {
                        latitudes: [51.2895,40.9769],
                        longitudes: [6.7668,28.8146]
                    },
                    {
                        latitudes: [51.2895,59.8003],
                        longitudes: [6.7668,30.2625]
                    },
                    {
                        latitudes: [51.2895,51.4775],
                        longitudes: [6.7668,-0.4614]
                    },
                    {
                        latitudes: [51.2895,40.4936],
                        longitudes: [6.7668,-3.5668]
                    },
                    {
                        latitudes: [51.2895,53.3537],
                        longitudes: [6.7668,-2.2750]
                    },
                    {
                        latitudes: [51.2895,48.3538],
                        longitudes: [6.7668,11.7861]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,40.0801],
                        longitudes: [6.7668,116.5846]
                    },
                    {
                        latitudes: [51.2895,48.1103],
                        longitudes: [6.7668,16.5697]
                    },
                    {
                        latitudes: [51.2895,48.1103],
                        longitudes: [6.7668,16.5697]
                    },
                    {
                        latitudes: [51.2895,25.2528],
                        longitudes: [6.7668,55.3644]
                    },
                    {
                        latitudes: [51.2895,55.4086],
                        longitudes: [6.7668,37.9061]
                    },
                    {
                        latitudes: [51.2895,55.6179],
                        longitudes: [6.7668,12.6560]
                    },
                    {
                        latitudes: [51.2895,59.8003],
                        longitudes: [6.7668,30.2625]
                    },
                    {
                        latitudes: [51.2895,40.9769],
                        longitudes: [6.7668,28.8146]
                    },
                    {
                        latitudes: [51.2895,51.1481],
                        longitudes: [6.7668,-0.1903]
                    },
                    {
                        latitudes: [51.2895,40.6925],
                        longitudes: [6.7668,-74.1687]
                    },
                    {
                        latitudes: [51.2895,41.9786],
                        longitudes: [6.7668,-87.9048]
                    },
                    {
                        latitudes: [51.2895,24.4330],
                        longitudes: [6.7668,54.6511]
                    },
                    {
                        latitudes: [51.2895,41.2971],
                        longitudes: [6.7668,2.0785]
                    }],
                images: [{
			            label: "Flights from Duesseldorf",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Munich = {
                    id: "Munich" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Munich",
                    latitude: 48.3538,
                    longitude: 11.7861,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 11.7861,
                    zoomLatitude: 48.3538,
                    lines: [
                    {
                        latitudes: [48.3538,51.4775],
                        longitudes: [11.7861,-0.4614]
                    },
                    {
                        latitudes: [48.3538,24.4330],
                        longitudes: [11.7861,54.6511]
                    },
                    {
                        latitudes: [48.3538,55.4086],
                        longitudes: [11.7861,37.9061]
                    },
                    {
                        latitudes: [48.3538,51.2895],
                        longitudes: [11.7861,6.7668]
                    },
                    {
                        latitudes: [48.3538,51.4775],
                        longitudes: [11.7861,-0.4614]
                    },
                    {
                        latitudes: [48.3538,40.4936],
                        longitudes: [11.7861,-3.5668]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,43.6772],
                        longitudes: [11.7861,-79.6306]
                    },
                    {
                        latitudes: [48.3538,49.0128],
                        longitudes: [11.7861,2.5500]
                    },
                    {
                        latitudes: [48.3538,19.0887],
                        longitudes: [11.7861,72.8679]
                    },
                    {
                        latitudes: [48.3538,28.5665],
                        longitudes: [11.7861,77.1031]
                    },
                    {
                        latitudes: [48.3538,52.3086],
                        longitudes: [11.7861,4.7639]
                    },
                    {
                        latitudes: [48.3538,41.8045],
                        longitudes: [11.7861,12.2508]
                    },
                    {
                        latitudes: [48.3538,51.4775],
                        longitudes: [11.7861,-0.4614]
                    },
                    {
                        latitudes: [48.3538,40.0801],
                        longitudes: [11.7861,116.5846]
                    },
                    {
                        latitudes: [48.3538,31.1434],
                        longitudes: [11.7861,121.8052]
                    },
                    {
                        latitudes: [48.3538,50.0264],
                        longitudes: [11.7861,8.5431]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,25.2528],
                        longitudes: [11.7861,55.3644]
                    },
                    {
                        latitudes: [48.3538,24.4330],
                        longitudes: [11.7861,54.6511]
                    },
                    {
                        latitudes: [48.3538,59.8003],
                        longitudes: [11.7861,30.2625]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,41.2971],
                        longitudes: [11.7861,2.0785]
                    },
                    {
                        latitudes: [48.3538,40.4936],
                        longitudes: [11.7861,-3.5668]
                    },
                    {
                        latitudes: [48.3538,52.3086],
                        longitudes: [11.7861,4.7639]
                    },
                    {
                        latitudes: [48.3538,52.3086],
                        longitudes: [11.7861,4.7639]
                    },
                    {
                        latitudes: [48.3538,41.2971],
                        longitudes: [11.7861,2.0785]
                    },
                    {
                        latitudes: [48.3538,13.6811],
                        longitudes: [11.7861,100.7473]
                    },
                    {
                        latitudes: [48.3538,19.0887],
                        longitudes: [11.7861,72.8679]
                    },
                    {
                        latitudes: [48.3538,50.9014],
                        longitudes: [11.7861,4.4844]
                    },
                    {
                        latitudes: [48.3538,49.0128],
                        longitudes: [11.7861,2.5500]
                    },
                    {
                        latitudes: [48.3538,35.2140],
                        longitudes: [11.7861,-80.9431]
                    },
                    {
                        latitudes: [48.3538,55.6179],
                        longitudes: [11.7861,12.6560]
                    },
                    {
                        latitudes: [48.3538,28.5665],
                        longitudes: [11.7861,77.1031]
                    },
                    {
                        latitudes: [48.3538,55.4086],
                        longitudes: [11.7861,37.9061]
                    },
                    {
                        latitudes: [48.3538,51.2895],
                        longitudes: [11.7861,6.7668]
                    },
                    {
                        latitudes: [48.3538,25.2528],
                        longitudes: [11.7861,55.3644]
                    },
                    {
                        latitudes: [48.3538,40.6925],
                        longitudes: [11.7861,-74.1687]
                    },
                    {
                        latitudes: [48.3538,41.8045],
                        longitudes: [11.7861,12.2508]
                    },
                    {
                        latitudes: [48.3538,50.0264],
                        longitudes: [11.7861,8.5431]
                    },
                    {
                        latitudes: [48.3538,22.3089],
                        longitudes: [11.7861,113.9146]
                    },
                    {
                        latitudes: [48.3538,37.4691],
                        longitudes: [11.7861,126.4505]
                    },
                    {
                        latitudes: [48.3538,40.9769],
                        longitudes: [11.7861,28.8146]
                    },
                    {
                        latitudes: [48.3538,40.6398],
                        longitudes: [11.7861,-73.7789]
                    },
                    {
                        latitudes: [48.3538,33.9425],
                        longitudes: [11.7861,-118.4081]
                    },
                    {
                        latitudes: [48.3538,59.8003],
                        longitudes: [11.7861,30.2625]
                    },
                    {
                        latitudes: [48.3538,51.4775],
                        longitudes: [11.7861,-0.4614]
                    },
                    {
                        latitudes: [48.3538,40.4936],
                        longitudes: [11.7861,-3.5668]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,35.7647],
                        longitudes: [11.7861,140.3864]
                    },
                    {
                        latitudes: [48.3538,41.9786],
                        longitudes: [11.7861,-87.9048]
                    },
                    {
                        latitudes: [48.3538,40.0801],
                        longitudes: [11.7861,116.5846]
                    },
                    {
                        latitudes: [48.3538,31.1434],
                        longitudes: [11.7861,121.8052]
                    },
                    {
                        latitudes: [48.3538,37.6190],
                        longitudes: [11.7861,-122.3749]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,43.6772],
                        longitudes: [11.7861,-79.6306]
                    },
                    {
                        latitudes: [48.3538,35.7647],
                        longitudes: [11.7861,140.3864]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,40.9769],
                        longitudes: [11.7861,28.8146]
                    },
                    {
                        latitudes: [48.3538,25.2528],
                        longitudes: [11.7861,55.3644]
                    },
                    {
                        latitudes: [48.3538,48.1103],
                        longitudes: [11.7861,16.5697]
                    },
                    {
                        latitudes: [48.3538,55.4086],
                        longitudes: [11.7861,37.9061]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,55.6179],
                        longitudes: [11.7861,12.6560]
                    },
                    {
                        latitudes: [48.3538,50.9014],
                        longitudes: [11.7861,4.4844]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,1.3502],
                        longitudes: [11.7861,103.9944]
                    },
                    {
                        latitudes: [48.3538,59.8003],
                        longitudes: [11.7861,30.2625]
                    },
                    {
                        latitudes: [48.3538,13.6811],
                        longitudes: [11.7861,100.7473]
                    },
                    {
                        latitudes: [48.3538,40.9769],
                        longitudes: [11.7861,28.8146]
                    },
                    {
                        latitudes: [48.3538,51.1481],
                        longitudes: [11.7861,-0.1903]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,40.6925],
                        longitudes: [11.7861,-74.1687]
                    },
                    {
                        latitudes: [48.3538,40.6398],
                        longitudes: [11.7861,-73.7789]
                    },
                    {
                        latitudes: [48.3538,33.9425],
                        longitudes: [11.7861,-118.4081]
                    },
                    {
                        latitudes: [48.3538,41.9786],
                        longitudes: [11.7861,-87.9048]
                    },
                    {
                        latitudes: [48.3538,37.6190],
                        longitudes: [11.7861,-122.3749]
                    },
                    {
                        latitudes: [48.3538,24.4330],
                        longitudes: [11.7861,54.6511]
                    },
                    {
                        latitudes: [48.3538,35.2140],
                        longitudes: [11.7861,-80.9431]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,1.3502],
                        longitudes: [11.7861,103.9944]
                    },
                    {
                        latitudes: [48.3538,53.3537],
                        longitudes: [11.7861,-2.2750]
                    },
                    {
                        latitudes: [48.3538,1.3502],
                        longitudes: [11.7861,103.9944]
                    },
                    {
                        latitudes: [48.3538,41.2971],
                        longitudes: [11.7861,2.0785]
                    },
                    {
                        latitudes: [48.3538,51.2895],
                        longitudes: [11.7861,6.7668]
                    }],
                images: [{
			            label: "Flights from Munich",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Manchester = {
                    id: "Manchester" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Manchester",
                    latitude: 53.3537,
                    longitude: -2.2750,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -2.2750,
                    zoomLatitude: 53.3537,
                    lines: [
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,51.4775],
                        longitudes: [-2.2750,-0.4614]
                    },
                    {
                        latitudes: [53.3537,41.9786],
                        longitudes: [-2.2750,-87.9048]
                    },
                    {
                        latitudes: [53.3537,49.0128],
                        longitudes: [-2.2750,2.5500]
                    },
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,49.0128],
                        longitudes: [-2.2750,2.5500]
                    },
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,51.4775],
                        longitudes: [-2.2750,-0.4614]
                    },
                    {
                        latitudes: [53.3537,41.9786],
                        longitudes: [-2.2750,-87.9048]
                    },
                    {
                        latitudes: [53.3537,49.0128],
                        longitudes: [-2.2750,2.5500]
                    },
                    {
                        latitudes: [53.3537,51.2895],
                        longitudes: [-2.2750,6.7668]
                    },
                    {
                        latitudes: [53.3537,51.4775],
                        longitudes: [-2.2750,-0.4614]
                    },
                    {
                        latitudes: [53.3537,25.2528],
                        longitudes: [-2.2750,55.3644]
                    },
                    {
                        latitudes: [53.3537,24.4330],
                        longitudes: [-2.2750,54.6511]
                    },
                    {
                        latitudes: [53.3537,40.4936],
                        longitudes: [-2.2750,-3.5668]
                    },
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,51.4775],
                        longitudes: [-2.2750,-0.4614]
                    },
                    {
                        latitudes: [53.3537,41.9786],
                        longitudes: [-2.2750,-87.9048]
                    },
                    {
                        latitudes: [53.3537,52.3086],
                        longitudes: [-2.2750,4.7639]
                    },
                    {
                        latitudes: [53.3537,51.2895],
                        longitudes: [-2.2750,6.7668]
                    },
                    {
                        latitudes: [53.3537,40.6925],
                        longitudes: [-2.2750,-74.1687]
                    },
                    {
                        latitudes: [53.3537,50.0264],
                        longitudes: [-2.2750,8.5431]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,41.2971],
                        longitudes: [-2.2750,2.0785]
                    },
                    {
                        latitudes: [53.3537,49.0128],
                        longitudes: [-2.2750,2.5500]
                    },
                    {
                        latitudes: [53.3537,41.8045],
                        longitudes: [-2.2750,12.2508]
                    },
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,25.2528],
                        longitudes: [-2.2750,55.3644]
                    },
                    {
                        latitudes: [53.3537,40.6398],
                        longitudes: [-2.2750,-73.7789]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,55.6179],
                        longitudes: [-2.2750,12.6560]
                    },
                    {
                        latitudes: [53.3537,50.9014],
                        longitudes: [-2.2750,4.4844]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,55.6179],
                        longitudes: [-2.2750,12.6560]
                    },
                    {
                        latitudes: [53.3537,40.9769],
                        longitudes: [-2.2750,28.8146]
                    },
                    {
                        latitudes: [53.3537,43.6772],
                        longitudes: [-2.2750,-79.6306]
                    },
                    {
                        latitudes: [53.3537,52.3086],
                        longitudes: [-2.2750,4.7639]
                    },
                    {
                        latitudes: [53.3537,55.6179],
                        longitudes: [-2.2750,12.6560]
                    },
                    {
                        latitudes: [53.3537,55.4086],
                        longitudes: [-2.2750,37.9061]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,40.6925],
                        longitudes: [-2.2750,-74.1687]
                    },
                    {
                        latitudes: [53.3537,24.4330],
                        longitudes: [-2.2750,54.6511]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,51.4775],
                        longitudes: [-2.2750,-0.4614]
                    },
                    {
                        latitudes: [53.3537,48.3538],
                        longitudes: [-2.2750,11.7861]
                    },
                    {
                        latitudes: [53.3537,41.2971],
                        longitudes: [-2.2750,2.0785]
                    }],
                images: [{
			            label: "Flights from Manchester",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var London = {
                    id: "London" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "London",
                    latitude: 51.1481,
                    longitude: -0.1903,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -0.1903,
                    zoomLatitude: 51.1481,
                    lines: [
                    {
                        latitudes: [51.1481,36.0801],
                        longitudes: [-0.1903,-115.1522]
                    },
                    {
                        latitudes: [51.1481,36.0801],
                        longitudes: [-0.1903,-115.1522]
                    },
                    {
                        latitudes: [51.1481,52.3086],
                        longitudes: [-0.1903,4.7639]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    },
                    {
                        latitudes: [51.1481,41.8045],
                        longitudes: [-0.1903,12.2508]
                    },
                    {
                        latitudes: [51.1481,36.0801],
                        longitudes: [-0.1903,-115.1522]
                    },
                    {
                        latitudes: [51.1481,53.3537],
                        longitudes: [-0.1903,-2.2750]
                    },
                    {
                        latitudes: [51.1481,36.0801],
                        longitudes: [-0.1903,-115.1522]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    },
                    {
                        latitudes: [51.1481,55.6179],
                        longitudes: [-0.1903,12.6560]
                    },
                    {
                        latitudes: [51.1481,41.8045],
                        longitudes: [-0.1903,12.2508]
                    },
                    {
                        latitudes: [51.1481,25.2528],
                        longitudes: [-0.1903,55.3644]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    },
                    {
                        latitudes: [51.1481,25.2528],
                        longitudes: [-0.1903,55.3644]
                    },
                    {
                        latitudes: [51.1481,40.9769],
                        longitudes: [-0.1903,28.8146]
                    },
                    {
                        latitudes: [51.1481,43.6772],
                        longitudes: [-0.1903,-79.6306]
                    },
                    {
                        latitudes: [51.1481,52.3086],
                        longitudes: [-0.1903,4.7639]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    },
                    {
                        latitudes: [51.1481,55.6179],
                        longitudes: [-0.1903,12.6560]
                    },
                    {
                        latitudes: [51.1481,55.4086],
                        longitudes: [-0.1903,37.9061]
                    },
                    {
                        latitudes: [51.1481,51.2895],
                        longitudes: [-0.1903,6.7668]
                    },
                    {
                        latitudes: [51.1481,41.8045],
                        longitudes: [-0.1903,12.2508]
                    },
                    {
                        latitudes: [51.1481,40.4936],
                        longitudes: [-0.1903,-3.5668]
                    },
                    {
                        latitudes: [51.1481,48.3538],
                        longitudes: [-0.1903,11.7861]
                    },
                    {
                        latitudes: [51.1481,48.1103],
                        longitudes: [-0.1903,16.5697]
                    },
                    {
                        latitudes: [51.1481,40.4936],
                        longitudes: [-0.1903,-3.5668]
                    },
                    {
                        latitudes: [51.1481,36.0801],
                        longitudes: [-0.1903,-115.1522]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    },
                    {
                        latitudes: [51.1481,41.2971],
                        longitudes: [-0.1903,2.0785]
                    }],
                images: [{
			            label: "Flights from London",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var London = {
                    id: "London" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "London",
                    latitude: 51.4775,
                    longitude: -0.4614,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -0.4614,
                    zoomLatitude: 51.4775,
                    lines: [
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,52.3086],
                        longitudes: [-0.4614,4.7639]
                    },
                    {
                        latitudes: [51.4775,24.4330],
                        longitudes: [-0.4614,54.6511]
                    },
                    {
                        latitudes: [51.4775,41.2971],
                        longitudes: [-0.4614,2.0785]
                    },
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,50.9014],
                        longitudes: [-0.4614,4.4844]
                    },
                    {
                        latitudes: [51.4775,49.0128],
                        longitudes: [-0.4614,2.5500]
                    },
                    {
                        latitudes: [51.4775,55.6179],
                        longitudes: [-0.4614,12.6560]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,39.8617],
                        longitudes: [-0.4614,-104.6732]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,51.2895],
                        longitudes: [-0.4614,6.7668]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,41.8045],
                        longitudes: [-0.4614,12.2508]
                    },
                    {
                        latitudes: [51.4775,50.0264],
                        longitudes: [-0.4614,8.5431]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,40.9769],
                        longitudes: [-0.4614,28.8146]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,2.7456],
                        longitudes: [-0.4614,101.7099]
                    },
                    {
                        latitudes: [51.4775,36.0801],
                        longitudes: [-0.4614,-115.1522]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,53.3537],
                        longitudes: [-0.4614,-2.2750]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,48.3538],
                        longitudes: [-0.4614,11.7861]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,48.1103],
                        longitudes: [-0.4614,16.5697]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,50.0264],
                        longitudes: [-0.4614,8.5431]
                    },
                    {
                        latitudes: [51.4775,48.3538],
                        longitudes: [-0.4614,11.7861]
                    },
                    {
                        latitudes: [51.4775,48.1103],
                        longitudes: [-0.4614,16.5697]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,49.0128],
                        longitudes: [-0.4614,2.5500]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,44.8820],
                        longitudes: [-0.4614,-93.2218]
                    },
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,19.4363],
                        longitudes: [-0.4614,-99.0721]
                    },
                    {
                        latitudes: [51.4775,39.8617],
                        longitudes: [-0.4614,-104.6732]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,36.0801],
                        longitudes: [-0.4614,-115.1522]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,41.8045],
                        longitudes: [-0.4614,12.2508]
                    },
                    {
                        latitudes: [51.4775,52.3086],
                        longitudes: [-0.4614,4.7639]
                    },
                    {
                        latitudes: [51.4775,24.4330],
                        longitudes: [-0.4614,54.6511]
                    },
                    {
                        latitudes: [51.4775,41.2971],
                        longitudes: [-0.4614,2.0785]
                    },
                    {
                        latitudes: [51.4775,13.6811],
                        longitudes: [-0.4614,100.7473]
                    },
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,50.9014],
                        longitudes: [-0.4614,4.4844]
                    },
                    {
                        latitudes: [51.4775,49.0128],
                        longitudes: [-0.4614,2.5500]
                    },
                    {
                        latitudes: [51.4775,55.6179],
                        longitudes: [-0.4614,12.6560]
                    },
                    {
                        latitudes: [51.4775,30.5785],
                        longitudes: [-0.4614,103.9471]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,39.8617],
                        longitudes: [-0.4614,-104.6732]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,55.4086],
                        longitudes: [-0.4614,37.9061]
                    },
                    {
                        latitudes: [51.4775,51.2895],
                        longitudes: [-0.4614,6.7668]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,41.8045],
                        longitudes: [-0.4614,12.2508]
                    },
                    {
                        latitudes: [51.4775,50.0264],
                        longitudes: [-0.4614,8.5431]
                    },
                    {
                        latitudes: [51.4775,22.3089],
                        longitudes: [-0.4614,113.9146]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,37.4691],
                        longitudes: [-0.4614,126.4505]
                    },
                    {
                        latitudes: [51.4775,40.9769],
                        longitudes: [-0.4614,28.8146]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,36.0801],
                        longitudes: [-0.4614,-115.1522]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,59.8003],
                        longitudes: [-0.4614,30.2625]
                    },
                    {
                        latitudes: [51.4775,40.4936],
                        longitudes: [-0.4614,-3.5668]
                    },
                    {
                        latitudes: [51.4775,53.3537],
                        longitudes: [-0.4614,-2.2750]
                    },
                    {
                        latitudes: [51.4775,19.4363],
                        longitudes: [-0.4614,-99.0721]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,48.3538],
                        longitudes: [-0.4614,11.7861]
                    },
                    {
                        latitudes: [51.4775,35.7647],
                        longitudes: [-0.4614,140.3864]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,40.0801],
                        longitudes: [-0.4614,116.5846]
                    },
                    {
                        latitudes: [51.4775,31.1434],
                        longitudes: [-0.4614,121.8052]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,1.3502],
                        longitudes: [-0.4614,103.9944]
                    },
                    {
                        latitudes: [51.4775,48.1103],
                        longitudes: [-0.4614,16.5697]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,13.6811],
                        longitudes: [-0.4614,100.7473]
                    },
                    {
                        latitudes: [51.4775,40.0801],
                        longitudes: [-0.4614,116.5846]
                    },
                    {
                        latitudes: [51.4775,31.1434],
                        longitudes: [-0.4614,121.8052]
                    },
                    {
                        latitudes: [51.4775,52.3086],
                        longitudes: [-0.4614,4.7639]
                    },
                    {
                        latitudes: [51.4775,22.3089],
                        longitudes: [-0.4614,113.9146]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,53.3537],
                        longitudes: [-0.4614,-2.2750]
                    },
                    {
                        latitudes: [51.4775,23.3924],
                        longitudes: [-0.4614,113.2988]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,44.8820],
                        longitudes: [-0.4614,-93.2218]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,24.4330],
                        longitudes: [-0.4614,54.6511]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,24.4330],
                        longitudes: [-0.4614,54.6511]
                    },
                    {
                        latitudes: [51.4775,41.2971],
                        longitudes: [-0.4614,2.0785]
                    },
                    {
                        latitudes: [51.4775,13.6811],
                        longitudes: [-0.4614,100.7473]
                    },
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,39.8617],
                        longitudes: [-0.4614,-104.6732]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,36.0801],
                        longitudes: [-0.4614,-115.1522]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,40.4936],
                        longitudes: [-0.4614,-3.5668]
                    },
                    {
                        latitudes: [51.4775,53.3537],
                        longitudes: [-0.4614,-2.2750]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,1.3502],
                        longitudes: [-0.4614,103.9944]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,35.7647],
                        longitudes: [-0.4614,140.3864]
                    },
                    {
                        latitudes: [51.4775,37.4691],
                        longitudes: [-0.4614,126.4505]
                    },
                    {
                        latitudes: [51.4775,52.3086],
                        longitudes: [-0.4614,4.7639]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,44.8820],
                        longitudes: [-0.4614,-93.2218]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,51.2895],
                        longitudes: [-0.4614,6.7668]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,50.0264],
                        longitudes: [-0.4614,8.5431]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,48.3538],
                        longitudes: [-0.4614,11.7861]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,48.1103],
                        longitudes: [-0.4614,16.5697]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,32.8968],
                        longitudes: [-0.4614,-97.0380]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,2.7456],
                        longitudes: [-0.4614,101.7099]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,31.1434],
                        longitudes: [-0.4614,121.8052]
                    },
                    {
                        latitudes: [51.4775,35.7647],
                        longitudes: [-0.4614,140.3864]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,48.1103],
                        longitudes: [-0.4614,16.5697]
                    },
                    {
                        latitudes: [51.4775,37.4691],
                        longitudes: [-0.4614,126.4505]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,55.6179],
                        longitudes: [-0.4614,12.6560]
                    },
                    {
                        latitudes: [51.4775,50.9014],
                        longitudes: [-0.4614,4.4844]
                    },
                    {
                        latitudes: [51.4775,1.3502],
                        longitudes: [-0.4614,103.9944]
                    },
                    {
                        latitudes: [51.4775,13.6811],
                        longitudes: [-0.4614,100.7473]
                    },
                    {
                        latitudes: [51.4775,40.9769],
                        longitudes: [-0.4614,28.8146]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,29.9844],
                        longitudes: [-0.4614,-95.3414]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,41.9786],
                        longitudes: [-0.4614,-87.9048]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,43.6772],
                        longitudes: [-0.4614,-79.6306]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,35.2140],
                        longitudes: [-0.4614,-80.9431]
                    },
                    {
                        latitudes: [51.4775,19.0887],
                        longitudes: [-0.4614,72.8679]
                    },
                    {
                        latitudes: [51.4775,28.5665],
                        longitudes: [-0.4614,77.1031]
                    },
                    {
                        latitudes: [51.4775,25.2528],
                        longitudes: [-0.4614,55.3644]
                    },
                    {
                        latitudes: [51.4775,40.6925],
                        longitudes: [-0.4614,-74.1687]
                    },
                    {
                        latitudes: [51.4775,22.3089],
                        longitudes: [-0.4614,113.9146]
                    },
                    {
                        latitudes: [51.4775,40.6398],
                        longitudes: [-0.4614,-73.7789]
                    },
                    {
                        latitudes: [51.4775,33.9425],
                        longitudes: [-0.4614,-118.4081]
                    },
                    {
                        latitudes: [51.4775,53.3537],
                        longitudes: [-0.4614,-2.2750]
                    },
                    {
                        latitudes: [51.4775,25.7933],
                        longitudes: [-0.4614,-80.2906]
                    },
                    {
                        latitudes: [51.4775,44.8820],
                        longitudes: [-0.4614,-93.2218]
                    },
                    {
                        latitudes: [51.4775,35.7647],
                        longitudes: [-0.4614,140.3864]
                    },
                    {
                        latitudes: [51.4775,40.0801],
                        longitudes: [-0.4614,116.5846]
                    },
                    {
                        latitudes: [51.4775,31.1434],
                        longitudes: [-0.4614,121.8052]
                    },
                    {
                        latitudes: [51.4775,37.6190],
                        longitudes: [-0.4614,-122.3749]
                    },
                    {
                        latitudes: [51.4775,1.3502],
                        longitudes: [-0.4614,103.9944]
                    }],
                images: [{
			            label: "Flights from London",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Amsterdam = {
                    id: "Amsterdam" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Amsterdam",
                    latitude: 52.3086,
                    longitude: 4.7639,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 4.7639,
                    zoomLatitude: 52.3086,
                    lines: [
                    {
                        latitudes: [52.3086,51.4775],
                        longitudes: [4.7639,-0.4614]
                    },
                    {
                        latitudes: [52.3086,55.6179],
                        longitudes: [4.7639,12.6560]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,49.0128],
                        longitudes: [4.7639,2.5500]
                    },
                    {
                        latitudes: [52.3086,2.7456],
                        longitudes: [4.7639,101.7099]
                    },
                    {
                        latitudes: [52.3086,51.2895],
                        longitudes: [4.7639,6.7668]
                    },
                    {
                        latitudes: [52.3086,50.0264],
                        longitudes: [4.7639,8.5431]
                    },
                    {
                        latitudes: [52.3086,48.3538],
                        longitudes: [4.7639,11.7861]
                    },
                    {
                        latitudes: [52.3086,55.6179],
                        longitudes: [4.7639,12.6560]
                    },
                    {
                        latitudes: [52.3086,51.2895],
                        longitudes: [4.7639,6.7668]
                    },
                    {
                        latitudes: [52.3086,25.2528],
                        longitudes: [4.7639,55.3644]
                    },
                    {
                        latitudes: [52.3086,41.8045],
                        longitudes: [4.7639,12.2508]
                    },
                    {
                        latitudes: [52.3086,51.1481],
                        longitudes: [4.7639,-0.1903]
                    },
                    {
                        latitudes: [52.3086,51.4775],
                        longitudes: [4.7639,-0.4614]
                    },
                    {
                        latitudes: [52.3086,13.6811],
                        longitudes: [4.7639,100.7473]
                    },
                    {
                        latitudes: [52.3086,13.6811],
                        longitudes: [4.7639,100.7473]
                    },
                    {
                        latitudes: [52.3086,51.4775],
                        longitudes: [4.7639,-0.4614]
                    },
                    {
                        latitudes: [52.3086,22.3089],
                        longitudes: [4.7639,113.9146]
                    },
                    {
                        latitudes: [52.3086,23.3924],
                        longitudes: [4.7639,113.2988]
                    },
                    {
                        latitudes: [52.3086,30.5785],
                        longitudes: [4.7639,103.9471]
                    },
                    {
                        latitudes: [52.3086,40.0801],
                        longitudes: [4.7639,116.5846]
                    },
                    {
                        latitudes: [52.3086,31.1434],
                        longitudes: [4.7639,121.8052]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,19.0887],
                        longitudes: [4.7639,72.8679]
                    },
                    {
                        latitudes: [52.3086,40.6925],
                        longitudes: [4.7639,-74.1687]
                    },
                    {
                        latitudes: [52.3086,29.9844],
                        longitudes: [4.7639,-95.3414]
                    },
                    {
                        latitudes: [52.3086,40.6398],
                        longitudes: [4.7639,-73.7789]
                    },
                    {
                        latitudes: [52.3086,33.9425],
                        longitudes: [4.7639,-118.4081]
                    },
                    {
                        latitudes: [52.3086,44.8820],
                        longitudes: [4.7639,-93.2218]
                    },
                    {
                        latitudes: [52.3086,41.9786],
                        longitudes: [4.7639,-87.9048]
                    },
                    {
                        latitudes: [52.3086,37.6190],
                        longitudes: [4.7639,-122.3749]
                    },
                    {
                        latitudes: [52.3086,43.6772],
                        longitudes: [4.7639,-79.6306]
                    },
                    {
                        latitudes: [52.3086,55.6179],
                        longitudes: [4.7639,12.6560]
                    },
                    {
                        latitudes: [52.3086,25.2528],
                        longitudes: [4.7639,55.3644]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,59.8003],
                        longitudes: [4.7639,30.2625]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,41.2971],
                        longitudes: [4.7639,2.0785]
                    },
                    {
                        latitudes: [52.3086,25.2528],
                        longitudes: [4.7639,55.3644]
                    },
                    {
                        latitudes: [52.3086,41.2971],
                        longitudes: [4.7639,2.0785]
                    },
                    {
                        latitudes: [52.3086,37.4691],
                        longitudes: [4.7639,126.4505]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,41.2971],
                        longitudes: [4.7639,2.0785]
                    },
                    {
                        latitudes: [52.3086,13.6811],
                        longitudes: [4.7639,100.7473]
                    },
                    {
                        latitudes: [52.3086,19.0887],
                        longitudes: [4.7639,72.8679]
                    },
                    {
                        latitudes: [52.3086,50.9014],
                        longitudes: [4.7639,4.4844]
                    },
                    {
                        latitudes: [52.3086,23.3924],
                        longitudes: [4.7639,113.2988]
                    },
                    {
                        latitudes: [52.3086,49.0128],
                        longitudes: [4.7639,2.5500]
                    },
                    {
                        latitudes: [52.3086,55.6179],
                        longitudes: [4.7639,12.6560]
                    },
                    {
                        latitudes: [52.3086,30.5785],
                        longitudes: [4.7639,103.9471]
                    },
                    {
                        latitudes: [52.3086,28.5665],
                        longitudes: [4.7639,77.1031]
                    },
                    {
                        latitudes: [52.3086,51.2895],
                        longitudes: [4.7639,6.7668]
                    },
                    {
                        latitudes: [52.3086,25.2528],
                        longitudes: [4.7639,55.3644]
                    },
                    {
                        latitudes: [52.3086,40.6925],
                        longitudes: [4.7639,-74.1687]
                    },
                    {
                        latitudes: [52.3086,41.8045],
                        longitudes: [4.7639,12.2508]
                    },
                    {
                        latitudes: [52.3086,50.0264],
                        longitudes: [4.7639,8.5431]
                    },
                    {
                        latitudes: [52.3086,22.3089],
                        longitudes: [4.7639,113.9146]
                    },
                    {
                        latitudes: [52.3086,29.9844],
                        longitudes: [4.7639,-95.3414]
                    },
                    {
                        latitudes: [52.3086,37.4691],
                        longitudes: [4.7639,126.4505]
                    },
                    {
                        latitudes: [52.3086,40.9769],
                        longitudes: [4.7639,28.8146]
                    },
                    {
                        latitudes: [52.3086,40.6398],
                        longitudes: [4.7639,-73.7789]
                    },
                    {
                        latitudes: [52.3086,2.7456],
                        longitudes: [4.7639,101.7099]
                    },
                    {
                        latitudes: [52.3086,33.9425],
                        longitudes: [4.7639,-118.4081]
                    },
                    {
                        latitudes: [52.3086,59.8003],
                        longitudes: [4.7639,30.2625]
                    },
                    {
                        latitudes: [52.3086,51.4775],
                        longitudes: [4.7639,-0.4614]
                    },
                    {
                        latitudes: [52.3086,40.4936],
                        longitudes: [4.7639,-3.5668]
                    },
                    {
                        latitudes: [52.3086,53.3537],
                        longitudes: [4.7639,-2.2750]
                    },
                    {
                        latitudes: [52.3086,19.4363],
                        longitudes: [4.7639,-99.0721]
                    },
                    {
                        latitudes: [52.3086,44.8820],
                        longitudes: [4.7639,-93.2218]
                    },
                    {
                        latitudes: [52.3086,48.3538],
                        longitudes: [4.7639,11.7861]
                    },
                    {
                        latitudes: [52.3086,35.7647],
                        longitudes: [4.7639,140.3864]
                    },
                    {
                        latitudes: [52.3086,41.9786],
                        longitudes: [4.7639,-87.9048]
                    },
                    {
                        latitudes: [52.3086,40.0801],
                        longitudes: [4.7639,116.5846]
                    },
                    {
                        latitudes: [52.3086,31.1434],
                        longitudes: [4.7639,121.8052]
                    },
                    {
                        latitudes: [52.3086,37.6190],
                        longitudes: [4.7639,-122.3749]
                    },
                    {
                        latitudes: [52.3086,1.3502],
                        longitudes: [4.7639,103.9944]
                    },
                    {
                        latitudes: [52.3086,25.0777],
                        longitudes: [4.7639,121.2328]
                    },
                    {
                        latitudes: [52.3086,48.1103],
                        longitudes: [4.7639,16.5697]
                    },
                    {
                        latitudes: [52.3086,43.6772],
                        longitudes: [4.7639,-79.6306]
                    },
                    {
                        latitudes: [52.3086,50.9014],
                        longitudes: [4.7639,4.4844]
                    },
                    {
                        latitudes: [52.3086,40.6925],
                        longitudes: [4.7639,-74.1687]
                    },
                    {
                        latitudes: [52.3086,50.0264],
                        longitudes: [4.7639,8.5431]
                    },
                    {
                        latitudes: [52.3086,29.9844],
                        longitudes: [4.7639,-95.3414]
                    },
                    {
                        latitudes: [52.3086,48.3538],
                        longitudes: [4.7639,11.7861]
                    },
                    {
                        latitudes: [52.3086,41.9786],
                        longitudes: [4.7639,-87.9048]
                    },
                    {
                        latitudes: [52.3086,2.7456],
                        longitudes: [4.7639,101.7099]
                    },
                    {
                        latitudes: [52.3086,25.2528],
                        longitudes: [4.7639,55.3644]
                    },
                    {
                        latitudes: [52.3086,48.1103],
                        longitudes: [4.7639,16.5697]
                    },
                    {
                        latitudes: [52.3086,55.6179],
                        longitudes: [4.7639,12.6560]
                    },
                    {
                        latitudes: [52.3086,50.9014],
                        longitudes: [4.7639,4.4844]
                    },
                    {
                        latitudes: [52.3086,1.3502],
                        longitudes: [4.7639,103.9944]
                    },
                    {
                        latitudes: [52.3086,40.9769],
                        longitudes: [4.7639,28.8146]
                    },
                    {
                        latitudes: [52.3086,24.4330],
                        longitudes: [4.7639,54.6511]
                    },
                    {
                        latitudes: [52.3086,41.8045],
                        longitudes: [4.7639,12.2508]
                    },
                    {
                        latitudes: [52.3086,51.1481],
                        longitudes: [4.7639,-0.1903]
                    },
                    {
                        latitudes: [52.3086,53.3537],
                        longitudes: [4.7639,-2.2750]
                    },
                    {
                        latitudes: [52.3086,40.6925],
                        longitudes: [4.7639,-74.1687]
                    },
                    {
                        latitudes: [52.3086,29.9844],
                        longitudes: [4.7639,-95.3414]
                    },
                    {
                        latitudes: [52.3086,41.9786],
                        longitudes: [4.7639,-87.9048]
                    },
                    {
                        latitudes: [52.3086,41.9786],
                        longitudes: [4.7639,-87.9048]
                    },
                    {
                        latitudes: [52.3086,40.4936],
                        longitudes: [4.7639,-3.5668]
                    },
                    {
                        latitudes: [52.3086,41.2971],
                        longitudes: [4.7639,2.0785]
                    }],
                images: [{
			            label: "Flights from Amsterdam",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Copenhagen = {
                    id: "Copenhagen" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Copenhagen",
                    latitude: 55.6179,
                    longitude: 12.6560,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 12.6560,
                    zoomLatitude: 55.6179,
                    lines: [
                    {
                        latitudes: [55.6179,51.4775],
                        longitudes: [12.6560,-0.4614]
                    },
                    {
                        latitudes: [55.6179,51.2895],
                        longitudes: [12.6560,6.7668]
                    },
                    {
                        latitudes: [55.6179,48.1103],
                        longitudes: [12.6560,16.5697]
                    },
                    {
                        latitudes: [55.6179,52.3086],
                        longitudes: [12.6560,4.7639]
                    },
                    {
                        latitudes: [55.6179,43.6772],
                        longitudes: [12.6560,-79.6306]
                    },
                    {
                        latitudes: [55.6179,49.0128],
                        longitudes: [12.6560,2.5500]
                    },
                    {
                        latitudes: [55.6179,51.2895],
                        longitudes: [12.6560,6.7668]
                    },
                    {
                        latitudes: [55.6179,48.1103],
                        longitudes: [12.6560,16.5697]
                    },
                    {
                        latitudes: [55.6179,52.3086],
                        longitudes: [12.6560,4.7639]
                    },
                    {
                        latitudes: [55.6179,49.0128],
                        longitudes: [12.6560,2.5500]
                    },
                    {
                        latitudes: [55.6179,41.8045],
                        longitudes: [12.6560,12.2508]
                    },
                    {
                        latitudes: [55.6179,51.4775],
                        longitudes: [12.6560,-0.4614]
                    },
                    {
                        latitudes: [55.6179,50.0264],
                        longitudes: [12.6560,8.5431]
                    },
                    {
                        latitudes: [55.6179,40.0801],
                        longitudes: [12.6560,116.5846]
                    },
                    {
                        latitudes: [55.6179,52.3086],
                        longitudes: [12.6560,4.7639]
                    },
                    {
                        latitudes: [55.6179,41.2971],
                        longitudes: [12.6560,2.0785]
                    },
                    {
                        latitudes: [55.6179,25.2528],
                        longitudes: [12.6560,55.3644]
                    },
                    {
                        latitudes: [55.6179,41.8045],
                        longitudes: [12.6560,12.2508]
                    },
                    {
                        latitudes: [55.6179,51.1481],
                        longitudes: [12.6560,-0.1903]
                    },
                    {
                        latitudes: [55.6179,40.4936],
                        longitudes: [12.6560,-3.5668]
                    },
                    {
                        latitudes: [55.6179,25.2528],
                        longitudes: [12.6560,55.3644]
                    },
                    {
                        latitudes: [55.6179,59.8003],
                        longitudes: [12.6560,30.2625]
                    },
                    {
                        latitudes: [55.6179,48.1103],
                        longitudes: [12.6560,16.5697]
                    },
                    {
                        latitudes: [55.6179,50.9014],
                        longitudes: [12.6560,4.4844]
                    },
                    {
                        latitudes: [55.6179,41.2971],
                        longitudes: [12.6560,2.0785]
                    },
                    {
                        latitudes: [55.6179,40.4936],
                        longitudes: [12.6560,-3.5668]
                    },
                    {
                        latitudes: [55.6179,52.3086],
                        longitudes: [12.6560,4.7639]
                    },
                    {
                        latitudes: [55.6179,51.2895],
                        longitudes: [12.6560,6.7668]
                    },
                    {
                        latitudes: [55.6179,50.0264],
                        longitudes: [12.6560,8.5431]
                    },
                    {
                        latitudes: [55.6179,48.3538],
                        longitudes: [12.6560,11.7861]
                    },
                    {
                        latitudes: [55.6179,43.6772],
                        longitudes: [12.6560,-79.6306]
                    },
                    {
                        latitudes: [55.6179,48.1103],
                        longitudes: [12.6560,16.5697]
                    },
                    {
                        latitudes: [55.6179,25.2528],
                        longitudes: [12.6560,55.3644]
                    },
                    {
                        latitudes: [55.6179,52.3086],
                        longitudes: [12.6560,4.7639]
                    },
                    {
                        latitudes: [55.6179,50.9014],
                        longitudes: [12.6560,4.4844]
                    },
                    {
                        latitudes: [55.6179,49.0128],
                        longitudes: [12.6560,2.5500]
                    },
                    {
                        latitudes: [55.6179,51.2895],
                        longitudes: [12.6560,6.7668]
                    },
                    {
                        latitudes: [55.6179,40.6925],
                        longitudes: [12.6560,-74.1687]
                    },
                    {
                        latitudes: [55.6179,41.8045],
                        longitudes: [12.6560,12.2508]
                    },
                    {
                        latitudes: [55.6179,50.0264],
                        longitudes: [12.6560,8.5431]
                    },
                    {
                        latitudes: [55.6179,40.9769],
                        longitudes: [12.6560,28.8146]
                    },
                    {
                        latitudes: [55.6179,59.8003],
                        longitudes: [12.6560,30.2625]
                    },
                    {
                        latitudes: [55.6179,51.4775],
                        longitudes: [12.6560,-0.4614]
                    },
                    {
                        latitudes: [55.6179,40.4936],
                        longitudes: [12.6560,-3.5668]
                    },
                    {
                        latitudes: [55.6179,53.3537],
                        longitudes: [12.6560,-2.2750]
                    },
                    {
                        latitudes: [55.6179,48.3538],
                        longitudes: [12.6560,11.7861]
                    },
                    {
                        latitudes: [55.6179,35.7647],
                        longitudes: [12.6560,140.3864]
                    },
                    {
                        latitudes: [55.6179,41.9786],
                        longitudes: [12.6560,-87.9048]
                    },
                    {
                        latitudes: [55.6179,40.0801],
                        longitudes: [12.6560,116.5846]
                    },
                    {
                        latitudes: [55.6179,31.1434],
                        longitudes: [12.6560,121.8052]
                    },
                    {
                        latitudes: [55.6179,37.6190],
                        longitudes: [12.6560,-122.3749]
                    },
                    {
                        latitudes: [55.6179,1.3502],
                        longitudes: [12.6560,103.9944]
                    },
                    {
                        latitudes: [55.6179,48.1103],
                        longitudes: [12.6560,16.5697]
                    },
                    {
                        latitudes: [55.6179,43.6772],
                        longitudes: [12.6560,-79.6306]
                    },
                    {
                        latitudes: [55.6179,50.9014],
                        longitudes: [12.6560,4.4844]
                    },
                    {
                        latitudes: [55.6179,51.4775],
                        longitudes: [12.6560,-0.4614]
                    },
                    {
                        latitudes: [55.6179,1.3502],
                        longitudes: [12.6560,103.9944]
                    },
                    {
                        latitudes: [55.6179,50.9014],
                        longitudes: [12.6560,4.4844]
                    },
                    {
                        latitudes: [55.6179,13.6811],
                        longitudes: [12.6560,100.7473]
                    },
                    {
                        latitudes: [55.6179,53.3537],
                        longitudes: [12.6560,-2.2750]
                    },
                    {
                        latitudes: [55.6179,40.9769],
                        longitudes: [12.6560,28.8146]
                    },
                    {
                        latitudes: [55.6179,49.0128],
                        longitudes: [12.6560,2.5500]
                    },
                    {
                        latitudes: [55.6179,41.8045],
                        longitudes: [12.6560,12.2508]
                    },
                    {
                        latitudes: [55.6179,51.1481],
                        longitudes: [12.6560,-0.1903]
                    },
                    {
                        latitudes: [55.6179,53.3537],
                        longitudes: [12.6560,-2.2750]
                    },
                    {
                        latitudes: [55.6179,41.2971],
                        longitudes: [12.6560,2.0785]
                    }],
                images: [{
			            label: "Flights from Copenhagen",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Barcelona = {
                    id: "Barcelona" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Barcelona",
                    latitude: 41.2971,
                    longitude: 2.0785,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 2.0785,
                    zoomLatitude: 41.2971,
                    lines: [
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,51.4775],
                        longitudes: [2.0785,-0.4614]
                    },
                    {
                        latitudes: [41.2971,25.7933],
                        longitudes: [2.0785,-80.2906]
                    },
                    {
                        latitudes: [41.2971,51.2895],
                        longitudes: [2.0785,6.7668]
                    },
                    {
                        latitudes: [41.2971,48.1103],
                        longitudes: [2.0785,16.5697]
                    },
                    {
                        latitudes: [41.2971,49.0128],
                        longitudes: [2.0785,2.5500]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,25.7933],
                        longitudes: [2.0785,-80.2906]
                    },
                    {
                        latitudes: [41.2971,41.8045],
                        longitudes: [2.0785,12.2508]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,51.4775],
                        longitudes: [2.0785,-0.4614]
                    },
                    {
                        latitudes: [41.2971,25.7933],
                        longitudes: [2.0785,-80.2906]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,55.6179],
                        longitudes: [2.0785,12.6560]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,25.2528],
                        longitudes: [2.0785,55.3644]
                    },
                    {
                        latitudes: [41.2971,48.1103],
                        longitudes: [2.0785,16.5697]
                    },
                    {
                        latitudes: [41.2971,50.9014],
                        longitudes: [2.0785,4.4844]
                    },
                    {
                        latitudes: [41.2971,52.3086],
                        longitudes: [2.0785,4.7639]
                    },
                    {
                        latitudes: [41.2971,52.3086],
                        longitudes: [2.0785,4.7639]
                    },
                    {
                        latitudes: [41.2971,50.9014],
                        longitudes: [2.0785,4.4844]
                    },
                    {
                        latitudes: [41.2971,55.6179],
                        longitudes: [2.0785,12.6560]
                    },
                    {
                        latitudes: [41.2971,55.4086],
                        longitudes: [2.0785,37.9061]
                    },
                    {
                        latitudes: [41.2971,51.2895],
                        longitudes: [2.0785,6.7668]
                    },
                    {
                        latitudes: [41.2971,41.8045],
                        longitudes: [2.0785,12.2508]
                    },
                    {
                        latitudes: [41.2971,50.0264],
                        longitudes: [2.0785,8.5431]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,59.8003],
                        longitudes: [2.0785,30.2625]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,51.4775],
                        longitudes: [2.0785,-0.4614]
                    },
                    {
                        latitudes: [41.2971,40.4936],
                        longitudes: [2.0785,-3.5668]
                    },
                    {
                        latitudes: [41.2971,25.7933],
                        longitudes: [2.0785,-80.2906]
                    },
                    {
                        latitudes: [41.2971,48.3538],
                        longitudes: [2.0785,11.7861]
                    },
                    {
                        latitudes: [41.2971,48.1103],
                        longitudes: [2.0785,16.5697]
                    },
                    {
                        latitudes: [41.2971,52.3086],
                        longitudes: [2.0785,4.7639]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,40.4936],
                        longitudes: [2.0785,-3.5668]
                    },
                    {
                        latitudes: [41.2971,51.2895],
                        longitudes: [2.0785,6.7668]
                    },
                    {
                        latitudes: [41.2971,40.6925],
                        longitudes: [2.0785,-74.1687]
                    },
                    {
                        latitudes: [41.2971,50.0264],
                        longitudes: [2.0785,8.5431]
                    },
                    {
                        latitudes: [41.2971,48.3538],
                        longitudes: [2.0785,11.7861]
                    },
                    {
                        latitudes: [41.2971,53.3537],
                        longitudes: [2.0785,-2.2750]
                    },
                    {
                        latitudes: [41.2971,49.0128],
                        longitudes: [2.0785,2.5500]
                    },
                    {
                        latitudes: [41.2971,41.8045],
                        longitudes: [2.0785,12.2508]
                    },
                    {
                        latitudes: [41.2971,48.1103],
                        longitudes: [2.0785,16.5697]
                    },
                    {
                        latitudes: [41.2971,40.6398],
                        longitudes: [2.0785,-73.7789]
                    },
                    {
                        latitudes: [41.2971,50.9014],
                        longitudes: [2.0785,4.4844]
                    },
                    {
                        latitudes: [41.2971,1.3502],
                        longitudes: [2.0785,103.9944]
                    },
                    {
                        latitudes: [41.2971,40.9769],
                        longitudes: [2.0785,28.8146]
                    },
                    {
                        latitudes: [41.2971,49.0128],
                        longitudes: [2.0785,2.5500]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,40.6925],
                        longitudes: [2.0785,-74.1687]
                    },
                    {
                        latitudes: [41.2971,55.4086],
                        longitudes: [2.0785,37.9061]
                    },
                    {
                        latitudes: [41.2971,49.0128],
                        longitudes: [2.0785,2.5500]
                    },
                    {
                        latitudes: [41.2971,40.4936],
                        longitudes: [2.0785,-3.5668]
                    },
                    {
                        latitudes: [41.2971,52.3086],
                        longitudes: [2.0785,4.7639]
                    },
                    {
                        latitudes: [41.2971,50.9014],
                        longitudes: [2.0785,4.4844]
                    },
                    {
                        latitudes: [41.2971,55.6179],
                        longitudes: [2.0785,12.6560]
                    },
                    {
                        latitudes: [41.2971,55.4086],
                        longitudes: [2.0785,37.9061]
                    },
                    {
                        latitudes: [41.2971,51.2895],
                        longitudes: [2.0785,6.7668]
                    },
                    {
                        latitudes: [41.2971,41.8045],
                        longitudes: [2.0785,12.2508]
                    },
                    {
                        latitudes: [41.2971,50.0264],
                        longitudes: [2.0785,8.5431]
                    },
                    {
                        latitudes: [41.2971,59.8003],
                        longitudes: [2.0785,30.2625]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,40.4936],
                        longitudes: [2.0785,-3.5668]
                    },
                    {
                        latitudes: [41.2971,48.3538],
                        longitudes: [2.0785,11.7861]
                    },
                    {
                        latitudes: [41.2971,48.1103],
                        longitudes: [2.0785,16.5697]
                    },
                    {
                        latitudes: [41.2971,51.1481],
                        longitudes: [2.0785,-0.1903]
                    },
                    {
                        latitudes: [41.2971,53.3537],
                        longitudes: [2.0785,-2.2750]
                    }],
                images: [{
			            label: "Flights from Barcelona",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Madrid = {
                    id: "Madrid" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Madrid",
                    latitude: 40.4936,
                    longitude: -3.5668,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -3.5668,
                    zoomLatitude: 40.4936,
                    lines: [
                    {
                        latitudes: [40.4936,32.8968],
                        longitudes: [-3.5668,-97.0380]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,25.7933],
                        longitudes: [-3.5668,-80.2906]
                    },
                    {
                        latitudes: [40.4936,41.9786],
                        longitudes: [-3.5668,-87.9048]
                    },
                    {
                        latitudes: [40.4936,51.2895],
                        longitudes: [-3.5668,6.7668]
                    },
                    {
                        latitudes: [40.4936,50.0264],
                        longitudes: [-3.5668,8.5431]
                    },
                    {
                        latitudes: [40.4936,48.3538],
                        longitudes: [-3.5668,11.7861]
                    },
                    {
                        latitudes: [40.4936,48.1103],
                        longitudes: [-3.5668,16.5697]
                    },
                    {
                        latitudes: [40.4936,49.0128],
                        longitudes: [-3.5668,2.5500]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,19.4363],
                        longitudes: [-3.5668,-99.0721]
                    },
                    {
                        latitudes: [40.4936,49.0128],
                        longitudes: [-3.5668,2.5500]
                    },
                    {
                        latitudes: [40.4936,32.8968],
                        longitudes: [-3.5668,-97.0380]
                    },
                    {
                        latitudes: [40.4936,50.0264],
                        longitudes: [-3.5668,8.5431]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,25.7933],
                        longitudes: [-3.5668,-80.2906]
                    },
                    {
                        latitudes: [40.4936,41.9786],
                        longitudes: [-3.5668,-87.9048]
                    },
                    {
                        latitudes: [40.4936,41.8045],
                        longitudes: [-3.5668,12.2508]
                    },
                    {
                        latitudes: [40.4936,19.4363],
                        longitudes: [-3.5668,-99.0721]
                    },
                    {
                        latitudes: [40.4936,32.8968],
                        longitudes: [-3.5668,-97.0380]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,51.4775],
                        longitudes: [-3.5668,-0.4614]
                    },
                    {
                        latitudes: [40.4936,25.7933],
                        longitudes: [-3.5668,-80.2906]
                    },
                    {
                        latitudes: [40.4936,41.9786],
                        longitudes: [-3.5668,-87.9048]
                    },
                    {
                        latitudes: [40.4936,40.0801],
                        longitudes: [-3.5668,116.5846]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,55.6179],
                        longitudes: [-3.5668,12.6560]
                    },
                    {
                        latitudes: [40.4936,25.2528],
                        longitudes: [-3.5668,55.3644]
                    },
                    {
                        latitudes: [40.4936,41.2971],
                        longitudes: [-3.5668,2.0785]
                    },
                    {
                        latitudes: [40.4936,53.3537],
                        longitudes: [-3.5668,-2.2750]
                    },
                    {
                        latitudes: [40.4936,50.9014],
                        longitudes: [-3.5668,4.4844]
                    },
                    {
                        latitudes: [40.4936,41.2971],
                        longitudes: [-3.5668,2.0785]
                    },
                    {
                        latitudes: [40.4936,50.9014],
                        longitudes: [-3.5668,4.4844]
                    },
                    {
                        latitudes: [40.4936,55.6179],
                        longitudes: [-3.5668,12.6560]
                    },
                    {
                        latitudes: [40.4936,32.8968],
                        longitudes: [-3.5668,-97.0380]
                    },
                    {
                        latitudes: [40.4936,55.4086],
                        longitudes: [-3.5668,37.9061]
                    },
                    {
                        latitudes: [40.4936,51.2895],
                        longitudes: [-3.5668,6.7668]
                    },
                    {
                        latitudes: [40.4936,41.8045],
                        longitudes: [-3.5668,12.2508]
                    },
                    {
                        latitudes: [40.4936,50.0264],
                        longitudes: [-3.5668,8.5431]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,51.4775],
                        longitudes: [-3.5668,-0.4614]
                    },
                    {
                        latitudes: [40.4936,19.4363],
                        longitudes: [-3.5668,-99.0721]
                    },
                    {
                        latitudes: [40.4936,25.7933],
                        longitudes: [-3.5668,-80.2906]
                    },
                    {
                        latitudes: [40.4936,48.3538],
                        longitudes: [-3.5668,11.7861]
                    },
                    {
                        latitudes: [40.4936,41.9786],
                        longitudes: [-3.5668,-87.9048]
                    },
                    {
                        latitudes: [40.4936,48.1103],
                        longitudes: [-3.5668,16.5697]
                    },
                    {
                        latitudes: [40.4936,40.0801],
                        longitudes: [-3.5668,116.5846]
                    },
                    {
                        latitudes: [40.4936,37.4691],
                        longitudes: [-3.5668,126.4505]
                    },
                    {
                        latitudes: [40.4936,52.3086],
                        longitudes: [-3.5668,4.7639]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,50.0264],
                        longitudes: [-3.5668,8.5431]
                    },
                    {
                        latitudes: [40.4936,51.2895],
                        longitudes: [-3.5668,6.7668]
                    },
                    {
                        latitudes: [40.4936,40.6925],
                        longitudes: [-3.5668,-74.1687]
                    },
                    {
                        latitudes: [40.4936,50.0264],
                        longitudes: [-3.5668,8.5431]
                    },
                    {
                        latitudes: [40.4936,48.3538],
                        longitudes: [-3.5668,11.7861]
                    },
                    {
                        latitudes: [40.4936,49.0128],
                        longitudes: [-3.5668,2.5500]
                    },
                    {
                        latitudes: [40.4936,41.8045],
                        longitudes: [-3.5668,12.2508]
                    },
                    {
                        latitudes: [40.4936,55.4086],
                        longitudes: [-3.5668,37.9061]
                    },
                    {
                        latitudes: [40.4936,55.6179],
                        longitudes: [-3.5668,12.6560]
                    },
                    {
                        latitudes: [40.4936,50.9014],
                        longitudes: [-3.5668,4.4844]
                    },
                    {
                        latitudes: [40.4936,13.6811],
                        longitudes: [-3.5668,100.7473]
                    },
                    {
                        latitudes: [40.4936,40.9769],
                        longitudes: [-3.5668,28.8146]
                    },
                    {
                        latitudes: [40.4936,49.0128],
                        longitudes: [-3.5668,2.5500]
                    },
                    {
                        latitudes: [40.4936,51.1481],
                        longitudes: [-3.5668,-0.1903]
                    },
                    {
                        latitudes: [40.4936,40.6925],
                        longitudes: [-3.5668,-74.1687]
                    },
                    {
                        latitudes: [40.4936,52.3086],
                        longitudes: [-3.5668,4.7639]
                    },
                    {
                        latitudes: [40.4936,41.2971],
                        longitudes: [-3.5668,2.0785]
                    },
                    {
                        latitudes: [40.4936,50.9014],
                        longitudes: [-3.5668,4.4844]
                    },
                    {
                        latitudes: [40.4936,41.8045],
                        longitudes: [-3.5668,12.2508]
                    },
                    {
                        latitudes: [40.4936,40.6398],
                        longitudes: [-3.5668,-73.7789]
                    },
                    {
                        latitudes: [40.4936,51.1481],
                        longitudes: [-3.5668,-0.1903]
                    },
                    {
                        latitudes: [40.4936,19.4363],
                        longitudes: [-3.5668,-99.0721]
                    },
                    {
                        latitudes: [40.4936,41.2971],
                        longitudes: [-3.5668,2.0785]
                    },
                    {
                        latitudes: [40.4936,49.0128],
                        longitudes: [-3.5668,2.5500]
                    }],
                images: [{
			            label: "Flights from Madrid",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Paris = {
                    id: "Paris" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Paris",
                    latitude: 49.0128,
                    longitude: 2.5500,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 2.5500,
                    zoomLatitude: 49.0128,
                    lines: [
                    {
                        latitudes: [49.0128,32.8968],
                        longitudes: [2.5500,-97.0380]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,2.7456],
                        longitudes: [2.5500,101.7099]
                    },
                    {
                        latitudes: [49.0128,51.4775],
                        longitudes: [2.5500,-0.4614]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,48.1103],
                        longitudes: [2.5500,16.5697]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,52.3086],
                        longitudes: [2.5500,4.7639]
                    },
                    {
                        latitudes: [49.0128,24.4330],
                        longitudes: [2.5500,54.6511]
                    },
                    {
                        latitudes: [49.0128,41.2971],
                        longitudes: [2.5500,2.0785]
                    },
                    {
                        latitudes: [49.0128,13.6811],
                        longitudes: [2.5500,100.7473]
                    },
                    {
                        latitudes: [49.0128,19.0887],
                        longitudes: [2.5500,72.8679]
                    },
                    {
                        latitudes: [49.0128,23.3924],
                        longitudes: [2.5500,113.2988]
                    },
                    {
                        latitudes: [49.0128,55.6179],
                        longitudes: [2.5500,12.6560]
                    },
                    {
                        latitudes: [49.0128,28.5665],
                        longitudes: [2.5500,77.1031]
                    },
                    {
                        latitudes: [49.0128,51.2895],
                        longitudes: [2.5500,6.7668]
                    },
                    {
                        latitudes: [49.0128,25.2528],
                        longitudes: [2.5500,55.3644]
                    },
                    {
                        latitudes: [49.0128,40.6925],
                        longitudes: [2.5500,-74.1687]
                    },
                    {
                        latitudes: [49.0128,41.8045],
                        longitudes: [2.5500,12.2508]
                    },
                    {
                        latitudes: [49.0128,50.0264],
                        longitudes: [2.5500,8.5431]
                    },
                    {
                        latitudes: [49.0128,22.3089],
                        longitudes: [2.5500,113.9146]
                    },
                    {
                        latitudes: [49.0128,29.9844],
                        longitudes: [2.5500,-95.3414]
                    },
                    {
                        latitudes: [49.0128,37.4691],
                        longitudes: [2.5500,126.4505]
                    },
                    {
                        latitudes: [49.0128,40.9769],
                        longitudes: [2.5500,28.8146]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,2.7456],
                        longitudes: [2.5500,101.7099]
                    },
                    {
                        latitudes: [49.0128,33.9425],
                        longitudes: [2.5500,-118.4081]
                    },
                    {
                        latitudes: [49.0128,59.8003],
                        longitudes: [2.5500,30.2625]
                    },
                    {
                        latitudes: [49.0128,51.4775],
                        longitudes: [2.5500,-0.4614]
                    },
                    {
                        latitudes: [49.0128,40.4936],
                        longitudes: [2.5500,-3.5668]
                    },
                    {
                        latitudes: [49.0128,53.3537],
                        longitudes: [2.5500,-2.2750]
                    },
                    {
                        latitudes: [49.0128,19.4363],
                        longitudes: [2.5500,-99.0721]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,44.8820],
                        longitudes: [2.5500,-93.2218]
                    },
                    {
                        latitudes: [49.0128,48.3538],
                        longitudes: [2.5500,11.7861]
                    },
                    {
                        latitudes: [49.0128,35.7647],
                        longitudes: [2.5500,140.3864]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,40.0801],
                        longitudes: [2.5500,116.5846]
                    },
                    {
                        latitudes: [49.0128,31.1434],
                        longitudes: [2.5500,121.8052]
                    },
                    {
                        latitudes: [49.0128,37.6190],
                        longitudes: [2.5500,-122.3749]
                    },
                    {
                        latitudes: [49.0128,1.3502],
                        longitudes: [2.5500,103.9944]
                    },
                    {
                        latitudes: [49.0128,48.1103],
                        longitudes: [2.5500,16.5697]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,28.5665],
                        longitudes: [2.5500,77.1031]
                    },
                    {
                        latitudes: [49.0128,19.4363],
                        longitudes: [2.5500,-99.0721]
                    },
                    {
                        latitudes: [49.0128,40.4936],
                        longitudes: [2.5500,-3.5668]
                    },
                    {
                        latitudes: [49.0128,32.8968],
                        longitudes: [2.5500,-97.0380]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,13.6811],
                        longitudes: [2.5500,100.7473]
                    },
                    {
                        latitudes: [49.0128,55.6179],
                        longitudes: [2.5500,12.6560]
                    },
                    {
                        latitudes: [49.0128,51.2895],
                        longitudes: [2.5500,6.7668]
                    },
                    {
                        latitudes: [49.0128,25.2528],
                        longitudes: [2.5500,55.3644]
                    },
                    {
                        latitudes: [49.0128,41.8045],
                        longitudes: [2.5500,12.2508]
                    },
                    {
                        latitudes: [49.0128,22.3089],
                        longitudes: [2.5500,113.9146]
                    },
                    {
                        latitudes: [49.0128,29.9844],
                        longitudes: [2.5500,-95.3414]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,33.9425],
                        longitudes: [2.5500,-118.4081]
                    },
                    {
                        latitudes: [49.0128,53.3537],
                        longitudes: [2.5500,-2.2750]
                    },
                    {
                        latitudes: [49.0128,19.4363],
                        longitudes: [2.5500,-99.0721]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,37.6190],
                        longitudes: [2.5500,-122.3749]
                    },
                    {
                        latitudes: [49.0128,1.3502],
                        longitudes: [2.5500,103.9944]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,32.8968],
                        longitudes: [2.5500,-97.0380]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,51.4775],
                        longitudes: [2.5500,-0.4614]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,53.3537],
                        longitudes: [2.5500,-2.2750]
                    },
                    {
                        latitudes: [49.0128,25.0777],
                        longitudes: [2.5500,121.2328]
                    },
                    {
                        latitudes: [49.0128,40.0801],
                        longitudes: [2.5500,116.5846]
                    },
                    {
                        latitudes: [49.0128,31.1434],
                        longitudes: [2.5500,121.8052]
                    },
                    {
                        latitudes: [49.0128,22.3089],
                        longitudes: [2.5500,113.9146]
                    },
                    {
                        latitudes: [49.0128,23.3924],
                        longitudes: [2.5500,113.2988]
                    },
                    {
                        latitudes: [49.0128,40.6925],
                        longitudes: [2.5500,-74.1687]
                    },
                    {
                        latitudes: [49.0128,29.9844],
                        longitudes: [2.5500,-95.3414]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,33.9425],
                        longitudes: [2.5500,-118.4081]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,44.8820],
                        longitudes: [2.5500,-93.2218]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,37.6190],
                        longitudes: [2.5500,-122.3749]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,25.2528],
                        longitudes: [2.5500,55.3644]
                    },
                    {
                        latitudes: [49.0128,50.9014],
                        longitudes: [2.5500,4.4844]
                    },
                    {
                        latitudes: [49.0128,24.4330],
                        longitudes: [2.5500,54.6511]
                    },
                    {
                        latitudes: [49.0128,59.8003],
                        longitudes: [2.5500,30.2625]
                    },
                    {
                        latitudes: [49.0128,48.1103],
                        longitudes: [2.5500,16.5697]
                    },
                    {
                        latitudes: [49.0128,32.8968],
                        longitudes: [2.5500,-97.0380]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,40.0801],
                        longitudes: [2.5500,116.5846]
                    },
                    {
                        latitudes: [49.0128,35.7647],
                        longitudes: [2.5500,140.3864]
                    },
                    {
                        latitudes: [49.0128,37.4691],
                        longitudes: [2.5500,126.4505]
                    },
                    {
                        latitudes: [49.0128,52.3086],
                        longitudes: [2.5500,4.7639]
                    },
                    {
                        latitudes: [49.0128,41.8045],
                        longitudes: [2.5500,12.2508]
                    },
                    {
                        latitudes: [49.0128,51.2895],
                        longitudes: [2.5500,6.7668]
                    },
                    {
                        latitudes: [49.0128,40.6925],
                        longitudes: [2.5500,-74.1687]
                    },
                    {
                        latitudes: [49.0128,50.0264],
                        longitudes: [2.5500,8.5431]
                    },
                    {
                        latitudes: [49.0128,48.3538],
                        longitudes: [2.5500,11.7861]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,53.3537],
                        longitudes: [2.5500,-2.2750]
                    },
                    {
                        latitudes: [49.0128,32.8968],
                        longitudes: [2.5500,-97.0380]
                    },
                    {
                        latitudes: [49.0128,2.7456],
                        longitudes: [2.5500,101.7099]
                    },
                    {
                        latitudes: [49.0128,25.7933],
                        longitudes: [2.5500,-80.2906]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,41.2971],
                        longitudes: [2.5500,2.0785]
                    },
                    {
                        latitudes: [49.0128,40.4936],
                        longitudes: [2.5500,-3.5668]
                    },
                    {
                        latitudes: [49.0128,40.0801],
                        longitudes: [2.5500,116.5846]
                    },
                    {
                        latitudes: [49.0128,31.1434],
                        longitudes: [2.5500,121.8052]
                    },
                    {
                        latitudes: [49.0128,35.7647],
                        longitudes: [2.5500,140.3864]
                    },
                    {
                        latitudes: [49.0128,48.1103],
                        longitudes: [2.5500,16.5697]
                    },
                    {
                        latitudes: [49.0128,37.4691],
                        longitudes: [2.5500,126.4505]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,40.6398],
                        longitudes: [2.5500,-73.7789]
                    },
                    {
                        latitudes: [49.0128,55.6179],
                        longitudes: [2.5500,12.6560]
                    },
                    {
                        latitudes: [49.0128,50.9014],
                        longitudes: [2.5500,4.4844]
                    },
                    {
                        latitudes: [49.0128,1.3502],
                        longitudes: [2.5500,103.9944]
                    },
                    {
                        latitudes: [49.0128,59.8003],
                        longitudes: [2.5500,30.2625]
                    },
                    {
                        latitudes: [49.0128,13.6811],
                        longitudes: [2.5500,100.7473]
                    },
                    {
                        latitudes: [49.0128,40.9769],
                        longitudes: [2.5500,28.8146]
                    },
                    {
                        latitudes: [49.0128,33.9425],
                        longitudes: [2.5500,-118.4081]
                    },
                    {
                        latitudes: [49.0128,41.2971],
                        longitudes: [2.5500,2.0785]
                    },
                    {
                        latitudes: [49.0128,55.6179],
                        longitudes: [2.5500,12.6560]
                    },
                    {
                        latitudes: [49.0128,40.4936],
                        longitudes: [2.5500,-3.5668]
                    },
                    {
                        latitudes: [49.0128,40.6925],
                        longitudes: [2.5500,-74.1687]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,37.6190],
                        longitudes: [2.5500,-122.3749]
                    },
                    {
                        latitudes: [49.0128,43.6772],
                        longitudes: [2.5500,-79.6306]
                    },
                    {
                        latitudes: [49.0128,41.9786],
                        longitudes: [2.5500,-87.9048]
                    },
                    {
                        latitudes: [49.0128,41.2971],
                        longitudes: [2.5500,2.0785]
                    },
                    {
                        latitudes: [49.0128,52.3086],
                        longitudes: [2.5500,4.7639]
                    },
                    {
                        latitudes: [49.0128,40.4936],
                        longitudes: [2.5500,-3.5668]
                    }],
                images: [{
			            label: "Flights from Paris",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Rome = {
                    id: "Rome" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Rome",
                    latitude: 41.8045,
                    longitude: 12.2508,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 12.2508,
                    zoomLatitude: 41.8045,
                    lines: [
                    {
                        latitudes: [41.8045,51.4775],
                        longitudes: [12.2508,-0.4614]
                    },
                    {
                        latitudes: [41.8045,51.2895],
                        longitudes: [12.2508,6.7668]
                    },
                    {
                        latitudes: [41.8045,48.1103],
                        longitudes: [12.2508,16.5697]
                    },
                    {
                        latitudes: [41.8045,49.0128],
                        longitudes: [12.2508,2.5500]
                    },
                    {
                        latitudes: [41.8045,52.3086],
                        longitudes: [12.2508,4.7639]
                    },
                    {
                        latitudes: [41.8045,24.4330],
                        longitudes: [12.2508,54.6511]
                    },
                    {
                        latitudes: [41.8045,41.2971],
                        longitudes: [12.2508,2.0785]
                    },
                    {
                        latitudes: [41.8045,50.9014],
                        longitudes: [12.2508,4.4844]
                    },
                    {
                        latitudes: [41.8045,49.0128],
                        longitudes: [12.2508,2.5500]
                    },
                    {
                        latitudes: [41.8045,55.6179],
                        longitudes: [12.2508,12.6560]
                    },
                    {
                        latitudes: [41.8045,28.5665],
                        longitudes: [12.2508,77.1031]
                    },
                    {
                        latitudes: [41.8045,50.0264],
                        longitudes: [12.2508,8.5431]
                    },
                    {
                        latitudes: [41.8045,37.4691],
                        longitudes: [12.2508,126.4505]
                    },
                    {
                        latitudes: [41.8045,40.9769],
                        longitudes: [12.2508,28.8146]
                    },
                    {
                        latitudes: [41.8045,40.6398],
                        longitudes: [12.2508,-73.7789]
                    },
                    {
                        latitudes: [41.8045,59.8003],
                        longitudes: [12.2508,30.2625]
                    },
                    {
                        latitudes: [41.8045,51.4775],
                        longitudes: [12.2508,-0.4614]
                    },
                    {
                        latitudes: [41.8045,40.4936],
                        longitudes: [12.2508,-3.5668]
                    },
                    {
                        latitudes: [41.8045,25.7933],
                        longitudes: [12.2508,-80.2906]
                    },
                    {
                        latitudes: [41.8045,48.3538],
                        longitudes: [12.2508,11.7861]
                    },
                    {
                        latitudes: [41.8045,35.7647],
                        longitudes: [12.2508,140.3864]
                    },
                    {
                        latitudes: [41.8045,31.1434],
                        longitudes: [12.2508,121.8052]
                    },
                    {
                        latitudes: [41.8045,48.1103],
                        longitudes: [12.2508,16.5697]
                    },
                    {
                        latitudes: [41.8045,43.6772],
                        longitudes: [12.2508,-79.6306]
                    },
                    {
                        latitudes: [41.8045,51.1481],
                        longitudes: [12.2508,-0.1903]
                    },
                    {
                        latitudes: [41.8045,51.4775],
                        longitudes: [12.2508,-0.4614]
                    },
                    {
                        latitudes: [41.8045,24.4330],
                        longitudes: [12.2508,54.6511]
                    },
                    {
                        latitudes: [41.8045,55.4086],
                        longitudes: [12.2508,37.9061]
                    },
                    {
                        latitudes: [41.8045,40.0801],
                        longitudes: [12.2508,116.5846]
                    },
                    {
                        latitudes: [41.8045,28.5665],
                        longitudes: [12.2508,77.1031]
                    },
                    {
                        latitudes: [41.8045,22.3089],
                        longitudes: [12.2508,113.9146]
                    },
                    {
                        latitudes: [41.8045,40.6398],
                        longitudes: [12.2508,-73.7789]
                    },
                    {
                        latitudes: [41.8045,25.7933],
                        longitudes: [12.2508,-80.2906]
                    },
                    {
                        latitudes: [41.8045,43.6772],
                        longitudes: [12.2508,-79.6306]
                    },
                    {
                        latitudes: [41.8045,55.6179],
                        longitudes: [12.2508,12.6560]
                    },
                    {
                        latitudes: [41.8045,51.1481],
                        longitudes: [12.2508,-0.1903]
                    },
                    {
                        latitudes: [41.8045,25.2528],
                        longitudes: [12.2508,55.3644]
                    },
                    {
                        latitudes: [41.8045,51.4775],
                        longitudes: [12.2508,-0.4614]
                    },
                    {
                        latitudes: [41.8045,24.4330],
                        longitudes: [12.2508,54.6511]
                    },
                    {
                        latitudes: [41.8045,59.8003],
                        longitudes: [12.2508,30.2625]
                    },
                    {
                        latitudes: [41.8045,48.1103],
                        longitudes: [12.2508,16.5697]
                    },
                    {
                        latitudes: [41.8045,50.9014],
                        longitudes: [12.2508,4.4844]
                    },
                    {
                        latitudes: [41.8045,41.2971],
                        longitudes: [12.2508,2.0785]
                    },
                    {
                        latitudes: [41.8045,40.4936],
                        longitudes: [12.2508,-3.5668]
                    },
                    {
                        latitudes: [41.8045,51.2895],
                        longitudes: [12.2508,6.7668]
                    },
                    {
                        latitudes: [41.8045,48.1103],
                        longitudes: [12.2508,16.5697]
                    },
                    {
                        latitudes: [41.8045,37.4691],
                        longitudes: [12.2508,126.4505]
                    },
                    {
                        latitudes: [41.8045,52.3086],
                        longitudes: [12.2508,4.7639]
                    },
                    {
                        latitudes: [41.8045,49.0128],
                        longitudes: [12.2508,2.5500]
                    },
                    {
                        latitudes: [41.8045,51.2895],
                        longitudes: [12.2508,6.7668]
                    },
                    {
                        latitudes: [41.8045,40.6925],
                        longitudes: [12.2508,-74.1687]
                    },
                    {
                        latitudes: [41.8045,50.0264],
                        longitudes: [12.2508,8.5431]
                    },
                    {
                        latitudes: [41.8045,48.3538],
                        longitudes: [12.2508,11.7861]
                    },
                    {
                        latitudes: [41.8045,53.3537],
                        longitudes: [12.2508,-2.2750]
                    },
                    {
                        latitudes: [41.8045,41.2971],
                        longitudes: [12.2508,2.0785]
                    },
                    {
                        latitudes: [41.8045,40.4936],
                        longitudes: [12.2508,-3.5668]
                    },
                    {
                        latitudes: [41.8045,31.1434],
                        longitudes: [12.2508,121.8052]
                    },
                    {
                        latitudes: [41.8045,48.1103],
                        longitudes: [12.2508,16.5697]
                    },
                    {
                        latitudes: [41.8045,55.6179],
                        longitudes: [12.2508,12.6560]
                    },
                    {
                        latitudes: [41.8045,50.9014],
                        longitudes: [12.2508,4.4844]
                    },
                    {
                        latitudes: [41.8045,1.3502],
                        longitudes: [12.2508,103.9944]
                    },
                    {
                        latitudes: [41.8045,59.8003],
                        longitudes: [12.2508,30.2625]
                    },
                    {
                        latitudes: [41.8045,13.6811],
                        longitudes: [12.2508,100.7473]
                    },
                    {
                        latitudes: [41.8045,40.9769],
                        longitudes: [12.2508,28.8146]
                    },
                    {
                        latitudes: [41.8045,52.3086],
                        longitudes: [12.2508,4.7639]
                    },
                    {
                        latitudes: [41.8045,55.6179],
                        longitudes: [12.2508,12.6560]
                    },
                    {
                        latitudes: [41.8045,51.1481],
                        longitudes: [12.2508,-0.1903]
                    },
                    {
                        latitudes: [41.8045,40.6925],
                        longitudes: [12.2508,-74.1687]
                    },
                    {
                        latitudes: [41.8045,55.4086],
                        longitudes: [12.2508,37.9061]
                    },
                    {
                        latitudes: [41.8045,59.8003],
                        longitudes: [12.2508,30.2625]
                    },
                    {
                        latitudes: [41.8045,40.4936],
                        longitudes: [12.2508,-3.5668]
                    },
                    {
                        latitudes: [41.8045,41.2971],
                        longitudes: [12.2508,2.0785]
                    }],
                images: [{
			            label: "Flights from Rome",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Vienna = {
                    id: "Vienna" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Vienna",
                    latitude: 48.1103,
                    longitude: 16.5697,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 16.5697,
                    zoomLatitude: 48.1103,
                    lines: [
                    {
                        latitudes: [48.1103,51.4775],
                        longitudes: [16.5697,-0.4614]
                    },
                    {
                        latitudes: [48.1103,41.2971],
                        longitudes: [16.5697,2.0785]
                    },
                    {
                        latitudes: [48.1103,49.0128],
                        longitudes: [16.5697,2.5500]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,51.2895],
                        longitudes: [16.5697,6.7668]
                    },
                    {
                        latitudes: [48.1103,41.8045],
                        longitudes: [16.5697,12.2508]
                    },
                    {
                        latitudes: [48.1103,50.0264],
                        longitudes: [16.5697,8.5431]
                    },
                    {
                        latitudes: [48.1103,51.4775],
                        longitudes: [16.5697,-0.4614]
                    },
                    {
                        latitudes: [48.1103,40.4936],
                        longitudes: [16.5697,-3.5668]
                    },
                    {
                        latitudes: [48.1103,48.3538],
                        longitudes: [16.5697,11.7861]
                    },
                    {
                        latitudes: [48.1103,43.6772],
                        longitudes: [16.5697,-79.6306]
                    },
                    {
                        latitudes: [48.1103,49.0128],
                        longitudes: [16.5697,2.5500]
                    },
                    {
                        latitudes: [48.1103,28.5665],
                        longitudes: [16.5697,77.1031]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,41.8045],
                        longitudes: [16.5697,12.2508]
                    },
                    {
                        latitudes: [48.1103,51.4775],
                        longitudes: [16.5697,-0.4614]
                    },
                    {
                        latitudes: [48.1103,13.6811],
                        longitudes: [16.5697,100.7473]
                    },
                    {
                        latitudes: [48.1103,40.0801],
                        longitudes: [16.5697,116.5846]
                    },
                    {
                        latitudes: [48.1103,25.0777],
                        longitudes: [16.5697,121.2328]
                    },
                    {
                        latitudes: [48.1103,25.2528],
                        longitudes: [16.5697,55.3644]
                    },
                    {
                        latitudes: [48.1103,59.8003],
                        longitudes: [16.5697,30.2625]
                    },
                    {
                        latitudes: [48.1103,41.2971],
                        longitudes: [16.5697,2.0785]
                    },
                    {
                        latitudes: [48.1103,49.0128],
                        longitudes: [16.5697,2.5500]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,55.4086],
                        longitudes: [16.5697,37.9061]
                    },
                    {
                        latitudes: [48.1103,41.8045],
                        longitudes: [16.5697,12.2508]
                    },
                    {
                        latitudes: [48.1103,50.0264],
                        longitudes: [16.5697,8.5431]
                    },
                    {
                        latitudes: [48.1103,48.3538],
                        longitudes: [16.5697,11.7861]
                    },
                    {
                        latitudes: [48.1103,41.2971],
                        longitudes: [16.5697,2.0785]
                    },
                    {
                        latitudes: [48.1103,40.4936],
                        longitudes: [16.5697,-3.5668]
                    },
                    {
                        latitudes: [48.1103,41.8045],
                        longitudes: [16.5697,12.2508]
                    },
                    {
                        latitudes: [48.1103,52.3086],
                        longitudes: [16.5697,4.7639]
                    },
                    {
                        latitudes: [48.1103,51.2895],
                        longitudes: [16.5697,6.7668]
                    },
                    {
                        latitudes: [48.1103,50.0264],
                        longitudes: [16.5697,8.5431]
                    },
                    {
                        latitudes: [48.1103,51.4775],
                        longitudes: [16.5697,-0.4614]
                    },
                    {
                        latitudes: [48.1103,48.3538],
                        longitudes: [16.5697,11.7861]
                    },
                    {
                        latitudes: [48.1103,43.6772],
                        longitudes: [16.5697,-79.6306]
                    },
                    {
                        latitudes: [48.1103,35.7647],
                        longitudes: [16.5697,140.3864]
                    },
                    {
                        latitudes: [48.1103,52.3086],
                        longitudes: [16.5697,4.7639]
                    },
                    {
                        latitudes: [48.1103,41.2971],
                        longitudes: [16.5697,2.0785]
                    },
                    {
                        latitudes: [48.1103,13.6811],
                        longitudes: [16.5697,100.7473]
                    },
                    {
                        latitudes: [48.1103,50.9014],
                        longitudes: [16.5697,4.4844]
                    },
                    {
                        latitudes: [48.1103,49.0128],
                        longitudes: [16.5697,2.5500]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,28.5665],
                        longitudes: [16.5697,77.1031]
                    },
                    {
                        latitudes: [48.1103,55.4086],
                        longitudes: [16.5697,37.9061]
                    },
                    {
                        latitudes: [48.1103,51.2895],
                        longitudes: [16.5697,6.7668]
                    },
                    {
                        latitudes: [48.1103,25.2528],
                        longitudes: [16.5697,55.3644]
                    },
                    {
                        latitudes: [48.1103,41.8045],
                        longitudes: [16.5697,12.2508]
                    },
                    {
                        latitudes: [48.1103,50.0264],
                        longitudes: [16.5697,8.5431]
                    },
                    {
                        latitudes: [48.1103,40.9769],
                        longitudes: [16.5697,28.8146]
                    },
                    {
                        latitudes: [48.1103,40.6398],
                        longitudes: [16.5697,-73.7789]
                    },
                    {
                        latitudes: [48.1103,59.8003],
                        longitudes: [16.5697,30.2625]
                    },
                    {
                        latitudes: [48.1103,51.4775],
                        longitudes: [16.5697,-0.4614]
                    },
                    {
                        latitudes: [48.1103,48.3538],
                        longitudes: [16.5697,11.7861]
                    },
                    {
                        latitudes: [48.1103,35.7647],
                        longitudes: [16.5697,140.3864]
                    },
                    {
                        latitudes: [48.1103,41.9786],
                        longitudes: [16.5697,-87.9048]
                    },
                    {
                        latitudes: [48.1103,40.0801],
                        longitudes: [16.5697,116.5846]
                    },
                    {
                        latitudes: [48.1103,43.6772],
                        longitudes: [16.5697,-79.6306]
                    },
                    {
                        latitudes: [48.1103,40.9769],
                        longitudes: [16.5697,28.8146]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,48.3538],
                        longitudes: [16.5697,11.7861]
                    },
                    {
                        latitudes: [48.1103,55.4086],
                        longitudes: [16.5697,37.9061]
                    },
                    {
                        latitudes: [48.1103,55.6179],
                        longitudes: [16.5697,12.6560]
                    },
                    {
                        latitudes: [48.1103,50.9014],
                        longitudes: [16.5697,4.4844]
                    },
                    {
                        latitudes: [48.1103,59.8003],
                        longitudes: [16.5697,30.2625]
                    },
                    {
                        latitudes: [48.1103,13.6811],
                        longitudes: [16.5697,100.7473]
                    },
                    {
                        latitudes: [48.1103,40.9769],
                        longitudes: [16.5697,28.8146]
                    },
                    {
                        latitudes: [48.1103,51.1481],
                        longitudes: [16.5697,-0.1903]
                    },
                    {
                        latitudes: [48.1103,55.4086],
                        longitudes: [16.5697,37.9061]
                    },
                    {
                        latitudes: [48.1103,40.6398],
                        longitudes: [16.5697,-73.7789]
                    },
                    {
                        latitudes: [48.1103,59.8003],
                        longitudes: [16.5697,30.2625]
                    },
                    {
                        latitudes: [48.1103,41.9786],
                        longitudes: [16.5697,-87.9048]
                    },
                    {
                        latitudes: [48.1103,55.4086],
                        longitudes: [16.5697,37.9061]
                    },
                    {
                        latitudes: [48.1103,59.8003],
                        longitudes: [16.5697,30.2625]
                    },
                    {
                        latitudes: [48.1103,41.2971],
                        longitudes: [16.5697,2.0785]
                    }],
                images: [{
			            label: "Flights from Vienna",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Istanbul = {
                    id: "Istanbul" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Istanbul",
                    latitude: 40.9769,
                    longitude: 28.8146,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 28.8146,
                    zoomLatitude: 40.9769,
                    lines: [
                    {
                        latitudes: [40.9769,51.4775],
                        longitudes: [28.8146,-0.4614]
                    },
                    {
                        latitudes: [40.9769,43.6772],
                        longitudes: [28.8146,-79.6306]
                    },
                    {
                        latitudes: [40.9769,49.0128],
                        longitudes: [28.8146,2.5500]
                    },
                    {
                        latitudes: [40.9769,19.0887],
                        longitudes: [28.8146,72.8679]
                    },
                    {
                        latitudes: [40.9769,28.5665],
                        longitudes: [28.8146,77.1031]
                    },
                    {
                        latitudes: [40.9769,41.8045],
                        longitudes: [28.8146,12.2508]
                    },
                    {
                        latitudes: [40.9769,51.4775],
                        longitudes: [28.8146,-0.4614]
                    },
                    {
                        latitudes: [40.9769,23.3924],
                        longitudes: [28.8146,113.2988]
                    },
                    {
                        latitudes: [40.9769,40.0801],
                        longitudes: [28.8146,116.5846]
                    },
                    {
                        latitudes: [40.9769,31.1434],
                        longitudes: [28.8146,121.8052]
                    },
                    {
                        latitudes: [40.9769,25.2528],
                        longitudes: [28.8146,55.3644]
                    },
                    {
                        latitudes: [40.9769,24.4330],
                        longitudes: [28.8146,54.6511]
                    },
                    {
                        latitudes: [40.9769,59.8003],
                        longitudes: [28.8146,30.2625]
                    },
                    {
                        latitudes: [40.9769,37.4691],
                        longitudes: [28.8146,126.4505]
                    },
                    {
                        latitudes: [40.9769,52.3086],
                        longitudes: [28.8146,4.7639]
                    },
                    {
                        latitudes: [40.9769,51.2895],
                        longitudes: [28.8146,6.7668]
                    },
                    {
                        latitudes: [40.9769,50.0264],
                        longitudes: [28.8146,8.5431]
                    },
                    {
                        latitudes: [40.9769,48.3538],
                        longitudes: [28.8146,11.7861]
                    },
                    {
                        latitudes: [40.9769,2.7456],
                        longitudes: [28.8146,101.7099]
                    },
                    {
                        latitudes: [40.9769,35.7647],
                        longitudes: [28.8146,140.3864]
                    },
                    {
                        latitudes: [40.9769,48.1103],
                        longitudes: [28.8146,16.5697]
                    },
                    {
                        latitudes: [40.9769,37.4691],
                        longitudes: [28.8146,126.4505]
                    },
                    {
                        latitudes: [40.9769,48.3538],
                        longitudes: [28.8146,11.7861]
                    },
                    {
                        latitudes: [40.9769,48.1103],
                        longitudes: [28.8146,16.5697]
                    },
                    {
                        latitudes: [40.9769,25.2528],
                        longitudes: [28.8146,55.3644]
                    },
                    {
                        latitudes: [40.9769,55.6179],
                        longitudes: [28.8146,12.6560]
                    },
                    {
                        latitudes: [40.9769,1.3502],
                        longitudes: [28.8146,103.9944]
                    },
                    {
                        latitudes: [40.9769,59.8003],
                        longitudes: [28.8146,30.2625]
                    },
                    {
                        latitudes: [40.9769,13.6811],
                        longitudes: [28.8146,100.7473]
                    },
                    {
                        latitudes: [40.9769,52.3086],
                        longitudes: [28.8146,4.7639]
                    },
                    {
                        latitudes: [40.9769,24.4330],
                        longitudes: [28.8146,54.6511]
                    },
                    {
                        latitudes: [40.9769,41.2971],
                        longitudes: [28.8146,2.0785]
                    },
                    {
                        latitudes: [40.9769,13.6811],
                        longitudes: [28.8146,100.7473]
                    },
                    {
                        latitudes: [40.9769,19.0887],
                        longitudes: [28.8146,72.8679]
                    },
                    {
                        latitudes: [40.9769,50.9014],
                        longitudes: [28.8146,4.4844]
                    },
                    {
                        latitudes: [40.9769,23.3924],
                        longitudes: [28.8146,113.2988]
                    },
                    {
                        latitudes: [40.9769,49.0128],
                        longitudes: [28.8146,2.5500]
                    },
                    {
                        latitudes: [40.9769,55.6179],
                        longitudes: [28.8146,12.6560]
                    },
                    {
                        latitudes: [40.9769,28.5665],
                        longitudes: [28.8146,77.1031]
                    },
                    {
                        latitudes: [40.9769,51.2895],
                        longitudes: [28.8146,6.7668]
                    },
                    {
                        latitudes: [40.9769,25.2528],
                        longitudes: [28.8146,55.3644]
                    },
                    {
                        latitudes: [40.9769,41.8045],
                        longitudes: [28.8146,12.2508]
                    },
                    {
                        latitudes: [40.9769,50.0264],
                        longitudes: [28.8146,8.5431]
                    },
                    {
                        latitudes: [40.9769,22.3089],
                        longitudes: [28.8146,113.9146]
                    },
                    {
                        latitudes: [40.9769,29.9844],
                        longitudes: [28.8146,-95.3414]
                    },
                    {
                        latitudes: [40.9769,37.4691],
                        longitudes: [28.8146,126.4505]
                    },
                    {
                        latitudes: [40.9769,40.6398],
                        longitudes: [28.8146,-73.7789]
                    },
                    {
                        latitudes: [40.9769,2.7456],
                        longitudes: [28.8146,101.7099]
                    },
                    {
                        latitudes: [40.9769,33.9425],
                        longitudes: [28.8146,-118.4081]
                    },
                    {
                        latitudes: [40.9769,59.8003],
                        longitudes: [28.8146,30.2625]
                    },
                    {
                        latitudes: [40.9769,51.1481],
                        longitudes: [28.8146,-0.1903]
                    },
                    {
                        latitudes: [40.9769,51.4775],
                        longitudes: [28.8146,-0.4614]
                    },
                    {
                        latitudes: [40.9769,40.4936],
                        longitudes: [28.8146,-3.5668]
                    },
                    {
                        latitudes: [40.9769,53.3537],
                        longitudes: [28.8146,-2.2750]
                    },
                    {
                        latitudes: [40.9769,48.3538],
                        longitudes: [28.8146,11.7861]
                    },
                    {
                        latitudes: [40.9769,35.7647],
                        longitudes: [28.8146,140.3864]
                    },
                    {
                        latitudes: [40.9769,41.9786],
                        longitudes: [28.8146,-87.9048]
                    },
                    {
                        latitudes: [40.9769,40.0801],
                        longitudes: [28.8146,116.5846]
                    },
                    {
                        latitudes: [40.9769,31.1434],
                        longitudes: [28.8146,121.8052]
                    },
                    {
                        latitudes: [40.9769,1.3502],
                        longitudes: [28.8146,103.9944]
                    },
                    {
                        latitudes: [40.9769,48.1103],
                        longitudes: [28.8146,16.5697]
                    },
                    {
                        latitudes: [40.9769,43.6772],
                        longitudes: [28.8146,-79.6306]
                    },
                    {
                        latitudes: [40.9769,24.4330],
                        longitudes: [28.8146,54.6511]
                    },
                    {
                        latitudes: [40.9769,29.9844],
                        longitudes: [28.8146,-95.3414]
                    },
                    {
                        latitudes: [40.9769,40.6398],
                        longitudes: [28.8146,-73.7789]
                    },
                    {
                        latitudes: [40.9769,33.9425],
                        longitudes: [28.8146,-118.4081]
                    },
                    {
                        latitudes: [40.9769,41.9786],
                        longitudes: [28.8146,-87.9048]
                    }],
                images: [{
			            label: "Flights from Istanbul",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var MexicoCity = {
                    id: "MexicoCity" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Mexico City",
                    latitude: 19.4363,
                    longitude: -99.0721,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -99.0721,
                    zoomLatitude: 19.4363,
                    lines: [
                    {
                        latitudes: [19.4363,40.6398],
                        longitudes: [-99.0721,-73.7789]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,32.8968],
                        longitudes: [-99.0721,-97.0380]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,41.9786],
                        longitudes: [-99.0721,-87.9048]
                    },
                    {
                        latitudes: [19.4363,43.6772],
                        longitudes: [-99.0721,-79.6306]
                    },
                    {
                        latitudes: [19.4363,49.0128],
                        longitudes: [-99.0721,2.5500]
                    },
                    {
                        latitudes: [19.4363,49.0128],
                        longitudes: [-99.0721,2.5500]
                    },
                    {
                        latitudes: [19.4363,32.8968],
                        longitudes: [-99.0721,-97.0380]
                    },
                    {
                        latitudes: [19.4363,29.9844],
                        longitudes: [-99.0721,-95.3414]
                    },
                    {
                        latitudes: [19.4363,40.6398],
                        longitudes: [-99.0721,-73.7789]
                    },
                    {
                        latitudes: [19.4363,36.0801],
                        longitudes: [-99.0721,-115.1522]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,51.4775],
                        longitudes: [-99.0721,-0.4614]
                    },
                    {
                        latitudes: [19.4363,40.4936],
                        longitudes: [-99.0721,-3.5668]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,41.9786],
                        longitudes: [-99.0721,-87.9048]
                    },
                    {
                        latitudes: [19.4363,37.6190],
                        longitudes: [-99.0721,-122.3749]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,49.0128],
                        longitudes: [-99.0721,2.5500]
                    },
                    {
                        latitudes: [19.4363,40.6398],
                        longitudes: [-99.0721,-73.7789]
                    },
                    {
                        latitudes: [19.4363,40.4936],
                        longitudes: [-99.0721,-3.5668]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,32.8968],
                        longitudes: [-99.0721,-97.0380]
                    },
                    {
                        latitudes: [19.4363,51.4775],
                        longitudes: [-99.0721,-0.4614]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,32.8968],
                        longitudes: [-99.0721,-97.0380]
                    },
                    {
                        latitudes: [19.4363,29.9844],
                        longitudes: [-99.0721,-95.3414]
                    },
                    {
                        latitudes: [19.4363,40.6398],
                        longitudes: [-99.0721,-73.7789]
                    },
                    {
                        latitudes: [19.4363,36.0801],
                        longitudes: [-99.0721,-115.1522]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,25.7933],
                        longitudes: [-99.0721,-80.2906]
                    },
                    {
                        latitudes: [19.4363,41.9786],
                        longitudes: [-99.0721,-87.9048]
                    },
                    {
                        latitudes: [19.4363,37.6190],
                        longitudes: [-99.0721,-122.3749]
                    },
                    {
                        latitudes: [19.4363,51.4775],
                        longitudes: [-99.0721,-0.4614]
                    },
                    {
                        latitudes: [19.4363,40.4936],
                        longitudes: [-99.0721,-3.5668]
                    },
                    {
                        latitudes: [19.4363,52.3086],
                        longitudes: [-99.0721,4.7639]
                    },
                    {
                        latitudes: [19.4363,50.0264],
                        longitudes: [-99.0721,8.5431]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,37.6190],
                        longitudes: [-99.0721,-122.3749]
                    },
                    {
                        latitudes: [19.4363,39.8617],
                        longitudes: [-99.0721,-104.6732]
                    },
                    {
                        latitudes: [19.4363,40.6925],
                        longitudes: [-99.0721,-74.1687]
                    },
                    {
                        latitudes: [19.4363,29.9844],
                        longitudes: [-99.0721,-95.3414]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    },
                    {
                        latitudes: [19.4363,41.9786],
                        longitudes: [-99.0721,-87.9048]
                    },
                    {
                        latitudes: [19.4363,37.6190],
                        longitudes: [-99.0721,-122.3749]
                    },
                    {
                        latitudes: [19.4363,35.2140],
                        longitudes: [-99.0721,-80.9431]
                    },
                    {
                        latitudes: [19.4363,40.4936],
                        longitudes: [-99.0721,-3.5668]
                    },
                    {
                        latitudes: [19.4363,36.0801],
                        longitudes: [-99.0721,-115.1522]
                    },
                    {
                        latitudes: [19.4363,33.9425],
                        longitudes: [-99.0721,-118.4081]
                    }],
                images: [{
			            label: "Flights from Mexico City",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var AbuDhabi = {
                    id: "AbuDhabi" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Abu Dhabi",
                    latitude: 24.4330,
                    longitude: 54.6511,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 54.6511,
                    zoomLatitude: 24.4330,
                    lines: [
                    {
                        latitudes: [24.4330,19.0887],
                        longitudes: [54.6511,72.8679]
                    },
                    {
                        latitudes: [24.4330,28.5665],
                        longitudes: [54.6511,77.1031]
                    },
                    {
                        latitudes: [24.4330,40.6398],
                        longitudes: [54.6511,-73.7789]
                    },
                    {
                        latitudes: [24.4330,51.4775],
                        longitudes: [54.6511,-0.4614]
                    },
                    {
                        latitudes: [24.4330,41.9786],
                        longitudes: [54.6511,-87.9048]
                    },
                    {
                        latitudes: [24.4330,51.2895],
                        longitudes: [54.6511,6.7668]
                    },
                    {
                        latitudes: [24.4330,50.0264],
                        longitudes: [54.6511,8.5431]
                    },
                    {
                        latitudes: [24.4330,48.3538],
                        longitudes: [54.6511,11.7861]
                    },
                    {
                        latitudes: [24.4330,40.0801],
                        longitudes: [54.6511,116.5846]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,43.6772],
                        longitudes: [54.6511,-79.6306]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,49.0128],
                        longitudes: [54.6511,2.5500]
                    },
                    {
                        latitudes: [24.4330,19.0887],
                        longitudes: [54.6511,72.8679]
                    },
                    {
                        latitudes: [24.4330,28.5665],
                        longitudes: [54.6511,77.1031]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,13.6811],
                        longitudes: [54.6511,100.7473]
                    },
                    {
                        latitudes: [24.4330,41.8045],
                        longitudes: [54.6511,12.2508]
                    },
                    {
                        latitudes: [24.4330,2.7456],
                        longitudes: [54.6511,101.7099]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,-33.9461],
                        longitudes: [54.6511,151.1772]
                    },
                    {
                        latitudes: [24.4330,51.4775],
                        longitudes: [54.6511,-0.4614]
                    },
                    {
                        latitudes: [24.4330,41.8045],
                        longitudes: [54.6511,12.2508]
                    },
                    {
                        latitudes: [24.4330,22.3089],
                        longitudes: [54.6511,113.9146]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,13.6811],
                        longitudes: [54.6511,100.7473]
                    },
                    {
                        latitudes: [24.4330,19.0887],
                        longitudes: [54.6511,72.8679]
                    },
                    {
                        latitudes: [24.4330,50.9014],
                        longitudes: [54.6511,4.4844]
                    },
                    {
                        latitudes: [24.4330,49.0128],
                        longitudes: [54.6511,2.5500]
                    },
                    {
                        latitudes: [24.4330,30.5785],
                        longitudes: [54.6511,103.9471]
                    },
                    {
                        latitudes: [24.4330,28.5665],
                        longitudes: [54.6511,77.1031]
                    },
                    {
                        latitudes: [24.4330,55.4086],
                        longitudes: [54.6511,37.9061]
                    },
                    {
                        latitudes: [24.4330,51.2895],
                        longitudes: [54.6511,6.7668]
                    },
                    {
                        latitudes: [24.4330,41.8045],
                        longitudes: [54.6511,12.2508]
                    },
                    {
                        latitudes: [24.4330,50.0264],
                        longitudes: [54.6511,8.5431]
                    },
                    {
                        latitudes: [24.4330,22.3089],
                        longitudes: [54.6511,113.9146]
                    },
                    {
                        latitudes: [24.4330,37.4691],
                        longitudes: [54.6511,126.4505]
                    },
                    {
                        latitudes: [24.4330,40.9769],
                        longitudes: [54.6511,28.8146]
                    },
                    {
                        latitudes: [24.4330,40.6398],
                        longitudes: [54.6511,-73.7789]
                    },
                    {
                        latitudes: [24.4330,2.7456],
                        longitudes: [54.6511,101.7099]
                    },
                    {
                        latitudes: [24.4330,51.4775],
                        longitudes: [54.6511,-0.4614]
                    },
                    {
                        latitudes: [24.4330,53.3537],
                        longitudes: [54.6511,-2.2750]
                    },
                    {
                        latitudes: [24.4330,48.3538],
                        longitudes: [54.6511,11.7861]
                    },
                    {
                        latitudes: [24.4330,35.7647],
                        longitudes: [54.6511,140.3864]
                    },
                    {
                        latitudes: [24.4330,41.9786],
                        longitudes: [54.6511,-87.9048]
                    },
                    {
                        latitudes: [24.4330,40.0801],
                        longitudes: [54.6511,116.5846]
                    },
                    {
                        latitudes: [24.4330,31.1434],
                        longitudes: [54.6511,121.8052]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,-33.9461],
                        longitudes: [54.6511,151.1772]
                    },
                    {
                        latitudes: [24.4330,43.6772],
                        longitudes: [54.6511,-79.6306]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,22.3089],
                        longitudes: [54.6511,113.9146]
                    },
                    {
                        latitudes: [24.4330,30.5785],
                        longitudes: [54.6511,103.9471]
                    },
                    {
                        latitudes: [24.4330,40.0801],
                        longitudes: [54.6511,116.5846]
                    },
                    {
                        latitudes: [24.4330,31.1434],
                        longitudes: [54.6511,121.8052]
                    },
                    {
                        latitudes: [24.4330,51.4775],
                        longitudes: [54.6511,-0.4614]
                    },
                    {
                        latitudes: [24.4330,37.4691],
                        longitudes: [54.6511,126.4505]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,50.0264],
                        longitudes: [54.6511,8.5431]
                    },
                    {
                        latitudes: [24.4330,2.7456],
                        longitudes: [54.6511,101.7099]
                    },
                    {
                        latitudes: [24.4330,35.7647],
                        longitudes: [54.6511,140.3864]
                    },
                    {
                        latitudes: [24.4330,40.0801],
                        longitudes: [54.6511,116.5846]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,37.4691],
                        longitudes: [54.6511,126.4505]
                    },
                    {
                        latitudes: [24.4330,13.6811],
                        longitudes: [54.6511,100.7473]
                    },
                    {
                        latitudes: [24.4330,55.4086],
                        longitudes: [54.6511,37.9061]
                    },
                    {
                        latitudes: [24.4330,50.9014],
                        longitudes: [54.6511,4.4844]
                    },
                    {
                        latitudes: [24.4330,40.9769],
                        longitudes: [54.6511,28.8146]
                    },
                    {
                        latitudes: [24.4330,52.3086],
                        longitudes: [54.6511,4.7639]
                    },
                    {
                        latitudes: [24.4330,50.9014],
                        longitudes: [54.6511,4.4844]
                    },
                    {
                        latitudes: [24.4330,51.2895],
                        longitudes: [54.6511,6.7668]
                    },
                    {
                        latitudes: [24.4330,40.9769],
                        longitudes: [54.6511,28.8146]
                    },
                    {
                        latitudes: [24.4330,40.6398],
                        longitudes: [54.6511,-73.7789]
                    },
                    {
                        latitudes: [24.4330,53.3537],
                        longitudes: [54.6511,-2.2750]
                    },
                    {
                        latitudes: [24.4330,48.3538],
                        longitudes: [54.6511,11.7861]
                    },
                    {
                        latitudes: [24.4330,41.9786],
                        longitudes: [54.6511,-87.9048]
                    },
                    {
                        latitudes: [24.4330,1.3502],
                        longitudes: [54.6511,103.9944]
                    },
                    {
                        latitudes: [24.4330,-33.9461],
                        longitudes: [54.6511,151.1772]
                    },
                    {
                        latitudes: [24.4330,13.6811],
                        longitudes: [54.6511,100.7473]
                    },
                    {
                        latitudes: [24.4330,2.7456],
                        longitudes: [54.6511,101.7099]
                    }],
                images: [{
			            label: "Flights from Abu Dhabi",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Dubai = {
                    id: "Dubai" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Dubai",
                    latitude: 25.2528,
                    longitude: 55.3644,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 55.3644,
                    zoomLatitude: 25.2528,
                    lines: [
                    {
                        latitudes: [25.2528,19.0887],
                        longitudes: [55.3644,72.8679]
                    },
                    {
                        latitudes: [25.2528,28.5665],
                        longitudes: [55.3644,77.1031]
                    },
                    {
                        latitudes: [25.2528,19.0887],
                        longitudes: [55.3644,72.8679]
                    },
                    {
                        latitudes: [25.2528,28.5665],
                        longitudes: [55.3644,77.1031]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,49.0128],
                        longitudes: [55.3644,2.5500]
                    },
                    {
                        latitudes: [25.2528,19.0887],
                        longitudes: [55.3644,72.8679]
                    },
                    {
                        latitudes: [25.2528,28.5665],
                        longitudes: [55.3644,77.1031]
                    },
                    {
                        latitudes: [25.2528,52.3086],
                        longitudes: [55.3644,4.7639]
                    },
                    {
                        latitudes: [25.2528,49.0128],
                        longitudes: [55.3644,2.5500]
                    },
                    {
                        latitudes: [25.2528,32.8968],
                        longitudes: [55.3644,-97.0380]
                    },
                    {
                        latitudes: [25.2528,29.9844],
                        longitudes: [55.3644,-95.3414]
                    },
                    {
                        latitudes: [25.2528,40.6398],
                        longitudes: [55.3644,-73.7789]
                    },
                    {
                        latitudes: [25.2528,33.9425],
                        longitudes: [55.3644,-118.4081]
                    },
                    {
                        latitudes: [25.2528,37.6190],
                        longitudes: [55.3644,-122.3749]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,40.0801],
                        longitudes: [55.3644,116.5846]
                    },
                    {
                        latitudes: [25.2528,22.3089],
                        longitudes: [55.3644,113.9146]
                    },
                    {
                        latitudes: [25.2528,23.3924],
                        longitudes: [55.3644,113.2988]
                    },
                    {
                        latitudes: [25.2528,55.6179],
                        longitudes: [55.3644,12.6560]
                    },
                    {
                        latitudes: [25.2528,52.3086],
                        longitudes: [55.3644,4.7639]
                    },
                    {
                        latitudes: [25.2528,41.2971],
                        longitudes: [55.3644,2.0785]
                    },
                    {
                        latitudes: [25.2528,13.6811],
                        longitudes: [55.3644,100.7473]
                    },
                    {
                        latitudes: [25.2528,19.0887],
                        longitudes: [55.3644,72.8679]
                    },
                    {
                        latitudes: [25.2528,23.3924],
                        longitudes: [55.3644,113.2988]
                    },
                    {
                        latitudes: [25.2528,49.0128],
                        longitudes: [55.3644,2.5500]
                    },
                    {
                        latitudes: [25.2528,55.6179],
                        longitudes: [55.3644,12.6560]
                    },
                    {
                        latitudes: [25.2528,28.5665],
                        longitudes: [55.3644,77.1031]
                    },
                    {
                        latitudes: [25.2528,32.8968],
                        longitudes: [55.3644,-97.0380]
                    },
                    {
                        latitudes: [25.2528,55.4086],
                        longitudes: [55.3644,37.9061]
                    },
                    {
                        latitudes: [25.2528,51.2895],
                        longitudes: [55.3644,6.7668]
                    },
                    {
                        latitudes: [25.2528,41.8045],
                        longitudes: [55.3644,12.2508]
                    },
                    {
                        latitudes: [25.2528,50.0264],
                        longitudes: [55.3644,8.5431]
                    },
                    {
                        latitudes: [25.2528,22.3089],
                        longitudes: [55.3644,113.9146]
                    },
                    {
                        latitudes: [25.2528,29.9844],
                        longitudes: [55.3644,-95.3414]
                    },
                    {
                        latitudes: [25.2528,37.4691],
                        longitudes: [55.3644,126.4505]
                    },
                    {
                        latitudes: [25.2528,40.9769],
                        longitudes: [55.3644,28.8146]
                    },
                    {
                        latitudes: [25.2528,40.6398],
                        longitudes: [55.3644,-73.7789]
                    },
                    {
                        latitudes: [25.2528,2.7456],
                        longitudes: [55.3644,101.7099]
                    },
                    {
                        latitudes: [25.2528,33.9425],
                        longitudes: [55.3644,-118.4081]
                    },
                    {
                        latitudes: [25.2528,59.8003],
                        longitudes: [55.3644,30.2625]
                    },
                    {
                        latitudes: [25.2528,51.1481],
                        longitudes: [55.3644,-0.1903]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,40.4936],
                        longitudes: [55.3644,-3.5668]
                    },
                    {
                        latitudes: [25.2528,53.3537],
                        longitudes: [55.3644,-2.2750]
                    },
                    {
                        latitudes: [25.2528,48.3538],
                        longitudes: [55.3644,11.7861]
                    },
                    {
                        latitudes: [25.2528,35.7647],
                        longitudes: [55.3644,140.3864]
                    },
                    {
                        latitudes: [25.2528,40.0801],
                        longitudes: [55.3644,116.5846]
                    },
                    {
                        latitudes: [25.2528,31.1434],
                        longitudes: [55.3644,121.8052]
                    },
                    {
                        latitudes: [25.2528,37.6190],
                        longitudes: [55.3644,-122.3749]
                    },
                    {
                        latitudes: [25.2528,1.3502],
                        longitudes: [55.3644,103.9944]
                    },
                    {
                        latitudes: [25.2528,-33.9461],
                        longitudes: [55.3644,151.1772]
                    },
                    {
                        latitudes: [25.2528,48.1103],
                        longitudes: [55.3644,16.5697]
                    },
                    {
                        latitudes: [25.2528,43.6772],
                        longitudes: [55.3644,-79.6306]
                    },
                    {
                        latitudes: [25.2528,52.3086],
                        longitudes: [55.3644,4.7639]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,2.7456],
                        longitudes: [55.3644,101.7099]
                    },
                    {
                        latitudes: [25.2528,35.7647],
                        longitudes: [55.3644,140.3864]
                    },
                    {
                        latitudes: [25.2528,37.4691],
                        longitudes: [55.3644,126.4505]
                    },
                    {
                        latitudes: [25.2528,52.3086],
                        longitudes: [55.3644,4.7639]
                    },
                    {
                        latitudes: [25.2528,50.0264],
                        longitudes: [55.3644,8.5431]
                    },
                    {
                        latitudes: [25.2528,48.3538],
                        longitudes: [55.3644,11.7861]
                    },
                    {
                        latitudes: [25.2528,2.7456],
                        longitudes: [55.3644,101.7099]
                    },
                    {
                        latitudes: [25.2528,1.3502],
                        longitudes: [55.3644,103.9944]
                    },
                    {
                        latitudes: [25.2528,24.9924],
                        longitudes: [55.3644,102.7435]
                    },
                    {
                        latitudes: [25.2528,52.3086],
                        longitudes: [55.3644,4.7639]
                    },
                    {
                        latitudes: [25.2528,48.1103],
                        longitudes: [55.3644,16.5697]
                    },
                    {
                        latitudes: [25.2528,13.6811],
                        longitudes: [55.3644,100.7473]
                    },
                    {
                        latitudes: [25.2528,55.6179],
                        longitudes: [55.3644,12.6560]
                    },
                    {
                        latitudes: [25.2528,51.2895],
                        longitudes: [55.3644,6.7668]
                    },
                    {
                        latitudes: [25.2528,50.0264],
                        longitudes: [55.3644,8.5431]
                    },
                    {
                        latitudes: [25.2528,40.9769],
                        longitudes: [55.3644,28.8146]
                    },
                    {
                        latitudes: [25.2528,2.7456],
                        longitudes: [55.3644,101.7099]
                    },
                    {
                        latitudes: [25.2528,51.1481],
                        longitudes: [55.3644,-0.1903]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    },
                    {
                        latitudes: [25.2528,53.3537],
                        longitudes: [55.3644,-2.2750]
                    },
                    {
                        latitudes: [25.2528,48.3538],
                        longitudes: [55.3644,11.7861]
                    },
                    {
                        latitudes: [25.2528,1.3502],
                        longitudes: [55.3644,103.9944]
                    },
                    {
                        latitudes: [25.2528,-33.9461],
                        longitudes: [55.3644,151.1772]
                    },
                    {
                        latitudes: [25.2528,19.0887],
                        longitudes: [55.3644,72.8679]
                    },
                    {
                        latitudes: [25.2528,28.5665],
                        longitudes: [55.3644,77.1031]
                    },
                    {
                        latitudes: [25.2528,1.3502],
                        longitudes: [55.3644,103.9944]
                    },
                    {
                        latitudes: [25.2528,13.6811],
                        longitudes: [55.3644,100.7473]
                    },
                    {
                        latitudes: [25.2528,40.9769],
                        longitudes: [55.3644,28.8146]
                    },
                    {
                        latitudes: [25.2528,55.4086],
                        longitudes: [55.3644,37.9061]
                    },
                    {
                        latitudes: [25.2528,59.8003],
                        longitudes: [55.3644,30.2625]
                    },
                    {
                        latitudes: [25.2528,51.4775],
                        longitudes: [55.3644,-0.4614]
                    }],
                images: [{
			            label: "Flights from Dubai",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Taipei = {
                    id: "Taipei" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Taipei",
                    latitude: 25.0777,
                    longitude: 121.2328,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 121.2328,
                    zoomLatitude: 25.0777,
                    lines: [
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,24.9924],
                        longitudes: [121.2328,102.7435]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,28.5665],
                        longitudes: [121.2328,77.1031]
                    },
                    {
                        latitudes: [25.0777,34.4471],
                        longitudes: [121.2328,108.7516]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,23.3924],
                        longitudes: [121.2328,113.2988]
                    },
                    {
                        latitudes: [25.0777,49.0128],
                        longitudes: [121.2328,2.5500]
                    },
                    {
                        latitudes: [25.0777,30.5785],
                        longitudes: [121.2328,103.9471]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,40.6398],
                        longitudes: [121.2328,-73.7789]
                    },
                    {
                        latitudes: [25.0777,2.7456],
                        longitudes: [121.2328,101.7099]
                    },
                    {
                        latitudes: [25.0777,33.9425],
                        longitudes: [121.2328,-118.4081]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,40.0801],
                        longitudes: [121.2328,116.5846]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,37.6190],
                        longitudes: [121.2328,-122.3749]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,43.6772],
                        longitudes: [121.2328,-79.6306]
                    },
                    {
                        latitudes: [25.0777,30.5785],
                        longitudes: [121.2328,103.9471]
                    },
                    {
                        latitudes: [25.0777,40.0801],
                        longitudes: [121.2328,116.5846]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,23.3924],
                        longitudes: [121.2328,113.2988]
                    },
                    {
                        latitudes: [25.0777,30.5785],
                        longitudes: [121.2328,103.9471]
                    },
                    {
                        latitudes: [25.0777,28.5665],
                        longitudes: [121.2328,77.1031]
                    },
                    {
                        latitudes: [25.0777,50.0264],
                        longitudes: [121.2328,8.5431]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,2.7456],
                        longitudes: [121.2328,101.7099]
                    },
                    {
                        latitudes: [25.0777,33.9425],
                        longitudes: [121.2328,-118.4081]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,40.0801],
                        longitudes: [121.2328,116.5846]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,37.6190],
                        longitudes: [121.2328,-122.3749]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,-33.9461],
                        longitudes: [121.2328,151.1772]
                    },
                    {
                        latitudes: [25.0777,48.1103],
                        longitudes: [121.2328,16.5697]
                    },
                    {
                        latitudes: [25.0777,34.4471],
                        longitudes: [121.2328,108.7516]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,23.3924],
                        longitudes: [121.2328,113.2988]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,2.7456],
                        longitudes: [121.2328,101.7099]
                    },
                    {
                        latitudes: [25.0777,33.9425],
                        longitudes: [121.2328,-118.4081]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,37.6190],
                        longitudes: [121.2328,-122.3749]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,23.3924],
                        longitudes: [121.2328,113.2988]
                    },
                    {
                        latitudes: [25.0777,40.0801],
                        longitudes: [121.2328,116.5846]
                    },
                    {
                        latitudes: [25.0777,34.4471],
                        longitudes: [121.2328,108.7516]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,22.3089],
                        longitudes: [121.2328,113.9146]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,52.3086],
                        longitudes: [121.2328,4.7639]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,2.7456],
                        longitudes: [121.2328,101.7099]
                    },
                    {
                        latitudes: [25.0777,24.9924],
                        longitudes: [121.2328,102.7435]
                    },
                    {
                        latitudes: [25.0777,31.1434],
                        longitudes: [121.2328,121.8052]
                    },
                    {
                        latitudes: [25.0777,34.4471],
                        longitudes: [121.2328,108.7516]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,37.4691],
                        longitudes: [121.2328,126.4505]
                    },
                    {
                        latitudes: [25.0777,35.7647],
                        longitudes: [121.2328,140.3864]
                    },
                    {
                        latitudes: [25.0777,1.3502],
                        longitudes: [121.2328,103.9944]
                    },
                    {
                        latitudes: [25.0777,13.6811],
                        longitudes: [121.2328,100.7473]
                    },
                    {
                        latitudes: [25.0777,33.9425],
                        longitudes: [121.2328,-118.4081]
                    },
                    {
                        latitudes: [25.0777,37.6190],
                        longitudes: [121.2328,-122.3749]
                    }],
                images: [{
			            label: "Flights from Taipei",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Tokyo = {
                    id: "Tokyo" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Tokyo",
                    latitude: 35.7647,
                    longitude: 140.3864,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 140.3864,
                    zoomLatitude: 35.7647,
                    lines: [
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,19.0887],
                        longitudes: [140.3864,72.8679]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,32.8968],
                        longitudes: [140.3864,-97.0380]
                    },
                    {
                        latitudes: [35.7647,22.3089],
                        longitudes: [140.3864,113.9146]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,2.7456],
                        longitudes: [140.3864,101.7099]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,43.6772],
                        longitudes: [140.3864,-79.6306]
                    },
                    {
                        latitudes: [35.7647,49.0128],
                        longitudes: [140.3864,2.5500]
                    },
                    {
                        latitudes: [35.7647,28.5665],
                        longitudes: [140.3864,77.1031]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,19.4363],
                        longitudes: [140.3864,-99.0721]
                    },
                    {
                        latitudes: [35.7647,41.8045],
                        longitudes: [140.3864,12.2508]
                    },
                    {
                        latitudes: [35.7647,51.4775],
                        longitudes: [140.3864,-0.4614]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    },
                    {
                        latitudes: [35.7647,30.5785],
                        longitudes: [140.3864,103.9471]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,31.1434],
                        longitudes: [140.3864,121.8052]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,22.3089],
                        longitudes: [140.3864,113.9146]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,22.3089],
                        longitudes: [140.3864,113.9146]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,44.8820],
                        longitudes: [140.3864,-93.2218]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,31.1434],
                        longitudes: [140.3864,121.8052]
                    },
                    {
                        latitudes: [35.7647,37.6190],
                        longitudes: [140.3864,-122.3749]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,25.2528],
                        longitudes: [140.3864,55.3644]
                    },
                    {
                        latitudes: [35.7647,24.4330],
                        longitudes: [140.3864,54.6511]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    },
                    {
                        latitudes: [35.7647,49.0128],
                        longitudes: [140.3864,2.5500]
                    },
                    {
                        latitudes: [35.7647,28.5665],
                        longitudes: [140.3864,77.1031]
                    },
                    {
                        latitudes: [35.7647,32.8968],
                        longitudes: [140.3864,-97.0380]
                    },
                    {
                        latitudes: [35.7647,55.4086],
                        longitudes: [140.3864,37.9061]
                    },
                    {
                        latitudes: [35.7647,25.2528],
                        longitudes: [140.3864,55.3644]
                    },
                    {
                        latitudes: [35.7647,50.0264],
                        longitudes: [140.3864,8.5431]
                    },
                    {
                        latitudes: [35.7647,22.3089],
                        longitudes: [140.3864,113.9146]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,2.7456],
                        longitudes: [140.3864,101.7099]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,51.4775],
                        longitudes: [140.3864,-0.4614]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,31.1434],
                        longitudes: [140.3864,121.8052]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,-33.9461],
                        longitudes: [140.3864,151.1772]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,52.3086],
                        longitudes: [140.3864,4.7639]
                    },
                    {
                        latitudes: [35.7647,50.0264],
                        longitudes: [140.3864,8.5431]
                    },
                    {
                        latitudes: [35.7647,48.3538],
                        longitudes: [140.3864,11.7861]
                    },
                    {
                        latitudes: [35.7647,32.8968],
                        longitudes: [140.3864,-97.0380]
                    },
                    {
                        latitudes: [35.7647,2.7456],
                        longitudes: [140.3864,101.7099]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,31.1434],
                        longitudes: [140.3864,121.8052]
                    },
                    {
                        latitudes: [35.7647,24.4330],
                        longitudes: [140.3864,54.6511]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,19.0887],
                        longitudes: [140.3864,72.8679]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    },
                    {
                        latitudes: [35.7647,49.0128],
                        longitudes: [140.3864,2.5500]
                    },
                    {
                        latitudes: [35.7647,30.5785],
                        longitudes: [140.3864,103.9471]
                    },
                    {
                        latitudes: [35.7647,28.5665],
                        longitudes: [140.3864,77.1031]
                    },
                    {
                        latitudes: [35.7647,39.8617],
                        longitudes: [140.3864,-104.6732]
                    },
                    {
                        latitudes: [35.7647,40.6925],
                        longitudes: [140.3864,-74.1687]
                    },
                    {
                        latitudes: [35.7647,50.0264],
                        longitudes: [140.3864,8.5431]
                    },
                    {
                        latitudes: [35.7647,22.3089],
                        longitudes: [140.3864,113.9146]
                    },
                    {
                        latitudes: [35.7647,29.9844],
                        longitudes: [140.3864,-95.3414]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,40.9769],
                        longitudes: [140.3864,28.8146]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,51.4775],
                        longitudes: [140.3864,-0.4614]
                    },
                    {
                        latitudes: [35.7647,48.3538],
                        longitudes: [140.3864,11.7861]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,31.1434],
                        longitudes: [140.3864,121.8052]
                    },
                    {
                        latitudes: [35.7647,37.6190],
                        longitudes: [140.3864,-122.3749]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,48.1103],
                        longitudes: [140.3864,16.5697]
                    },
                    {
                        latitudes: [35.7647,43.6772],
                        longitudes: [140.3864,-79.6306]
                    },
                    {
                        latitudes: [35.7647,48.1103],
                        longitudes: [140.3864,16.5697]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,40.0801],
                        longitudes: [140.3864,116.5846]
                    },
                    {
                        latitudes: [35.7647,-33.9461],
                        longitudes: [140.3864,151.1772]
                    },
                    {
                        latitudes: [35.7647,55.4086],
                        longitudes: [140.3864,37.9061]
                    },
                    {
                        latitudes: [35.7647,55.6179],
                        longitudes: [140.3864,12.6560]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,40.9769],
                        longitudes: [140.3864,28.8146]
                    },
                    {
                        latitudes: [35.7647,25.0777],
                        longitudes: [140.3864,121.2328]
                    },
                    {
                        latitudes: [35.7647,13.6811],
                        longitudes: [140.3864,100.7473]
                    },
                    {
                        latitudes: [35.7647,39.8617],
                        longitudes: [140.3864,-104.6732]
                    },
                    {
                        latitudes: [35.7647,40.6925],
                        longitudes: [140.3864,-74.1687]
                    },
                    {
                        latitudes: [35.7647,29.9844],
                        longitudes: [140.3864,-95.3414]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,37.6190],
                        longitudes: [140.3864,-122.3749]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,40.6398],
                        longitudes: [140.3864,-73.7789]
                    },
                    {
                        latitudes: [35.7647,33.9425],
                        longitudes: [140.3864,-118.4081]
                    },
                    {
                        latitudes: [35.7647,41.9786],
                        longitudes: [140.3864,-87.9048]
                    },
                    {
                        latitudes: [35.7647,37.6190],
                        longitudes: [140.3864,-122.3749]
                    },
                    {
                        latitudes: [35.7647,1.3502],
                        longitudes: [140.3864,103.9944]
                    },
                    {
                        latitudes: [35.7647,51.4775],
                        longitudes: [140.3864,-0.4614]
                    },
                    {
                        latitudes: [35.7647,37.4691],
                        longitudes: [140.3864,126.4505]
                    },
                    {
                        latitudes: [35.7647,23.3924],
                        longitudes: [140.3864,113.2988]
                    }],
                images: [{
			            label: "Flights from Tokyo",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var StPetersburg = {
                    id: "StPetersburg" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "St. Petersburg",
                    latitude: 59.8003,
                    longitude: 30.2625,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 30.2625,
                    zoomLatitude: 59.8003,
                    lines: [
                    {
                        latitudes: [59.8003,49.0128],
                        longitudes: [30.2625,2.5500]
                    },
                    {
                        latitudes: [59.8003,41.8045],
                        longitudes: [30.2625,12.2508]
                    },
                    {
                        latitudes: [59.8003,51.4775],
                        longitudes: [30.2625,-0.4614]
                    },
                    {
                        latitudes: [59.8003,25.2528],
                        longitudes: [30.2625,55.3644]
                    },
                    {
                        latitudes: [59.8003,52.3086],
                        longitudes: [30.2625,4.7639]
                    },
                    {
                        latitudes: [59.8003,49.0128],
                        longitudes: [30.2625,2.5500]
                    },
                    {
                        latitudes: [59.8003,55.6179],
                        longitudes: [30.2625,12.6560]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    },
                    {
                        latitudes: [59.8003,51.2895],
                        longitudes: [30.2625,6.7668]
                    },
                    {
                        latitudes: [59.8003,41.8045],
                        longitudes: [30.2625,12.2508]
                    },
                    {
                        latitudes: [59.8003,50.0264],
                        longitudes: [30.2625,8.5431]
                    },
                    {
                        latitudes: [59.8003,37.4691],
                        longitudes: [30.2625,126.4505]
                    },
                    {
                        latitudes: [59.8003,40.9769],
                        longitudes: [30.2625,28.8146]
                    },
                    {
                        latitudes: [59.8003,48.3538],
                        longitudes: [30.2625,11.7861]
                    },
                    {
                        latitudes: [59.8003,40.0801],
                        longitudes: [30.2625,116.5846]
                    },
                    {
                        latitudes: [59.8003,48.1103],
                        longitudes: [30.2625,16.5697]
                    },
                    {
                        latitudes: [59.8003,40.0801],
                        longitudes: [30.2625,116.5846]
                    },
                    {
                        latitudes: [59.8003,41.2971],
                        longitudes: [30.2625,2.0785]
                    },
                    {
                        latitudes: [59.8003,37.4691],
                        longitudes: [30.2625,126.4505]
                    },
                    {
                        latitudes: [59.8003,52.3086],
                        longitudes: [30.2625,4.7639]
                    },
                    {
                        latitudes: [59.8003,51.2895],
                        longitudes: [30.2625,6.7668]
                    },
                    {
                        latitudes: [59.8003,50.0264],
                        longitudes: [30.2625,8.5431]
                    },
                    {
                        latitudes: [59.8003,48.3538],
                        longitudes: [30.2625,11.7861]
                    },
                    {
                        latitudes: [59.8003,48.1103],
                        longitudes: [30.2625,16.5697]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    },
                    {
                        latitudes: [59.8003,40.0801],
                        longitudes: [30.2625,116.5846]
                    },
                    {
                        latitudes: [59.8003,55.6179],
                        longitudes: [30.2625,12.6560]
                    },
                    {
                        latitudes: [59.8003,49.0128],
                        longitudes: [30.2625,2.5500]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    },
                    {
                        latitudes: [59.8003,51.2895],
                        longitudes: [30.2625,6.7668]
                    },
                    {
                        latitudes: [59.8003,41.8045],
                        longitudes: [30.2625,12.2508]
                    },
                    {
                        latitudes: [59.8003,50.0264],
                        longitudes: [30.2625,8.5431]
                    },
                    {
                        latitudes: [59.8003,40.9769],
                        longitudes: [30.2625,28.8146]
                    },
                    {
                        latitudes: [59.8003,48.3538],
                        longitudes: [30.2625,11.7861]
                    },
                    {
                        latitudes: [59.8003,48.1103],
                        longitudes: [30.2625,16.5697]
                    },
                    {
                        latitudes: [59.8003,40.9769],
                        longitudes: [30.2625,28.8146]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    },
                    {
                        latitudes: [59.8003,48.1103],
                        longitudes: [30.2625,16.5697]
                    },
                    {
                        latitudes: [59.8003,13.6811],
                        longitudes: [30.2625,100.7473]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    },
                    {
                        latitudes: [59.8003,25.2528],
                        longitudes: [30.2625,55.3644]
                    },
                    {
                        latitudes: [59.8003,41.8045],
                        longitudes: [30.2625,12.2508]
                    },
                    {
                        latitudes: [59.8003,48.1103],
                        longitudes: [30.2625,16.5697]
                    },
                    {
                        latitudes: [59.8003,41.2971],
                        longitudes: [30.2625,2.0785]
                    },
                    {
                        latitudes: [59.8003,55.4086],
                        longitudes: [30.2625,37.9061]
                    }],
                images: [{
			            label: "Flights from St. Petersburg",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Mumbai = {
                    id: "Mumbai" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Mumbai",
                    latitude: 19.0887,
                    longitude: 72.8679,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 72.8679,
                    zoomLatitude: 19.0887,
                    lines: [
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,25.2528],
                        longitudes: [72.8679,55.3644]
                    },
                    {
                        latitudes: [19.0887,24.4330],
                        longitudes: [72.8679,54.6511]
                    },
                    {
                        latitudes: [19.0887,13.6811],
                        longitudes: [72.8679,100.7473]
                    },
                    {
                        latitudes: [19.0887,50.9014],
                        longitudes: [72.8679,4.4844]
                    },
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,25.2528],
                        longitudes: [72.8679,55.3644]
                    },
                    {
                        latitudes: [19.0887,22.3089],
                        longitudes: [72.8679,113.9146]
                    },
                    {
                        latitudes: [19.0887,2.7456],
                        longitudes: [72.8679,101.7099]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    },
                    {
                        latitudes: [19.0887,35.7647],
                        longitudes: [72.8679,140.3864]
                    },
                    {
                        latitudes: [19.0887,1.3502],
                        longitudes: [72.8679,103.9944]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    },
                    {
                        latitudes: [19.0887,49.0128],
                        longitudes: [72.8679,2.5500]
                    },
                    {
                        latitudes: [19.0887,24.4330],
                        longitudes: [72.8679,54.6511]
                    },
                    {
                        latitudes: [19.0887,13.6811],
                        longitudes: [72.8679,100.7473]
                    },
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,25.2528],
                        longitudes: [72.8679,55.3644]
                    },
                    {
                        latitudes: [19.0887,40.6925],
                        longitudes: [72.8679,-74.1687]
                    },
                    {
                        latitudes: [19.0887,50.0264],
                        longitudes: [72.8679,8.5431]
                    },
                    {
                        latitudes: [19.0887,40.9769],
                        longitudes: [72.8679,28.8146]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    },
                    {
                        latitudes: [19.0887,48.3538],
                        longitudes: [72.8679,11.7861]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    },
                    {
                        latitudes: [19.0887,30.5785],
                        longitudes: [72.8679,103.9471]
                    },
                    {
                        latitudes: [19.0887,22.3089],
                        longitudes: [72.8679,113.9146]
                    },
                    {
                        latitudes: [19.0887,52.3086],
                        longitudes: [72.8679,4.7639]
                    },
                    {
                        latitudes: [19.0887,25.2528],
                        longitudes: [72.8679,55.3644]
                    },
                    {
                        latitudes: [19.0887,24.4330],
                        longitudes: [72.8679,54.6511]
                    },
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    },
                    {
                        latitudes: [19.0887,37.4691],
                        longitudes: [72.8679,126.4505]
                    },
                    {
                        latitudes: [19.0887,52.3086],
                        longitudes: [72.8679,4.7639]
                    },
                    {
                        latitudes: [19.0887,50.0264],
                        longitudes: [72.8679,8.5431]
                    },
                    {
                        latitudes: [19.0887,48.3538],
                        longitudes: [72.8679,11.7861]
                    },
                    {
                        latitudes: [19.0887,2.7456],
                        longitudes: [72.8679,101.7099]
                    },
                    {
                        latitudes: [19.0887,35.7647],
                        longitudes: [72.8679,140.3864]
                    },
                    {
                        latitudes: [19.0887,13.6811],
                        longitudes: [72.8679,100.7473]
                    },
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,28.5665],
                        longitudes: [72.8679,77.1031]
                    },
                    {
                        latitudes: [19.0887,25.2528],
                        longitudes: [72.8679,55.3644]
                    },
                    {
                        latitudes: [19.0887,50.9014],
                        longitudes: [72.8679,4.4844]
                    },
                    {
                        latitudes: [19.0887,1.3502],
                        longitudes: [72.8679,103.9944]
                    },
                    {
                        latitudes: [19.0887,13.6811],
                        longitudes: [72.8679,100.7473]
                    },
                    {
                        latitudes: [19.0887,40.9769],
                        longitudes: [72.8679,28.8146]
                    },
                    {
                        latitudes: [19.0887,40.6925],
                        longitudes: [72.8679,-74.1687]
                    },
                    {
                        latitudes: [19.0887,51.4775],
                        longitudes: [72.8679,-0.4614]
                    }],
                images: [{
			            label: "Flights from Mumbai",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var HongKong = {
                    id: "HongKong" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Hong Kong",
                    latitude: 22.3089,
                    longitude: 113.9146,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 113.9146,
                    zoomLatitude: 22.3089,
                    lines: [
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,30.5785],
                        longitudes: [113.9146,103.9471]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,19.0887],
                        longitudes: [113.9146,72.8679]
                    },
                    {
                        latitudes: [22.3089,28.5665],
                        longitudes: [113.9146,77.1031]
                    },
                    {
                        latitudes: [22.3089,40.6398],
                        longitudes: [113.9146,-73.7789]
                    },
                    {
                        latitudes: [22.3089,33.9425],
                        longitudes: [113.9146,-118.4081]
                    },
                    {
                        latitudes: [22.3089,35.7647],
                        longitudes: [113.9146,140.3864]
                    },
                    {
                        latitudes: [22.3089,41.9786],
                        longitudes: [113.9146,-87.9048]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,43.6772],
                        longitudes: [113.9146,-79.6306]
                    },
                    {
                        latitudes: [22.3089,49.0128],
                        longitudes: [113.9146,2.5500]
                    },
                    {
                        latitudes: [22.3089,28.5665],
                        longitudes: [113.9146,77.1031]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,2.7456],
                        longitudes: [113.9146,101.7099]
                    },
                    {
                        latitudes: [22.3089,-33.9461],
                        longitudes: [113.9146,151.1772]
                    },
                    {
                        latitudes: [22.3089,49.0128],
                        longitudes: [113.9146,2.5500]
                    },
                    {
                        latitudes: [22.3089,51.4775],
                        longitudes: [113.9146,-0.4614]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,30.5785],
                        longitudes: [113.9146,103.9471]
                    },
                    {
                        latitudes: [22.3089,40.0801],
                        longitudes: [113.9146,116.5846]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,52.3086],
                        longitudes: [113.9146,4.7639]
                    },
                    {
                        latitudes: [22.3089,24.4330],
                        longitudes: [113.9146,54.6511]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,19.0887],
                        longitudes: [113.9146,72.8679]
                    },
                    {
                        latitudes: [22.3089,23.3924],
                        longitudes: [113.9146,113.2988]
                    },
                    {
                        latitudes: [22.3089,49.0128],
                        longitudes: [113.9146,2.5500]
                    },
                    {
                        latitudes: [22.3089,30.5785],
                        longitudes: [113.9146,103.9471]
                    },
                    {
                        latitudes: [22.3089,28.5665],
                        longitudes: [113.9146,77.1031]
                    },
                    {
                        latitudes: [22.3089,55.4086],
                        longitudes: [113.9146,37.9061]
                    },
                    {
                        latitudes: [22.3089,25.2528],
                        longitudes: [113.9146,55.3644]
                    },
                    {
                        latitudes: [22.3089,41.8045],
                        longitudes: [113.9146,12.2508]
                    },
                    {
                        latitudes: [22.3089,50.0264],
                        longitudes: [113.9146,8.5431]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,40.6398],
                        longitudes: [113.9146,-73.7789]
                    },
                    {
                        latitudes: [22.3089,24.9924],
                        longitudes: [113.9146,102.7435]
                    },
                    {
                        latitudes: [22.3089,2.7456],
                        longitudes: [113.9146,101.7099]
                    },
                    {
                        latitudes: [22.3089,33.9425],
                        longitudes: [113.9146,-118.4081]
                    },
                    {
                        latitudes: [22.3089,51.4775],
                        longitudes: [113.9146,-0.4614]
                    },
                    {
                        latitudes: [22.3089,35.7647],
                        longitudes: [113.9146,140.3864]
                    },
                    {
                        latitudes: [22.3089,41.9786],
                        longitudes: [113.9146,-87.9048]
                    },
                    {
                        latitudes: [22.3089,40.0801],
                        longitudes: [113.9146,116.5846]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,-33.9461],
                        longitudes: [113.9146,151.1772]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,34.4471],
                        longitudes: [113.9146,108.7516]
                    },
                    {
                        latitudes: [22.3089,43.6772],
                        longitudes: [113.9146,-79.6306]
                    },
                    {
                        latitudes: [22.3089,23.3924],
                        longitudes: [113.9146,113.2988]
                    },
                    {
                        latitudes: [22.3089,40.0801],
                        longitudes: [113.9146,116.5846]
                    },
                    {
                        latitudes: [22.3089,35.7647],
                        longitudes: [113.9146,140.3864]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,25.2528],
                        longitudes: [113.9146,55.3644]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,24.4330],
                        longitudes: [113.9146,54.6511]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,24.4330],
                        longitudes: [113.9146,54.6511]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,30.5785],
                        longitudes: [113.9146,103.9471]
                    },
                    {
                        latitudes: [22.3089,40.0801],
                        longitudes: [113.9146,116.5846]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,35.7647],
                        longitudes: [113.9146,140.3864]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,23.3924],
                        longitudes: [113.9146,113.2988]
                    },
                    {
                        latitudes: [22.3089,30.5785],
                        longitudes: [113.9146,103.9471]
                    },
                    {
                        latitudes: [22.3089,24.9924],
                        longitudes: [113.9146,102.7435]
                    },
                    {
                        latitudes: [22.3089,40.0801],
                        longitudes: [113.9146,116.5846]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,25.0777],
                        longitudes: [113.9146,121.2328]
                    },
                    {
                        latitudes: [22.3089,34.4471],
                        longitudes: [113.9146,108.7516]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,52.3086],
                        longitudes: [113.9146,4.7639]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,50.0264],
                        longitudes: [113.9146,8.5431]
                    },
                    {
                        latitudes: [22.3089,48.3538],
                        longitudes: [113.9146,11.7861]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,2.7456],
                        longitudes: [113.9146,101.7099]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,24.9924],
                        longitudes: [113.9146,102.7435]
                    },
                    {
                        latitudes: [22.3089,31.1434],
                        longitudes: [113.9146,121.8052]
                    },
                    {
                        latitudes: [22.3089,34.4471],
                        longitudes: [113.9146,108.7516]
                    },
                    {
                        latitudes: [22.3089,35.7647],
                        longitudes: [113.9146,140.3864]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,-33.9461],
                        longitudes: [113.9146,151.1772]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,55.4086],
                        longitudes: [113.9146,37.9061]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,37.4691],
                        longitudes: [113.9146,126.4505]
                    },
                    {
                        latitudes: [22.3089,40.9769],
                        longitudes: [113.9146,28.8146]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,40.6925],
                        longitudes: [113.9146,-74.1687]
                    },
                    {
                        latitudes: [22.3089,41.9786],
                        longitudes: [113.9146,-87.9048]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,55.4086],
                        longitudes: [113.9146,37.9061]
                    },
                    {
                        latitudes: [22.3089,13.6811],
                        longitudes: [113.9146,100.7473]
                    },
                    {
                        latitudes: [22.3089,24.9924],
                        longitudes: [113.9146,102.7435]
                    },
                    {
                        latitudes: [22.3089,41.9786],
                        longitudes: [113.9146,-87.9048]
                    },
                    {
                        latitudes: [22.3089,37.6190],
                        longitudes: [113.9146,-122.3749]
                    },
                    {
                        latitudes: [22.3089,1.3502],
                        longitudes: [113.9146,103.9944]
                    },
                    {
                        latitudes: [22.3089,-33.9461],
                        longitudes: [113.9146,151.1772]
                    },
                    {
                        latitudes: [22.3089,51.4775],
                        longitudes: [113.9146,-0.4614]
                    },
                    {
                        latitudes: [22.3089,-33.9461],
                        longitudes: [113.9146,151.1772]
                    }],
                images: [{
			            label: "Flights from Hong Kong",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Delhi = {
                    id: "Delhi" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Delhi",
                    latitude: 28.5665,
                    longitude: 77.1031,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 77.1031,
                    zoomLatitude: 28.5665,
                    lines: [
                    {
                        latitudes: [28.5665,13.6811],
                        longitudes: [77.1031,100.7473]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,25.2528],
                        longitudes: [77.1031,55.3644]
                    },
                    {
                        latitudes: [28.5665,24.4330],
                        longitudes: [77.1031,54.6511]
                    },
                    {
                        latitudes: [28.5665,13.6811],
                        longitudes: [77.1031,100.7473]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,50.9014],
                        longitudes: [77.1031,4.4844]
                    },
                    {
                        latitudes: [28.5665,25.2528],
                        longitudes: [77.1031,55.3644]
                    },
                    {
                        latitudes: [28.5665,22.3089],
                        longitudes: [77.1031,113.9146]
                    },
                    {
                        latitudes: [28.5665,2.7456],
                        longitudes: [77.1031,101.7099]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    },
                    {
                        latitudes: [28.5665,1.3502],
                        longitudes: [77.1031,103.9944]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    },
                    {
                        latitudes: [28.5665,50.9014],
                        longitudes: [77.1031,4.4844]
                    },
                    {
                        latitudes: [28.5665,49.0128],
                        longitudes: [77.1031,2.5500]
                    },
                    {
                        latitudes: [28.5665,13.6811],
                        longitudes: [77.1031,100.7473]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,49.0128],
                        longitudes: [77.1031,2.5500]
                    },
                    {
                        latitudes: [28.5665,25.2528],
                        longitudes: [77.1031,55.3644]
                    },
                    {
                        latitudes: [28.5665,50.0264],
                        longitudes: [77.1031,8.5431]
                    },
                    {
                        latitudes: [28.5665,22.3089],
                        longitudes: [77.1031,113.9146]
                    },
                    {
                        latitudes: [28.5665,37.4691],
                        longitudes: [77.1031,126.4505]
                    },
                    {
                        latitudes: [28.5665,40.9769],
                        longitudes: [77.1031,28.8146]
                    },
                    {
                        latitudes: [28.5665,40.6398],
                        longitudes: [77.1031,-73.7789]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    },
                    {
                        latitudes: [28.5665,48.3538],
                        longitudes: [77.1031,11.7861]
                    },
                    {
                        latitudes: [28.5665,35.7647],
                        longitudes: [77.1031,140.3864]
                    },
                    {
                        latitudes: [28.5665,41.9786],
                        longitudes: [77.1031,-87.9048]
                    },
                    {
                        latitudes: [28.5665,31.1434],
                        longitudes: [77.1031,121.8052]
                    },
                    {
                        latitudes: [28.5665,1.3502],
                        longitudes: [77.1031,103.9944]
                    },
                    {
                        latitudes: [28.5665,-33.9461],
                        longitudes: [77.1031,151.1772]
                    },
                    {
                        latitudes: [28.5665,48.1103],
                        longitudes: [77.1031,16.5697]
                    },
                    {
                        latitudes: [28.5665,41.8045],
                        longitudes: [77.1031,12.2508]
                    },
                    {
                        latitudes: [28.5665,25.0777],
                        longitudes: [77.1031,121.2328]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    },
                    {
                        latitudes: [28.5665,40.0801],
                        longitudes: [77.1031,116.5846]
                    },
                    {
                        latitudes: [28.5665,41.8045],
                        longitudes: [77.1031,12.2508]
                    },
                    {
                        latitudes: [28.5665,25.0777],
                        longitudes: [77.1031,121.2328]
                    },
                    {
                        latitudes: [28.5665,13.6811],
                        longitudes: [77.1031,100.7473]
                    },
                    {
                        latitudes: [28.5665,22.3089],
                        longitudes: [77.1031,113.9146]
                    },
                    {
                        latitudes: [28.5665,23.3924],
                        longitudes: [77.1031,113.2988]
                    },
                    {
                        latitudes: [28.5665,25.2528],
                        longitudes: [77.1031,55.3644]
                    },
                    {
                        latitudes: [28.5665,24.4330],
                        longitudes: [77.1031,54.6511]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    },
                    {
                        latitudes: [28.5665,35.7647],
                        longitudes: [77.1031,140.3864]
                    },
                    {
                        latitudes: [28.5665,52.3086],
                        longitudes: [77.1031,4.7639]
                    },
                    {
                        latitudes: [28.5665,50.0264],
                        longitudes: [77.1031,8.5431]
                    },
                    {
                        latitudes: [28.5665,48.3538],
                        longitudes: [77.1031,11.7861]
                    },
                    {
                        latitudes: [28.5665,2.7456],
                        longitudes: [77.1031,101.7099]
                    },
                    {
                        latitudes: [28.5665,31.1434],
                        longitudes: [77.1031,121.8052]
                    },
                    {
                        latitudes: [28.5665,35.7647],
                        longitudes: [77.1031,140.3864]
                    },
                    {
                        latitudes: [28.5665,48.1103],
                        longitudes: [77.1031,16.5697]
                    },
                    {
                        latitudes: [28.5665,37.4691],
                        longitudes: [77.1031,126.4505]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,19.0887],
                        longitudes: [77.1031,72.8679]
                    },
                    {
                        latitudes: [28.5665,23.3924],
                        longitudes: [77.1031,113.2988]
                    },
                    {
                        latitudes: [28.5665,25.2528],
                        longitudes: [77.1031,55.3644]
                    },
                    {
                        latitudes: [28.5665,50.9014],
                        longitudes: [77.1031,4.4844]
                    },
                    {
                        latitudes: [28.5665,1.3502],
                        longitudes: [77.1031,103.9944]
                    },
                    {
                        latitudes: [28.5665,13.6811],
                        longitudes: [77.1031,100.7473]
                    },
                    {
                        latitudes: [28.5665,40.9769],
                        longitudes: [77.1031,28.8146]
                    },
                    {
                        latitudes: [28.5665,40.6925],
                        longitudes: [77.1031,-74.1687]
                    },
                    {
                        latitudes: [28.5665,51.4775],
                        longitudes: [77.1031,-0.4614]
                    }],
                images: [{
			            label: "Flights from Delhi",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Seoul = {
                    id: "Seoul" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Seoul",
                    latitude: 37.4691,
                    longitude: 126.4505,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 126.4505,
                    zoomLatitude: 37.4691,
                    lines: [
                    {
                        latitudes: [37.4691,30.5785],
                        longitudes: [126.4505,103.9471]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,32.8968],
                        longitudes: [126.4505,-97.0380]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,49.0128],
                        longitudes: [126.4505,2.5500]
                    },
                    {
                        latitudes: [37.4691,28.5665],
                        longitudes: [126.4505,77.1031]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,1.3502],
                        longitudes: [126.4505,103.9944]
                    },
                    {
                        latitudes: [37.4691,51.4775],
                        longitudes: [126.4505,-0.4614]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,40.0801],
                        longitudes: [126.4505,116.5846]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,23.3924],
                        longitudes: [126.4505,113.2988]
                    },
                    {
                        latitudes: [37.4691,40.0801],
                        longitudes: [126.4505,116.5846]
                    },
                    {
                        latitudes: [37.4691,31.1434],
                        longitudes: [126.4505,121.8052]
                    },
                    {
                        latitudes: [37.4691,2.7456],
                        longitudes: [126.4505,101.7099]
                    },
                    {
                        latitudes: [37.4691,32.8968],
                        longitudes: [126.4505,-97.0380]
                    },
                    {
                        latitudes: [37.4691,40.6398],
                        longitudes: [126.4505,-73.7789]
                    },
                    {
                        latitudes: [37.4691,36.0801],
                        longitudes: [126.4505,-115.1522]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,41.9786],
                        longitudes: [126.4505,-87.9048]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,25.2528],
                        longitudes: [126.4505,55.3644]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,24.4330],
                        longitudes: [126.4505,54.6511]
                    },
                    {
                        latitudes: [37.4691,31.1434],
                        longitudes: [126.4505,121.8052]
                    },
                    {
                        latitudes: [37.4691,59.8003],
                        longitudes: [126.4505,30.2625]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,52.3086],
                        longitudes: [126.4505,4.7639]
                    },
                    {
                        latitudes: [37.4691,24.4330],
                        longitudes: [126.4505,54.6511]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,19.0887],
                        longitudes: [126.4505,72.8679]
                    },
                    {
                        latitudes: [37.4691,23.3924],
                        longitudes: [126.4505,113.2988]
                    },
                    {
                        latitudes: [37.4691,49.0128],
                        longitudes: [126.4505,2.5500]
                    },
                    {
                        latitudes: [37.4691,32.8968],
                        longitudes: [126.4505,-97.0380]
                    },
                    {
                        latitudes: [37.4691,25.2528],
                        longitudes: [126.4505,55.3644]
                    },
                    {
                        latitudes: [37.4691,50.0264],
                        longitudes: [126.4505,8.5431]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,40.9769],
                        longitudes: [126.4505,28.8146]
                    },
                    {
                        latitudes: [37.4691,40.6398],
                        longitudes: [126.4505,-73.7789]
                    },
                    {
                        latitudes: [37.4691,24.9924],
                        longitudes: [126.4505,102.7435]
                    },
                    {
                        latitudes: [37.4691,2.7456],
                        longitudes: [126.4505,101.7099]
                    },
                    {
                        latitudes: [37.4691,36.0801],
                        longitudes: [126.4505,-115.1522]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,59.8003],
                        longitudes: [126.4505,30.2625]
                    },
                    {
                        latitudes: [37.4691,51.4775],
                        longitudes: [126.4505,-0.4614]
                    },
                    {
                        latitudes: [37.4691,40.4936],
                        longitudes: [126.4505,-3.5668]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,41.9786],
                        longitudes: [126.4505,-87.9048]
                    },
                    {
                        latitudes: [37.4691,40.0801],
                        longitudes: [126.4505,116.5846]
                    },
                    {
                        latitudes: [37.4691,31.1434],
                        longitudes: [126.4505,121.8052]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,1.3502],
                        longitudes: [126.4505,103.9944]
                    },
                    {
                        latitudes: [37.4691,-33.9461],
                        longitudes: [126.4505,151.1772]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,48.1103],
                        longitudes: [126.4505,16.5697]
                    },
                    {
                        latitudes: [37.4691,34.4471],
                        longitudes: [126.4505,108.7516]
                    },
                    {
                        latitudes: [37.4691,43.6772],
                        longitudes: [126.4505,-79.6306]
                    },
                    {
                        latitudes: [37.4691,52.3086],
                        longitudes: [126.4505,4.7639]
                    },
                    {
                        latitudes: [37.4691,50.0264],
                        longitudes: [126.4505,8.5431]
                    },
                    {
                        latitudes: [37.4691,48.3538],
                        longitudes: [126.4505,11.7861]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,2.7456],
                        longitudes: [126.4505,101.7099]
                    },
                    {
                        latitudes: [37.4691,24.9924],
                        longitudes: [126.4505,102.7435]
                    },
                    {
                        latitudes: [37.4691,31.1434],
                        longitudes: [126.4505,121.8052]
                    },
                    {
                        latitudes: [37.4691,34.4471],
                        longitudes: [126.4505,108.7516]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,24.4330],
                        longitudes: [126.4505,54.6511]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,23.3924],
                        longitudes: [126.4505,113.2988]
                    },
                    {
                        latitudes: [37.4691,49.0128],
                        longitudes: [126.4505,2.5500]
                    },
                    {
                        latitudes: [37.4691,30.5785],
                        longitudes: [126.4505,103.9471]
                    },
                    {
                        latitudes: [37.4691,28.5665],
                        longitudes: [126.4505,77.1031]
                    },
                    {
                        latitudes: [37.4691,50.0264],
                        longitudes: [126.4505,8.5431]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,40.9769],
                        longitudes: [126.4505,28.8146]
                    },
                    {
                        latitudes: [37.4691,40.6398],
                        longitudes: [126.4505,-73.7789]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,51.4775],
                        longitudes: [126.4505,-0.4614]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,41.9786],
                        longitudes: [126.4505,-87.9048]
                    },
                    {
                        latitudes: [37.4691,40.0801],
                        longitudes: [126.4505,116.5846]
                    },
                    {
                        latitudes: [37.4691,31.1434],
                        longitudes: [126.4505,121.8052]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,1.3502],
                        longitudes: [126.4505,103.9944]
                    },
                    {
                        latitudes: [37.4691,-33.9461],
                        longitudes: [126.4505,151.1772]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,34.4471],
                        longitudes: [126.4505,108.7516]
                    },
                    {
                        latitudes: [37.4691,-33.9461],
                        longitudes: [126.4505,151.1772]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,1.3502],
                        longitudes: [126.4505,103.9944]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,22.3089],
                        longitudes: [126.4505,113.9146]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,40.9769],
                        longitudes: [126.4505,28.8146]
                    },
                    {
                        latitudes: [37.4691,-33.9461],
                        longitudes: [126.4505,151.1772]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,25.0777],
                        longitudes: [126.4505,121.2328]
                    },
                    {
                        latitudes: [37.4691,40.6398],
                        longitudes: [126.4505,-73.7789]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,40.6398],
                        longitudes: [126.4505,-73.7789]
                    },
                    {
                        latitudes: [37.4691,33.9425],
                        longitudes: [126.4505,-118.4081]
                    },
                    {
                        latitudes: [37.4691,41.9786],
                        longitudes: [126.4505,-87.9048]
                    },
                    {
                        latitudes: [37.4691,37.6190],
                        longitudes: [126.4505,-122.3749]
                    },
                    {
                        latitudes: [37.4691,13.6811],
                        longitudes: [126.4505,100.7473]
                    },
                    {
                        latitudes: [37.4691,35.7647],
                        longitudes: [126.4505,140.3864]
                    }],
                images: [{
			            label: "Flights from Seoul",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var KualaLumpur = {
                    id: "KualaLumpur" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Kuala Lumpur",
                    latitude: 2.7456,
                    longitude: 101.7099,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 101.7099,
                    zoomLatitude: 2.7456,
                    lines: [
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,19.0887],
                        longitudes: [101.7099,72.8679]
                    },
                    {
                        latitudes: [2.7456,28.5665],
                        longitudes: [101.7099,77.1031]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,49.0128],
                        longitudes: [101.7099,2.5500]
                    },
                    {
                        latitudes: [2.7456,50.0264],
                        longitudes: [101.7099,8.5431]
                    },
                    {
                        latitudes: [2.7456,51.4775],
                        longitudes: [101.7099,-0.4614]
                    },
                    {
                        latitudes: [2.7456,35.7647],
                        longitudes: [101.7099,140.3864]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,52.3086],
                        longitudes: [101.7099,4.7639]
                    },
                    {
                        latitudes: [2.7456,49.0128],
                        longitudes: [101.7099,2.5500]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,23.3924],
                        longitudes: [101.7099,113.2988]
                    },
                    {
                        latitudes: [2.7456,22.3089],
                        longitudes: [101.7099,113.9146]
                    },
                    {
                        latitudes: [2.7456,24.9924],
                        longitudes: [101.7099,102.7435]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,24.4330],
                        longitudes: [101.7099,54.6511]
                    },
                    {
                        latitudes: [2.7456,25.0777],
                        longitudes: [101.7099,121.2328]
                    },
                    {
                        latitudes: [2.7456,25.0777],
                        longitudes: [101.7099,121.2328]
                    },
                    {
                        latitudes: [2.7456,22.3089],
                        longitudes: [101.7099,113.9146]
                    },
                    {
                        latitudes: [2.7456,23.3924],
                        longitudes: [101.7099,113.2988]
                    },
                    {
                        latitudes: [2.7456,40.0801],
                        longitudes: [101.7099,116.5846]
                    },
                    {
                        latitudes: [2.7456,31.1434],
                        longitudes: [101.7099,121.8052]
                    },
                    {
                        latitudes: [2.7456,30.5785],
                        longitudes: [101.7099,103.9471]
                    },
                    {
                        latitudes: [2.7456,37.4691],
                        longitudes: [101.7099,126.4505]
                    },
                    {
                        latitudes: [2.7456,40.0801],
                        longitudes: [101.7099,116.5846]
                    },
                    {
                        latitudes: [2.7456,31.1434],
                        longitudes: [101.7099,121.8052]
                    },
                    {
                        latitudes: [2.7456,-33.9461],
                        longitudes: [101.7099,151.1772]
                    },
                    {
                        latitudes: [2.7456,25.0777],
                        longitudes: [101.7099,121.2328]
                    },
                    {
                        latitudes: [2.7456,25.2528],
                        longitudes: [101.7099,55.3644]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,24.4330],
                        longitudes: [101.7099,54.6511]
                    },
                    {
                        latitudes: [2.7456,25.2528],
                        longitudes: [101.7099,55.3644]
                    },
                    {
                        latitudes: [2.7456,35.7647],
                        longitudes: [101.7099,140.3864]
                    },
                    {
                        latitudes: [2.7456,37.4691],
                        longitudes: [101.7099,126.4505]
                    },
                    {
                        latitudes: [2.7456,52.3086],
                        longitudes: [101.7099,4.7639]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,52.3086],
                        longitudes: [101.7099,4.7639]
                    },
                    {
                        latitudes: [2.7456,24.4330],
                        longitudes: [101.7099,54.6511]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,19.0887],
                        longitudes: [101.7099,72.8679]
                    },
                    {
                        latitudes: [2.7456,23.3924],
                        longitudes: [101.7099,113.2988]
                    },
                    {
                        latitudes: [2.7456,49.0128],
                        longitudes: [101.7099,2.5500]
                    },
                    {
                        latitudes: [2.7456,28.5665],
                        longitudes: [101.7099,77.1031]
                    },
                    {
                        latitudes: [2.7456,25.2528],
                        longitudes: [101.7099,55.3644]
                    },
                    {
                        latitudes: [2.7456,50.0264],
                        longitudes: [101.7099,8.5431]
                    },
                    {
                        latitudes: [2.7456,22.3089],
                        longitudes: [101.7099,113.9146]
                    },
                    {
                        latitudes: [2.7456,37.4691],
                        longitudes: [101.7099,126.4505]
                    },
                    {
                        latitudes: [2.7456,40.9769],
                        longitudes: [101.7099,28.8146]
                    },
                    {
                        latitudes: [2.7456,24.9924],
                        longitudes: [101.7099,102.7435]
                    },
                    {
                        latitudes: [2.7456,51.4775],
                        longitudes: [101.7099,-0.4614]
                    },
                    {
                        latitudes: [2.7456,35.7647],
                        longitudes: [101.7099,140.3864]
                    },
                    {
                        latitudes: [2.7456,40.0801],
                        longitudes: [101.7099,116.5846]
                    },
                    {
                        latitudes: [2.7456,31.1434],
                        longitudes: [101.7099,121.8052]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,-33.9461],
                        longitudes: [101.7099,151.1772]
                    },
                    {
                        latitudes: [2.7456,25.0777],
                        longitudes: [101.7099,121.2328]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,31.1434],
                        longitudes: [101.7099,121.8052]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,25.2528],
                        longitudes: [101.7099,55.3644]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,13.6811],
                        longitudes: [101.7099,100.7473]
                    },
                    {
                        latitudes: [2.7456,40.9769],
                        longitudes: [101.7099,28.8146]
                    },
                    {
                        latitudes: [2.7456,1.3502],
                        longitudes: [101.7099,103.9944]
                    },
                    {
                        latitudes: [2.7456,-33.9461],
                        longitudes: [101.7099,151.1772]
                    },
                    {
                        latitudes: [2.7456,24.4330],
                        longitudes: [101.7099,54.6511]
                    }],
                images: [{
			            label: "Flights from Kuala Lumpur",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Singapore = {
                    id: "Singapore" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Singapore",
                    latitude: 1.3502,
                    longitude: 103.9944,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 103.9944,
                    zoomLatitude: 1.3502,
                    lines: [
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,23.3924],
                        longitudes: [103.9944,113.2988]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,19.0887],
                        longitudes: [103.9944,72.8679]
                    },
                    {
                        latitudes: [1.3502,28.5665],
                        longitudes: [103.9944,77.1031]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,49.0128],
                        longitudes: [103.9944,2.5500]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,28.5665],
                        longitudes: [103.9944,77.1031]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,37.4691],
                        longitudes: [103.9944,126.4505]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,49.0128],
                        longitudes: [103.9944,2.5500]
                    },
                    {
                        latitudes: [1.3502,51.4775],
                        longitudes: [103.9944,-0.4614]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,30.5785],
                        longitudes: [103.9944,103.9471]
                    },
                    {
                        latitudes: [1.3502,40.0801],
                        longitudes: [103.9944,116.5846]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,23.3924],
                        longitudes: [103.9944,113.2988]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,25.2528],
                        longitudes: [103.9944,55.3644]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,51.4775],
                        longitudes: [103.9944,-0.4614]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,40.0801],
                        longitudes: [103.9944,116.5846]
                    },
                    {
                        latitudes: [1.3502,37.4691],
                        longitudes: [103.9944,126.4505]
                    },
                    {
                        latitudes: [1.3502,52.3086],
                        longitudes: [103.9944,4.7639]
                    },
                    {
                        latitudes: [1.3502,50.0264],
                        longitudes: [103.9944,8.5431]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,30.5785],
                        longitudes: [103.9944,103.9471]
                    },
                    {
                        latitudes: [1.3502,24.9924],
                        longitudes: [103.9944,102.7435]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,25.2528],
                        longitudes: [103.9944,55.3644]
                    },
                    {
                        latitudes: [1.3502,24.9924],
                        longitudes: [103.9944,102.7435]
                    },
                    {
                        latitudes: [1.3502,31.1434],
                        longitudes: [103.9944,121.8052]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,37.4691],
                        longitudes: [103.9944,126.4505]
                    },
                    {
                        latitudes: [1.3502,25.2528],
                        longitudes: [103.9944,55.3644]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,55.6179],
                        longitudes: [103.9944,12.6560]
                    },
                    {
                        latitudes: [1.3502,52.3086],
                        longitudes: [103.9944,4.7639]
                    },
                    {
                        latitudes: [1.3502,41.2971],
                        longitudes: [103.9944,2.0785]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,19.0887],
                        longitudes: [103.9944,72.8679]
                    },
                    {
                        latitudes: [1.3502,23.3924],
                        longitudes: [103.9944,113.2988]
                    },
                    {
                        latitudes: [1.3502,49.0128],
                        longitudes: [103.9944,2.5500]
                    },
                    {
                        latitudes: [1.3502,55.6179],
                        longitudes: [103.9944,12.6560]
                    },
                    {
                        latitudes: [1.3502,30.5785],
                        longitudes: [103.9944,103.9471]
                    },
                    {
                        latitudes: [1.3502,28.5665],
                        longitudes: [103.9944,77.1031]
                    },
                    {
                        latitudes: [1.3502,55.4086],
                        longitudes: [103.9944,37.9061]
                    },
                    {
                        latitudes: [1.3502,25.2528],
                        longitudes: [103.9944,55.3644]
                    },
                    {
                        latitudes: [1.3502,40.6925],
                        longitudes: [103.9944,-74.1687]
                    },
                    {
                        latitudes: [1.3502,41.8045],
                        longitudes: [103.9944,12.2508]
                    },
                    {
                        latitudes: [1.3502,50.0264],
                        longitudes: [103.9944,8.5431]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,37.4691],
                        longitudes: [103.9944,126.4505]
                    },
                    {
                        latitudes: [1.3502,40.9769],
                        longitudes: [103.9944,28.8146]
                    },
                    {
                        latitudes: [1.3502,24.9924],
                        longitudes: [103.9944,102.7435]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,51.4775],
                        longitudes: [103.9944,-0.4614]
                    },
                    {
                        latitudes: [1.3502,48.3538],
                        longitudes: [103.9944,11.7861]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,40.0801],
                        longitudes: [103.9944,116.5846]
                    },
                    {
                        latitudes: [1.3502,31.1434],
                        longitudes: [103.9944,121.8052]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,40.9769],
                        longitudes: [103.9944,28.8146]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,23.3924],
                        longitudes: [103.9944,113.2988]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,2.7456],
                        longitudes: [103.9944,101.7099]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,13.6811],
                        longitudes: [103.9944,100.7473]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,25.0777],
                        longitudes: [103.9944,121.2328]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,55.4086],
                        longitudes: [103.9944,37.9061]
                    },
                    {
                        latitudes: [1.3502,40.6925],
                        longitudes: [103.9944,-74.1687]
                    },
                    {
                        latitudes: [1.3502,50.0264],
                        longitudes: [103.9944,8.5431]
                    },
                    {
                        latitudes: [1.3502,22.3089],
                        longitudes: [103.9944,113.9146]
                    },
                    {
                        latitudes: [1.3502,35.7647],
                        longitudes: [103.9944,140.3864]
                    },
                    {
                        latitudes: [1.3502,24.4330],
                        longitudes: [103.9944,54.6511]
                    },
                    {
                        latitudes: [1.3502,48.3538],
                        longitudes: [103.9944,11.7861]
                    },
                    {
                        latitudes: [1.3502,-33.9461],
                        longitudes: [103.9944,151.1772]
                    },
                    {
                        latitudes: [1.3502,51.4775],
                        longitudes: [103.9944,-0.4614]
                    },
                    {
                        latitudes: [1.3502,48.3538],
                        longitudes: [103.9944,11.7861]
                    }],
                images: [{
			            label: "Flights from Singapore",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Sydney = {
                    id: "Sydney" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Sydney",
                    latitude: -33.9461,
                    longitude: 151.1772,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 151.1772,
                    zoomLatitude: -33.9461,
                    lines: [
                    {
                        latitudes: [-33.9461,32.8968],
                        longitudes: [151.1772,-97.0380]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,28.5665],
                        longitudes: [151.1772,77.1031]
                    },
                    {
                        latitudes: [-33.9461,22.3089],
                        longitudes: [151.1772,113.9146]
                    },
                    {
                        latitudes: [-33.9461,24.4330],
                        longitudes: [151.1772,54.6511]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,40.0801],
                        longitudes: [151.1772,116.5846]
                    },
                    {
                        latitudes: [-33.9461,31.1434],
                        longitudes: [151.1772,121.8052]
                    },
                    {
                        latitudes: [-33.9461,25.0777],
                        longitudes: [151.1772,121.2328]
                    },
                    {
                        latitudes: [-33.9461,22.3089],
                        longitudes: [151.1772,113.9146]
                    },
                    {
                        latitudes: [-33.9461,23.3924],
                        longitudes: [151.1772,113.2988]
                    },
                    {
                        latitudes: [-33.9461,2.7456],
                        longitudes: [151.1772,101.7099]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,13.6811],
                        longitudes: [151.1772,100.7473]
                    },
                    {
                        latitudes: [-33.9461,25.2528],
                        longitudes: [151.1772,55.3644]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,24.4330],
                        longitudes: [151.1772,54.6511]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,35.7647],
                        longitudes: [151.1772,140.3864]
                    },
                    {
                        latitudes: [-33.9461,37.4691],
                        longitudes: [151.1772,126.4505]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,2.7456],
                        longitudes: [151.1772,101.7099]
                    },
                    {
                        latitudes: [-33.9461,31.1434],
                        longitudes: [151.1772,121.8052]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,31.1434],
                        longitudes: [151.1772,121.8052]
                    },
                    {
                        latitudes: [-33.9461,37.6190],
                        longitudes: [151.1772,-122.3749]
                    },
                    {
                        latitudes: [-33.9461,37.4691],
                        longitudes: [151.1772,126.4505]
                    },
                    {
                        latitudes: [-33.9461,13.6811],
                        longitudes: [151.1772,100.7473]
                    },
                    {
                        latitudes: [-33.9461,32.8968],
                        longitudes: [151.1772,-97.0380]
                    },
                    {
                        latitudes: [-33.9461,25.2528],
                        longitudes: [151.1772,55.3644]
                    },
                    {
                        latitudes: [-33.9461,22.3089],
                        longitudes: [151.1772,113.9146]
                    },
                    {
                        latitudes: [-33.9461,37.4691],
                        longitudes: [151.1772,126.4505]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,35.7647],
                        longitudes: [151.1772,140.3864]
                    },
                    {
                        latitudes: [-33.9461,31.1434],
                        longitudes: [151.1772,121.8052]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,13.6811],
                        longitudes: [151.1772,100.7473]
                    },
                    {
                        latitudes: [-33.9461,37.4691],
                        longitudes: [151.1772,126.4505]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,37.6190],
                        longitudes: [151.1772,-122.3749]
                    },
                    {
                        latitudes: [-33.9461,2.7456],
                        longitudes: [151.1772,101.7099]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,37.6190],
                        longitudes: [151.1772,-122.3749]
                    },
                    {
                        latitudes: [-33.9461,24.4330],
                        longitudes: [151.1772,54.6511]
                    },
                    {
                        latitudes: [-33.9461,22.3089],
                        longitudes: [151.1772,113.9146]
                    },
                    {
                        latitudes: [-33.9461,33.9425],
                        longitudes: [151.1772,-118.4081]
                    },
                    {
                        latitudes: [-33.9461,1.3502],
                        longitudes: [151.1772,103.9944]
                    },
                    {
                        latitudes: [-33.9461,22.3089],
                        longitudes: [151.1772,113.9146]
                    }],
                images: [{
			            label: "Flights from Sydney",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Beijing = {
                    id: "Beijing" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Beijing",
                    latitude: 40.0801,
                    longitude: 116.5846,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 116.5846,
                    zoomLatitude: 40.0801,
                    lines: [
                    {
                        latitudes: [40.0801,30.5785],
                        longitudes: [116.5846,103.9471]
                    },
                    {
                        latitudes: [40.0801,24.9924],
                        longitudes: [116.5846,102.7435]
                    },
                    {
                        latitudes: [40.0801,31.1434],
                        longitudes: [116.5846,121.8052]
                    },
                    {
                        latitudes: [40.0801,41.9786],
                        longitudes: [116.5846,-87.9048]
                    },
                    {
                        latitudes: [40.0801,24.4330],
                        longitudes: [116.5846,54.6511]
                    },
                    {
                        latitudes: [40.0801,43.6772],
                        longitudes: [116.5846,-79.6306]
                    },
                    {
                        latitudes: [40.0801,49.0128],
                        longitudes: [116.5846,2.5500]
                    },
                    {
                        latitudes: [40.0801,51.4775],
                        longitudes: [116.5846,-0.4614]
                    },
                    {
                        latitudes: [40.0801,25.0777],
                        longitudes: [116.5846,121.2328]
                    },
                    {
                        latitudes: [40.0801,13.6811],
                        longitudes: [116.5846,100.7473]
                    },
                    {
                        latitudes: [40.0801,23.3924],
                        longitudes: [116.5846,113.2988]
                    },
                    {
                        latitudes: [40.0801,49.0128],
                        longitudes: [116.5846,2.5500]
                    },
                    {
                        latitudes: [40.0801,55.6179],
                        longitudes: [116.5846,12.6560]
                    },
                    {
                        latitudes: [40.0801,30.5785],
                        longitudes: [116.5846,103.9471]
                    },
                    {
                        latitudes: [40.0801,28.5665],
                        longitudes: [116.5846,77.1031]
                    },
                    {
                        latitudes: [40.0801,51.2895],
                        longitudes: [116.5846,6.7668]
                    },
                    {
                        latitudes: [40.0801,25.2528],
                        longitudes: [116.5846,55.3644]
                    },
                    {
                        latitudes: [40.0801,41.8045],
                        longitudes: [116.5846,12.2508]
                    },
                    {
                        latitudes: [40.0801,50.0264],
                        longitudes: [116.5846,8.5431]
                    },
                    {
                        latitudes: [40.0801,22.3089],
                        longitudes: [116.5846,113.9146]
                    },
                    {
                        latitudes: [40.0801,29.9844],
                        longitudes: [116.5846,-95.3414]
                    },
                    {
                        latitudes: [40.0801,37.4691],
                        longitudes: [116.5846,126.4505]
                    },
                    {
                        latitudes: [40.0801,40.9769],
                        longitudes: [116.5846,28.8146]
                    },
                    {
                        latitudes: [40.0801,40.6398],
                        longitudes: [116.5846,-73.7789]
                    },
                    {
                        latitudes: [40.0801,24.9924],
                        longitudes: [116.5846,102.7435]
                    },
                    {
                        latitudes: [40.0801,33.9425],
                        longitudes: [116.5846,-118.4081]
                    },
                    {
                        latitudes: [40.0801,51.4775],
                        longitudes: [116.5846,-0.4614]
                    },
                    {
                        latitudes: [40.0801,40.4936],
                        longitudes: [116.5846,-3.5668]
                    },
                    {
                        latitudes: [40.0801,48.3538],
                        longitudes: [116.5846,11.7861]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,41.9786],
                        longitudes: [116.5846,-87.9048]
                    },
                    {
                        latitudes: [40.0801,31.1434],
                        longitudes: [116.5846,121.8052]
                    },
                    {
                        latitudes: [40.0801,37.6190],
                        longitudes: [116.5846,-122.3749]
                    },
                    {
                        latitudes: [40.0801,1.3502],
                        longitudes: [116.5846,103.9944]
                    },
                    {
                        latitudes: [40.0801,-33.9461],
                        longitudes: [116.5846,151.1772]
                    },
                    {
                        latitudes: [40.0801,25.0777],
                        longitudes: [116.5846,121.2328]
                    },
                    {
                        latitudes: [40.0801,48.1103],
                        longitudes: [116.5846,16.5697]
                    },
                    {
                        latitudes: [40.0801,34.4471],
                        longitudes: [116.5846,108.7516]
                    },
                    {
                        latitudes: [40.0801,43.6772],
                        longitudes: [116.5846,-79.6306]
                    },
                    {
                        latitudes: [40.0801,25.0777],
                        longitudes: [116.5846,121.2328]
                    },
                    {
                        latitudes: [40.0801,22.3089],
                        longitudes: [116.5846,113.9146]
                    },
                    {
                        latitudes: [40.0801,52.3086],
                        longitudes: [116.5846,4.7639]
                    },
                    {
                        latitudes: [40.0801,23.3924],
                        longitudes: [116.5846,113.2988]
                    },
                    {
                        latitudes: [40.0801,30.5785],
                        longitudes: [116.5846,103.9471]
                    },
                    {
                        latitudes: [40.0801,22.3089],
                        longitudes: [116.5846,113.9146]
                    },
                    {
                        latitudes: [40.0801,37.4691],
                        longitudes: [116.5846,126.4505]
                    },
                    {
                        latitudes: [40.0801,24.9924],
                        longitudes: [116.5846,102.7435]
                    },
                    {
                        latitudes: [40.0801,2.7456],
                        longitudes: [116.5846,101.7099]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,34.4471],
                        longitudes: [116.5846,108.7516]
                    },
                    {
                        latitudes: [40.0801,2.7456],
                        longitudes: [116.5846,101.7099]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,25.2528],
                        longitudes: [116.5846,55.3644]
                    },
                    {
                        latitudes: [40.0801,24.4330],
                        longitudes: [116.5846,54.6511]
                    },
                    {
                        latitudes: [40.0801,59.8003],
                        longitudes: [116.5846,30.2625]
                    },
                    {
                        latitudes: [40.0801,24.4330],
                        longitudes: [116.5846,54.6511]
                    },
                    {
                        latitudes: [40.0801,13.6811],
                        longitudes: [116.5846,100.7473]
                    },
                    {
                        latitudes: [40.0801,50.9014],
                        longitudes: [116.5846,4.4844]
                    },
                    {
                        latitudes: [40.0801,23.3924],
                        longitudes: [116.5846,113.2988]
                    },
                    {
                        latitudes: [40.0801,30.5785],
                        longitudes: [116.5846,103.9471]
                    },
                    {
                        latitudes: [40.0801,24.9924],
                        longitudes: [116.5846,102.7435]
                    },
                    {
                        latitudes: [40.0801,59.8003],
                        longitudes: [116.5846,30.2625]
                    },
                    {
                        latitudes: [40.0801,41.9786],
                        longitudes: [116.5846,-87.9048]
                    },
                    {
                        latitudes: [40.0801,25.0777],
                        longitudes: [116.5846,121.2328]
                    },
                    {
                        latitudes: [40.0801,34.4471],
                        longitudes: [116.5846,108.7516]
                    },
                    {
                        latitudes: [40.0801,43.6772],
                        longitudes: [116.5846,-79.6306]
                    },
                    {
                        latitudes: [40.0801,22.3089],
                        longitudes: [116.5846,113.9146]
                    },
                    {
                        latitudes: [40.0801,49.0128],
                        longitudes: [116.5846,2.5500]
                    },
                    {
                        latitudes: [40.0801,40.4936],
                        longitudes: [116.5846,-3.5668]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,1.3502],
                        longitudes: [116.5846,103.9944]
                    },
                    {
                        latitudes: [40.0801,22.3089],
                        longitudes: [116.5846,113.9146]
                    },
                    {
                        latitudes: [40.0801,37.4691],
                        longitudes: [116.5846,126.4505]
                    },
                    {
                        latitudes: [40.0801,52.3086],
                        longitudes: [116.5846,4.7639]
                    },
                    {
                        latitudes: [40.0801,51.2895],
                        longitudes: [116.5846,6.7668]
                    },
                    {
                        latitudes: [40.0801,50.0264],
                        longitudes: [116.5846,8.5431]
                    },
                    {
                        latitudes: [40.0801,48.3538],
                        longitudes: [116.5846,11.7861]
                    },
                    {
                        latitudes: [40.0801,2.7456],
                        longitudes: [116.5846,101.7099]
                    },
                    {
                        latitudes: [40.0801,13.6811],
                        longitudes: [116.5846,100.7473]
                    },
                    {
                        latitudes: [40.0801,49.0128],
                        longitudes: [116.5846,2.5500]
                    },
                    {
                        latitudes: [40.0801,24.9924],
                        longitudes: [116.5846,102.7435]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,31.1434],
                        longitudes: [116.5846,121.8052]
                    },
                    {
                        latitudes: [40.0801,34.4471],
                        longitudes: [116.5846,108.7516]
                    },
                    {
                        latitudes: [40.0801,24.4330],
                        longitudes: [116.5846,54.6511]
                    },
                    {
                        latitudes: [40.0801,30.5785],
                        longitudes: [116.5846,103.9471]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,31.1434],
                        longitudes: [116.5846,121.8052]
                    },
                    {
                        latitudes: [40.0801,48.1103],
                        longitudes: [116.5846,16.5697]
                    },
                    {
                        latitudes: [40.0801,37.4691],
                        longitudes: [116.5846,126.4505]
                    },
                    {
                        latitudes: [40.0801,35.7647],
                        longitudes: [116.5846,140.3864]
                    },
                    {
                        latitudes: [40.0801,59.8003],
                        longitudes: [116.5846,30.2625]
                    },
                    {
                        latitudes: [40.0801,55.6179],
                        longitudes: [116.5846,12.6560]
                    },
                    {
                        latitudes: [40.0801,50.9014],
                        longitudes: [116.5846,4.4844]
                    },
                    {
                        latitudes: [40.0801,1.3502],
                        longitudes: [116.5846,103.9944]
                    },
                    {
                        latitudes: [40.0801,13.6811],
                        longitudes: [116.5846,100.7473]
                    },
                    {
                        latitudes: [40.0801,40.9769],
                        longitudes: [116.5846,28.8146]
                    },
                    {
                        latitudes: [40.0801,40.6925],
                        longitudes: [116.5846,-74.1687]
                    },
                    {
                        latitudes: [40.0801,29.9844],
                        longitudes: [116.5846,-95.3414]
                    },
                    {
                        latitudes: [40.0801,40.6398],
                        longitudes: [116.5846,-73.7789]
                    },
                    {
                        latitudes: [40.0801,33.9425],
                        longitudes: [116.5846,-118.4081]
                    },
                    {
                        latitudes: [40.0801,41.9786],
                        longitudes: [116.5846,-87.9048]
                    },
                    {
                        latitudes: [40.0801,37.6190],
                        longitudes: [116.5846,-122.3749]
                    },
                    {
                        latitudes: [40.0801,13.6811],
                        longitudes: [116.5846,100.7473]
                    },
                    {
                        latitudes: [40.0801,40.6398],
                        longitudes: [116.5846,-73.7789]
                    },
                    {
                        latitudes: [40.0801,33.9425],
                        longitudes: [116.5846,-118.4081]
                    },
                    {
                        latitudes: [40.0801,41.9786],
                        longitudes: [116.5846,-87.9048]
                    },
                    {
                        latitudes: [40.0801,37.6190],
                        longitudes: [116.5846,-122.3749]
                    },
                    {
                        latitudes: [40.0801,51.4775],
                        longitudes: [116.5846,-0.4614]
                    }],
                images: [{
			            label: "Flights from Beijing",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Guangzhou = {
                    id: "Guangzhou" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Guangzhou",
                    latitude: 23.3924,
                    longitude: 113.2988,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 113.2988,
                    zoomLatitude: 23.3924,
                    lines: [
                    {
                        latitudes: [23.3924,1.3502],
                        longitudes: [113.2988,103.9944]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,49.0128],
                        longitudes: [113.2988,2.5500]
                    },
                    {
                        latitudes: [23.3924,1.3502],
                        longitudes: [113.2988,103.9944]
                    },
                    {
                        latitudes: [23.3924,2.7456],
                        longitudes: [113.2988,101.7099]
                    },
                    {
                        latitudes: [23.3924,25.0777],
                        longitudes: [113.2988,121.2328]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,40.9769],
                        longitudes: [113.2988,28.8146]
                    },
                    {
                        latitudes: [23.3924,24.9924],
                        longitudes: [113.2988,102.7435]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,40.0801],
                        longitudes: [113.2988,116.5846]
                    },
                    {
                        latitudes: [23.3924,31.1434],
                        longitudes: [113.2988,121.8052]
                    },
                    {
                        latitudes: [23.3924,34.4471],
                        longitudes: [113.2988,108.7516]
                    },
                    {
                        latitudes: [23.3924,25.0777],
                        longitudes: [113.2988,121.2328]
                    },
                    {
                        latitudes: [23.3924,22.3089],
                        longitudes: [113.2988,113.9146]
                    },
                    {
                        latitudes: [23.3924,52.3086],
                        longitudes: [113.2988,4.7639]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,49.0128],
                        longitudes: [113.2988,2.5500]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,28.5665],
                        longitudes: [113.2988,77.1031]
                    },
                    {
                        latitudes: [23.3924,25.2528],
                        longitudes: [113.2988,55.3644]
                    },
                    {
                        latitudes: [23.3924,22.3089],
                        longitudes: [113.2988,113.9146]
                    },
                    {
                        latitudes: [23.3924,37.4691],
                        longitudes: [113.2988,126.4505]
                    },
                    {
                        latitudes: [23.3924,24.9924],
                        longitudes: [113.2988,102.7435]
                    },
                    {
                        latitudes: [23.3924,2.7456],
                        longitudes: [113.2988,101.7099]
                    },
                    {
                        latitudes: [23.3924,33.9425],
                        longitudes: [113.2988,-118.4081]
                    },
                    {
                        latitudes: [23.3924,51.4775],
                        longitudes: [113.2988,-0.4614]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,40.0801],
                        longitudes: [113.2988,116.5846]
                    },
                    {
                        latitudes: [23.3924,31.1434],
                        longitudes: [113.2988,121.8052]
                    },
                    {
                        latitudes: [23.3924,1.3502],
                        longitudes: [113.2988,103.9944]
                    },
                    {
                        latitudes: [23.3924,-33.9461],
                        longitudes: [113.2988,151.1772]
                    },
                    {
                        latitudes: [23.3924,25.0777],
                        longitudes: [113.2988,121.2328]
                    },
                    {
                        latitudes: [23.3924,34.4471],
                        longitudes: [113.2988,108.7516]
                    },
                    {
                        latitudes: [23.3924,33.9425],
                        longitudes: [113.2988,-118.4081]
                    },
                    {
                        latitudes: [23.3924,25.2528],
                        longitudes: [113.2988,55.3644]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,31.1434],
                        longitudes: [113.2988,121.8052]
                    },
                    {
                        latitudes: [23.3924,40.0801],
                        longitudes: [113.2988,116.5846]
                    },
                    {
                        latitudes: [23.3924,25.0777],
                        longitudes: [113.2988,121.2328]
                    },
                    {
                        latitudes: [23.3924,34.4471],
                        longitudes: [113.2988,108.7516]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,22.3089],
                        longitudes: [113.2988,113.9146]
                    },
                    {
                        latitudes: [23.3924,37.4691],
                        longitudes: [113.2988,126.4505]
                    },
                    {
                        latitudes: [23.3924,52.3086],
                        longitudes: [113.2988,4.7639]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,24.9924],
                        longitudes: [113.2988,102.7435]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,2.7456],
                        longitudes: [113.2988,101.7099]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,24.9924],
                        longitudes: [113.2988,102.7435]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,31.1434],
                        longitudes: [113.2988,121.8052]
                    },
                    {
                        latitudes: [23.3924,34.4471],
                        longitudes: [113.2988,108.7516]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,37.4691],
                        longitudes: [113.2988,126.4505]
                    },
                    {
                        latitudes: [23.3924,28.5665],
                        longitudes: [113.2988,77.1031]
                    },
                    {
                        latitudes: [23.3924,1.3502],
                        longitudes: [113.2988,103.9944]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,40.9769],
                        longitudes: [113.2988,28.8146]
                    },
                    {
                        latitudes: [23.3924,1.3502],
                        longitudes: [113.2988,103.9944]
                    },
                    {
                        latitudes: [23.3924,13.6811],
                        longitudes: [113.2988,100.7473]
                    },
                    {
                        latitudes: [23.3924,30.5785],
                        longitudes: [113.2988,103.9471]
                    },
                    {
                        latitudes: [23.3924,24.9924],
                        longitudes: [113.2988,102.7435]
                    },
                    {
                        latitudes: [23.3924,35.7647],
                        longitudes: [113.2988,140.3864]
                    },
                    {
                        latitudes: [23.3924,34.4471],
                        longitudes: [113.2988,108.7516]
                    }],
                images: [{
			            label: "Flights from Guangzhou",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Xian = {
                    id: "Xian" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Xi'an",
                    latitude: 34.4471,
                    longitude: 108.7516,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 108.7516,
                    zoomLatitude: 34.4471,
                    lines: [
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,25.0777],
                        longitudes: [108.7516,121.2328]
                    },
                    {
                        latitudes: [34.4471,23.3924],
                        longitudes: [108.7516,113.2988]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,40.0801],
                        longitudes: [108.7516,116.5846]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,25.0777],
                        longitudes: [108.7516,121.2328]
                    },
                    {
                        latitudes: [34.4471,22.3089],
                        longitudes: [108.7516,113.9146]
                    },
                    {
                        latitudes: [34.4471,23.3924],
                        longitudes: [108.7516,113.2988]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,40.0801],
                        longitudes: [108.7516,116.5846]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,23.3924],
                        longitudes: [108.7516,113.2988]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,40.0801],
                        longitudes: [108.7516,116.5846]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,25.0777],
                        longitudes: [108.7516,121.2328]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,22.3089],
                        longitudes: [108.7516,113.9146]
                    },
                    {
                        latitudes: [34.4471,37.4691],
                        longitudes: [108.7516,126.4505]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,23.3924],
                        longitudes: [108.7516,113.2988]
                    },
                    {
                        latitudes: [34.4471,30.5785],
                        longitudes: [108.7516,103.9471]
                    },
                    {
                        latitudes: [34.4471,22.3089],
                        longitudes: [108.7516,113.9146]
                    },
                    {
                        latitudes: [34.4471,37.4691],
                        longitudes: [108.7516,126.4505]
                    },
                    {
                        latitudes: [34.4471,24.9924],
                        longitudes: [108.7516,102.7435]
                    },
                    {
                        latitudes: [34.4471,40.0801],
                        longitudes: [108.7516,116.5846]
                    },
                    {
                        latitudes: [34.4471,31.1434],
                        longitudes: [108.7516,121.8052]
                    },
                    {
                        latitudes: [34.4471,25.0777],
                        longitudes: [108.7516,121.2328]
                    },
                    {
                        latitudes: [34.4471,37.4691],
                        longitudes: [108.7516,126.4505]
                    },
                    {
                        latitudes: [34.4471,23.3924],
                        longitudes: [108.7516,113.2988]
                    }],
                images: [{
			            label: "Flights from Xi'an",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Kunming = {
                    id: "Kunming" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Kunming",
                    latitude: 24.9924,
                    longitude: 102.7435,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 102.7435,
                    zoomLatitude: 24.9924,
                    lines: [
                    {
                        latitudes: [24.9924,30.5785],
                        longitudes: [102.7435,103.9471]
                    },
                    {
                        latitudes: [24.9924,25.0777],
                        longitudes: [102.7435,121.2328]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,30.5785],
                        longitudes: [102.7435,103.9471]
                    },
                    {
                        latitudes: [24.9924,40.0801],
                        longitudes: [102.7435,116.5846]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    },
                    {
                        latitudes: [24.9924,2.7456],
                        longitudes: [102.7435,101.7099]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    },
                    {
                        latitudes: [24.9924,30.5785],
                        longitudes: [102.7435,103.9471]
                    },
                    {
                        latitudes: [24.9924,40.0801],
                        longitudes: [102.7435,116.5846]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,22.3089],
                        longitudes: [102.7435,113.9146]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    },
                    {
                        latitudes: [24.9924,40.0801],
                        longitudes: [102.7435,116.5846]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,30.5785],
                        longitudes: [102.7435,103.9471]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,40.0801],
                        longitudes: [102.7435,116.5846]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,22.3089],
                        longitudes: [102.7435,113.9146]
                    },
                    {
                        latitudes: [24.9924,37.4691],
                        longitudes: [102.7435,126.4505]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,2.7456],
                        longitudes: [102.7435,101.7099]
                    },
                    {
                        latitudes: [24.9924,1.3502],
                        longitudes: [102.7435,103.9944]
                    },
                    {
                        latitudes: [24.9924,13.6811],
                        longitudes: [102.7435,100.7473]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    },
                    {
                        latitudes: [24.9924,30.5785],
                        longitudes: [102.7435,103.9471]
                    },
                    {
                        latitudes: [24.9924,25.2528],
                        longitudes: [102.7435,55.3644]
                    },
                    {
                        latitudes: [24.9924,22.3089],
                        longitudes: [102.7435,113.9146]
                    },
                    {
                        latitudes: [24.9924,37.4691],
                        longitudes: [102.7435,126.4505]
                    },
                    {
                        latitudes: [24.9924,40.0801],
                        longitudes: [102.7435,116.5846]
                    },
                    {
                        latitudes: [24.9924,31.1434],
                        longitudes: [102.7435,121.8052]
                    },
                    {
                        latitudes: [24.9924,1.3502],
                        longitudes: [102.7435,103.9944]
                    },
                    {
                        latitudes: [24.9924,25.0777],
                        longitudes: [102.7435,121.2328]
                    },
                    {
                        latitudes: [24.9924,34.4471],
                        longitudes: [102.7435,108.7516]
                    },
                    {
                        latitudes: [24.9924,1.3502],
                        longitudes: [102.7435,103.9944]
                    },
                    {
                        latitudes: [24.9924,13.6811],
                        longitudes: [102.7435,100.7473]
                    },
                    {
                        latitudes: [24.9924,22.3089],
                        longitudes: [102.7435,113.9146]
                    },
                    {
                        latitudes: [24.9924,23.3924],
                        longitudes: [102.7435,113.2988]
                    }],
                images: [{
			            label: "Flights from Kunming",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Chengdu = {
                    id: "Chengdu" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Chengdu",
                    latitude: 30.5785,
                    longitude: 103.9471,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 103.9471,
                    zoomLatitude: 30.5785,
                    lines: [
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    },
                    {
                        latitudes: [30.5785,22.3089],
                        longitudes: [103.9471,113.9146]
                    },
                    {
                        latitudes: [30.5785,37.4691],
                        longitudes: [103.9471,126.4505]
                    },
                    {
                        latitudes: [30.5785,24.9924],
                        longitudes: [103.9471,102.7435]
                    },
                    {
                        latitudes: [30.5785,40.0801],
                        longitudes: [103.9471,116.5846]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,24.9924],
                        longitudes: [103.9471,102.7435]
                    },
                    {
                        latitudes: [30.5785,51.4775],
                        longitudes: [103.9471,-0.4614]
                    },
                    {
                        latitudes: [30.5785,25.0777],
                        longitudes: [103.9471,121.2328]
                    },
                    {
                        latitudes: [30.5785,19.0887],
                        longitudes: [103.9471,72.8679]
                    },
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    },
                    {
                        latitudes: [30.5785,50.0264],
                        longitudes: [103.9471,8.5431]
                    },
                    {
                        latitudes: [30.5785,22.3089],
                        longitudes: [103.9471,113.9146]
                    },
                    {
                        latitudes: [30.5785,24.9924],
                        longitudes: [103.9471,102.7435]
                    },
                    {
                        latitudes: [30.5785,35.7647],
                        longitudes: [103.9471,140.3864]
                    },
                    {
                        latitudes: [30.5785,40.0801],
                        longitudes: [103.9471,116.5846]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,1.3502],
                        longitudes: [103.9471,103.9944]
                    },
                    {
                        latitudes: [30.5785,25.0777],
                        longitudes: [103.9471,121.2328]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,25.0777],
                        longitudes: [103.9471,121.2328]
                    },
                    {
                        latitudes: [30.5785,22.3089],
                        longitudes: [103.9471,113.9146]
                    },
                    {
                        latitudes: [30.5785,52.3086],
                        longitudes: [103.9471,4.7639]
                    },
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    },
                    {
                        latitudes: [30.5785,40.0801],
                        longitudes: [103.9471,116.5846]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,2.7456],
                        longitudes: [103.9471,101.7099]
                    },
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    },
                    {
                        latitudes: [30.5785,24.9924],
                        longitudes: [103.9471,102.7435]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,24.4330],
                        longitudes: [103.9471,54.6511]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,24.4330],
                        longitudes: [103.9471,54.6511]
                    },
                    {
                        latitudes: [30.5785,40.0801],
                        longitudes: [103.9471,116.5846]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,22.3089],
                        longitudes: [103.9471,113.9146]
                    },
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    },
                    {
                        latitudes: [30.5785,22.3089],
                        longitudes: [103.9471,113.9146]
                    },
                    {
                        latitudes: [30.5785,52.3086],
                        longitudes: [103.9471,4.7639]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,50.0264],
                        longitudes: [103.9471,8.5431]
                    },
                    {
                        latitudes: [30.5785,1.3502],
                        longitudes: [103.9471,103.9944]
                    },
                    {
                        latitudes: [30.5785,13.6811],
                        longitudes: [103.9471,100.7473]
                    },
                    {
                        latitudes: [30.5785,24.9924],
                        longitudes: [103.9471,102.7435]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,34.4471],
                        longitudes: [103.9471,108.7516]
                    },
                    {
                        latitudes: [30.5785,35.7647],
                        longitudes: [103.9471,140.3864]
                    },
                    {
                        latitudes: [30.5785,40.0801],
                        longitudes: [103.9471,116.5846]
                    },
                    {
                        latitudes: [30.5785,31.1434],
                        longitudes: [103.9471,121.8052]
                    },
                    {
                        latitudes: [30.5785,37.4691],
                        longitudes: [103.9471,126.4505]
                    },
                    {
                        latitudes: [30.5785,1.3502],
                        longitudes: [103.9471,103.9944]
                    },
                    {
                        latitudes: [30.5785,13.6811],
                        longitudes: [103.9471,100.7473]
                    },
                    {
                        latitudes: [30.5785,23.3924],
                        longitudes: [103.9471,113.2988]
                    }],
                images: [{
			            label: "Flights from Chengdu",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Shanghai = {
                    id: "Shanghai" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Shanghai",
                    latitude: 31.1434,
                    longitude: 121.8052,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 121.8052,
                    zoomLatitude: 31.1434,
                    lines: [
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,24.9924],
                        longitudes: [121.8052,102.7435]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,40.0801],
                        longitudes: [121.8052,116.5846]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,41.9786],
                        longitudes: [121.8052,-87.9048]
                    },
                    {
                        latitudes: [31.1434,43.6772],
                        longitudes: [121.8052,-79.6306]
                    },
                    {
                        latitudes: [31.1434,49.0128],
                        longitudes: [121.8052,2.5500]
                    },
                    {
                        latitudes: [31.1434,28.5665],
                        longitudes: [121.8052,77.1031]
                    },
                    {
                        latitudes: [31.1434,41.8045],
                        longitudes: [121.8052,12.2508]
                    },
                    {
                        latitudes: [31.1434,51.4775],
                        longitudes: [121.8052,-0.4614]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,23.3924],
                        longitudes: [121.8052,113.2988]
                    },
                    {
                        latitudes: [31.1434,49.0128],
                        longitudes: [121.8052,2.5500]
                    },
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,50.0264],
                        longitudes: [121.8052,8.5431]
                    },
                    {
                        latitudes: [31.1434,40.9769],
                        longitudes: [121.8052,28.8146]
                    },
                    {
                        latitudes: [31.1434,24.9924],
                        longitudes: [121.8052,102.7435]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,51.4775],
                        longitudes: [121.8052,-0.4614]
                    },
                    {
                        latitudes: [31.1434,48.3538],
                        longitudes: [121.8052,11.7861]
                    },
                    {
                        latitudes: [31.1434,35.7647],
                        longitudes: [121.8052,140.3864]
                    },
                    {
                        latitudes: [31.1434,41.9786],
                        longitudes: [121.8052,-87.9048]
                    },
                    {
                        latitudes: [31.1434,40.0801],
                        longitudes: [121.8052,116.5846]
                    },
                    {
                        latitudes: [31.1434,37.6190],
                        longitudes: [121.8052,-122.3749]
                    },
                    {
                        latitudes: [31.1434,-33.9461],
                        longitudes: [121.8052,151.1772]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,43.6772],
                        longitudes: [121.8052,-79.6306]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,52.3086],
                        longitudes: [121.8052,4.7639]
                    },
                    {
                        latitudes: [31.1434,23.3924],
                        longitudes: [121.8052,113.2988]
                    },
                    {
                        latitudes: [31.1434,37.4691],
                        longitudes: [121.8052,126.4505]
                    },
                    {
                        latitudes: [31.1434,24.9924],
                        longitudes: [121.8052,102.7435]
                    },
                    {
                        latitudes: [31.1434,2.7456],
                        longitudes: [121.8052,101.7099]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,2.7456],
                        longitudes: [121.8052,101.7099]
                    },
                    {
                        latitudes: [31.1434,40.6398],
                        longitudes: [121.8052,-73.7789]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,35.7647],
                        longitudes: [121.8052,140.3864]
                    },
                    {
                        latitudes: [31.1434,37.6190],
                        longitudes: [121.8052,-122.3749]
                    },
                    {
                        latitudes: [31.1434,25.2528],
                        longitudes: [121.8052,55.3644]
                    },
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,24.4330],
                        longitudes: [121.8052,54.6511]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,23.3924],
                        longitudes: [121.8052,113.2988]
                    },
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,37.4691],
                        longitudes: [121.8052,126.4505]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,24.4330],
                        longitudes: [121.8052,54.6511]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,41.9786],
                        longitudes: [121.8052,-87.9048]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,24.9924],
                        longitudes: [121.8052,102.7435]
                    },
                    {
                        latitudes: [31.1434,35.7647],
                        longitudes: [121.8052,140.3864]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,37.4691],
                        longitudes: [121.8052,126.4505]
                    },
                    {
                        latitudes: [31.1434,52.3086],
                        longitudes: [121.8052,4.7639]
                    },
                    {
                        latitudes: [31.1434,50.0264],
                        longitudes: [121.8052,8.5431]
                    },
                    {
                        latitudes: [31.1434,48.3538],
                        longitudes: [121.8052,11.7861]
                    },
                    {
                        latitudes: [31.1434,2.7456],
                        longitudes: [121.8052,101.7099]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,23.3924],
                        longitudes: [121.8052,113.2988]
                    },
                    {
                        latitudes: [31.1434,49.0128],
                        longitudes: [121.8052,2.5500]
                    },
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,28.5665],
                        longitudes: [121.8052,77.1031]
                    },
                    {
                        latitudes: [31.1434,41.8045],
                        longitudes: [121.8052,12.2508]
                    },
                    {
                        latitudes: [31.1434,50.0264],
                        longitudes: [121.8052,8.5431]
                    },
                    {
                        latitudes: [31.1434,22.3089],
                        longitudes: [121.8052,113.9146]
                    },
                    {
                        latitudes: [31.1434,37.4691],
                        longitudes: [121.8052,126.4505]
                    },
                    {
                        latitudes: [31.1434,40.6398],
                        longitudes: [121.8052,-73.7789]
                    },
                    {
                        latitudes: [31.1434,24.9924],
                        longitudes: [121.8052,102.7435]
                    },
                    {
                        latitudes: [31.1434,2.7456],
                        longitudes: [121.8052,101.7099]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,51.4775],
                        longitudes: [121.8052,-0.4614]
                    },
                    {
                        latitudes: [31.1434,35.7647],
                        longitudes: [121.8052,140.3864]
                    },
                    {
                        latitudes: [31.1434,40.0801],
                        longitudes: [121.8052,116.5846]
                    },
                    {
                        latitudes: [31.1434,37.6190],
                        longitudes: [121.8052,-122.3749]
                    },
                    {
                        latitudes: [31.1434,1.3502],
                        longitudes: [121.8052,103.9944]
                    },
                    {
                        latitudes: [31.1434,-33.9461],
                        longitudes: [121.8052,151.1772]
                    },
                    {
                        latitudes: [31.1434,25.0777],
                        longitudes: [121.8052,121.2328]
                    },
                    {
                        latitudes: [31.1434,34.4471],
                        longitudes: [121.8052,108.7516]
                    },
                    {
                        latitudes: [31.1434,30.5785],
                        longitudes: [121.8052,103.9471]
                    },
                    {
                        latitudes: [31.1434,35.7647],
                        longitudes: [121.8052,140.3864]
                    },
                    {
                        latitudes: [31.1434,40.0801],
                        longitudes: [121.8052,116.5846]
                    },
                    {
                        latitudes: [31.1434,37.4691],
                        longitudes: [121.8052,126.4505]
                    },
                    {
                        latitudes: [31.1434,-33.9461],
                        longitudes: [121.8052,151.1772]
                    },
                    {
                        latitudes: [31.1434,55.6179],
                        longitudes: [121.8052,12.6560]
                    },
                    {
                        latitudes: [31.1434,1.3502],
                        longitudes: [121.8052,103.9944]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,40.9769],
                        longitudes: [121.8052,28.8146]
                    },
                    {
                        latitudes: [31.1434,40.6925],
                        longitudes: [121.8052,-74.1687]
                    },
                    {
                        latitudes: [31.1434,33.9425],
                        longitudes: [121.8052,-118.4081]
                    },
                    {
                        latitudes: [31.1434,41.9786],
                        longitudes: [121.8052,-87.9048]
                    },
                    {
                        latitudes: [31.1434,37.6190],
                        longitudes: [121.8052,-122.3749]
                    },
                    {
                        latitudes: [31.1434,13.6811],
                        longitudes: [121.8052,100.7473]
                    },
                    {
                        latitudes: [31.1434,41.9786],
                        longitudes: [121.8052,-87.9048]
                    },
                    {
                        latitudes: [31.1434,37.6190],
                        longitudes: [121.8052,-122.3749]
                    },
                    {
                        latitudes: [31.1434,51.4775],
                        longitudes: [121.8052,-0.4614]
                    }],
                images: [{
			            label: "Flights from Shanghai",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var SanFrancisco = {
                    id: "SanFrancisco" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "San Francisco",
                    latitude: 37.6190,
                    longitude: -122.3749,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -122.3749,
                    zoomLatitude: 37.6190,
                    lines: [
                    {
                        latitudes: [37.6190,32.8968],
                        longitudes: [-122.3749,-97.0380]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,25.7933],
                        longitudes: [-122.3749,-80.2906]
                    },
                    {
                        latitudes: [37.6190,41.9786],
                        longitudes: [-122.3749,-87.9048]
                    },
                    {
                        latitudes: [37.6190,43.6772],
                        longitudes: [-122.3749,-79.6306]
                    },
                    {
                        latitudes: [37.6190,49.0128],
                        longitudes: [-122.3749,2.5500]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,19.4363],
                        longitudes: [-122.3749,-99.0721]
                    },
                    {
                        latitudes: [37.6190,32.8968],
                        longitudes: [-122.3749,-97.0380]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,25.7933],
                        longitudes: [-122.3749,-80.2906]
                    },
                    {
                        latitudes: [37.6190,41.9786],
                        longitudes: [-122.3749,-87.9048]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,49.0128],
                        longitudes: [-122.3749,2.5500]
                    },
                    {
                        latitudes: [37.6190,25.2528],
                        longitudes: [-122.3749,55.3644]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,25.0777],
                        longitudes: [-122.3749,121.2328]
                    },
                    {
                        latitudes: [37.6190,40.0801],
                        longitudes: [-122.3749,116.5846]
                    },
                    {
                        latitudes: [37.6190,31.1434],
                        longitudes: [-122.3749,121.8052]
                    },
                    {
                        latitudes: [37.6190,25.0777],
                        longitudes: [-122.3749,121.2328]
                    },
                    {
                        latitudes: [37.6190,29.9844],
                        longitudes: [-122.3749,-95.3414]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,52.3086],
                        longitudes: [-122.3749,4.7639]
                    },
                    {
                        latitudes: [37.6190,49.0128],
                        longitudes: [-122.3749,2.5500]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,19.4363],
                        longitudes: [-122.3749,-99.0721]
                    },
                    {
                        latitudes: [37.6190,44.8820],
                        longitudes: [-122.3749,-93.2218]
                    },
                    {
                        latitudes: [37.6190,35.7647],
                        longitudes: [-122.3749,140.3864]
                    },
                    {
                        latitudes: [37.6190,31.1434],
                        longitudes: [-122.3749,121.8052]
                    },
                    {
                        latitudes: [37.6190,25.0777],
                        longitudes: [-122.3749,121.2328]
                    },
                    {
                        latitudes: [37.6190,25.2528],
                        longitudes: [-122.3749,55.3644]
                    },
                    {
                        latitudes: [37.6190,39.8617],
                        longitudes: [-122.3749,-104.6732]
                    },
                    {
                        latitudes: [37.6190,39.8617],
                        longitudes: [-122.3749,-104.6732]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,52.3086],
                        longitudes: [-122.3749,4.7639]
                    },
                    {
                        latitudes: [37.6190,50.0264],
                        longitudes: [-122.3749,8.5431]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,48.3538],
                        longitudes: [-122.3749,11.7861]
                    },
                    {
                        latitudes: [37.6190,31.1434],
                        longitudes: [-122.3749,121.8052]
                    },
                    {
                        latitudes: [37.6190,35.7647],
                        longitudes: [-122.3749,140.3864]
                    },
                    {
                        latitudes: [37.6190,50.0264],
                        longitudes: [-122.3749,8.5431]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,19.4363],
                        longitudes: [-122.3749,-99.0721]
                    },
                    {
                        latitudes: [37.6190,-33.9461],
                        longitudes: [-122.3749,151.1772]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,55.6179],
                        longitudes: [-122.3749,12.6560]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,44.8820],
                        longitudes: [-122.3749,-93.2218]
                    },
                    {
                        latitudes: [37.6190,49.0128],
                        longitudes: [-122.3749,2.5500]
                    },
                    {
                        latitudes: [37.6190,35.2140],
                        longitudes: [-122.3749,-80.9431]
                    },
                    {
                        latitudes: [37.6190,39.8617],
                        longitudes: [-122.3749,-104.6732]
                    },
                    {
                        latitudes: [37.6190,32.8968],
                        longitudes: [-122.3749,-97.0380]
                    },
                    {
                        latitudes: [37.6190,40.6925],
                        longitudes: [-122.3749,-74.1687]
                    },
                    {
                        latitudes: [37.6190,50.0264],
                        longitudes: [-122.3749,8.5431]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,29.9844],
                        longitudes: [-122.3749,-95.3414]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,19.4363],
                        longitudes: [-122.3749,-99.0721]
                    },
                    {
                        latitudes: [37.6190,44.8820],
                        longitudes: [-122.3749,-93.2218]
                    },
                    {
                        latitudes: [37.6190,48.3538],
                        longitudes: [-122.3749,11.7861]
                    },
                    {
                        latitudes: [37.6190,35.7647],
                        longitudes: [-122.3749,140.3864]
                    },
                    {
                        latitudes: [37.6190,41.9786],
                        longitudes: [-122.3749,-87.9048]
                    },
                    {
                        latitudes: [37.6190,40.0801],
                        longitudes: [-122.3749,116.5846]
                    },
                    {
                        latitudes: [37.6190,31.1434],
                        longitudes: [-122.3749,121.8052]
                    },
                    {
                        latitudes: [37.6190,-33.9461],
                        longitudes: [-122.3749,151.1772]
                    },
                    {
                        latitudes: [37.6190,43.6772],
                        longitudes: [-122.3749,-79.6306]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,35.2140],
                        longitudes: [-122.3749,-80.9431]
                    },
                    {
                        latitudes: [37.6190,39.8617],
                        longitudes: [-122.3749,-104.6732]
                    },
                    {
                        latitudes: [37.6190,40.6925],
                        longitudes: [-122.3749,-74.1687]
                    },
                    {
                        latitudes: [37.6190,22.3089],
                        longitudes: [-122.3749,113.9146]
                    },
                    {
                        latitudes: [37.6190,29.9844],
                        longitudes: [-122.3749,-95.3414]
                    },
                    {
                        latitudes: [37.6190,37.4691],
                        longitudes: [-122.3749,126.4505]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,44.8820],
                        longitudes: [-122.3749,-93.2218]
                    },
                    {
                        latitudes: [37.6190,35.7647],
                        longitudes: [-122.3749,140.3864]
                    },
                    {
                        latitudes: [37.6190,41.9786],
                        longitudes: [-122.3749,-87.9048]
                    },
                    {
                        latitudes: [37.6190,40.0801],
                        longitudes: [-122.3749,116.5846]
                    },
                    {
                        latitudes: [37.6190,31.1434],
                        longitudes: [-122.3749,121.8052]
                    },
                    {
                        latitudes: [37.6190,-33.9461],
                        longitudes: [-122.3749,151.1772]
                    },
                    {
                        latitudes: [37.6190,25.0777],
                        longitudes: [-122.3749,121.2328]
                    },
                    {
                        latitudes: [37.6190,51.4775],
                        longitudes: [-122.3749,-0.4614]
                    },
                    {
                        latitudes: [37.6190,32.8968],
                        longitudes: [-122.3749,-97.0380]
                    },
                    {
                        latitudes: [37.6190,40.6925],
                        longitudes: [-122.3749,-74.1687]
                    },
                    {
                        latitudes: [37.6190,40.6398],
                        longitudes: [-122.3749,-73.7789]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    },
                    {
                        latitudes: [37.6190,41.9786],
                        longitudes: [-122.3749,-87.9048]
                    },
                    {
                        latitudes: [37.6190,39.8617],
                        longitudes: [-122.3749,-104.6732]
                    },
                    {
                        latitudes: [37.6190,36.0801],
                        longitudes: [-122.3749,-115.1522]
                    },
                    {
                        latitudes: [37.6190,33.9425],
                        longitudes: [-122.3749,-118.4081]
                    }],
                images: [{
			            label: "Flights from San Francisco",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var LosAngeles = {
                    id: "LosAngeles" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Los Angeles",
                    latitude: 33.9425,
                    longitude: -118.4081,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -118.4081,
                    zoomLatitude: 33.9425,
                    lines: [
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,40.6925],
                        longitudes: [-118.4081,-74.1687]
                    },
                    {
                        latitudes: [33.9425,22.3089],
                        longitudes: [-118.4081,113.9146]
                    },
                    {
                        latitudes: [33.9425,29.9844],
                        longitudes: [-118.4081,-95.3414]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,25.7933],
                        longitudes: [-118.4081,-80.2906]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,43.6772],
                        longitudes: [-118.4081,-79.6306]
                    },
                    {
                        latitudes: [33.9425,43.6772],
                        longitudes: [-118.4081,-79.6306]
                    },
                    {
                        latitudes: [33.9425,49.0128],
                        longitudes: [-118.4081,2.5500]
                    },
                    {
                        latitudes: [33.9425,44.8820],
                        longitudes: [-118.4081,-93.2218]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,29.9844],
                        longitudes: [-118.4081,-95.3414]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,25.7933],
                        longitudes: [-118.4081,-80.2906]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,49.0128],
                        longitudes: [-118.4081,2.5500]
                    },
                    {
                        latitudes: [33.9425,25.2528],
                        longitudes: [-118.4081,55.3644]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,25.0777],
                        longitudes: [-118.4081,121.2328]
                    },
                    {
                        latitudes: [33.9425,40.0801],
                        longitudes: [-118.4081,116.5846]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,25.0777],
                        longitudes: [-118.4081,121.2328]
                    },
                    {
                        latitudes: [33.9425,29.9844],
                        longitudes: [-118.4081,-95.3414]
                    },
                    {
                        latitudes: [33.9425,22.3089],
                        longitudes: [-118.4081,113.9146]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,23.3924],
                        longitudes: [-118.4081,113.2988]
                    },
                    {
                        latitudes: [33.9425,52.3086],
                        longitudes: [-118.4081,4.7639]
                    },
                    {
                        latitudes: [33.9425,23.3924],
                        longitudes: [-118.4081,113.2988]
                    },
                    {
                        latitudes: [33.9425,49.0128],
                        longitudes: [-118.4081,2.5500]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,25.7933],
                        longitudes: [-118.4081,-80.2906]
                    },
                    {
                        latitudes: [33.9425,44.8820],
                        longitudes: [-118.4081,-93.2218]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,25.0777],
                        longitudes: [-118.4081,121.2328]
                    },
                    {
                        latitudes: [33.9425,25.2528],
                        longitudes: [-118.4081,55.3644]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,52.3086],
                        longitudes: [-118.4081,4.7639]
                    },
                    {
                        latitudes: [33.9425,44.8820],
                        longitudes: [-118.4081,-93.2218]
                    },
                    {
                        latitudes: [33.9425,50.0264],
                        longitudes: [-118.4081,8.5431]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,48.3538],
                        longitudes: [-118.4081,11.7861]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,29.9844],
                        longitudes: [-118.4081,-95.3414]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,44.8820],
                        longitudes: [-118.4081,-93.2218]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,44.8820],
                        longitudes: [-118.4081,-93.2218]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,40.9769],
                        longitudes: [-118.4081,28.8146]
                    },
                    {
                        latitudes: [33.9425,49.0128],
                        longitudes: [-118.4081,2.5500]
                    },
                    {
                        latitudes: [33.9425,35.2140],
                        longitudes: [-118.4081,-80.9431]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,40.6925],
                        longitudes: [-118.4081,-74.1687]
                    },
                    {
                        latitudes: [33.9425,50.0264],
                        longitudes: [-118.4081,8.5431]
                    },
                    {
                        latitudes: [33.9425,29.9844],
                        longitudes: [-118.4081,-95.3414]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    },
                    {
                        latitudes: [33.9425,48.3538],
                        longitudes: [-118.4081,11.7861]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,40.0801],
                        longitudes: [-118.4081,116.5846]
                    },
                    {
                        latitudes: [33.9425,31.1434],
                        longitudes: [-118.4081,121.8052]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,43.6772],
                        longitudes: [-118.4081,-79.6306]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,35.2140],
                        longitudes: [-118.4081,-80.9431]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,37.4691],
                        longitudes: [-118.4081,126.4505]
                    },
                    {
                        latitudes: [33.9425,40.9769],
                        longitudes: [-118.4081,28.8146]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,35.7647],
                        longitudes: [-118.4081,140.3864]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,40.0801],
                        longitudes: [-118.4081,116.5846]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,25.0777],
                        longitudes: [-118.4081,121.2328]
                    },
                    {
                        latitudes: [33.9425,-33.9461],
                        longitudes: [-118.4081,151.1772]
                    },
                    {
                        latitudes: [33.9425,25.0777],
                        longitudes: [-118.4081,121.2328]
                    },
                    {
                        latitudes: [33.9425,51.4775],
                        longitudes: [-118.4081,-0.4614]
                    },
                    {
                        latitudes: [33.9425,32.8968],
                        longitudes: [-118.4081,-97.0380]
                    },
                    {
                        latitudes: [33.9425,40.6925],
                        longitudes: [-118.4081,-74.1687]
                    },
                    {
                        latitudes: [33.9425,40.6398],
                        longitudes: [-118.4081,-73.7789]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,41.9786],
                        longitudes: [-118.4081,-87.9048]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,39.8617],
                        longitudes: [-118.4081,-104.6732]
                    },
                    {
                        latitudes: [33.9425,36.0801],
                        longitudes: [-118.4081,-115.1522]
                    },
                    {
                        latitudes: [33.9425,37.6190],
                        longitudes: [-118.4081,-122.3749]
                    },
                    {
                        latitudes: [33.9425,43.6772],
                        longitudes: [-118.4081,-79.6306]
                    },
                    {
                        latitudes: [33.9425,19.4363],
                        longitudes: [-118.4081,-99.0721]
                    }],
                images: [{
			            label: "Flights from Los Angeles",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Newark = {
                    id: "Newark" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Newark",
                    latitude: 40.6925,
                    longitude: -74.1687,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -74.1687,
                    zoomLatitude: 40.6925,
                    lines: [
                    {
                        latitudes: [40.6925,50.9014],
                        longitudes: [-74.1687,4.4844]
                    },
                    {
                        latitudes: [40.6925,32.8968],
                        longitudes: [-74.1687,-97.0380]
                    },
                    {
                        latitudes: [40.6925,33.9425],
                        longitudes: [-74.1687,-118.4081]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,25.7933],
                        longitudes: [-74.1687,-80.2906]
                    },
                    {
                        latitudes: [40.6925,41.9786],
                        longitudes: [-74.1687,-87.9048]
                    },
                    {
                        latitudes: [40.6925,43.6772],
                        longitudes: [-74.1687,-79.6306]
                    },
                    {
                        latitudes: [40.6925,49.0128],
                        longitudes: [-74.1687,2.5500]
                    },
                    {
                        latitudes: [40.6925,19.0887],
                        longitudes: [-74.1687,72.8679]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,29.9844],
                        longitudes: [-74.1687,-95.3414]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,52.3086],
                        longitudes: [-74.1687,4.7639]
                    },
                    {
                        latitudes: [40.6925,49.0128],
                        longitudes: [-74.1687,2.5500]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,44.8820],
                        longitudes: [-74.1687,-93.2218]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,52.3086],
                        longitudes: [-74.1687,4.7639]
                    },
                    {
                        latitudes: [40.6925,52.3086],
                        longitudes: [-74.1687,4.7639]
                    },
                    {
                        latitudes: [40.6925,41.2971],
                        longitudes: [-74.1687,2.0785]
                    },
                    {
                        latitudes: [40.6925,50.9014],
                        longitudes: [-74.1687,4.4844]
                    },
                    {
                        latitudes: [40.6925,49.0128],
                        longitudes: [-74.1687,2.5500]
                    },
                    {
                        latitudes: [40.6925,51.2895],
                        longitudes: [-74.1687,6.7668]
                    },
                    {
                        latitudes: [40.6925,41.8045],
                        longitudes: [-74.1687,12.2508]
                    },
                    {
                        latitudes: [40.6925,50.0264],
                        longitudes: [-74.1687,8.5431]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,40.4936],
                        longitudes: [-74.1687,-3.5668]
                    },
                    {
                        latitudes: [40.6925,53.3537],
                        longitudes: [-74.1687,-2.2750]
                    },
                    {
                        latitudes: [40.6925,48.3538],
                        longitudes: [-74.1687,11.7861]
                    },
                    {
                        latitudes: [40.6925,35.7647],
                        longitudes: [-74.1687,140.3864]
                    },
                    {
                        latitudes: [40.6925,55.6179],
                        longitudes: [-74.1687,12.6560]
                    },
                    {
                        latitudes: [40.6925,50.9014],
                        longitudes: [-74.1687,4.4844]
                    },
                    {
                        latitudes: [40.6925,1.3502],
                        longitudes: [-74.1687,103.9944]
                    },
                    {
                        latitudes: [40.6925,52.3086],
                        longitudes: [-74.1687,4.7639]
                    },
                    {
                        latitudes: [40.6925,41.2971],
                        longitudes: [-74.1687,2.0785]
                    },
                    {
                        latitudes: [40.6925,19.0887],
                        longitudes: [-74.1687,72.8679]
                    },
                    {
                        latitudes: [40.6925,50.9014],
                        longitudes: [-74.1687,4.4844]
                    },
                    {
                        latitudes: [40.6925,49.0128],
                        longitudes: [-74.1687,2.5500]
                    },
                    {
                        latitudes: [40.6925,35.2140],
                        longitudes: [-74.1687,-80.9431]
                    },
                    {
                        latitudes: [40.6925,28.5665],
                        longitudes: [-74.1687,77.1031]
                    },
                    {
                        latitudes: [40.6925,39.8617],
                        longitudes: [-74.1687,-104.6732]
                    },
                    {
                        latitudes: [40.6925,32.8968],
                        longitudes: [-74.1687,-97.0380]
                    },
                    {
                        latitudes: [40.6925,51.2895],
                        longitudes: [-74.1687,6.7668]
                    },
                    {
                        latitudes: [40.6925,41.8045],
                        longitudes: [-74.1687,12.2508]
                    },
                    {
                        latitudes: [40.6925,50.0264],
                        longitudes: [-74.1687,8.5431]
                    },
                    {
                        latitudes: [40.6925,22.3089],
                        longitudes: [-74.1687,113.9146]
                    },
                    {
                        latitudes: [40.6925,29.9844],
                        longitudes: [-74.1687,-95.3414]
                    },
                    {
                        latitudes: [40.6925,36.0801],
                        longitudes: [-74.1687,-115.1522]
                    },
                    {
                        latitudes: [40.6925,33.9425],
                        longitudes: [-74.1687,-118.4081]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,40.4936],
                        longitudes: [-74.1687,-3.5668]
                    },
                    {
                        latitudes: [40.6925,53.3537],
                        longitudes: [-74.1687,-2.2750]
                    },
                    {
                        latitudes: [40.6925,19.4363],
                        longitudes: [-74.1687,-99.0721]
                    },
                    {
                        latitudes: [40.6925,25.7933],
                        longitudes: [-74.1687,-80.2906]
                    },
                    {
                        latitudes: [40.6925,44.8820],
                        longitudes: [-74.1687,-93.2218]
                    },
                    {
                        latitudes: [40.6925,48.3538],
                        longitudes: [-74.1687,11.7861]
                    },
                    {
                        latitudes: [40.6925,35.7647],
                        longitudes: [-74.1687,140.3864]
                    },
                    {
                        latitudes: [40.6925,41.9786],
                        longitudes: [-74.1687,-87.9048]
                    },
                    {
                        latitudes: [40.6925,40.0801],
                        longitudes: [-74.1687,116.5846]
                    },
                    {
                        latitudes: [40.6925,31.1434],
                        longitudes: [-74.1687,121.8052]
                    },
                    {
                        latitudes: [40.6925,37.6190],
                        longitudes: [-74.1687,-122.3749]
                    },
                    {
                        latitudes: [40.6925,43.6772],
                        longitudes: [-74.1687,-79.6306]
                    },
                    {
                        latitudes: [40.6925,35.2140],
                        longitudes: [-74.1687,-80.9431]
                    },
                    {
                        latitudes: [40.6925,39.8617],
                        longitudes: [-74.1687,-104.6732]
                    },
                    {
                        latitudes: [40.6925,41.9786],
                        longitudes: [-74.1687,-87.9048]
                    },
                    {
                        latitudes: [40.6925,37.6190],
                        longitudes: [-74.1687,-122.3749]
                    },
                    {
                        latitudes: [40.6925,1.3502],
                        longitudes: [-74.1687,103.9944]
                    },
                    {
                        latitudes: [40.6925,51.4775],
                        longitudes: [-74.1687,-0.4614]
                    },
                    {
                        latitudes: [40.6925,33.9425],
                        longitudes: [-74.1687,-118.4081]
                    },
                    {
                        latitudes: [40.6925,37.6190],
                        longitudes: [-74.1687,-122.3749]
                    },
                    {
                        latitudes: [40.6925,39.8617],
                        longitudes: [-74.1687,-104.6732]
                    }],
                images: [{
			            label: "Flights from Newark",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Houston = {
                    id: "Houston" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Houston",
                    latitude: 29.9844,
                    longitude: -95.3414,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -95.3414,
                    zoomLatitude: 29.9844,
                    lines: [
                    {
                        latitudes: [29.9844,32.8968],
                        longitudes: [-95.3414,-97.0380]
                    },
                    {
                        latitudes: [29.9844,40.6398],
                        longitudes: [-95.3414,-73.7789]
                    },
                    {
                        latitudes: [29.9844,33.9425],
                        longitudes: [-95.3414,-118.4081]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,25.7933],
                        longitudes: [-95.3414,-80.2906]
                    },
                    {
                        latitudes: [29.9844,41.9786],
                        longitudes: [-95.3414,-87.9048]
                    },
                    {
                        latitudes: [29.9844,43.6772],
                        longitudes: [-95.3414,-79.6306]
                    },
                    {
                        latitudes: [29.9844,49.0128],
                        longitudes: [-95.3414,2.5500]
                    },
                    {
                        latitudes: [29.9844,19.4363],
                        longitudes: [-95.3414,-99.0721]
                    },
                    {
                        latitudes: [29.9844,33.9425],
                        longitudes: [-95.3414,-118.4081]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,49.0128],
                        longitudes: [-95.3414,2.5500]
                    },
                    {
                        latitudes: [29.9844,25.2528],
                        longitudes: [-95.3414,55.3644]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,40.0801],
                        longitudes: [-95.3414,116.5846]
                    },
                    {
                        latitudes: [29.9844,40.6925],
                        longitudes: [-95.3414,-74.1687]
                    },
                    {
                        latitudes: [29.9844,33.9425],
                        longitudes: [-95.3414,-118.4081]
                    },
                    {
                        latitudes: [29.9844,25.7933],
                        longitudes: [-95.3414,-80.2906]
                    },
                    {
                        latitudes: [29.9844,37.6190],
                        longitudes: [-95.3414,-122.3749]
                    },
                    {
                        latitudes: [29.9844,52.3086],
                        longitudes: [-95.3414,4.7639]
                    },
                    {
                        latitudes: [29.9844,49.0128],
                        longitudes: [-95.3414,2.5500]
                    },
                    {
                        latitudes: [29.9844,19.4363],
                        longitudes: [-95.3414,-99.0721]
                    },
                    {
                        latitudes: [29.9844,44.8820],
                        longitudes: [-95.3414,-93.2218]
                    },
                    {
                        latitudes: [29.9844,25.2528],
                        longitudes: [-95.3414,55.3644]
                    },
                    {
                        latitudes: [29.9844,39.8617],
                        longitudes: [-95.3414,-104.6732]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,52.3086],
                        longitudes: [-95.3414,4.7639]
                    },
                    {
                        latitudes: [29.9844,52.3086],
                        longitudes: [-95.3414,4.7639]
                    },
                    {
                        latitudes: [29.9844,50.0264],
                        longitudes: [-95.3414,8.5431]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,35.7647],
                        longitudes: [-95.3414,140.3864]
                    },
                    {
                        latitudes: [29.9844,39.8617],
                        longitudes: [-95.3414,-104.6732]
                    },
                    {
                        latitudes: [29.9844,36.0801],
                        longitudes: [-95.3414,-115.1522]
                    },
                    {
                        latitudes: [29.9844,33.9425],
                        longitudes: [-95.3414,-118.4081]
                    },
                    {
                        latitudes: [29.9844,41.9786],
                        longitudes: [-95.3414,-87.9048]
                    },
                    {
                        latitudes: [29.9844,40.6398],
                        longitudes: [-95.3414,-73.7789]
                    },
                    {
                        latitudes: [29.9844,55.4086],
                        longitudes: [-95.3414,37.9061]
                    },
                    {
                        latitudes: [29.9844,40.9769],
                        longitudes: [-95.3414,28.8146]
                    },
                    {
                        latitudes: [29.9844,52.3086],
                        longitudes: [-95.3414,4.7639]
                    },
                    {
                        latitudes: [29.9844,35.2140],
                        longitudes: [-95.3414,-80.9431]
                    },
                    {
                        latitudes: [29.9844,39.8617],
                        longitudes: [-95.3414,-104.6732]
                    },
                    {
                        latitudes: [29.9844,32.8968],
                        longitudes: [-95.3414,-97.0380]
                    },
                    {
                        latitudes: [29.9844,40.6925],
                        longitudes: [-95.3414,-74.1687]
                    },
                    {
                        latitudes: [29.9844,50.0264],
                        longitudes: [-95.3414,8.5431]
                    },
                    {
                        latitudes: [29.9844,36.0801],
                        longitudes: [-95.3414,-115.1522]
                    },
                    {
                        latitudes: [29.9844,33.9425],
                        longitudes: [-95.3414,-118.4081]
                    },
                    {
                        latitudes: [29.9844,51.4775],
                        longitudes: [-95.3414,-0.4614]
                    },
                    {
                        latitudes: [29.9844,19.4363],
                        longitudes: [-95.3414,-99.0721]
                    },
                    {
                        latitudes: [29.9844,25.7933],
                        longitudes: [-95.3414,-80.2906]
                    },
                    {
                        latitudes: [29.9844,44.8820],
                        longitudes: [-95.3414,-93.2218]
                    },
                    {
                        latitudes: [29.9844,35.7647],
                        longitudes: [-95.3414,140.3864]
                    },
                    {
                        latitudes: [29.9844,41.9786],
                        longitudes: [-95.3414,-87.9048]
                    },
                    {
                        latitudes: [29.9844,40.0801],
                        longitudes: [-95.3414,116.5846]
                    },
                    {
                        latitudes: [29.9844,37.6190],
                        longitudes: [-95.3414,-122.3749]
                    },
                    {
                        latitudes: [29.9844,43.6772],
                        longitudes: [-95.3414,-79.6306]
                    },
                    {
                        latitudes: [29.9844,55.4086],
                        longitudes: [-95.3414,37.9061]
                    },
                    {
                        latitudes: [29.9844,35.2140],
                        longitudes: [-95.3414,-80.9431]
                    },
                    {
                        latitudes: [29.9844,39.8617],
                        longitudes: [-95.3414,-104.6732]
                    },
                    {
                        latitudes: [29.9844,40.9769],
                        longitudes: [-95.3414,28.8146]
                    },
                    {
                        latitudes: [29.9844,41.9786],
                        longitudes: [-95.3414,-87.9048]
                    },
                    {
                        latitudes: [29.9844,37.6190],
                        longitudes: [-95.3414,-122.3749]
                    }],
                images: [{
			            label: "Flights from Houston",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Miami = {
                    id: "Miami" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Miami",
                    latitude: 25.7933,
                    longitude: -80.2906,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -80.2906,
                    zoomLatitude: 25.7933,
                    lines: [
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,41.2971],
                        longitudes: [-80.2906,2.0785]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,35.2140],
                        longitudes: [-80.2906,-80.9431]
                    },
                    {
                        latitudes: [25.7933,39.8617],
                        longitudes: [-80.2906,-104.6732]
                    },
                    {
                        latitudes: [25.7933,32.8968],
                        longitudes: [-80.2906,-97.0380]
                    },
                    {
                        latitudes: [25.7933,51.2895],
                        longitudes: [-80.2906,6.7668]
                    },
                    {
                        latitudes: [25.7933,40.6925],
                        longitudes: [-80.2906,-74.1687]
                    },
                    {
                        latitudes: [25.7933,29.9844],
                        longitudes: [-80.2906,-95.3414]
                    },
                    {
                        latitudes: [25.7933,40.6398],
                        longitudes: [-80.2906,-73.7789]
                    },
                    {
                        latitudes: [25.7933,36.0801],
                        longitudes: [-80.2906,-115.1522]
                    },
                    {
                        latitudes: [25.7933,33.9425],
                        longitudes: [-80.2906,-118.4081]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,40.4936],
                        longitudes: [-80.2906,-3.5668]
                    },
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,44.8820],
                        longitudes: [-80.2906,-93.2218]
                    },
                    {
                        latitudes: [25.7933,41.9786],
                        longitudes: [-80.2906,-87.9048]
                    },
                    {
                        latitudes: [25.7933,37.6190],
                        longitudes: [-80.2906,-122.3749]
                    },
                    {
                        latitudes: [25.7933,43.6772],
                        longitudes: [-80.2906,-79.6306]
                    },
                    {
                        latitudes: [25.7933,51.2895],
                        longitudes: [-80.2906,6.7668]
                    },
                    {
                        latitudes: [25.7933,43.6772],
                        longitudes: [-80.2906,-79.6306]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,33.9425],
                        longitudes: [-80.2906,-118.4081]
                    },
                    {
                        latitudes: [25.7933,37.6190],
                        longitudes: [-80.2906,-122.3749]
                    },
                    {
                        latitudes: [25.7933,41.2971],
                        longitudes: [-80.2906,2.0785]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,40.4936],
                        longitudes: [-80.2906,-3.5668]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,41.8045],
                        longitudes: [-80.2906,12.2508]
                    },
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,41.2971],
                        longitudes: [-80.2906,2.0785]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,40.4936],
                        longitudes: [-80.2906,-3.5668]
                    },
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,41.8045],
                        longitudes: [-80.2906,12.2508]
                    },
                    {
                        latitudes: [25.7933,40.6398],
                        longitudes: [-80.2906,-73.7789]
                    },
                    {
                        latitudes: [25.7933,33.9425],
                        longitudes: [-80.2906,-118.4081]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,19.4363],
                        longitudes: [-80.2906,-99.0721]
                    },
                    {
                        latitudes: [25.7933,44.8820],
                        longitudes: [-80.2906,-93.2218]
                    },
                    {
                        latitudes: [25.7933,43.6772],
                        longitudes: [-80.2906,-79.6306]
                    },
                    {
                        latitudes: [25.7933,41.2971],
                        longitudes: [-80.2906,2.0785]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,40.4936],
                        longitudes: [-80.2906,-3.5668]
                    },
                    {
                        latitudes: [25.7933,50.0264],
                        longitudes: [-80.2906,8.5431]
                    },
                    {
                        latitudes: [25.7933,49.0128],
                        longitudes: [-80.2906,2.5500]
                    },
                    {
                        latitudes: [25.7933,52.3086],
                        longitudes: [-80.2906,4.7639]
                    },
                    {
                        latitudes: [25.7933,40.6925],
                        longitudes: [-80.2906,-74.1687]
                    },
                    {
                        latitudes: [25.7933,50.0264],
                        longitudes: [-80.2906,8.5431]
                    },
                    {
                        latitudes: [25.7933,29.9844],
                        longitudes: [-80.2906,-95.3414]
                    },
                    {
                        latitudes: [25.7933,41.9786],
                        longitudes: [-80.2906,-87.9048]
                    },
                    {
                        latitudes: [25.7933,35.2140],
                        longitudes: [-80.2906,-80.9431]
                    },
                    {
                        latitudes: [25.7933,41.9786],
                        longitudes: [-80.2906,-87.9048]
                    },
                    {
                        latitudes: [25.7933,51.4775],
                        longitudes: [-80.2906,-0.4614]
                    },
                    {
                        latitudes: [25.7933,43.6772],
                        longitudes: [-80.2906,-79.6306]
                    }],
                images: [{
			            label: "Flights from Miami",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var DallasFortWorth = {
                    id: "DallasFortWorth" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Dallas-Fort Worth",
                    latitude: 32.8968,
                    longitude: -97.0380,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -97.0380,
                    zoomLatitude: 32.8968,
                    lines: [
                    {
                        latitudes: [32.8968,49.0128],
                        longitudes: [-97.0380,2.5500]
                    },
                    {
                        latitudes: [32.8968,35.2140],
                        longitudes: [-97.0380,-80.9431]
                    },
                    {
                        latitudes: [32.8968,39.8617],
                        longitudes: [-97.0380,-104.6732]
                    },
                    {
                        latitudes: [32.8968,40.6925],
                        longitudes: [-97.0380,-74.1687]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,29.9844],
                        longitudes: [-97.0380,-95.3414]
                    },
                    {
                        latitudes: [32.8968,37.4691],
                        longitudes: [-97.0380,126.4505]
                    },
                    {
                        latitudes: [32.8968,40.6398],
                        longitudes: [-97.0380,-73.7789]
                    },
                    {
                        latitudes: [32.8968,36.0801],
                        longitudes: [-97.0380,-115.1522]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,51.4775],
                        longitudes: [-97.0380,-0.4614]
                    },
                    {
                        latitudes: [32.8968,40.4936],
                        longitudes: [-97.0380,-3.5668]
                    },
                    {
                        latitudes: [32.8968,19.4363],
                        longitudes: [-97.0380,-99.0721]
                    },
                    {
                        latitudes: [32.8968,25.7933],
                        longitudes: [-97.0380,-80.2906]
                    },
                    {
                        latitudes: [32.8968,44.8820],
                        longitudes: [-97.0380,-93.2218]
                    },
                    {
                        latitudes: [32.8968,35.7647],
                        longitudes: [-97.0380,140.3864]
                    },
                    {
                        latitudes: [32.8968,41.9786],
                        longitudes: [-97.0380,-87.9048]
                    },
                    {
                        latitudes: [32.8968,37.6190],
                        longitudes: [-97.0380,-122.3749]
                    },
                    {
                        latitudes: [32.8968,43.6772],
                        longitudes: [-97.0380,-79.6306]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,43.6772],
                        longitudes: [-97.0380,-79.6306]
                    },
                    {
                        latitudes: [32.8968,19.4363],
                        longitudes: [-97.0380,-99.0721]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,37.6190],
                        longitudes: [-97.0380,-122.3749]
                    },
                    {
                        latitudes: [32.8968,49.0128],
                        longitudes: [-97.0380,2.5500]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,51.4775],
                        longitudes: [-97.0380,-0.4614]
                    },
                    {
                        latitudes: [32.8968,40.4936],
                        longitudes: [-97.0380,-3.5668]
                    },
                    {
                        latitudes: [32.8968,25.2528],
                        longitudes: [-97.0380,55.3644]
                    },
                    {
                        latitudes: [32.8968,49.0128],
                        longitudes: [-97.0380,2.5500]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,51.4775],
                        longitudes: [-97.0380,-0.4614]
                    },
                    {
                        latitudes: [32.8968,40.4936],
                        longitudes: [-97.0380,-3.5668]
                    },
                    {
                        latitudes: [32.8968,19.4363],
                        longitudes: [-97.0380,-99.0721]
                    },
                    {
                        latitudes: [32.8968,37.4691],
                        longitudes: [-97.0380,126.4505]
                    },
                    {
                        latitudes: [32.8968,40.6398],
                        longitudes: [-97.0380,-73.7789]
                    },
                    {
                        latitudes: [32.8968,19.4363],
                        longitudes: [-97.0380,-99.0721]
                    },
                    {
                        latitudes: [32.8968,44.8820],
                        longitudes: [-97.0380,-93.2218]
                    },
                    {
                        latitudes: [32.8968,25.2528],
                        longitudes: [-97.0380,55.3644]
                    },
                    {
                        latitudes: [32.8968,39.8617],
                        longitudes: [-97.0380,-104.6732]
                    },
                    {
                        latitudes: [32.8968,49.0128],
                        longitudes: [-97.0380,2.5500]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,51.4775],
                        longitudes: [-97.0380,-0.4614]
                    },
                    {
                        latitudes: [32.8968,40.4936],
                        longitudes: [-97.0380,-3.5668]
                    },
                    {
                        latitudes: [32.8968,35.7647],
                        longitudes: [-97.0380,140.3864]
                    },
                    {
                        latitudes: [32.8968,37.4691],
                        longitudes: [-97.0380,126.4505]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,35.7647],
                        longitudes: [-97.0380,140.3864]
                    },
                    {
                        latitudes: [32.8968,39.8617],
                        longitudes: [-97.0380,-104.6732]
                    },
                    {
                        latitudes: [32.8968,36.0801],
                        longitudes: [-97.0380,-115.1522]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,44.8820],
                        longitudes: [-97.0380,-93.2218]
                    },
                    {
                        latitudes: [32.8968,41.9786],
                        longitudes: [-97.0380,-87.9048]
                    },
                    {
                        latitudes: [32.8968,44.8820],
                        longitudes: [-97.0380,-93.2218]
                    },
                    {
                        latitudes: [32.8968,35.2140],
                        longitudes: [-97.0380,-80.9431]
                    },
                    {
                        latitudes: [32.8968,39.8617],
                        longitudes: [-97.0380,-104.6732]
                    },
                    {
                        latitudes: [32.8968,40.6925],
                        longitudes: [-97.0380,-74.1687]
                    },
                    {
                        latitudes: [32.8968,50.0264],
                        longitudes: [-97.0380,8.5431]
                    },
                    {
                        latitudes: [32.8968,29.9844],
                        longitudes: [-97.0380,-95.3414]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,41.9786],
                        longitudes: [-97.0380,-87.9048]
                    },
                    {
                        latitudes: [32.8968,37.6190],
                        longitudes: [-97.0380,-122.3749]
                    },
                    {
                        latitudes: [32.8968,43.6772],
                        longitudes: [-97.0380,-79.6306]
                    },
                    {
                        latitudes: [32.8968,35.2140],
                        longitudes: [-97.0380,-80.9431]
                    },
                    {
                        latitudes: [32.8968,39.8617],
                        longitudes: [-97.0380,-104.6732]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,41.9786],
                        longitudes: [-97.0380,-87.9048]
                    },
                    {
                        latitudes: [32.8968,33.9425],
                        longitudes: [-97.0380,-118.4081]
                    },
                    {
                        latitudes: [32.8968,37.6190],
                        longitudes: [-97.0380,-122.3749]
                    },
                    {
                        latitudes: [32.8968,43.6772],
                        longitudes: [-97.0380,-79.6306]
                    }],
                images: [{
			            label: "Flights from Dallas-Fort Worth",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Denver = {
                    id: "Denver" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Denver",
                    latitude: 39.8617,
                    longitude: -104.6732,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -104.6732,
                    zoomLatitude: 39.8617,
                    lines: [
                    {
                        latitudes: [39.8617,32.8968],
                        longitudes: [-104.6732,-97.0380]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,51.4775],
                        longitudes: [-104.6732,-0.4614]
                    },
                    {
                        latitudes: [39.8617,25.7933],
                        longitudes: [-104.6732,-80.2906]
                    },
                    {
                        latitudes: [39.8617,41.9786],
                        longitudes: [-104.6732,-87.9048]
                    },
                    {
                        latitudes: [39.8617,43.6772],
                        longitudes: [-104.6732,-79.6306]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,41.9786],
                        longitudes: [-104.6732,-87.9048]
                    },
                    {
                        latitudes: [39.8617,51.4775],
                        longitudes: [-104.6732,-0.4614]
                    },
                    {
                        latitudes: [39.8617,40.6398],
                        longitudes: [-104.6732,-73.7789]
                    },
                    {
                        latitudes: [39.8617,51.4775],
                        longitudes: [-104.6732,-0.4614]
                    },
                    {
                        latitudes: [39.8617,40.6398],
                        longitudes: [-104.6732,-73.7789]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,32.8968],
                        longitudes: [-104.6732,-97.0380]
                    },
                    {
                        latitudes: [39.8617,29.9844],
                        longitudes: [-104.6732,-95.3414]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,37.6190],
                        longitudes: [-104.6732,-122.3749]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,37.6190],
                        longitudes: [-104.6732,-122.3749]
                    },
                    {
                        latitudes: [39.8617,51.4775],
                        longitudes: [-104.6732,-0.4614]
                    },
                    {
                        latitudes: [39.8617,50.0264],
                        longitudes: [-104.6732,8.5431]
                    },
                    {
                        latitudes: [39.8617,35.7647],
                        longitudes: [-104.6732,140.3864]
                    },
                    {
                        latitudes: [39.8617,32.8968],
                        longitudes: [-104.6732,-97.0380]
                    },
                    {
                        latitudes: [39.8617,29.9844],
                        longitudes: [-104.6732,-95.3414]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,41.9786],
                        longitudes: [-104.6732,-87.9048]
                    },
                    {
                        latitudes: [39.8617,35.2140],
                        longitudes: [-104.6732,-80.9431]
                    },
                    {
                        latitudes: [39.8617,32.8968],
                        longitudes: [-104.6732,-97.0380]
                    },
                    {
                        latitudes: [39.8617,40.6925],
                        longitudes: [-104.6732,-74.1687]
                    },
                    {
                        latitudes: [39.8617,50.0264],
                        longitudes: [-104.6732,8.5431]
                    },
                    {
                        latitudes: [39.8617,29.9844],
                        longitudes: [-104.6732,-95.3414]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,19.4363],
                        longitudes: [-104.6732,-99.0721]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,35.7647],
                        longitudes: [-104.6732,140.3864]
                    },
                    {
                        latitudes: [39.8617,41.9786],
                        longitudes: [-104.6732,-87.9048]
                    },
                    {
                        latitudes: [39.8617,37.6190],
                        longitudes: [-104.6732,-122.3749]
                    },
                    {
                        latitudes: [39.8617,43.6772],
                        longitudes: [-104.6732,-79.6306]
                    },
                    {
                        latitudes: [39.8617,35.2140],
                        longitudes: [-104.6732,-80.9431]
                    },
                    {
                        latitudes: [39.8617,32.8968],
                        longitudes: [-104.6732,-97.0380]
                    },
                    {
                        latitudes: [39.8617,40.6925],
                        longitudes: [-104.6732,-74.1687]
                    },
                    {
                        latitudes: [39.8617,29.9844],
                        longitudes: [-104.6732,-95.3414]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,41.9786],
                        longitudes: [-104.6732,-87.9048]
                    },
                    {
                        latitudes: [39.8617,37.6190],
                        longitudes: [-104.6732,-122.3749]
                    },
                    {
                        latitudes: [39.8617,40.6925],
                        longitudes: [-104.6732,-74.1687]
                    },
                    {
                        latitudes: [39.8617,36.0801],
                        longitudes: [-104.6732,-115.1522]
                    },
                    {
                        latitudes: [39.8617,33.9425],
                        longitudes: [-104.6732,-118.4081]
                    },
                    {
                        latitudes: [39.8617,44.8820],
                        longitudes: [-104.6732,-93.2218]
                    },
                    {
                        latitudes: [39.8617,37.6190],
                        longitudes: [-104.6732,-122.3749]
                    }],
                images: [{
			            label: "Flights from Denver",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var NewYork = {
                    id: "NewYork" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "New York",
                    latitude: 40.6398,
                    longitude: -73.7789,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -73.7789,
                    zoomLatitude: 40.6398,
                    lines: [
                    {
                        latitudes: [40.6398,19.4363],
                        longitudes: [-73.7789,-99.0721]
                    },
                    {
                        latitudes: [40.6398,24.4330],
                        longitudes: [-73.7789,54.6511]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,32.8968],
                        longitudes: [-73.7789,-97.0380]
                    },
                    {
                        latitudes: [40.6398,51.2895],
                        longitudes: [-73.7789,6.7668]
                    },
                    {
                        latitudes: [40.6398,22.3089],
                        longitudes: [-73.7789,113.9146]
                    },
                    {
                        latitudes: [40.6398,29.9844],
                        longitudes: [-73.7789,-95.3414]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,53.3537],
                        longitudes: [-73.7789,-2.2750]
                    },
                    {
                        latitudes: [40.6398,25.7933],
                        longitudes: [-73.7789,-80.2906]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,41.9786],
                        longitudes: [-73.7789,-87.9048]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    },
                    {
                        latitudes: [40.6398,51.2895],
                        longitudes: [-73.7789,6.7668]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,28.5665],
                        longitudes: [-73.7789,77.1031]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,19.4363],
                        longitudes: [-73.7789,-99.0721]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,53.3537],
                        longitudes: [-73.7789,-2.2750]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,41.8045],
                        longitudes: [-73.7789,12.2508]
                    },
                    {
                        latitudes: [40.6398,19.4363],
                        longitudes: [-73.7789,-99.0721]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    },
                    {
                        latitudes: [40.6398,35.2140],
                        longitudes: [-73.7789,-80.9431]
                    },
                    {
                        latitudes: [40.6398,39.8617],
                        longitudes: [-73.7789,-104.6732]
                    },
                    {
                        latitudes: [40.6398,25.2528],
                        longitudes: [-73.7789,55.3644]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,41.9786],
                        longitudes: [-73.7789,-87.9048]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,53.3537],
                        longitudes: [-73.7789,-2.2750]
                    },
                    {
                        latitudes: [40.6398,25.0777],
                        longitudes: [-73.7789,121.2328]
                    },
                    {
                        latitudes: [40.6398,40.0801],
                        longitudes: [-73.7789,116.5846]
                    },
                    {
                        latitudes: [40.6398,22.3089],
                        longitudes: [-73.7789,113.9146]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,52.3086],
                        longitudes: [-73.7789,4.7639]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,35.2140],
                        longitudes: [-73.7789,-80.9431]
                    },
                    {
                        latitudes: [40.6398,39.8617],
                        longitudes: [-73.7789,-104.6732]
                    },
                    {
                        latitudes: [40.6398,32.8968],
                        longitudes: [-73.7789,-97.0380]
                    },
                    {
                        latitudes: [40.6398,41.8045],
                        longitudes: [-73.7789,12.2508]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,37.4691],
                        longitudes: [-73.7789,126.4505]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,19.4363],
                        longitudes: [-73.7789,-99.0721]
                    },
                    {
                        latitudes: [40.6398,25.7933],
                        longitudes: [-73.7789,-80.2906]
                    },
                    {
                        latitudes: [40.6398,44.8820],
                        longitudes: [-73.7789,-93.2218]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,41.9786],
                        longitudes: [-73.7789,-87.9048]
                    },
                    {
                        latitudes: [40.6398,31.1434],
                        longitudes: [-73.7789,121.8052]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    },
                    {
                        latitudes: [40.6398,25.2528],
                        longitudes: [-73.7789,55.3644]
                    },
                    {
                        latitudes: [40.6398,24.4330],
                        longitudes: [-73.7789,54.6511]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,53.3537],
                        longitudes: [-73.7789,-2.2750]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,37.4691],
                        longitudes: [-73.7789,126.4505]
                    },
                    {
                        latitudes: [40.6398,52.3086],
                        longitudes: [-73.7789,4.7639]
                    },
                    {
                        latitudes: [40.6398,41.2971],
                        longitudes: [-73.7789,2.0785]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,48.3538],
                        longitudes: [-73.7789,11.7861]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,31.1434],
                        longitudes: [-73.7789,121.8052]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,48.1103],
                        longitudes: [-73.7789,16.5697]
                    },
                    {
                        latitudes: [40.6398,37.4691],
                        longitudes: [-73.7789,126.4505]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,29.9844],
                        longitudes: [-73.7789,-95.3414]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,53.3537],
                        longitudes: [-73.7789,-2.2750]
                    },
                    {
                        latitudes: [40.6398,41.9786],
                        longitudes: [-73.7789,-87.9048]
                    },
                    {
                        latitudes: [40.6398,49.0128],
                        longitudes: [-73.7789,2.5500]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,44.8820],
                        longitudes: [-73.7789,-93.2218]
                    },
                    {
                        latitudes: [40.6398,40.9769],
                        longitudes: [-73.7789,28.8146]
                    },
                    {
                        latitudes: [40.6398,50.9014],
                        longitudes: [-73.7789,4.4844]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,37.4691],
                        longitudes: [-73.7789,126.4505]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,48.3538],
                        longitudes: [-73.7789,11.7861]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,40.0801],
                        longitudes: [-73.7789,116.5846]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,48.1103],
                        longitudes: [-73.7789,16.5697]
                    },
                    {
                        latitudes: [40.6398,24.4330],
                        longitudes: [-73.7789,54.6511]
                    },
                    {
                        latitudes: [40.6398,35.2140],
                        longitudes: [-73.7789,-80.9431]
                    },
                    {
                        latitudes: [40.6398,50.0264],
                        longitudes: [-73.7789,8.5431]
                    },
                    {
                        latitudes: [40.6398,37.4691],
                        longitudes: [-73.7789,126.4505]
                    },
                    {
                        latitudes: [40.6398,40.9769],
                        longitudes: [-73.7789,28.8146]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,35.7647],
                        longitudes: [-73.7789,140.3864]
                    },
                    {
                        latitudes: [40.6398,40.0801],
                        longitudes: [-73.7789,116.5846]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,40.4936],
                        longitudes: [-73.7789,-3.5668]
                    },
                    {
                        latitudes: [40.6398,51.4775],
                        longitudes: [-73.7789,-0.4614]
                    },
                    {
                        latitudes: [40.6398,36.0801],
                        longitudes: [-73.7789,-115.1522]
                    },
                    {
                        latitudes: [40.6398,33.9425],
                        longitudes: [-73.7789,-118.4081]
                    },
                    {
                        latitudes: [40.6398,37.6190],
                        longitudes: [-73.7789,-122.3749]
                    },
                    {
                        latitudes: [40.6398,43.6772],
                        longitudes: [-73.7789,-79.6306]
                    }],
                images: [{
			            label: "Flights from New York",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Chicago = {
                    id: "Chicago" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Chicago",
                    latitude: 41.9786,
                    longitude: -87.9048,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -87.9048,
                    zoomLatitude: 41.9786,
                    lines: [
                    {
                        latitudes: [41.9786,24.4330],
                        longitudes: [-87.9048,54.6511]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,35.2140],
                        longitudes: [-87.9048,-80.9431]
                    },
                    {
                        latitudes: [41.9786,39.8617],
                        longitudes: [-87.9048,-104.6732]
                    },
                    {
                        latitudes: [41.9786,32.8968],
                        longitudes: [-87.9048,-97.0380]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,40.6925],
                        longitudes: [-87.9048,-74.1687]
                    },
                    {
                        latitudes: [41.9786,22.3089],
                        longitudes: [-87.9048,113.9146]
                    },
                    {
                        latitudes: [41.9786,29.9844],
                        longitudes: [-87.9048,-95.3414]
                    },
                    {
                        latitudes: [41.9786,40.6398],
                        longitudes: [-87.9048,-73.7789]
                    },
                    {
                        latitudes: [41.9786,36.0801],
                        longitudes: [-87.9048,-115.1522]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,40.4936],
                        longitudes: [-87.9048,-3.5668]
                    },
                    {
                        latitudes: [41.9786,53.3537],
                        longitudes: [-87.9048,-2.2750]
                    },
                    {
                        latitudes: [41.9786,19.4363],
                        longitudes: [-87.9048,-99.0721]
                    },
                    {
                        latitudes: [41.9786,25.7933],
                        longitudes: [-87.9048,-80.2906]
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,40.0801],
                        longitudes: [-87.9048,116.5846]
                    },
                    {
                        latitudes: [41.9786,31.1434],
                        longitudes: [-87.9048,121.8052]
                    },
                    {
                        latitudes: [41.9786,37.6190],
                        longitudes: [-87.9048,-122.3749]
                    },
                    {
                        latitudes: [41.9786,43.6772],
                        longitudes: [-87.9048,-79.6306]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,43.6772],
                        longitudes: [-87.9048,-79.6306]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,28.5665],
                        longitudes: [-87.9048,77.1031]
                    },
                    {
                        latitudes: [41.9786,19.4363],
                        longitudes: [-87.9048,-99.0721]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,37.6190],
                        longitudes: [-87.9048,-122.3749]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,40.4936],
                        longitudes: [-87.9048,-3.5668]
                    },
                    {
                        latitudes: [41.9786,53.3537],
                        longitudes: [-87.9048,-2.2750]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,40.6398],
                        longitudes: [-87.9048,-73.7789]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,40.4936],
                        longitudes: [-87.9048,-3.5668]
                    },
                    {
                        latitudes: [41.9786,53.3537],
                        longitudes: [-87.9048,-2.2750]
                    },
                    {
                        latitudes: [41.9786,40.0801],
                        longitudes: [-87.9048,116.5846]
                    },
                    {
                        latitudes: [41.9786,31.1434],
                        longitudes: [-87.9048,121.8052]
                    },
                    {
                        latitudes: [41.9786,22.3089],
                        longitudes: [-87.9048,113.9146]
                    },
                    {
                        latitudes: [41.9786,52.3086],
                        longitudes: [-87.9048,4.7639]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,37.4691],
                        longitudes: [-87.9048,126.4505]
                    },
                    {
                        latitudes: [41.9786,40.6398],
                        longitudes: [-87.9048,-73.7789]
                    },
                    {
                        latitudes: [41.9786,19.4363],
                        longitudes: [-87.9048,-99.0721]
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218]
                    },
                    {
                        latitudes: [41.9786,24.4330],
                        longitudes: [-87.9048,54.6511]
                    },
                    {
                        latitudes: [41.9786,43.6772],
                        longitudes: [-87.9048,-79.6306]
                    },
                    {
                        latitudes: [41.9786,40.0801],
                        longitudes: [-87.9048,116.5846]
                    },
                    {
                        latitudes: [41.9786,31.1434],
                        longitudes: [-87.9048,121.8052]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,40.4936],
                        longitudes: [-87.9048,-3.5668]
                    },
                    {
                        latitudes: [41.9786,53.3537],
                        longitudes: [-87.9048,-2.2750]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,37.4691],
                        longitudes: [-87.9048,126.4505]
                    },
                    {
                        latitudes: [41.9786,52.3086],
                        longitudes: [-87.9048,4.7639]
                    },
                    {
                        latitudes: [41.9786,52.3086],
                        longitudes: [-87.9048,4.7639]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,50.0264],
                        longitudes: [-87.9048,8.5431]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,48.3538],
                        longitudes: [-87.9048,11.7861]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,39.8617],
                        longitudes: [-87.9048,-104.6732]
                    },
                    {
                        latitudes: [41.9786,32.8968],
                        longitudes: [-87.9048,-97.0380]
                    },
                    {
                        latitudes: [41.9786,29.9844],
                        longitudes: [-87.9048,-95.3414]
                    },
                    {
                        latitudes: [41.9786,36.0801],
                        longitudes: [-87.9048,-115.1522]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218]
                    },
                    {
                        latitudes: [41.9786,48.1103],
                        longitudes: [-87.9048,16.5697]
                    },
                    {
                        latitudes: [41.9786,37.4691],
                        longitudes: [-87.9048,126.4505]
                    },
                    {
                        latitudes: [41.9786,40.6398],
                        longitudes: [-87.9048,-73.7789]
                    },
                    {
                        latitudes: [41.9786,55.6179],
                        longitudes: [-87.9048,12.6560]
                    },
                    {
                        latitudes: [41.9786,50.9014],
                        longitudes: [-87.9048,4.4844]
                    },
                    {
                        latitudes: [41.9786,40.9769],
                        longitudes: [-87.9048,28.8146]
                    },
                    {
                        latitudes: [41.9786,52.3086],
                        longitudes: [-87.9048,4.7639]
                    },
                    {
                        latitudes: [41.9786,50.9014],
                        longitudes: [-87.9048,4.4844]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,35.2140],
                        longitudes: [-87.9048,-80.9431]
                    },
                    {
                        latitudes: [41.9786,39.8617],
                        longitudes: [-87.9048,-104.6732]
                    },
                    {
                        latitudes: [41.9786,32.8968],
                        longitudes: [-87.9048,-97.0380]
                    },
                    {
                        latitudes: [41.9786,51.2895],
                        longitudes: [-87.9048,6.7668]
                    },
                    {
                        latitudes: [41.9786,40.6925],
                        longitudes: [-87.9048,-74.1687]
                    },
                    {
                        latitudes: [41.9786,50.0264],
                        longitudes: [-87.9048,8.5431]
                    },
                    {
                        latitudes: [41.9786,22.3089],
                        longitudes: [-87.9048,113.9146]
                    },
                    {
                        latitudes: [41.9786,29.9844],
                        longitudes: [-87.9048,-95.3414]
                    },
                    {
                        latitudes: [41.9786,36.0801],
                        longitudes: [-87.9048,-115.1522]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,51.4775],
                        longitudes: [-87.9048,-0.4614]
                    },
                    {
                        latitudes: [41.9786,19.4363],
                        longitudes: [-87.9048,-99.0721]
                    },
                    {
                        latitudes: [41.9786,25.7933],
                        longitudes: [-87.9048,-80.2906]
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218]
                    },
                    {
                        latitudes: [41.9786,48.3538],
                        longitudes: [-87.9048,11.7861]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,40.0801],
                        longitudes: [-87.9048,116.5846]
                    },
                    {
                        latitudes: [41.9786,31.1434],
                        longitudes: [-87.9048,121.8052]
                    },
                    {
                        latitudes: [41.9786,37.6190],
                        longitudes: [-87.9048,-122.3749]
                    },
                    {
                        latitudes: [41.9786,48.1103],
                        longitudes: [-87.9048,16.5697]
                    },
                    {
                        latitudes: [41.9786,43.6772],
                        longitudes: [-87.9048,-79.6306]
                    },
                    {
                        latitudes: [41.9786,24.4330],
                        longitudes: [-87.9048,54.6511]
                    },
                    {
                        latitudes: [41.9786,52.3086],
                        longitudes: [-87.9048,4.7639]
                    },
                    {
                        latitudes: [41.9786,49.0128],
                        longitudes: [-87.9048,2.5500]
                    },
                    {
                        latitudes: [41.9786,35.2140],
                        longitudes: [-87.9048,-80.9431]
                    },
                    {
                        latitudes: [41.9786,39.8617],
                        longitudes: [-87.9048,-104.6732]
                    },
                    {
                        latitudes: [41.9786,32.8968],
                        longitudes: [-87.9048,-97.0380]
                    },
                    {
                        latitudes: [41.9786,40.6925],
                        longitudes: [-87.9048,-74.1687]
                    },
                    {
                        latitudes: [41.9786,22.3089],
                        longitudes: [-87.9048,113.9146]
                    },
                    {
                        latitudes: [41.9786,29.9844],
                        longitudes: [-87.9048,-95.3414]
                    },
                    {
                        latitudes: [41.9786,37.4691],
                        longitudes: [-87.9048,126.4505]
                    },
                    {
                        latitudes: [41.9786,40.9769],
                        longitudes: [-87.9048,28.8146]
                    },
                    {
                        latitudes: [41.9786,36.0801],
                        longitudes: [-87.9048,-115.1522]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,25.7933],
                        longitudes: [-87.9048,-80.2906]
                    },
                    {
                        latitudes: [41.9786,44.8820],
                        longitudes: [-87.9048,-93.2218]
                    },
                    {
                        latitudes: [41.9786,35.7647],
                        longitudes: [-87.9048,140.3864]
                    },
                    {
                        latitudes: [41.9786,40.0801],
                        longitudes: [-87.9048,116.5846]
                    },
                    {
                        latitudes: [41.9786,31.1434],
                        longitudes: [-87.9048,121.8052]
                    },
                    {
                        latitudes: [41.9786,37.6190],
                        longitudes: [-87.9048,-122.3749]
                    },
                    {
                        latitudes: [41.9786,33.9425],
                        longitudes: [-87.9048,-118.4081]
                    },
                    {
                        latitudes: [41.9786,37.6190],
                        longitudes: [-87.9048,-122.3749]
                    },
                    {
                        latitudes: [41.9786,43.6772],
                        longitudes: [-87.9048,-79.6306]
                    }],
                images: [{
			            label: "Flights from Chicago",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Minneapolis = {
                    id: "Minneapolis" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Minneapolis",
                    latitude: 44.8820,
                    longitude: -93.2218,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -93.2218,
                    zoomLatitude: 44.8820,
                    lines: [
                    {
                        latitudes: [44.8820,32.8968],
                        longitudes: [-93.2218,-97.0380]
                    },
                    {
                        latitudes: [44.8820,25.7933],
                        longitudes: [-93.2218,-80.2906]
                    },
                    {
                        latitudes: [44.8820,41.9786],
                        longitudes: [-93.2218,-87.9048]
                    },
                    {
                        latitudes: [44.8820,43.6772],
                        longitudes: [-93.2218,-79.6306]
                    },
                    {
                        latitudes: [44.8820,49.0128],
                        longitudes: [-93.2218,2.5500]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,51.4775],
                        longitudes: [-93.2218,-0.4614]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,52.3086],
                        longitudes: [-93.2218,4.7639]
                    },
                    {
                        latitudes: [44.8820,49.0128],
                        longitudes: [-93.2218,2.5500]
                    },
                    {
                        latitudes: [44.8820,35.2140],
                        longitudes: [-93.2218,-80.9431]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,32.8968],
                        longitudes: [-93.2218,-97.0380]
                    },
                    {
                        latitudes: [44.8820,40.6925],
                        longitudes: [-93.2218,-74.1687]
                    },
                    {
                        latitudes: [44.8820,29.9844],
                        longitudes: [-93.2218,-95.3414]
                    },
                    {
                        latitudes: [44.8820,40.6398],
                        longitudes: [-93.2218,-73.7789]
                    },
                    {
                        latitudes: [44.8820,36.0801],
                        longitudes: [-93.2218,-115.1522]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,51.4775],
                        longitudes: [-93.2218,-0.4614]
                    },
                    {
                        latitudes: [44.8820,25.7933],
                        longitudes: [-93.2218,-80.2906]
                    },
                    {
                        latitudes: [44.8820,35.7647],
                        longitudes: [-93.2218,140.3864]
                    },
                    {
                        latitudes: [44.8820,41.9786],
                        longitudes: [-93.2218,-87.9048]
                    },
                    {
                        latitudes: [44.8820,37.6190],
                        longitudes: [-93.2218,-122.3749]
                    },
                    {
                        latitudes: [44.8820,43.6772],
                        longitudes: [-93.2218,-79.6306]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,52.3086],
                        longitudes: [-93.2218,4.7639]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,51.4775],
                        longitudes: [-93.2218,-0.4614]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,32.8968],
                        longitudes: [-93.2218,-97.0380]
                    },
                    {
                        latitudes: [44.8820,36.0801],
                        longitudes: [-93.2218,-115.1522]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,41.9786],
                        longitudes: [-93.2218,-87.9048]
                    },
                    {
                        latitudes: [44.8820,32.8968],
                        longitudes: [-93.2218,-97.0380]
                    },
                    {
                        latitudes: [44.8820,40.6398],
                        longitudes: [-93.2218,-73.7789]
                    },
                    {
                        latitudes: [44.8820,36.0801],
                        longitudes: [-93.2218,-115.1522]
                    },
                    {
                        latitudes: [44.8820,33.9425],
                        longitudes: [-93.2218,-118.4081]
                    },
                    {
                        latitudes: [44.8820,37.6190],
                        longitudes: [-93.2218,-122.3749]
                    },
                    {
                        latitudes: [44.8820,35.2140],
                        longitudes: [-93.2218,-80.9431]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,40.6925],
                        longitudes: [-93.2218,-74.1687]
                    },
                    {
                        latitudes: [44.8820,29.9844],
                        longitudes: [-93.2218,-95.3414]
                    },
                    {
                        latitudes: [44.8820,41.9786],
                        longitudes: [-93.2218,-87.9048]
                    },
                    {
                        latitudes: [44.8820,37.6190],
                        longitudes: [-93.2218,-122.3749]
                    },
                    {
                        latitudes: [44.8820,43.6772],
                        longitudes: [-93.2218,-79.6306]
                    },
                    {
                        latitudes: [44.8820,35.2140],
                        longitudes: [-93.2218,-80.9431]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,41.9786],
                        longitudes: [-93.2218,-87.9048]
                    },
                    {
                        latitudes: [44.8820,37.6190],
                        longitudes: [-93.2218,-122.3749]
                    },
                    {
                        latitudes: [44.8820,51.4775],
                        longitudes: [-93.2218,-0.4614]
                    },
                    {
                        latitudes: [44.8820,39.8617],
                        longitudes: [-93.2218,-104.6732]
                    },
                    {
                        latitudes: [44.8820,43.6772],
                        longitudes: [-93.2218,-79.6306]
                    }],
                images: [{
			            label: "Flights from Minneapolis",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Charlotte = {
                    id: "Charlotte" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Charlotte",
                    latitude: 35.2140,
                    longitude: -80.9431,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -80.9431,
                    zoomLatitude: 35.2140,
                    lines: [
                    {
                        latitudes: [35.2140,32.8968],
                        longitudes: [-80.9431,-97.0380]
                    },
                    {
                        latitudes: [35.2140,25.7933],
                        longitudes: [-80.9431,-80.2906]
                    },
                    {
                        latitudes: [35.2140,41.9786],
                        longitudes: [-80.9431,-87.9048]
                    },
                    {
                        latitudes: [35.2140,43.6772],
                        longitudes: [-80.9431,-79.6306]
                    },
                    {
                        latitudes: [35.2140,40.6398],
                        longitudes: [-80.9431,-73.7789]
                    },
                    {
                        latitudes: [35.2140,40.6398],
                        longitudes: [-80.9431,-73.7789]
                    },
                    {
                        latitudes: [35.2140,44.8820],
                        longitudes: [-80.9431,-93.2218]
                    },
                    {
                        latitudes: [35.2140,50.0264],
                        longitudes: [-80.9431,8.5431]
                    },
                    {
                        latitudes: [35.2140,48.3538],
                        longitudes: [-80.9431,11.7861]
                    },
                    {
                        latitudes: [35.2140,50.0264],
                        longitudes: [-80.9431,8.5431]
                    },
                    {
                        latitudes: [35.2140,39.8617],
                        longitudes: [-80.9431,-104.6732]
                    },
                    {
                        latitudes: [35.2140,32.8968],
                        longitudes: [-80.9431,-97.0380]
                    },
                    {
                        latitudes: [35.2140,40.6925],
                        longitudes: [-80.9431,-74.1687]
                    },
                    {
                        latitudes: [35.2140,29.9844],
                        longitudes: [-80.9431,-95.3414]
                    },
                    {
                        latitudes: [35.2140,36.0801],
                        longitudes: [-80.9431,-115.1522]
                    },
                    {
                        latitudes: [35.2140,33.9425],
                        longitudes: [-80.9431,-118.4081]
                    },
                    {
                        latitudes: [35.2140,44.8820],
                        longitudes: [-80.9431,-93.2218]
                    },
                    {
                        latitudes: [35.2140,41.9786],
                        longitudes: [-80.9431,-87.9048]
                    },
                    {
                        latitudes: [35.2140,37.6190],
                        longitudes: [-80.9431,-122.3749]
                    },
                    {
                        latitudes: [35.2140,39.8617],
                        longitudes: [-80.9431,-104.6732]
                    },
                    {
                        latitudes: [35.2140,32.8968],
                        longitudes: [-80.9431,-97.0380]
                    },
                    {
                        latitudes: [35.2140,40.6925],
                        longitudes: [-80.9431,-74.1687]
                    },
                    {
                        latitudes: [35.2140,50.0264],
                        longitudes: [-80.9431,8.5431]
                    },
                    {
                        latitudes: [35.2140,29.9844],
                        longitudes: [-80.9431,-95.3414]
                    },
                    {
                        latitudes: [35.2140,40.6398],
                        longitudes: [-80.9431,-73.7789]
                    },
                    {
                        latitudes: [35.2140,36.0801],
                        longitudes: [-80.9431,-115.1522]
                    },
                    {
                        latitudes: [35.2140,33.9425],
                        longitudes: [-80.9431,-118.4081]
                    },
                    {
                        latitudes: [35.2140,51.4775],
                        longitudes: [-80.9431,-0.4614]
                    },
                    {
                        latitudes: [35.2140,19.4363],
                        longitudes: [-80.9431,-99.0721]
                    },
                    {
                        latitudes: [35.2140,25.7933],
                        longitudes: [-80.9431,-80.2906]
                    },
                    {
                        latitudes: [35.2140,44.8820],
                        longitudes: [-80.9431,-93.2218]
                    },
                    {
                        latitudes: [35.2140,48.3538],
                        longitudes: [-80.9431,11.7861]
                    },
                    {
                        latitudes: [35.2140,41.9786],
                        longitudes: [-80.9431,-87.9048]
                    },
                    {
                        latitudes: [35.2140,37.6190],
                        longitudes: [-80.9431,-122.3749]
                    },
                    {
                        latitudes: [35.2140,43.6772],
                        longitudes: [-80.9431,-79.6306]
                    }],
                images: [{
			            label: "Flights from Charlotte",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var LasVegas = {
                    id: "LasVegas" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Las Vegas",
                    latitude: 36.0801,
                    longitude: -115.1522,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: -115.1522,
                    zoomLatitude: 36.0801,
                    lines: [
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,32.8968],
                        longitudes: [-115.1522,-97.0380]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,51.1481],
                        longitudes: [-115.1522,-0.1903]
                    },
                    {
                        latitudes: [36.0801,51.4775],
                        longitudes: [-115.1522,-0.4614]
                    },
                    {
                        latitudes: [36.0801,25.7933],
                        longitudes: [-115.1522,-80.2906]
                    },
                    {
                        latitudes: [36.0801,41.9786],
                        longitudes: [-115.1522,-87.9048]
                    },
                    {
                        latitudes: [36.0801,43.6772],
                        longitudes: [-115.1522,-79.6306]
                    },
                    {
                        latitudes: [36.0801,43.6772],
                        longitudes: [-115.1522,-79.6306]
                    },
                    {
                        latitudes: [36.0801,19.4363],
                        longitudes: [-115.1522,-99.0721]
                    },
                    {
                        latitudes: [36.0801,51.1481],
                        longitudes: [-115.1522,-0.1903]
                    },
                    {
                        latitudes: [36.0801,51.4775],
                        longitudes: [-115.1522,-0.4614]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,51.1481],
                        longitudes: [-115.1522,-0.1903]
                    },
                    {
                        latitudes: [36.0801,51.4775],
                        longitudes: [-115.1522,-0.4614]
                    },
                    {
                        latitudes: [36.0801,50.0264],
                        longitudes: [-115.1522,8.5431]
                    },
                    {
                        latitudes: [36.0801,37.4691],
                        longitudes: [-115.1522,126.4505]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,51.1481],
                        longitudes: [-115.1522,-0.1903]
                    },
                    {
                        latitudes: [36.0801,19.4363],
                        longitudes: [-115.1522,-99.0721]
                    },
                    {
                        latitudes: [36.0801,44.8820],
                        longitudes: [-115.1522,-93.2218]
                    },
                    {
                        latitudes: [36.0801,43.6772],
                        longitudes: [-115.1522,-79.6306]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,44.8820],
                        longitudes: [-115.1522,-93.2218]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,51.4775],
                        longitudes: [-115.1522,-0.4614]
                    },
                    {
                        latitudes: [36.0801,37.4691],
                        longitudes: [-115.1522,126.4505]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,32.8968],
                        longitudes: [-115.1522,-97.0380]
                    },
                    {
                        latitudes: [36.0801,29.9844],
                        longitudes: [-115.1522,-95.3414]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,44.8820],
                        longitudes: [-115.1522,-93.2218]
                    },
                    {
                        latitudes: [36.0801,41.9786],
                        longitudes: [-115.1522,-87.9048]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,44.8820],
                        longitudes: [-115.1522,-93.2218]
                    },
                    {
                        latitudes: [36.0801,35.2140],
                        longitudes: [-115.1522,-80.9431]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,40.6925],
                        longitudes: [-115.1522,-74.1687]
                    },
                    {
                        latitudes: [36.0801,29.9844],
                        longitudes: [-115.1522,-95.3414]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,41.9786],
                        longitudes: [-115.1522,-87.9048]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,35.2140],
                        longitudes: [-115.1522,-80.9431]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,41.9786],
                        longitudes: [-115.1522,-87.9048]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,51.1481],
                        longitudes: [-115.1522,-0.1903]
                    },
                    {
                        latitudes: [36.0801,40.6398],
                        longitudes: [-115.1522,-73.7789]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,39.8617],
                        longitudes: [-115.1522,-104.6732]
                    },
                    {
                        latitudes: [36.0801,33.9425],
                        longitudes: [-115.1522,-118.4081]
                    },
                    {
                        latitudes: [36.0801,37.6190],
                        longitudes: [-115.1522,-122.3749]
                    },
                    {
                        latitudes: [36.0801,43.6772],
                        longitudes: [-115.1522,-79.6306]
                    },
                    {
                        latitudes: [36.0801,19.4363],
                        longitudes: [-115.1522,-99.0721]
                    }],
                images: [{
			            label: "Flights from Las Vegas",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Bangkok = {
                    id: "Bangkok" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Bangkok",
                    latitude: 13.6811,
                    longitude: 100.7473,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 100.7473,
                    zoomLatitude: 13.6811,
                    lines: [
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,28.5665],
                        longitudes: [100.7473,77.1031]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,19.0887],
                        longitudes: [100.7473,72.8679]
                    },
                    {
                        latitudes: [13.6811,28.5665],
                        longitudes: [100.7473,77.1031]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,49.0128],
                        longitudes: [100.7473,2.5500]
                    },
                    {
                        latitudes: [13.6811,19.0887],
                        longitudes: [100.7473,72.8679]
                    },
                    {
                        latitudes: [13.6811,28.5665],
                        longitudes: [100.7473,77.1031]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,24.4330],
                        longitudes: [100.7473,54.6511]
                    },
                    {
                        latitudes: [13.6811,49.0128],
                        longitudes: [100.7473,2.5500]
                    },
                    {
                        latitudes: [13.6811,51.4775],
                        longitudes: [100.7473,-0.4614]
                    },
                    {
                        latitudes: [13.6811,52.3086],
                        longitudes: [100.7473,4.7639]
                    },
                    {
                        latitudes: [13.6811,51.4775],
                        longitudes: [100.7473,-0.4614]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,48.1103],
                        longitudes: [100.7473,16.5697]
                    },
                    {
                        latitudes: [13.6811,40.0801],
                        longitudes: [100.7473,116.5846]
                    },
                    {
                        latitudes: [13.6811,52.3086],
                        longitudes: [100.7473,4.7639]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,28.5665],
                        longitudes: [100.7473,77.1031]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,25.2528],
                        longitudes: [100.7473,55.3644]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,-33.9461],
                        longitudes: [100.7473,151.1772]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,24.4330],
                        longitudes: [100.7473,54.6511]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,40.0801],
                        longitudes: [100.7473,116.5846]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,51.4775],
                        longitudes: [100.7473,-0.4614]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,52.3086],
                        longitudes: [100.7473,4.7639]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,50.0264],
                        longitudes: [100.7473,8.5431]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,48.3538],
                        longitudes: [100.7473,11.7861]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,40.0801],
                        longitudes: [100.7473,116.5846]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,30.5785],
                        longitudes: [100.7473,103.9471]
                    },
                    {
                        latitudes: [13.6811,24.9924],
                        longitudes: [100.7473,102.7435]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,48.1103],
                        longitudes: [100.7473,16.5697]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,24.4330],
                        longitudes: [100.7473,54.6511]
                    },
                    {
                        latitudes: [13.6811,19.0887],
                        longitudes: [100.7473,72.8679]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,25.2528],
                        longitudes: [100.7473,55.3644]
                    },
                    {
                        latitudes: [13.6811,-33.9461],
                        longitudes: [100.7473,151.1772]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,50.9014],
                        longitudes: [100.7473,4.4844]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,19.0887],
                        longitudes: [100.7473,72.8679]
                    },
                    {
                        latitudes: [13.6811,50.9014],
                        longitudes: [100.7473,4.4844]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,49.0128],
                        longitudes: [100.7473,2.5500]
                    },
                    {
                        latitudes: [13.6811,55.6179],
                        longitudes: [100.7473,12.6560]
                    },
                    {
                        latitudes: [13.6811,30.5785],
                        longitudes: [100.7473,103.9471]
                    },
                    {
                        latitudes: [13.6811,28.5665],
                        longitudes: [100.7473,77.1031]
                    },
                    {
                        latitudes: [13.6811,55.4086],
                        longitudes: [100.7473,37.9061]
                    },
                    {
                        latitudes: [13.6811,25.2528],
                        longitudes: [100.7473,55.3644]
                    },
                    {
                        latitudes: [13.6811,41.8045],
                        longitudes: [100.7473,12.2508]
                    },
                    {
                        latitudes: [13.6811,50.0264],
                        longitudes: [100.7473,8.5431]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,40.9769],
                        longitudes: [100.7473,28.8146]
                    },
                    {
                        latitudes: [13.6811,24.9924],
                        longitudes: [100.7473,102.7435]
                    },
                    {
                        latitudes: [13.6811,2.7456],
                        longitudes: [100.7473,101.7099]
                    },
                    {
                        latitudes: [13.6811,51.4775],
                        longitudes: [100.7473,-0.4614]
                    },
                    {
                        latitudes: [13.6811,40.4936],
                        longitudes: [100.7473,-3.5668]
                    },
                    {
                        latitudes: [13.6811,48.3538],
                        longitudes: [100.7473,11.7861]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,40.0801],
                        longitudes: [100.7473,116.5846]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,-33.9461],
                        longitudes: [100.7473,151.1772]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,48.1103],
                        longitudes: [100.7473,16.5697]
                    },
                    {
                        latitudes: [13.6811,40.9769],
                        longitudes: [100.7473,28.8146]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    },
                    {
                        latitudes: [13.6811,1.3502],
                        longitudes: [100.7473,103.9944]
                    },
                    {
                        latitudes: [13.6811,35.7647],
                        longitudes: [100.7473,140.3864]
                    },
                    {
                        latitudes: [13.6811,23.3924],
                        longitudes: [100.7473,113.2988]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,40.0801],
                        longitudes: [100.7473,116.5846]
                    },
                    {
                        latitudes: [13.6811,31.1434],
                        longitudes: [100.7473,121.8052]
                    },
                    {
                        latitudes: [13.6811,55.4086],
                        longitudes: [100.7473,37.9061]
                    },
                    {
                        latitudes: [13.6811,59.8003],
                        longitudes: [100.7473,30.2625]
                    },
                    {
                        latitudes: [13.6811,25.0777],
                        longitudes: [100.7473,121.2328]
                    },
                    {
                        latitudes: [13.6811,22.3089],
                        longitudes: [100.7473,113.9146]
                    },
                    {
                        latitudes: [13.6811,24.4330],
                        longitudes: [100.7473,54.6511]
                    },
                    {
                        latitudes: [13.6811,37.4691],
                        longitudes: [100.7473,126.4505]
                    }],
                images: [{
			            label: "Flights from Bangkok",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
    var Moscow = {
                    id: "Moscow" ,
                    color: "#000000",
	                svgPath: targetSVG,
                    title: "Moscow",
                    latitude: 55.4086,
                    longitude: 37.9061,
                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: 37.9061,
                    zoomLatitude: 55.4086,
                    lines: [
                    {
                        latitudes: [55.4086,51.2895],
                        longitudes: [37.9061,6.7668]
                    },
                    {
                        latitudes: [55.4086,50.0264],
                        longitudes: [37.9061,8.5431]
                    },
                    {
                        latitudes: [55.4086,48.3538],
                        longitudes: [37.9061,11.7861]
                    },
                    {
                        latitudes: [55.4086,51.4775],
                        longitudes: [37.9061,-0.4614]
                    },
                    {
                        latitudes: [55.4086,41.8045],
                        longitudes: [37.9061,12.2508]
                    },
                    {
                        latitudes: [55.4086,22.3089],
                        longitudes: [37.9061,113.9146]
                    },
                    {
                        latitudes: [55.4086,25.2528],
                        longitudes: [37.9061,55.3644]
                    },
                    {
                        latitudes: [55.4086,24.4330],
                        longitudes: [37.9061,54.6511]
                    },
                    {
                        latitudes: [55.4086,59.8003],
                        longitudes: [37.9061,30.2625]
                    },
                    {
                        latitudes: [55.4086,48.1103],
                        longitudes: [37.9061,16.5697]
                    },
                    {
                        latitudes: [55.4086,41.2971],
                        longitudes: [37.9061,2.0785]
                    },
                    {
                        latitudes: [55.4086,40.4936],
                        longitudes: [37.9061,-3.5668]
                    },
                    {
                        latitudes: [55.4086,35.7647],
                        longitudes: [37.9061,140.3864]
                    },
                    {
                        latitudes: [55.4086,50.0264],
                        longitudes: [37.9061,8.5431]
                    },
                    {
                        latitudes: [55.4086,48.3538],
                        longitudes: [37.9061,11.7861]
                    },
                    {
                        latitudes: [55.4086,48.1103],
                        longitudes: [37.9061,16.5697]
                    },
                    {
                        latitudes: [55.4086,24.4330],
                        longitudes: [37.9061,54.6511]
                    },
                    {
                        latitudes: [55.4086,51.2895],
                        longitudes: [37.9061,6.7668]
                    },
                    {
                        latitudes: [55.4086,50.0264],
                        longitudes: [37.9061,8.5431]
                    },
                    {
                        latitudes: [55.4086,22.3089],
                        longitudes: [37.9061,113.9146]
                    },
                    {
                        latitudes: [55.4086,59.8003],
                        longitudes: [37.9061,30.2625]
                    },
                    {
                        latitudes: [55.4086,40.4936],
                        longitudes: [37.9061,-3.5668]
                    },
                    {
                        latitudes: [55.4086,48.3538],
                        longitudes: [37.9061,11.7861]
                    },
                    {
                        latitudes: [55.4086,35.7647],
                        longitudes: [37.9061,140.3864]
                    },
                    {
                        latitudes: [55.4086,48.1103],
                        longitudes: [37.9061,16.5697]
                    },
                    {
                        latitudes: [55.4086,50.9014],
                        longitudes: [37.9061,4.4844]
                    },
                    {
                        latitudes: [55.4086,29.9844],
                        longitudes: [37.9061,-95.3414]
                    },
                    {
                        latitudes: [55.4086,1.3502],
                        longitudes: [37.9061,103.9944]
                    },
                    {
                        latitudes: [55.4086,59.8003],
                        longitudes: [37.9061,30.2625]
                    },
                    {
                        latitudes: [55.4086,13.6811],
                        longitudes: [37.9061,100.7473]
                    },
                    {
                        latitudes: [55.4086,51.1481],
                        longitudes: [37.9061,-0.1903]
                    },
                    {
                        latitudes: [55.4086,53.3537],
                        longitudes: [37.9061,-2.2750]
                    },
                    {
                        latitudes: [55.4086,48.1103],
                        longitudes: [37.9061,16.5697]
                    },
                    {
                        latitudes: [55.4086,41.2971],
                        longitudes: [37.9061,2.0785]
                    },
                    {
                        latitudes: [55.4086,13.6811],
                        longitudes: [37.9061,100.7473]
                    },
                    {
                        latitudes: [55.4086,25.2528],
                        longitudes: [37.9061,55.3644]
                    },
                    {
                        latitudes: [55.4086,41.8045],
                        longitudes: [37.9061,12.2508]
                    },
                    {
                        latitudes: [55.4086,22.3089],
                        longitudes: [37.9061,113.9146]
                    },
                    {
                        latitudes: [55.4086,29.9844],
                        longitudes: [37.9061,-95.3414]
                    },
                    {
                        latitudes: [55.4086,59.8003],
                        longitudes: [37.9061,30.2625]
                    },
                    {
                        latitudes: [55.4086,1.3502],
                        longitudes: [37.9061,103.9944]
                    },
                    {
                        latitudes: [55.4086,48.1103],
                        longitudes: [37.9061,16.5697]
                    },
                    {
                        latitudes: [55.4086,41.2971],
                        longitudes: [37.9061,2.0785]
                    },
                    {
                        latitudes: [55.4086,59.8003],
                        longitudes: [37.9061,30.2625]
                    }],
                images: [{
			            label: "Flights from Moscow",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20}]
            };
            var cities = [
                    AbuDhabi,
                    Amsterdam,
                    Bangkok,
                    Barcelona,
                    Beijing,
                    Brussels,
                    Charlotte,
                    Chengdu,
                    Chicago,
                    Copenhagen,
                    DallasFortWorth,
                    Delhi,
                    Denver,
                    Dubai,
                    Duesseldorf,
                    Frankfurt,
                    Guangzhou,
                    HongKong,
                    Houston,
                    Istanbul,
                    KualaLumpur,
                    Kunming,
                    LasVegas,
                    London,
                    London,
                    LosAngeles,
                    Madrid,
                    Manchester,
                    MexicoCity,
                    Miami,
                    Minneapolis,
                    Moscow,
                    Mumbai,
                    Munich,
                    Newark,
                    NewYork,
                    Paris,
                    Rome,
                    SanFrancisco,
                    Seoul,
                    Shanghai,
                    Singapore,
                    StPetersburg,
                    Sydney,
                    Taipei,
                    Tokyo,
                    Toronto,
                    Vienna,
                    Xian,

            ];
            
            dataProvider.images = cities;
            map.dataProvider = dataProvider;
            map.backgroundZoomsToTop = true;
            map.linesAboveImages = true;
            
            map.objectList = new AmCharts.ObjectList("listdiv");
            map.showImagesInList = true;

            map.write("mapdiv");

        });
