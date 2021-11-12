// Promesas. Por naturaleza, son asincronas

import { getHeroeById } from "./bases/08-imp-exp";

// Resolve: Se ejecuta cuando la promesa es exitosa.
// Reject: Se ejecuta cuando la promesa falla.

/* const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(2);
        resolve(heroe)
        //reject('No se pudo encontrar el heroe');
    }, 2000)
}); */

// Then = Exito
// Catch = Error
// Fianlly = Lo último que se ejecuta

/* promesa.then( (heroe) => {
    console.log('Heroe', heroe)
})
.catch(err => console.warn(err)); */

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
    
}

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn)