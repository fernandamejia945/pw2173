// jquery = $
var inicia = function(){
	var nuevo = function(){
	//JSON = JavaScript Object Notation
	$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
  	//alert(data.results[0].name.first+" "+data.results[0].name.last);
    //console.log(data);
    $("#nombre").html(data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
    $("#genero").html(data.results[0].gender);
    $("#email").html(data.results[0].email);
    $("#login").html(data.results[0].login.username+" "+data.results[0].login.password+" "+data.results[0].login.salt);
    $("#dob").html(data.results[0].dob);
    $("#registered").html(data.results[0].registered);
    $("#phone").html(data.results[0].phone);
    $("#cell").html(data.results[0].cell);
  } 
}); 
}
		//<article id="phone"></article>
		//<article id="cell"></article>
		//<article id="id"></article>
	//alert("Lista la pagina");
	$("#btnNuevo").on("click",nuevo);
}
//Iniciamos JQuery cuando la página está lista
// ejecuta la función inicia
$(document).ready(inicia);