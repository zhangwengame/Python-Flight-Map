import sys
dep = sys.argv[1]     #出发地
des = sys.argv[2]     #目的地
idNo = sys.argv[3]
idNo = str(idNo)
path = sys.argv[4]
path = str(path)

output = '<?xml version="1.0" encoding="UTF-8"?>\
<flights>\
   <property>\
     <flight>UA858</flight>\
     <dep>PVG</dep>\
     <depTime>1200</depTime>\
     <des>SFO</des>\
     <desTime>1900</desTime>\
     <price>123</price>\
     <type>B747-700</type>\
   </property>\
   <property>\
     <flight>MU536</flight>\
     <dep>HHH</dep>\
     <depTime>1300</depTime>\
     <des>LLL</des>\
     <desTime>1330</desTime>\
     <price>456</price>\
     <type>A330</type>\
   </property>\
   <property>\
     <flight>CA118</flight>\
     <dep>BBB</dep>\
     <depTime>1400</depTime>\
     <des>SSS</des>\
     <desTime>1430</desTime>\
     <price>789</price>\
     <type>ARJ21</type>\
   </property>\
</flights>\
'

#请把output改为查询的结果，这里只是做一个演示


f = open(path+'/'+idNo+'.xml','w')
print(output,file = f)
f.close()
