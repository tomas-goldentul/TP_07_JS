document.getElementById('resultado')
function calcularEdad(){

   const fechaOriginal = document.getElementById('edad')
    const diaHoy = obtenerFecha();
    resultado.innerHTML = (Date(diaHoy) - Date(fechaOriginal))
}