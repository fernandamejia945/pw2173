<?php
	include 'conexion.php';
	function validaEntrada(){
		$conexion=conectaBD();
		$respuesta= false;
		$usuario= $_POST["usuario"];
		$clave= md5($_POST["clave"]);
		$consulta="select ncontrol, nombre, clave from alumnos where ncontrol='".$usuario."' and clave='".$clave."' limit 1";
		//RecordSet = Conjunto de registros
		//echo $consulta;
		$resConsulta=mysqli_query($conexion,$consulta);
		//Cuantos registros trae el RecordSet
		// Cursos - Posiciòn del registro
		$nombre= "";
		if(mysqli_num_rows($resConsulta) > 0){
			$respuesta = true;
			if($registro=mysqli_fetch_array($resConsulta))
				{
					$nombre = $registro["nombre"];
				}
		}
		$salida = array('respuesta' => $respuesta, 'nombre' => $nombre);
		print json_encode($salida);
	}
	$opc=$_POST["opc"];
	switch ($opc) {
		case 'valida':
			validaEntrada();
			break;
		
		default:
			# code...
			break;
	}
?>