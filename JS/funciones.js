// Método literal
function saludar(nombre) {
    return `Hola ${nombre}`;
}
//console.log(saludar("cande"));

//Función de expresión
const saludo = function (nombre) {
    return `Hola ${nombre}`;
};
//console.log(saludo("cande"));

//Función Flecha
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
};
console.log(saludar2("Cande"));
