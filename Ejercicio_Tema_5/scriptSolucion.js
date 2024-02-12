function aumentarNumeroIntentos() {
    // Obtemos o valor da variable numeroIntentos ou, por defecto se non ten valor, indicamos que sexa 0
    let numeroIntentos = parseInt(getCookie("numeroIntentos")) || 0;
    
    // Incrementar el número de intentos
    numeroIntentos++;
    
    // Guardar el nuevo valor en la cookie
    document.cookie = "numeroIntentos=" + numeroIntentos;
    
    // Mostrar el número de intentos en el div
    document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + numeroIntentos;
  }

  const formulario = document.getElementById("formulario");
  formulario.onsubmit(aumentarNumeroIntentos());