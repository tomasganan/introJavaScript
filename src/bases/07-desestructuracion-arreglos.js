// Desestructuración de arreglos

const personajes = ['Tom1','Tom2','Tom3'];

// Hacemos la desestructuracion de un arreglo

const [, ,p2] = personajes;
console.log(p2);

///

const returnArray = () =>{
    return ['ABC', 123];
}

const [letras,numeros] = returnArray();
console.log(letras,numeros)

// Tarea

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('Tomas');

console.log(nombre);
setNombre();