// Definición de la clase Animal Superior
class Animal {
    constructor(nombre, especie, edad, color) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    comer() {
        return `${this.nombre} está comiendo.`;
    }

    dormir() {
        return `${this.nombre} está durmiendo.`;
    }
}


module.exports = Animal;