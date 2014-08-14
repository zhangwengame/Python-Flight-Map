import onlineInfo
f=open("dataFile/Number_City","r")
city=[]

for line in f:
	strs=line.split(',')
	city.append(int(strs[0]))

f.close()
for fcity in city:
	#if (fcity>=3469 and fcity!=3930):
	if (fcity>=2276 and fcity<3093):
		for scity in city:
			if (fcity>=3364 and fcity<=3406 and scity>=3364 and scity<=3406):
				continue
			if fcity!=scity:
				f=open("flightData/"+str(fcity)+'_'+str(scity),"w")
				tmp=onlineInfo.onlineInfo(fcity,scity)
				for flight in tmp:
					print(flight['flType'],end=',',file=f)
					print(flight['deTime'],end=',',file=f)
					print(flight['arTime'],end=',',file=f)	
					print(flight['extraTime'],end=',',file=f)		
					print(flight['flCode'],end=',',file=f)															
					for w in flight['week']:
						print(w,end=',',file=f)
					print(flight['time'],end=',',file=f)
					print(file=f)
				f.close()
