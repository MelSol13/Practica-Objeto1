const Animal = require("./Animal");

class Gato extends Animal {
    constructor(nombre, edad, color, pelaje) {
        super(nombre, 'Gato', edad, color);
        this.pelaje = pelaje;
    }

    maullar() {
        return `${this.nombre} está maullando. ¡Miau! ¡Miau!`;
    }
}

const miGato = new Gato('Luna', 2, 'negro', 'largo');

console.log(miGato.dormir());
console.log(miGato.maullar());