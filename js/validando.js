$(document).ready ( function(){
	var $inputs =$("input");
	$inputs.keyup(codigoNext);
	$inputs.keydown(validandoCodigoNext);
	$("#nextVal").click(validarCodigoAleatorio);
});	 
	function validandoCodigoNext(e){
	 	var numeroAscii = e.keyCode;
	 	if(numeroAscii==8 || (numeroAscii>=48 && numeroAscii<= 57)){
	 		return true;
	 	}
	 	else{
	 		
	 		return false;
	 	}
	 }
	function codigoNext(e){
	 	var cod = $(this).val().length;
	 	var numeroAscii = e.keyCode;	 	 
	 	if(cod==1){
	 		$(this).next().focus();
	 	}
	 	else if(numeroAscii==8){
	 		$(this).prev().focus();
	 	}
	}
	function validarCodigoAleatorio(){
		var codigoRecibido = localStorage.getItem("codigoLab");
		var cod1 = $("#codForm1").val();
		var cod2 = $("#codForm2").val();
		var cod3 = $("#codForm3").val();
		var codigoTotal = "LAB-"+cod1+cod2+cod3;
		if( codigoRecibido==codigoTotal){
			$(this).attr("href","register.html");
		}
		else{
			alert("Error de codigo , por favor ingrese codigo nuevamente")
		}

	}
