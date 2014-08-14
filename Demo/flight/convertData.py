def onlineInfo(start,dest):
	Ans=[]	
	f=open("flightData/"+str(start)+'_'+str(dest),"r")
	for line in f:
		ans={}
		strs=line.split(',')
		ans['time']=int(strs[12])
		ans['flCode']=strs[4]
		ans['week']=[bool("True"==strs[5]),bool("True"==strs[6]),bool("True"==strs[7]),bool("True"==strs[8]),bool("True"==strs[9]),bool("True"==strs[10]),bool("True"==strs[11])]
		ans['extraTime']=int(strs[3])
		ans['flType']=strs[0]
		ans['arTime']=strs[2]
		ans['deTime']=strs[1]
		Ans.append(ans)
	return Ans
