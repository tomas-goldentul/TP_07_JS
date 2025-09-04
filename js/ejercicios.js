document.getElementById('resultado')
document.getElementById('resultadoFrutal')
document.getElementById('resultadoComparaciones')

function calcularEdad(){
    const fechaOriginal = document.getElementById('edad').value;
    const diaHoy = obtenerFecha();
    resultado.innerHTML = (Date(diaHoy) - Date(fechaOriginal));
}
function mostrarFrutas(){
    const frutas = vectorFrutas();
    for(fruta of frutas){
        console.log(fruta)
    }    
}
function tirarFruta(){
    const frutas = vectorFrutas();
    const frutaIngresada = document.getElementById('frutaIngresada').value;
    if(frutas.includes(frutaIngresada)){
        resultadoFrutal.innerHTML = `Sí, tenemos la fruta ${frutaIngresada}`; 
    }
    else{
        resultadoFrutal.innerHTML = `No, no tenemos la fruta ${frutaIngresada}`; 
    }
}

function comparaciones(){
    if(10 == '10'){
        resultadoComparaciones.innerHTML = `10 == '10' true\n`
    }else{
        resultadoComparaciones.innerHTML = `10 == '10' false\n`
    }
    if(10 === '10'){
        resultadoComparaciones.innerHTML += `10 === '10' true\n`
    }else{
        resultadoComparaciones.innerHTML += `10 === '10' false\n`
    }
    resultadoComparaciones.innerHTML += (`Tipo de dato de 10.6 es ${(typeof 10.6)}\n`);
    if(true == 1){
        resultadoComparaciones.innerHTML += `true == 1 true\n`
    }else{
        resultadoComparaciones.innerHTML += `true == 1 false\n`
    }
}

function yoObjeto(){
const ciudades = crearObjeto();
}