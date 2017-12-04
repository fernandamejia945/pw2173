var inicia = function(){
	var entrada = function(){
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();
		var parametros="opc=valida"+
					"&usuario="+usuario+
					"&clave="+clave+
					"&id="+Math.random();
		$.ajax({
			url:"php/entrada.php",
			dataType: 'json',
			type: "POST", //lo que enviamos
			data:parametros,
			success:function(data){
				if(data.respuesta == true){
					alert("Bienvenido");
				}else{
					alert("Usuario/Contraseña inconrrectos");
				}
			},
			error:function(a,b,c){
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}
	$("#btnEntrar").on("click",entrada);
}
$(document).ready(inicia);