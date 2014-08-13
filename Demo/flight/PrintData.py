fdata=open("data.js","w")
print("""AmCharts.ready(function() {
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
""",file=fdata)
airdic={}
fair=open("nairport","r")
for line in fair:
	strs=line.split(',')	
	strs[2]=strs[2].replace("'","")
	strs[2]=strs[2].replace(" ","")
	strs[2]=strs[2].replace(".","")
	strs[2]=strs[2].replace("-","")
	airdic[int(strs[0])]=(float(strs[6]),float(strs[7]),strs[2])
fair.close()

fair=open("nairport","r")
for line in fair:
	split=line.split(',')
	name=split[2].strip('"')
	split[2]=split[2].replace("'","")
	split[2]=split[2].replace(" ","")
	split[2]=split[2].replace(".","")
	split[2]=split[2].replace("-","")
	print("    var {} = {}".format(split[2].strip('"'),'{'),file=fdata)
	print("                    id:",split[2],',',file=fdata)
	print("""                    color: "#000000",
	                svgPath: targetSVG,""",file=fdata)
	print("                    title: {},".format('"'+name+'"'),file=fdata)
	print("                    latitude: {:.4f},".format(float(split[6])),file=fdata)
	print("                    longitude: {:.4f},".format(float(split[7])),file=fdata)
	print("""                    scale: 1.5,
                    zoomLevel: 5,
                    zoomLongitude: {:.4f},
                    zoomLatitude: {:.4f},""".format(float(split[7]),float(split[6])),file=fdata)
	print("                    lines: [",file=fdata)
	froute=open("nroute","r")
	tag=0
	for lines in froute:
		strs=lines.split(',')
		sour=int(strs[3])
		dest=int(strs[5])	
		if sour==int(split[0]):
			if tag==0:
				print("                    {",file=fdata)
			else:
				print(",\n                    {",file=fdata)
			tag+=1
			print("                        latitudes: [{:.4f},{:.4f}],".format(float(split[6]),airdic[dest][0]),file=fdata)
			print("                        longitudes: [{:.4f},{:.4f}]".format(float(split[7]),airdic[dest][1]),file=fdata)
			print("                    }",end="",file=fdata)
	print("],",file=fdata)
	print("                images: [{",file=fdata)
	print("""			            label: "Flights from {}",
			            svgPath: planeSVG,
			            left: 100,
			            top: 45,
			            labelShiftY:5,
			            color: "#CC0000",
			            labelColor: "#CC0000",
			            labelRollOverColor: "#CC0000",
			            labelFontSize: 20{}]""".format(name,'}'),file=fdata)
	print("            };",file=fdata)		
print("            var cities = [",file=fdata)
for no in airdic:
	print("                    {},".format(airdic[no][2].strip('"')),file=fdata)
print("            ];",file=fdata)
print("""            dataProvider.linkToObject = London;
            dataProvider.images = cities;
            map.dataProvider = dataProvider;
            map.backgroundZoomsToTop = true;
            map.linesAboveImages = true;
            
            map.objectList = new AmCharts.ObjectList("listdiv");
            map.showImagesInList = true;

            map.write("mapdiv");

        });""",file=fdata)

fdata.close()
