    var xmlHttp;
    var requestType="";
    var id;
    var dep;
    var des;
    var rate;


    function doSearch()
    {
      //alert("dOSearch");
      dep = document.getElementById("dep").value;
      des = document.getElementById("des").value;
      rate = document.getElementById("rate").value;
      id = parseInt(Math.random()*10000000);
      //alert(dep+des+id);
      doQuery();
      setTimeout(loadXml,1000);//延时1秒钟加载python生成的文件，否则会乱码。
      //delXml(id);


    }



    function doQuery()
    {
      
      var url="query.php";
      url = url + "?dep=" + dep;
      url = url + "&des=" + des;
      url = url + "&id=" + id;
      url = url + "&rate=" + rate;


      if(window.ActiveXObject)
      {
           xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      else if(window.XMLHttpRequest)
      {
           xmlHttp=new XMLHttpRequest();
      }
      //alert("doQuery:"+url);
      xmlHttp.open("GET",url,true);
      //xmlHttp.onreadystatechange=callback;
      xmlHttp.send(null);
    }



    function loadXml()
    {
      //alert("loadXml");
      var url=id+".xml";
      if(window.ActiveXObject)
      {
           xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      else if(window.XMLHttpRequest)
      {
           xmlHttp=new XMLHttpRequest();
      }
      xmlHttp.open("GET",url,true);
      xmlHttp.onreadystatechange=callback;
      xmlHttp.send(null);
    }


    function callback()
    {
       //alert(id);
       if(xmlHttp.readyState==4)
       {
           if(xmlHttp.status==200)
           {
            
              clearPreviousResults();
              parseResults();
              //setTimeout(delXml(),5000);
           }
       }
    }


    function clearPreviousResults()
    {
       //alert("clearPreviousResults"); 
       // var header=document.getElementById("header");
       // if(header.hasChildNodes())
       // {
       //    header.removeChild(header.childNodes[0]);
       // }
       var tableBody=document.getElementById("resultsTable");
       // if(tableBody.hasChildNodes())
       // {
       //    tableBody.removeChild(tableBody.childNodes[0]);
       // }
       while(tableBody.childNodes.length>0)
       {
          tableBody.removeChild(tableBody.childNodes[0]);
       }
    }
   
    function parseResults()
    {
       //alert("parseResults");
       var results=xmlHttp.responseXML;
       var plan=null;
       //var flight="";
       var dep="";
       var depTime="";
       var des="";
       var desTime="";
       var price="";
       var type = "";
       
       //var properties=results.getElementsByTagName("property");
       var plans=results.getElementsByTagName("plan");
       //alert("plans:"+plans.length);
       for(var i=0; i<plans.length;i++)
       {
         plan=plans[i];
         var flights = plan.getElementsByTagName("flight");
         //alert("flights:"+flights.length);
         var resultsTable = document.createElement("table");
         resultsTable.id = "resultsTable" + String(i+2);
         resultsTable.name = "resultsTable";
         //alert(resultsTable.id);
         //alert(document.getElementById(resultsTable.id));
           var row=document.createElement("tr");
           var cell=createCellWithText("Plan" + (i+1));
           row.appendChild(cell);
           resultsTable.appendChild(row);
         addTableRow("flightNo","dep","depTime","des","desTime","price","type",resultsTable);
         for(var j=0; j<flights.length;j++)
         {
           var flight=flights[j];
           flightNo=flight.getElementsByTagName("No")
                   [0].firstChild.nodeValue;
           dep=flight.getElementsByTagName("dep")
                   [0].firstChild.nodeValue;
           depTime=flight.getElementsByTagName("depTime")
                   [0].firstChild.nodeValue;
           des=flight.getElementsByTagName("des")
                   [0].firstChild.nodeValue;
           desTime=flight.getElementsByTagName("desTime")
                   [0].firstChild.nodeValue;
           price=flight.getElementsByTagName("price")
                   [0].firstChild.nodeValue;
           type=flight.getElementsByTagName("type")
                   [0].firstChild.nodeValue;


           addTableRow(flightNo,dep,depTime,des,desTime,price,type,resultsTable);

         }
         //var header=document.createElement("h2");
         //var header=document.createElement("h"+ (i+2));
         
         //var headText=document.createTextNode("Results:");
         //header.appendChild(headText);
         //document.getElementById("header").appendChild(header);
         //resultsTable.setAttribute("border","1");
         resultsTable.setAttribute("style","font-family: verdana,helvetica,arial,sans-serif; margin-right:200px; border: 2px black; width:80%; text-align:center; background-color:#EEEEEE; height: 50px");
         document.getElementById("resultsTable").appendChild(resultsTable);
         // document.getElementById("resultsTable" + (i+2)).setAttribute
         //                         ("border","1");

       }



       // var properties=results.getElementsByTagName("property");
       // addTableRow("flight","dep","depTime","des","desTime","price","type");
       // for(var i=0;i<properties.length;i++)
       // {
       //     property=properties[i];
       //     flight=property.getElementsByTagName("flight")
       //             [0].firstChild.nodeValue;
       //     dep=property.getElementsByTagName("dep")
       //             [0].firstChild.nodeValue;
       //     depTime=property.getElementsByTagName("depTime")
       //             [0].firstChild.nodeValue;
       //     des=property.getElementsByTagName("des")
       //             [0].firstChild.nodeValue;
       //     desTime=property.getElementsByTagName("desTime")
       //             [0].firstChild.nodeValue;
       //     price=property.getElementsByTagName("price")
       //             [0].firstChild.nodeValue;
       //     type=property.getElementsByTagName("type")
       //             [0].firstChild.nodeValue;
       //     addTableRow(flight,dep,depTime,des,desTime,price,type);
       // }
      
       // var header=document.createElement("h2");
       // var headText=document.createTextNode("Results:");
       // header.appendChild(headText);
       // document.getElementById("header").appendChild(header);
       // document.getElementById("resultsTable").setAttribute
       //                           ("border","1");
       delXml();
    }
   
    function addTableRow(flightNo,dep,depTime,des,desTime,price,type,resultsTable)
    {
       //alert("addTableRowp");
       var row=document.createElement("tr");
       row.setAttribute("style"," border-width: 1px;  padding: 8px;  border-style: solid;  border-color: #666666;  background-color: #dedede;")
       var cell=createCellWithText(flightNo);
       row.appendChild(cell);
      
       cell=createCellWithText(dep);
       row.appendChild(cell);
      
       cell=createCellWithText(depTime);
       row.appendChild(cell);
      
       cell=createCellWithText(des);
       row.appendChild(cell); 

       cell=createCellWithText(desTime);
       row.appendChild(cell);     

       cell=createCellWithText(price);
       row.appendChild(cell);

       cell=createCellWithText(type);
       row.appendChild(cell);
       //alert("resultsTable" + String(i+2));
       //alert(document.getElementById("resultsTable" + String(i+2)));
       //document.getElementById("resultsTable" + String(i+2)).appendChild(row);
       resultsTable.appendChild(row);
    }


    function createCellWithText(text)
    {
        var cell=document.createElement("td");
        cell.setAttribute("style","width: 14.33%")
        var textNode=document.createTextNode(text);
        cell.appendChild(textNode);
        return cell;
    }

    function delXml()
    {
      //alert("delXml");
      var url="del.php";

      url = url + "?id=" + id;
      if(window.ActiveXObject)
      {
           xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      else if(window.XMLHttpRequest)
      {
           xmlHttp=new XMLHttpRequest();
      }
      xmlHttp.open("GET",url,true);
      //xmlHttp.onreadystatechange=callback;
      xmlHttp.send(null);
    }


