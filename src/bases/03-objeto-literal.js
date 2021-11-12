// Objeto persona

const persona = {
    nombre: 'Tomas',
    apellido: 'Gañan',
    edad: 25,
    direccion: {
        ciudad: 'San Rafael',
        zip: 5600
    }
}

// console.table(persona);

console.log(persona);

// Objeto persona 2 (Hacer clon de persona y sacar sus propiedades)

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2);