function obtenerFecha (){

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const diaHoy = `${day}/${month}/${year}`;

    return diaHoy;
}
function vectorFrutas(){
    const frutas = ["Manzana", "Banana", "Naranja", "Mandarina", "Tomate", "Limon", "Pera", "Kiwi", "Pomelo", "Uva"];
return frutas;
}
function crearObjeto (){
    const ciudades =[ {
        nombre : "Buenos Aires",
        fechaFundacion : 1536 ,
        poblacion : 3121707,
        extension :"203 km²"
    },
    {
        nombre: "Córdoba",
        fechaFundacion: 1573,
        poblacion: 1391000,
        extension: "576 km²"
    },
    {
        nombre: "Rosario",
        fechaFundacion: 1725,
        poblacion: 948312,
        extension: "178 km²"
    },
    {
        nombre: "Mendoza",
        fechaFundacion: 1561,
        poblacion: 115041,
        extension: "54 km²"
    },
    {
        nombre: "La Plata",
        fechaFundacion: 1882,
        poblacion: 654324,
        extension: "102 km²"
    }
    ]
    return ciudades;
}