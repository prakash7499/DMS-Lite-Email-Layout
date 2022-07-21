$(document).ready(function(){
$("#submit").click(function(){
    var str = $("#phone").val();
   alert(str);

   var myHeaders = new Headers();
myHeaders.append("apikey", "e0s8JbDSacEhjgoYJfjWNJ9hRE8MzkDL");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

var fetchurl = "https://api.apilayer.com/number_verification/validate?number=" + str;
//alert(fetchurl);
fetch(fetchurl, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  alert(fetch);

});
});