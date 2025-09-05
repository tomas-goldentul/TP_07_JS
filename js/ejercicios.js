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
for(const ciudad of ciudades){
console.log(`Nombre de la ciudad: ${(ciudad.nombre)} \n Fecha fundación: ${(ciudad.fechaFundacion)} \n Población: ${(ciudad.poblacion)} \n Extension: ${(ciudad.extension)}`)
}
}

function dobleDeElementos(){
    numeros = document.getElementById('arrayNumeros').value
    const arrayIngresado = numeros.split(',');
    const newArray = arrayIngresado.map(num => num*2)
    for (const numi of newArray)
    {
        console.log(` ${(numi)}`)
    }
}

function asteriscos1(){
    var asteriscos = 1;
    for(i = 1; i <= 5; i++){
        let line = '';
        for(j = 1; j <= asteriscos; j++){
            line += '*';
        }
        console.log(line);
        asteriscos++;
    }
}

function asteriscos2() {
    let asteriscos = 1;
    let barritas = 4;
    for (let i = 1; i <= 5; i++) {
        let linea = '';
        for (let j = 1; j <= barritas; j++) {
            linea += '-';
        }
        for (let j = 1; j <= asteriscos; j++) {
            linea += '*';
        }
        for (let j = 1; j <= barritas; j++) {
            linea += '-';
        }
        console.log(linea);
        barritas--;
        asteriscos += 2;
    }
}

function nombresConA(){
    document.getElementById('nombresA');
    const nombres = document.getElementById('arrayNombres').value;
    const newNombres = nombres.split(',');
    const resultado = newNombres.filter(nom => (nom.toUpperCase()).startsWith('A'));
    nombresA.innerHTML = resultado;
}

function reemplazarPalabras(){
    const palabras = document.getElementById('cadena').value
    const palabraAReemplazar = document.getElementById('palabra').value
    const palabraDeReemplazo = document.getElementById('palabraReemplazo').value
    const resultado = palabras.replace(palabraAReemplazar, palabraDeReemplazo);  
    remplazar.innerHTML = resultado;
}

function cortarTexto(){
    const cadena = document.getElementById('cadena').value;
    const numero = parseInt(document.getElementById('numero').value);
    const cadenaNueva = cadena.slice(0, numero)
    console.log(cadenaNueva)
}