$(document).ready(function() {
		
	$("#ingreseCodigo").keydown(validandoDigitos);
	$("#ingreseCodigo").keyup(validandoNext);
	$("#next").click(calculandoAleatorio);
});	

	function validandoDigitos(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	};
	function validandoNext() {
		var longitud = $(this).val().length;
		if (longitud == 9) {
			$("#next").attr("href", "verificacion.html");	
		}
		else{
			$("#next").removeAttr("href");
		}	
	};
	function calculandoAleatorio() {
		var longClick = $("#ingreseCodigo").val().length;
		if(longClick == 9 ){
			var numAleatorio = Math.round(Math.random()*899+100);
			var codigo = "LAB-"+ numAleatorio;
			alert(codigo);
			localStorage.setItem("codigoAleatorio",numAleatorio);
			localStorage.setItem("codigoLab",codigo);
		}
		else{
			alert("ingrese 9 digitos ...");
		}	
	};


