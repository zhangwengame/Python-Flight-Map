#!python3
airport=[(0,i) for i in range(10000)]

froutes=open("routes.dat","r")
for line in froutes:
	strs=line.split(',')
	if (strs[3].isdigit()==False):
		continue;
	if (strs[5].isdigit()==False):
		continue;
	sour=int(strs[3])
	dest=int(strs[5])
	airport[sour]=(airport[sour][0]+1,sour)
	airport[dest]=(airport[dest][0]+1,dest)
airport.sort(reverse=True)
newairport=[x[1] for x in airport[:50]]
froutes.close()
fnewairport=open('nairport','w');
fnewroute=open('nroute','w');
fairport=open("airports.dat","r")
for line in fairport:
	strs=line.split(',')
	if (strs[0].isdigit()==False):
		continue;
	if int(strs[0]) in newairport:
		print(line.strip(),file=fnewairport)
fnewairport.close()
froutes=open("routes.dat","r")
for line in froutes:
	strs=line.split(',')
	if (strs[3].isdigit()==False):
		continue;
	if (strs[5].isdigit()==False):
		continue;
	sour=int(strs[3])
	dest=int(strs[5])
	if (sour in newairport) and (dest in newairport):
		print(line.strip(),file=fnewroute)
fnewroute.close()
froutes.close()