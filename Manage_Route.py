import string

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
n = len(start)
for i in range(n):
    if start[i]==startCity and dest[i]==destCity:
        print("Here is a direct route: ",file=f_out)
        print(full_info[i],file=f_out)

for i in range(n):
    if start[i]==startCity:
        for j in range(n):
            if dest[i]==start[j] and dest[j]==destCity:
                print("Here is a route with 1 transation: ",file=f_out)
                print(full_info[i],file=f_out,end='')
                print(full_info[j],file=f_out)

f_route.close()
f_out.close()
