// Función para enviar el formulario
// Función para enviar el formulario
// // Validar nombre
document.querySelector('#botonEnvia').addEventListener('click', function(){
    // console.log('hola');
    let camposValidados = 0;

    if(validarNombre()){
        camposValidados++;
    }
    if(validarApellido()){
        camposValidados++;
    }
    if(validarCorreo()){
        camposValidados++;
    }
    if (validarOpciones()){
        camposValidados++;
    }
      if(validarPolitica()){
        camposValidados++;
    }

    if (camposValidados === 5){
        alert('Formulario enviado correctamente!!');
        document.formulario1.submit();
    }

});


// Función validarNombre
function validarNombre(){
    let campoUsuario = document.querySelector('#nombre');
    let nombreUsuario = campoUsuario.value;
    let spanError = document.querySelector('#nombreError');

    // Evaluación condicional
    if(nombreUsuario == null || nombreUsuario.length == 0 || /^\s+$/.test(nombreUsuario)){
        spanError.innerHTML = '+ Introduzca un nombre, por favor';
        spanError.className = 'error';
        campoUsuario.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        campoUsuario.className = 'noborderror';
        return true;
    }
}

function validarApellido(){
    let campoUsuario = document.querySelector('#apellidos');
    let nombreUsuario = campoUsuario.value;
    let spanError = document.querySelector('#apellidosError');

    // Evaluación condicional
    if(nombreUsuario == null || nombreUsuario.length == 0 || /^\s+$/.test(nombreUsuario)){
        spanError.innerHTML = '+ Introduzca sus apellidos, por favor';
        spanError.className = 'error';
        campoUsuario.className = 'borderror';
        return false;
    }else{
        spanError.className = 'noError';
        campoUsuario.className = 'noborderror';
        return true;
    }
}

//Función para validar el e-mail
    function validarCorreo(){
        let campoUsuario = document.querySelector('#correo');
        let correoUsuario = campoUsuario.value;
        let spanError = document.querySelector('#correoError');

       // Evaluación condicional
        if(!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/.test(correoUsuario))){
            spanError.innerHTML = '+ Introduzca un mail correcto, por favor';
            spanError.className = 'error';
            campoUsuario.className = 'borderror';
            return false;
        }else{
            spanError.className = 'noError';
            campoUsuario.className = 'noborderror';
            return true;
        } 
    }


//Validar entrada de lista desplegable
    function validarOpciones(){
        let opciones = document.querySelector('#conocer').selectedIndex;
        let spanError = document.querySelector('#conocerError');

        if (opciones == null || opciones == 0){
            spanError.innerHTML = '+ Debe seleccionar una opción';
            spanError.className = 'error';
            return false;
        }else{
            spanError.className = 'noError';
            return true;
        }
    }

// Función para validar una entrada checkbox
    function validarPolitica(){
        let politicaPrivacidad = document.querySelector('#politica');
        let spanError = document.querySelector('#politicaError');

        if (!politicaPrivacidad.checked){
            spanError.innerHTML = '+Debe aceptar nuestra política de privacidad';
            spanError.className = 'error';
            return false;
        }else{
            spanError.className = 'noError';
            return true;
        }
    }