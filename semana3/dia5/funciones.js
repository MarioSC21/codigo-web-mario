//Arrays
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";//cambaimos el valor del 1er elemento
let length = cars.length;//tamano del array
//Funciones

function funcion1(){
    console.log("Mi primera funcion");
}

funcion1();

function sumar(numero1, numero2){
    const convertNum1 = +numero1;
    const convertNum2 = +numero2;

    const suma = convertNum1 + convertNum2;

    if (isNaN(suma)) {
        console.log("Error no se puede sumar");
        return;//termino la funcion
    }
    console.log("Suma: ", suma)
}


sumar(6, 4);

function sumar1(numero1, numero2){
    const suma = +numero1 + +numero2;
    if (isNaN(suma)) {
        return "Error: No se puede sumar";//termino la funcion
    }
    return `Suma es: ${suma}`;
}

console.log(sumar1(4, 7));

//operador ternario
function sumar2(numero1, numero2){
    const suma = +numero1 + +numero2;
    return isNaN(suma) ? "Error: No se puede sumar" : `Suma es: ${suma}`
}

console.log(sumar2(9, 7));

//Funciones anonimas

const resta = function(numero1, numero2) {
    const calcResta = +numero1 - +numero2;
    return isNaN(calcResta) ? "Error: No se puede restar" : `Resta es: ${calcResta}`;
}

console.log(resta(20,10));

//Arrow function --> parecida a la funcion anonima, sin embargoo no hace falta 
//utilizar la palabra function, ademas no puede usar this
//SE DECALRA ASI 
const division = (numero1, numero2) => {
    if (+numero2 === 0) {
        return "Error: no se puede dividir entre 0";
    }
    const calcDivision = +numero1 / numero2;
    return isNaN(calcDivision) ? "Error: no se puede dividir" : `Divison es: ${calcDivision}`;
}

console.log(division(9, 3));

//caundo se coloca una funcion en un arrow function no hace falta poner parentesis
const saludar = (nombre, apellido) => {
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
}
document.write(saludar("mario","camna")); 

//cuando un arrow function no recibe parametros, se pude usar un guion bajo tambien _
const funcionSinParametros = () => {
    return "Hola mundo";
};

//arrow function inline, solo funciona cuando se quiere ejecutar una linea de codigo
//return esta implicito
const hellow = () => "Hola mundo inline"


//Funcion array
const alumnosTecsup = ["Juan", "Juan2", "Juan3" ,"Juan4"];

function listarAlumnos (alumnos) {
    console.log("Alumnos tecsup", alumnos);
}
listarAlumnos(alumnosTecsup);