let buttonEnviar = document.getElementById('btn-enviar-datos');

buttonEnviar.addEventListener('click', function() {
    //alert("Mensaje de Alerta!!")
    let inputNombre = document.getElementById('input-nombre');
    let inputCorreo = document.getElementById('input-correo');
    let pMensajeE = document.getElementById('p-mensaje-error');
    let pMensajeC = document.getElementById('p-mensaje-confirmacion');

    if(inputNombre.value == ''){
        alert('Profavor Ingresa datos en Nombre');
        pMensajeE.innerHTML='Error, Los datos no han cargado Correctamente';
    }else if(inputCorreo.value == ''){
        alert('Porfavor  ingresar datos en correo');
        pMensajeE.innerHTML='Error, Los datos no han cargado Correctamente';
    }else if(inputCorreo.value.length < 10) {
        pMensajeE.innerHTML='El correo es muy corto de la longitud permitida'
    }else if(inputCorreo.value.length > 10) {
        pMensajeE.innerHTML='El correo es muy largo de la longitud permitida '    
    }else {
        pMensajeE.value = '';
        pMensajeC.innerHTML = 'Los datos han cargado Correctamente';
    }

});

let buttonLimpiar = document.getElementById('btn-limpiar-datos');

buttonLimpiar.addEventListener('click', function() {
    //alert('Limpianndo datos');
    let inputNombre = document.getElementById('input-nombre');
    let inputCorreo = document.getElementById('input-correo');
    
    inputNombre.value = '';

    inputCorreo.value = '';
});