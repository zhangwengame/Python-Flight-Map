import string
import time
import onlineInfo

# main
start=[]
dest = []
full_info = []
f_route = open("nroute","r")
f_out = open("ManageOut.txt","w")

for line in f_route:
    linelist = line.split(',')
    start.append(int(linelist[3]))
    dest.append(int(linelist[5]))
    full_info.append(line)

str1 = input("Where do you start? ")
str2 = input("Where do you want to go? ")
startCity = int(str1)
destCity = int(str2)
print("Here is a direct route: ",file=f_out)
ans = onlineInfo.onlineInfo(startCity,destCity)

n = len(ans)
flytime = []
waittime = []
maxfly = maxwait = 0
minfly = minwait = 10000
for i in range(n):
    print(ans[i])
    extraday = ans[i]['extraTime']
    flytime.append(ans[i]['time'])
    dtime = ans[i]['deTime']
    dhour = int(dtime[:2])
    dmin = int(dtime[3:5])
    atime = ans[i]['arTime']
    ahour = int(atime[:2])
    amin = int(atime[3:5])
    nowhour = time.localtime().tm_hour
    nowmin = time.localtime().tm_min
    if (nowhour>dhour)or((nowhour==dhour)and(nowmin>dmin)):
        extraday += 1
    waittime.append(extraday*24*60+(ahour-nowhour)*60+(amin-nowmin))
    
    if waittime[i]>maxwait:
        maxwait = waittime[i]
    if waittime[i]<minwait:
        minwait = waittime[i]
    if flytime[i]>maxfly:
        maxfly = flytime[i]
    if flytime[i]<minfly:
        minfly = flytime[i]
print(maxwait,minwait,maxfly,minfly)

rate = []
for i in range(n):
    flyrate = (flytime[i]-minfly)/(maxfly-minfly)
    waitrate = (waittime[i]-minwait)/(maxwait-minwait)
    rate.append(flyrate+waitrate)
    print(rate[i])
    

"""for i in range(n):
    if start[i]==startCity:
        for j in range(n):
            if dest[i]==start[j] and dest[j]==destCity:
                print("Here is a route with 1 transation: ",file=f_out)
                print(full_info[i],file=f_out,end='')
                print(full_info[j],file=f_out)"""

f_route.close()
f_out.close()

