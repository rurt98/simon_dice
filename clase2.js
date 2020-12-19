/* const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje (id, callBack){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, callBack).fail(() => {
        console.log(`No se ha encontrado ningun personaje ${id}`);
    });
}

obtenerPersonaje (1, function(personaje){
        console.log(`Hola soy ${personaje.name}`);

    obtenerPersonaje(2, function(personaje){
        console.log(`Hola soy ${personaje.name}`);
        obtenerPersonaje(3, function(personaje){
            console.log(`Hola soy ${personaje.name}`);
            obtenerPersonaje(4, function(personaje){
                console.log(`Hola soy ${personaje.name}`);
                obtenerPersonaje(5, function(personaje){
                    console.log(`Hola soy ${personaje.name}`);
                    obtenerPersonaje(6, function(personaje){
                        console.log(`Hola soy ${personaje.name}`);
                        obtenerPersonaje(7, function(personaje){
                            console.log(`Hola soy ${personaje.name}`);
                        })
                    })
                })
            })
        })
    })
}) */

////// promesas /////

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje (id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data){
            resolve(data);
        })
        .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
.then( personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`);
    return obtenerPersonaje(2);
})
.then( personaje2 => {
    console.log(`El personaje 2 es ${personaje2.name}`);
    return obtenerPersonaje(3);
})
.then( personaje3 => {
    console.log(`El personaje 3 es ${personaje3.name}`);
    return obtenerPersonaje(4);
})
.then( personaje4 => {
    console.log(`El personaje 4 es ${personaje4.name}`);
    return obtenerPersonaje(5);
})
.then( personaje5 => {
    console.log(`El personaje 5 es ${personaje5.name}`);
    return obtenerPersonaje(6);
})
.then( personaje6 => {
    console.log(`El personaje 6 es ${personaje6.name}`);
    return obtenerPersonaje(7);
})
.then( personaje7 => {
    console.log(`El personaje 7 es ${personaje7.name}`);
})
.catch(onError); 




/////// Multiples promesas en paralelo /////

 const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje (id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data){
            resolve(data);
        })
        .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

var ids = [1, 2, 3, 4, 5, 6, 7];
//var promesas = ids.map(function (id){
    //return obtenerPersonaje(id);
//})
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError) 

obtenerPersonaje(2)


//////////////Async-await: lo último en asincronismo///////////

const API_URL = 'https://swapi.dev/api/';

const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje (id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, opts, function(data){
            resolve(data);
        })
        .fail(() => reject(id));
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7];
var promesas = ids.map(id => obtenerPersonaje(id))
try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
} catch (id) {
    onError(id)
}
}

obtenerPersonajes(2);
