function validarTerninos() {
    terminos = document.getElementById("aceptar");
    if (!terminos.checked) {
        alert("Para enviar los datos debes aceptar las condiciones.");
        return false;
    }
    else {
        SaluarContactenos();
    }
}
function SaluarContactenos() {
    var mensaje;
    var nombre = document.getElementById('txtNombre').value
    var opcion = confirm("Hola " + nombre + " !. Estas seguro de enviar los datos?");
    if (opcion == true) {
        mensaje = "Gracias por contactarnos, en breve te responderemos!";
        alert(mensaje);
        return true;
    } else {
        mensaje = "Sus datos no fueron enviados!";
        alert(mensaje);
        return false;
    }
}
