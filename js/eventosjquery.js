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
    $("#nombre").html("Nombre: "+data.results[0].name.title+" "+data.results[0].name.first+" "+data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
    $("#genero").html("Genero: "+data.results[0].gender);
    $("#email").html("Email: "+data.results[0].email);
    $("#login").html("Usuario: "+data.results[0].login.username+", Contraseña: "+data.results[0].login.password+" "+data.results[0].login.salt);
    $("#direccion").html("Direccion: Calle "+data.results[0].location.street+", Ciudad: "+data.results[0].location.city+", Estado: "+data.results[0].location.state+", CP: "+data.results[0].location.postcode);
    $("#phone").html("Teléfono: "+data.results[0].phone);
    $("#cell").html("Celular: "+data.results[0].cell);
  } 
}); 
}
	nuevo();
	//alert("Lista la pagina");
	$("#btnNuevo").on("click",nuevo);
}
//Iniciamos JQuery cuando la página está lista
// ejecuta la función inicia
$(document).ready(inicia);