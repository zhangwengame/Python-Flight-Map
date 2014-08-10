#!

#invoke by giving the url as an input

import urllib.request
import sys
from bs4 import BeautifulSoup

str1 = input("The start? ")
str2 = input("The destination? ")
start = int(str1)
dest = int(str2)
f_name = open("Number_City","r")
for line in f_name:
    chart = line.split(',')
    if str1==chart[0]:
        startCity = chart[1]
    if str2==chart[0]:
        destCity = chart[1]

startCity = startCity[:4]
destCity = destCity[:4]
urlarg = "http://flight.qunar.com/schedule/international/fsearch_list.jsp?departure="+startCity+"&arrival="+destCity
urlarg = urlarg.replace('"','')
print(urlarg)
thepage = urllib.request.urlopen(urlarg)
ncdic={}
fdic=open('Number_Chinese','r');
for line in fdic:
	strs=line.split(',')
	ncdic[strs[1].strip()]=int(strs[0])
fdic.close()

# fullPage=open("WebOut.txt","w")
# print (thepage.read().decode('utf8'),file=fullPage)
# fullPage.close()

# fullPage = open("WebOut.txt","r")
# soup=BeautifulSoup(fullPage)
web=thepage.read().decode('utf8')
# print(web)
# f_select = open("SelectOut.txt","w")
# for line in fullPage:
#     if "鼠标移上去，显示timedetail时，需要在这位置加hover" in line:
#         print(line,file=f_select)
# fullPage.close()
# f_select.close()

