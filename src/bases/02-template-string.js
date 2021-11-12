
const nom = 'Tom';
const ape = 'Gan';

const nomCom = `${nom} ${ape}`;

console.log(nomCom);


function getSaludo(nom){
    return 'Hola ' + nom;
}

console.log(`Este es un texto: ${ getSaludo(nom)} `);