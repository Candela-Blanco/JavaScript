let numeros = [10, 20, 40];

let numeroMasCinco = numeros.map((numero) => {
    return numero + 5;
});
console.log(numeroMasCinco);

const productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
];

const nombreProductos = productos.map((producto) => {
    return producto.nombre;
});
console.log(nombreProductos);
