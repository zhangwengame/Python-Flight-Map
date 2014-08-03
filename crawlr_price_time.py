#!

#invoke by giving the url as an input

import urllib.request
import sys

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

startCity = startCity.strip('\n"')
destCity = destCity.strip('\n"')
urlarg = "http://flight.qunar.com/schedule/international/fsearch_list.jsp?departure="+startCity+"&arrival="+destCity
print(urlarg)
thepage = urllib.request.urlopen(urlarg)
fullPage=open("WebOut.txt","w")
print (thepage.read().decode('utf8'),file=fullPage)
fullPage.close()


