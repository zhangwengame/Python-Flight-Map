import sys
import os
idNo = sys.argv[1]
idNo = str(idNo)
path = sys.argv[2]
path = str(path)


try:
    os.remove( path+'/'+idNo+'.xml' )
except  WindowsError:
    pass



