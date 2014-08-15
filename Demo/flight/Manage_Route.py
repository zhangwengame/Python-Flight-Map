import string
import time
import convertData
import sys
dep = sys.argv[1]     #departure
des = sys.argv[2]     #destination
idNo = sys.argv[3]
idNo = str(idNo)
path = sys.argv[4]
path = str(path)
ratio = float(sys.argv[5])

def findBest(ans,dep,des,flytime,waittime,wctrl,sday,shour,smin):
    maxfly = maxwait = 0
    minfly = minwait = 10000
    n = len(ans)
    for i in range(n):
        extraday = ans[i]['extraTime']
        flytime.append(ans[i]['time'])
        dtime = ans[i]['deTime']
        dhour = int(dtime[:2])
        dmin = int(dtime[3:5])
        atime = ans[i]['arTime']
        ahour = int(atime[:2])
        amin = int(atime[3:5])
        if (shour>dhour)or((shour==dhour)and(smin>dmin)):
            extraday += 1
        while (ans[i]['week'][sday]==False):
            sday = (sday+1)%7
            extraday += 1
        waittime.append(extraday*24*60+(ahour-shour)*60+(amin-smin))
        if waittime[i]>maxwait:
            maxwait = waittime[i]
        if waittime[i]<minwait:
            minwait = waittime[i]
        if flytime[i]>maxfly:
            maxfly = flytime[i]
        if flytime[i]<minfly:
            minfly = flytime[i]
    #print(maxwait,minwait,maxfly,minfly)

    rate = []
    for i in range(n):
        flyrate = (flytime[i]-minfly)/(maxfly-minfly+1)
        waitrate = (waittime[i]-minwait)/(maxwait-minwait+1)
        rate.append(flyrate*(1-ratio)+waitrate*ratio)
    minrateindex = 0
    minrate = 10
    for i in range(n):
        if rate[i]<minrate:
            minrate = rate[i]
            minrateindex = i
    print(minrateindex)
    if (len(flytime)!=0):
        bestfly = flytime[minrateindex]
        bestwait = waittime[minrateindex]
        if (wctrl==1):
            print("""   <flight>
     <No>{}</No>
     <dep>{}</dep>
     <depTime>{}</depTime>
     <des>{}</des>
     <desTime>{}</desTime>
     <price>{}</price>
     <type>{}</type>
   </flight>""".format(ans[minrateindex]['flCode'],nocity[dep],
                       ans[minrateindex]['deTime'],nocity[des],
                         ans[minrateindex]['arTime'],ans[minrateindex]['time'],
                         ans[minrateindex]['flType']),file=f_out)
        return bestfly,bestwait
    else:
        print("""   <flight>
     <No>No Flight</No>
     <dep>No Flight</dep>
     <depTime>No Flight</depTime>
     <des>No Flight</des>
     <desTime>No Flight</desTime>
     <price>No Flight</price>
     <type>No Flight</type>
   </flight>""",file=f_out)
        return 10000,10000

midCity=[193,302,340,345,346,478,502,507,580,609,1218,1229,1382,1555,1613,1701,
1824,2179,2188,2276,2279,2948,2997,3077,3093,3930,3304,3316,3361,3364,3370,3379,
3382,3393,3395,3406,3469,3484,3494,3550,3576,3670,3751,3797,3830,3858,3876,3877,
3885,4029]
# main
start=[]
dest = []
nocity = {}
full_info = []
nowday = time.localtime().tm_wday
nowhour = time.localtime().tm_hour
nowmin = time.localtime().tm_min
f_route = open("dataFile/nroute","r")
f_out = open(path+'/'+idNo+'.xml','w')

f_code = open("dataFile/Number_City","r");
for line in f_code:
    res = line.split(',')
    if res[1][1:4]==dep:
        startCity = int(res[0])
    if res[1][1:4]==des:
        destCity = int(res[0])
    nocity[int(res[0])]=res[1][1:4]

for line in f_route:
    linelist = line.split(',')
    start.append(int(linelist[3]))
    dest.append(int(linelist[5]))
    full_info.append(line)

ans = convertData.onlineInfo(startCity,destCity)

flytime = []
waittime = []
bf0 = bw0 = 0
print("<plans>",file=f_out)
print("<plan>",file=f_out)
bf0,bw0 = findBest(ans,startCity,destCity,flytime,waittime,1,nowday,nowhour,nowmin)
print("</plan>",file=f_out)

bf = []
bw = []
for i in range(50):
    if (midCity[i]!=startCity)and(midCity[i]!=destCity):
        ans = convertData.onlineInfo(startCity,midCity[i])
        if (len(ans)!=0):
            bf1,bw1 = findBest(ans,startCity,midCity[i],flytime,waittime,0,nowday,nowhour,nowmin)
            #print(bf1,bw1)
        else:
            bf1 = 10000
            bw1 = 10000
        ans = convertData.onlineInfo(midCity[i],destCity)
        nextmin = nowmin+bw1
        nexthour = (nowhour+nextmin//60)%24
        nextmin = nextmin%60
        if (len(ans)!=0):
            bf2,bw2 = findBest(ans,midCity[i],destCity,flytime,waittime,0,nowday,nexthour,nextmin)     #hehe
            #print(bf2,bw2)
        else:
            bf2 = 10000
            bw2 = 10000
        bf.append(bf1+bf2)
        bw.append(bw1+bw2)
        #print(i,len(bf)," ######",bf1+bf2,bw1+bw2)
    else:
        bf.append(20000)
        bw.append(20000)
        
rate = []
minrate = 10000
minrateindex = 0
for i in range(50):
    print(i)
    rate.append(bf[i]*(1-ratio)+bw[i]*ratio)       #hehe
    if rate[i]<minrate:
        minrate = rate[i]
        minrateindex = i

print("<plan>",file=f_out)
ans = convertData.onlineInfo(startCity,midCity[minrateindex])
if (len(ans)!=0):
    findBest(ans,startCity,midCity[minrateindex],flytime,waittime,1,nowday,nowhour,nowmin)
ans = convertData.onlineInfo(midCity[minrateindex],destCity)
if (len(ans)!=0):
    findBest(ans,midCity[minrateindex],destCity,flytime,waittime,1,nowday,nexthour,nextmin)
print("</plan>",file=f_out)
print("</plans>",file=f_out)

f_route.close()
f_out.close()

