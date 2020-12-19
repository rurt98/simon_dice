//////// operador de reposo: 
// puede extraer las propiedades de un objeto que aun no se an construido
const obj = {
    name: 'Uriel',
    age: 21,
    country: 'Mx',
}

let { age, ...all } = obj;
console.log(age, all);

/////// propiedades de propagacion, 
//vamos a poder unir los elementos qu queramos de objetos a un nuevo objeto
const obj = {
    name: 'Uriel',
    age: 21,
}

const obj1 = {
    ...obj,
    country: 'Mx',
}

console.log(obj1)
console.log(obj)


/////promise.finally saber cuando a terminado el llamado y poder ejecutar al llamado
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
    ? setTimeout(() => resolve('Hello World'), 300)
    : reject(new Error('Fallo test'))
    })   
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

////////// como podemos agrupar bloques de regex y acceder a cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
