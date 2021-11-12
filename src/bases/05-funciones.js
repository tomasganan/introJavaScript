// Funciones

const saludar = function(nombre){
    return `Hola, ${nombre})`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Ale'))

console.log(saludar2('Gab'));
console.log(saludar3('Gab2'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'tomasganan'
});

const user = getUser;
console.log(user)

// Tarea

const getUsuarioActivo = (nombre) => ({
        uid: 'AAA123',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Tomasin');
console.log(usuarioActivo)
