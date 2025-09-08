document.getElementById('resultado')
document.getElementById('resultadoFrutal')
document.getElementById('resultadoComparaciones')
document.getElementById('cortarTextoVer');

function calcularEdad() {
    const fechaOriginalStr = document.getElementById('edad').value;
    const fechaOriginal = new Date(fechaOriginalStr);
    const hoy = new Date();

    const edad = hoy.getFullYear() - fechaOriginal.getFullYear();

    console.log("Edad:", edad);
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

function cortarTexto() {
    const cadena = document.getElementById('cadenaCortar').value;
    const numero = parseInt(document.getElementById('numero').value);
    
    const cadenaNueva = cadena.slice(0, numero);
    document.getElementById('cortarTextoVer').innerText = cadenaNueva;
}

function separadorTexto() {
    const cadenaComas = document.getElementById('cadenaComas').value;
    const newCadenaComas = cadenaComas.split(',');
    const resultadoSeparador = newCadenaComas.join('-');

    const stringSeparados = document.getElementById('stringSeparados');
    stringSeparados.innerHTML = resultadoSeparador;
}

function recaudacion() {
    const cadenaRecaudo = document.getElementById('cadenaRecaudo').value.trim();
    const newCadenaRecaudo = cadenaRecaudo.split(',');
    const newNewCadenaRecaudo = newCadenaRecaudo.map(obj => obj.split(':'));
    
    let resultadoRecaudo = 0;

    for (let i = 0; i < newNewCadenaRecaudo.length; i++) {
        const value = Number(newNewCadenaRecaudo[i][1].trim());
        resultadoRecaudo += value;

    }
    
    document.getElementById('recaudacion').innerHTML = resultadoRecaudo;
}