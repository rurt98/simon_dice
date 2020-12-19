/////////////////Default Params ////////////
function newFunction(name, age, contry) {
    var name = name || 'uriel';
    var age = age || 23;
    var contry = contry || 'MX'
    console.log(name, age, contry);
}



/////// es6

function newFunction2(name = 'Rafael', age = 21, contry = 'MX') {
    console.log(name, age, contry)
}

newFunction2();
newFunction2('Uriel', '22', 'EU')

/////////////////Concatenacion/////////////////////////

let hello = 'Hello';
let world = 'World';
let epicphrase = hello + ' ' + world;
console.log(epicphrase);
/// es6
let epicphrase2 = `${hello} ${world}`;
console.log(epicphrase2);



///////////// Multilinea en los strings //////////////

let lorem = "Es una frase que quiero juntar con otra \n"
+ "Esta es otra frase yeaaaah"

/// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase que necesito 
`;

console.log(lorem);
console.log(lorem2);


///////////// Destructuracion de Elementos /////////////

let person = {
    'name': 'Uriel',
    'age': 21,
    'contry': 'MX'
}

console.log(person.name, person.age);
// es6
let { name, age, contry } = person;
console.log(name, age, contry);

/////////////////// operador de propagacion ///////////

let team1 = ['Uriel', 'Rafael', 'Laurita'];
let team2 = ['Valeria', 'Clao', 'Camila'];

/// let education = ['Nidia','Uriel', 'Rafael', 'Laurita', 'Valeria', 'Clao', 'Camila'];
//// es6:
let education = ['Nidia', ...team1, ...team2];

console.log(education);



//////////////// var - let ///////////////
/* var = esta disponible global
let = solo esta disponible en el scop en el bloque en el cual es llamado */

{
    var globalVar = 'Glovar var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

// const = establecer una variable que no deja pasarle un nuevo valor por que es una constante
const a = 'b';
a = 'a';
console.log(a) ///: error


/////////// propidad de objetos mejorada(parametros en objetos) //////

let name = 'Uriel';
let age = 21;

// es5
obj = { name: name, age: age }
/// es6
obj2 = {name, age}

console.log(obj2);

///////////// arrow function //////////

const name = [
    {name: 'Uriel', age: 21},
    {name: 'Rafael', age: 22}
]

let listOfNames = name.map(function(item){
    console.log(item.name)
})

/// es6
let listOfNames2 = name.map(item =>  console.log(item.name));

/*const listOfNames3 = (name, age, contry) => {
    .....
}*/

/* const listOfNames4 = name => {
    ...
} */

// const squere = num => num * num;

//////////////// promesas ////////////

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey whats up');
        } else {
            reject('Daaaaaamn :(')
        }
    });
}

helloPromise()
.then(responderResuelto => console.log(responderResuelto))
.then(() =>  console.log('dude'))
.catch(error => console.log(error))


/////////// clases ///////

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valorB = valueB
        return this.valueA + this.valorB;
    }
}

const calc = new calculator();
const uriel = new calculator();
console.log(calc.sum(2, 2))
console.log(uriel.sum(3,5))

///////////// import y export /////////////

import { hello } from './src/es6/module'

hello()

////////// generetors ////

function* helloWorld(){ /// se va a ejecutar el metodo yiel cuando se le indique next() y va a saber cual sigue
    if (true) {
        yield 'Hello'
    }
    if (true) {
        yield 'World'
    }
    if (true) {
        yield 'uriel'
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
