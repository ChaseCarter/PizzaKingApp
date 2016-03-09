function saveFiles(xml){
	var blob = new Blob([xml], {
         type: "text/xml;charset=utf-8;"
     });
	saveAs(blob, "xmlexample.xml");
}

function json2xml(o, tab) {
   var toXml = function(v, name, ind) {
      var xml = "";
      if (v instanceof Array) {
         for (var i=0, n=v.length; i<n; i++)
            xml += ind + toXml(v[i], name, ind+"\t") + "\n";
      }
      else if (typeof(v) == "object") {
         var hasChild = false;
         xml += ind + "<" + name;
         for (var m in v) {
            if (m.charAt(0) == "@")
               xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
            else
               hasChild = true;
         }
         xml += hasChild ? ">" : "/>";
         if (hasChild) {
            for (var m in v) {
               if (m == "#text")
                  xml += v[m];
               else if (m == "#cdata")
                  xml += "<![CDATA[" + v[m] + "]]>";
               else if (m.charAt(0) != "@")
                  xml += toXml(v[m], m, ind+"\t");
            }
            xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
         }
      }
      else {
         xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
      }
      return xml;
   }, xml="";
   for (var m in o)
      xml += toXml(o[m], m, "");
   return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}

$(document).ready(function() {
	//for (i = 0; i < 500; i++) {
		var Json;		
		$.getJSON("Mike's Pies.20060201.json", function(json) {
		//$.getJSON("http://joannenbruno.github.io/sickbay-viz/data/outputFiveStates.json",{}, function( data ){ 
		/*  # do stuff here  */ 
		});
		//var xml = json2xml(Json,"	");
	//}
	 
	
		
});

