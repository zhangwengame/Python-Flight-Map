import sys
dep = sys.argv[1]
des = sys.argv[2]
idNo = sys.argv[3]
idNo = str(idNo)
rate = sys.argv[4]
path = sys.argv[5]
path = str(path)

output = '<?xml version="1.0" encoding="UTF-8"?>\
<plans>\
  <plan>\
      <flight>\
       <No>UA858</No>\
       <dep>PVG</dep>\
       <depTime>1200</depTime>\
       <des>SFO</des>\
       <desTime>1300</desTime>\
       <price>123</price>\
       <type>B747-700</type>\
     </flight>\
     <flight>\
       <No>MU536</No>\
       <dep>HHH</dep>\
       <depTime>1300</depTime>\
       <des>LLL</des>\
       <desTime>1330</desTime>\
       <price>456</price>\
       <type>A330</type>\
     </flight>\
  </plan>\
  <plan>\
    <flight>\
       <No>CA123</No>\
       <dep>PVG</dep>\
       <depTime>1200</depTime>\
       <des>SFO</des>\
       <desTime>1300</desTime>\
       <price>123</price>\
       <type>B747-700</type>\
     </flight>\
  </plan>\
</plans>\
'

#请把output改为查询的结果，这里只是做一个演示


f = open(path+'/'+idNo+'.xml','w')
print(output,file = f)
f.close()
