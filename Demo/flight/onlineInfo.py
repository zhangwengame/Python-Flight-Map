#!

#invoke by giving the url as an input
def onlineInfo(start,dest):
	import urllib.request
	from bs4 import BeautifulSoup
	f_name = open("dataFile/Number_City","r")
	for line in f_name:
	    chart = line.split(',')
	    if str(start)==chart[0]:
	        startCity = chart[1]
	    if str(dest)==chart[0]:
	        destCity = chart[1]

	startCity = startCity[:4]
	destCity = destCity[:4]
	urlarg = "http://flight.qunar.com/schedule/international/fsearch_list.jsp?departure="+startCity+"&arrival="+destCity
	urlarg = urlarg.replace('"','')
	print(urlarg)
	thepage = urllib.request.urlopen(urlarg)
	ncdic={}
	fdic=open('dataFile/Number_Chinese','r');
	for line in fdic:
		strs=line.split(',')
		ncdic[strs[1].strip()]=int(strs[0])
	fdic.close()
	web=thepage.read().decode('utf8')
	soup=BeautifulSoup(web)
	content=soup.find_all("div","result_content")
	content=content[0]
	content=content.find_all("li")
	ans=[]
	for flight in content:
		#info=flight.find_all("span")
		fldic={}
		#flight_code and flight type  span c1
		span=flight.find_all("span","c1")[0]
		fldic['flCode']=span.find_all("b")[0].string
		if len(span.find_all("span","title")[0].contents)<5:
			continue
		fldic['flType']=span.find_all("span","title")[0].contents[3].replace('空客','Airbus').replace("波音","Boeing").replace("中","Medium").replace("大","Large").replace("小","Small").replace("宽体机","Wide")
		#flight time span c2
		span=flight.find_all("span","c2")[0]	
		fldic['deTime']=span.find_all("div","time1")[0].string
		fldic['arTime']=span.find_all("div","time2")[0].contents[0].string
		fldic['extraTime']=0
		tmpResult=span.find_all("cite","d1")
		if len(tmpResult)!=0:
			fldic['extraTime']=1
		tmpResult=span.find_all("cite","d2")
		if len(tmpResult)!=0:
			fldic['extraTime']=2
		#airport
		span=flight.find_all("span","c3")[0]
		if not(span.contents[0] in ncdic):
			continue
		if not(span.contents[2] in ncdic):
			continue
		st=ncdic[span.contents[0]]
		de=ncdic[span.contents[2]]
		if (st!=start or de!=dest):
			continue
		#time
		span=flight.find_all("span","c4")[0]
		ti=span.string.replace('小时',',').replace("分钟",'')
		ti=ti.split(',')
		if len(ti)==1:
			ti=int(ti[0])
		else:
			if ti[1]=='':
				ti[1]='0'
			ti=int(ti[0])*60+int(ti[1])
		fldic['time']=ti
		#weekday
		span=flight.find_all("span","c5")[0]
		week=[]
		for i in range(7):
			if span.contents[i]['class'][0] == 'circular_blue':
				week.append(True)
			else:
				week.append(False)
		fldic['week']=week
		ans.append(fldic)
	return ans