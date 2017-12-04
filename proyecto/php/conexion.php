<?php
	function conectaBD(){
		//servidor, usuario, contraseña, BD
		$conexion=mysqli_connect("localhost","root","","pw2173");
		return $conexion;
	}
?>