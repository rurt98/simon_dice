//////// Object entries /////

////permetir la clave y los valores de una matriz
const data = { /// genera una matris en arrays
    frontend: 'uriel',
    backend: 'Rafael',
    design: 'Alexis'
}

const entrie = Object.entries(data);
console.log(entrie);
console.log(entrie.length)



//////// Object values ////

/// regresa los valores de un objeto a un array
const data = {
    frontend: 'uriel',
    backend: 'Rafael',
    design: 'Alexis'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);



///////////padStart padEnd//////////

//// agregar una cadena vacia a este string
const string = "Hello";
console.log(string.padStart(7, "Hi")); 
console.log(string.padEnd(8, " Hi")); 
console.log('food'.padEnd(122, ' dude'))


////////////////:
const obj = {
    name: 'Uriel', //// puede ver o no ver otro objeto
}


///////Async await////////
//// ser mas claro al hacer este tipo de funciones y trabajar de mejor forma con el asincronismo

const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hola mi carnalito y hello world'), 3000)
        : reject( new Error('Lo siento mi carnal Test error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

//// usar correct el async y evitatnos probles haciendolo de esta manera:
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
}

anotherFunction();