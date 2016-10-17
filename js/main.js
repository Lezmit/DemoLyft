// Funcionalidades para Lyft
// - Validar que solo se ingresen #s
// - Validar que sean 9 #s como max.
// - Generar un código aleatorio con la estructura LAB-XYZ
// - Validar lo obvio

$(document).ready(function() {
	$("#ingreseCodigo").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});
	$("#ingreseCodigo").keyup(function(evento) {
		var longitud = $(this).val().length;
		if (longitud<9 || longitud>9) {
			$("#next").removeAttr("href");
		};
		if (longitud == 9) {
			//$("#next").attr("href", "signup.html");
			$("#next").click(function(evento) {
			var aleatorio = Math.round(Math.random()*899+100);
			var codigo = "LAB -"+ aleatorio;
			alert(codigo);
			});	
		}	
	});
<<<<<<< HEAD
			

});
=======
	$("#next").click(function(evento) {
			var aleatorio = Math.round(Math.random()*899+100);
			var codigo = "LAB -"+ aleatorio;
			alert(codigo);
	});			

});

>>>>>>> gh-pages
