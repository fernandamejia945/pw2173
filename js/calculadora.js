//Variable global
var operador="";
function numero(num){
	if(operador == ""){ //operando1
		var valorInicial=document.calculadora.Operandouno.value;
		if(valorInicial == "0"){
			document.calculadora.Operandouno.value = "";
		}
		//concatena los valores de num con los del operandouno
		document.calculadora.Operandouno.value=
		document.calculadora.Operandouno.value + num;
	} else{
		var valorInicial=document.calculadora.Operandodos.value;
		if(valorInicial == "0"){
			document.calculadora.Operandodos.value = "";
		}
		//concatena los valores de num con los del OperandoDos
		document.calculadora.Operandodos.value=
		document.calculadora.Operandodos.value + num;
	}
}
function operadores(ope){
	operador=ope
}
function igual(){
	var valor1=document.calculadora.Operandouno.value;
	var valor2=document.calculadora.Operandodos.value;
	/*if(operador == '+'){
		document.calculadora.resultado.value=valor1+valor2;
	}
	Eval- evalua una cadena matematicament*/
	document.calculadora.Resultado.value = eval(valor1+operador+valor2);
}
function borrar(){
	operador = "";
	document.calculadora.Operandouno.value=0;
	document.calculadora.Operandodos.value=0;
	document.calculadora.Resultado.value=0;
}