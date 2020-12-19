///// numeros

var edad = 27;

edad = edad + 1;
edad += 1; // += es la forma abreviada de indicar que se suma 

var peso = 75;
peso = peso - 2
peso -= 2; // -+

var sandwich = 1;
peso = sandwich + peso;

var jugarFutbol = 3;
peso = peso -= jugarFutbol;

var precioVino = 200.3;

var total1 = precioVino * 3; // Resultado con demasiados decimales
var total2 = precioVino * 100 * 3 / 100; // Resultado con un solo decimal pero configurado de forma manual
var total3 = Math.round(precioVino * 100 * 3) / 100; // Resultado con un solo decimal pero usando el módulo de Math.
var total4 = total3.toFixed(3); // tofixed() para determinar el número de decimales que acompaña al valor total, en este caso 3, pero, convierte a la variable en un string
var total5 = parseFloat(total4); // paserFloat se usa para convertir una unidad en un número con decimales

var pizza = 8;
var persona = 2;
var cantidadDePorcionesPorPersona = pizza / persona; // realizar una división


///// ejercicio Object //////

var persona1 = {
    nombre: "uriel",
    edad: 21,
}

var persona2 = {
    nombre: "Rafael",
    edad: 22,
}

function imprimirNombreYEdad (persona){
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} de edad`);
}

imprimirNombreYEdad(persona1);
imprimirNombreYEdad(persona2);

var sasha = {
    nombre: "Rafael",
    edad: 21,
    ingeniero: true,
    emprendedor: true,
    piloto: false,
    doctor: false
}

var uriel = {
    nombre: "Uriel",
    edad: 18
}

const MAXIMA_EDAD = 21;

/* function siEsMayor(persona) {
    return persona.edad >= MAXIMA_EDAD;
} */

const siEsMayor = ({ edad }) => edad >= MAXIMA_EDAD;


function imprimirSiEsMayorDeEdad (persona) {
    
    if (siEsMayor(persona)) {
        console.log(`${persona.nombre} es mayor de EDAD`);
    } else {
        console.log(`${persona.nombre} es menor de EDAD`);
    }
}

imprimirSiEsMayorDeEdad(sasha);

//////////////// ejercicio //////////

var rafael = {
    nombre: "Rafael",
    edad: 21,
    ingeniero: true,
    emprendedor: true,
    piloto: false,
    doctor: false
}

var uriel = {
    nombre: "Uriel",
    edad: 18
}

const MAXIMA_EDAD = 21;

const acceso = ({edad}) => edad >= MAXIMA_EDAD

const permitirAcceso = persona => {
    if(!acceso(persona)) {
        console.log("ACCESO DENEGADO");
    } else {
        console.log("ACCESO EXITOXO");
    }
}

permitirAcceso(uriel);

////for/////

var sasha = {
    nombre: "Rafael",
    edad: 21,
    peso: 45
}

console.log(`Al inicio del ano ${sasha.nombre} peso ${sasha.peso}`);

// asi se escribe la function sin funcion de flecha como la de abajo
//function aumentardepeso (persona){
  //  return persona.peso += 200
//}

const AUMENTO_DE_PESO = 0.2;
const diasAno = 365;
const aumentoPeso = persona => persona.peso += AUMENTO_DE_PESO;
const menosPeso = persona => persona.peso -= AUMENTO_DE_PESO;

for (var i = 1; i <= diasAno; i++ ){
    var random = Math.random();

    if(random < 0.25){
        aumentoPeso(sasha);
    } else if (random < 0.5) {
        menosPeso(sasha);
    }
}

console.log(`Al final del ano ${sasha.nombre} pesa ${sasha.peso.toFixed(1)}`);

/////////while//////////

var daniel = {
    nombre: "daniel",
    edad: 18,
    sexo: "Masculino",
    peso: 80
}
console.log(`${daniel.nombre} al inicio del año pesaba ${daniel.peso}kg`)

const DIFERENCIA_DE_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = daniel.peso -3
var dias = 0

const AumentoDePeso = persona => persona.peso += DIFERENCIA_DE_PESO
const PerderPeso = persona => persona.peso -= DIFERENCIA_DE_PESO
const ComeMucho = () => Math.random() < 0.5// aca lo que nos av a devolver es un verdadero o falso , y dependiendo de eso el if se va a ejecutar
const RealizaDeporte = () => Math.random() > 0.5

while (daniel.peso > META) {
    if (ComeMucho()) {
        AumentoDePeso(daniel)
    }
    if(RealizaDeporte()) {
        PerderPeso(daniel)
    }
    dias += 1
}



console.log(`al pasar  ${dias} dias  hasta que ${daniel.nombre}  adelgazo 3kg`)


///////do-while////////

var contador = 0;

const llueve = () => Math.random() < 0.25;

do {
    contador++;
} while(!llueve());

if ( contador === 1 ) {
    console.log(`Fui a ver la lluvia ${contador} vez`);
} else {
    console.log(`Fui a ver la lluvia ${contador} veces`);
}

/////switch///

var diaSemana = prompt("Indique que dia de la semana estamos");

switch(diaSemana){
    case "Lunes":
        console.log('Mañana sera Martes');
        break;
    case "Martes":
    case "martes":
        console.log('Mañana sera Miercoles');
        break;
    case "Miercoles":
        console.log('Mañana sera Jueves');
        break;
    case "Jueves":
        console.log('Mañana sera Jueves');
        break;
    case "Viernes":
        console.log('Mañana sera Sabado');
        break;
    case "Sabado":
        console.log('Mañana sera Domingo');
        break;
    case "Domingo":
        console.log('Mañana sera Lunes');
        break;
    default: 
    console.log('Este no es un dia de la semana');
}

/////////ejercicio array filter()//////

var aislinn = {
    nombre: 'Aislinn',
    apellido: 'Lifszyc',
    altura: 1.60,
    cantidadDeLibros: 25
  }
  
  var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 26
  }
  
  var martin = {
    nombre: 'Marin',
    apelido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 38
  }
  
  var dario= {
    nombre: 'Dario',
    apelido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 10
  }
  
  var vicky = {
    nombre: 'Vicky',
    apelido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 2
  }
  
  var paula = {
    nombre: 'Paula',
    apelido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 5
  }

  //condicion:
  /*const esAlta = (persona) => {
      return persona.altura > 1.8;
  }*/
  ///alta
  const esAlta = ({ altura }) => altura > 1.8;

  var personas = [aislinn, alan, martin, dario, vicky, paula];

  const personaAlta = personas.filter(esAlta);

  /*var personasAltas = personas.filter(function (persona) {
  return persona.altura > 1.8
}) */

console.log(personaAlta);
////////mediana
const esMediana = ({ altura }) => altura < 1.8 && altura > 1.65;

const personaMediana = personas.filter(esMediana);

console.log(personaMediana);

///baja
const esBaja = ({altura}) => altura < 1.65; //condicion

const personaBaja = personas.filter(esBaja);

console.log(personaBaja);


///Transformar array map()///
const cms = persona => ({
    ...persona,
    altura: persona.altura * 100
});
const personasCms = personas.map(cms);
console.log(personasCms);

////reduce
const totalLibros = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;

const totalDeLibros = personas.reduce(totalLibros, 0);

console.log(`En total todos tienen ${totalDeLibros} de Libros`);

////////// clases(prototype) ///////

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    }

    Persona.prototype.saludar = function(){
        console.log(`Hola mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`);
    }

    Persona.prototype.esAlto = function(){
        if(this.altura >= 1.80){
            console.log('Soy una persona alta')
        } else if (this.altura < 1.80 && this.altura >= 1.70){
            console.log('Eres Mediano');
        } else {
            console.log('eres chaparro');
        }
    }

    var uriel = new Persona('Uriel', 'Rodriguez', 1.70)
    var rafael = new Persona('Uriel', 'Torres', 1.80)
    var clao = new Persona('Uriel', 'Rodriguez', 1.63)

    uriel.esAlto();
    uriel.saludar();

/////// ejercicio /////
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {} 
    fn.prototype = prototipoPadre.prototype 
    prototipoHijo.prototype = new fn 
    prototipoHijo.prototype.constructor = prototipoHijo 
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  
  Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo  ${this.nombre}${this.apellido}`)
  }
  
  Persona.prototype.soyAlto = function () {
      returnthis.altura > 1.8
  } 

  function Desarrollador(nombre, apellido){
      this.nombre = nombre 
      this.apellido = apellido
  }

  heredaDe(Desarrollador, Persona)

  Desarrollador.prototype.saludar = function() { 
      console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador `)
  }
 

  var miguel = new Persona('Miguel', 'Romero', 1.75)
  var angel = new Persona('Angel', 'Velazquez', 1.85)
  var juan = new Persona('Arturo', 'Martinez', 1.65)  
  
  /*
  miguel.saludar()  
  angel.saludar()
  juan.saludar()  
  */ 

  //console.log(miguel.soyAlto())
  //console.log(angel.soyAlto()) 
  //console.log(juan.soyAlto()) 

  //////clases ECMASCRIPT 2015//////

class persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
      }
      saludar(){
        console.log(`Hola, me llamo  ${this.nombre}${this.apellido}`);
      }
      soyAlto(){
        return this.altura > 1.8
      }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }
    saludar(){
        console.log(`Hola, me llamo  ${this.nombre} ${this.apellido} soy desarrollador`);
    }
}

 

  var miguel = new persona('Miguel', 'Romero', 1.75)
  var angel = new persona('Angel', 'Velazquez', 1.85)
  var juan = new Desarrollador('Arturo', 'Martinez', 1.65)  

  ///// funciones como parametros ////

  
  class persona {
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
      }
      saludar(fn){
          //var nombre = this.nombre
         //var apellido = this.apellido
         var {nombre, apellido} = this
        console.log(`Hola, me llamo  ${this.nombre}${this.apellido}`);
        if(fn) {
            fn(nombre, apellido, false);
        }
      }
      soyAlto(){
        return this.altura > 1.8
      }
}

class Desarrollador extends persona {
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura);
    }
    saludar(fn){
        //var nombre = this.nombre
         //var apellido = this.apellido
         var {nombre, apellido} = this
        console.log(`Hola, me llamo  ${this.nombre} ${this.apellido} soy desarrollador`);
        if(fn) {
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Hola buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`ah no sabia que eras desarrollador`);
    }
}
 

  var miguel = new persona('Miguel', 'Romero', 1.75)
  var angel = new persona('Angel', 'Velazquez', 1.85)
  var juan = new Desarrollador('Arturo', 'Martinez', 1.65)  

  miguel.saludar(responderSaludo);
  angel.saludar();
  juan.saludar(responderSaludo);