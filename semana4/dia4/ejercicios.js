//* Ejercicios JS

//? Algoritmo que reciba 2 valores y los sume y debe imprimir en pantalla
const sumarumeros = (num1, num2) =>document.write(`La suma de sus numeros son${num1 + num2}`);

//? Registrar notas de 4 examenes y calcular el promedio de estos
const calcularPromedio = (num1, num2, num3, num4) => document.write(`El promedio de los numeros es: ${(num1 + num2 + num3 + num4)/4}`);

//? Calcular el area del rectangulo
const calcularAreaRectagulo = (base, altura) => document.write(`El area del rectagulo es: ${base * altura}`);

//? Calcular area de triangulo
const calcularAreaTriangulo = (base, altura) => document.write(`El area del tringulo es: ${(base * altura)/2}`);

//? Calcular area de circuferencia
const calcularAreaCircuferecia = (radio) => document.write(`El area del circulo es: ${(Math.PI * radio).toFixed(4)}`);//to fixed limita decimales

//? Determinar el sueldo semanal de un trabajador basandose en sus horas trabajadas y su salario de hora hombre
const calcularSalarioSemana = (salarioHora, horasTrabajadas, diasTrabajaSemana) => 
    document.write(`Su salario semanal es :${(+salarioHora * +horasTrabajadas)* +diasTrabajaSemana}`);

//? Convertir metros a pulgadas
const convertirMetrosPulgdas = (metros) => document.write(`Las pulgadas son : ${+metros * 39.3701}`);

//? Convertir soles a dolares
const convertirSolesDolar = (soles) => document.write(`Los dolares son : $${+soles * 0.27}`);

//? Pedir el nombre y edad de tres personas y retornar el nombre y edad de la persona menor
const retornarMenor = (edad1, edad2, edad3) => {
    if(edad1 = edad2 && edad2 > edad3) {
        return `La mayor edad es ${edad1}`
    }
    else if() {

    }

}