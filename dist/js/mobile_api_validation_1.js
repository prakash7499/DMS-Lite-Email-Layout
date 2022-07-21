$(document).ready(function(){
$("#submit").click(function(){
    var str = $("#phone").val();
   alert(str);
   var fetchurl = "https://phonevalidation.abstractapi.com/v1/?api_key=aeffda8d24434f2dacd47472ff45bb4d&phone=" + str;
   function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var url = fetchurl
alert(url);

httpGetAsync(url)


});
});


