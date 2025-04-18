const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}, y tengo ${this.edad} años`);
    },
};

persona.saludar();

class Humano {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        return `Hola, me llamo ${this.nombre}, y tengo ${this.edad} años`;
    }
}

const humano1 = new Humano("Cande", 23);

console.log(humano1.saludar());
