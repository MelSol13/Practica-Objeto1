const Animal = require("./Animal");

class Perro extends Animal {
    constructor(nombre, edad, color, raza) {
        super(nombre, 'Perro', edad, color);
        this.raza = raza;
    }

    ladrar() {
        return `${this.nombre} está ladrando. ¡Guau! ¡Guau!`;
    }
}

const miPerro = new Perro('Max', 3, 'marrón', 'Golden Retriever');

console.log(miPerro.comer());
console.log(miPerro.ladrar())