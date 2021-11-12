// Desestructuración. Asignación desestructurante

const persona = {
    nombre: 'Tomas',
    edad: 25,
    clave: 'jeje',
};

// Extrae lo que pongo entre LLAVES de mi objeto 'persona'

const {nombre} = persona;

// console.log(nombre);

/////// DESESTRUCTURACION. "Si existe la propiedad en el objeto, usa esa, sino usa la definida"

const useContext = ({nombre,clave,edad,rango = 'Capi'}) =>{

    // console.log(nombre,edad,rango)
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 123,
            lng: -22
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat,lng);