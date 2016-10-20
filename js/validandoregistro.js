$(document).ready(function(){
$("#nextRegister").click(function(){
    //Expresión para validar un correo electrónico
    var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var todo_corrector=true;
    var nombre = $("#firstName").val();
    var apellido = $("#lastName").val();
    var correo = $("#email").val();

    if(nombre ==null || (nombre.length<2 || nombre.length>20) ){
    	todo_corrector=false;
    	alert("ingrese Nombre mayor de 2 y menor de 20 caracteres")
    }
    else if( /^[a-za-z\s]+$/.test(nombre)==false ){
    	todo_corrector=false;
        alert("ingrese solo texto en el campo First Name");
    }
    else{
        if(apellido ==null || (apellido.length<2 || apellido.length>20) ){
            todo_corrector=false;
            alert("ingrese Apellido mayor de 2 y menor de 20 caracteres")
        }
        else if( /^[a-za-z\s]+$/.test(apellido)==false ){
            todo_corrector=false;
            alert("ingrese solo texto en el campo Last Name");
        }
        else{
            if (!expr.test(correo)) {
                todo_corrector=false;
                alert("ingrese un correo valido");
            }
            else{
                if( !$("#checkTerms").is(":checked") ) {
                    todo_corrector=false;
                    alert("Acepta nuestro termino de condiciones para continuar");
                }
                else{
                    $(this).attr("href","mapa.html");
                }
            }
        }
    }
});//click
});//ready
