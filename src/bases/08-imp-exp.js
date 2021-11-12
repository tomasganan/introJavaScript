// Import-Export + Multiples importaciones-exportaciones

import heroes, {owners} from '../data/heroes'

/* const getHeroeById = (id) => {
    return heroes.find( (heroe) => {
        if(heroe.id === id){
            return true;
        }
    });
} */

// FIND

export const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id );
}

//console.log(getHeroeById(2));

// FILTER

export const getHeroesByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner)
}

// console.log(getHeroesByOwner('Marvel'));

// Segunda parte (Multiples importaciones-exportaciones)

// console.log(owners)