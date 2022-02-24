//Funciones

const cuadrado = (num1, num2) => `los cuadrados son ${num1**2} y ${num2**2}`;
cuadrado(2,4);

//devolviendo arrays con la funcion 
const elevarCuadrado = (num1, num2) => [num1**2,num2**2];
const [numero1, numero2] = elevarCuadrado(3, 6);
console.log(numero1,numero2);
console.log(elevarCuadrado(2,5));

//Crear funcion

const ColocarSaludo = (nombre, apellido, edad) => `Hola ${nombre} ${apellido} de ${edad.toString()} anos, Bienvenido`;
console.log(ColocarSaludo("mario","camna",21));

//crear funcion return

const areaRectangulo = (base, altura) => `El area del rectangulo es ${+base*+altura}`;
console.log(areaRectangulo(2,3)) 

//funcion con operador ternario

const comprobarMayorEdad = (edad) => {
    return (edad >= 18)? `Es mayor de edad`:`Es menor de edad`;
}
console.log(comprobarMayorEdad(21));

//Funcion 
const arra = [1,2,3,4,6,8];

const consultarTamanoArray = (array) => array.length>5 ? `Arreglo grande` : `Arreglo pequeno`;

console.log(consultarTamanoArray(arra));