function obtenerFecha (){

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const diaHoy = `${day}/${month}/${year}`;

    return diaHoy;
}