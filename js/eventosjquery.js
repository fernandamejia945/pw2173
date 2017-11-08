// jquery = $
var inicia = function(){
	//JSON = JavaScript Object Notation
	//alert("Lista la página");
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
  }
});
}
//Iniciamos JQuery cuando la página está lista
// ejecuta la función inicia
$(document).ready(inicia);