const num1 = 10;
const num2 = 5;

let result = 0 ;

result = num1 +num2;

console.log(result);
console.log("14");
console.log("console.log");
console.error("Suma Error", result);
console.error("Error");
console.error("console.error");
console.warn("Resultado : warning")



// const valor1 = prompt("Ingrese valor 1");
// const valor2 = prompt("Ingrese valor 2");

// const operacion = prompt("Ingrese una operacion puede ser + - * /");

// let resultadoCalc = 0;

// if (operacion === "+"){
//     resultadoCalc = +valor1 + +valor2;
//     console.log("Resultado: ", resultadoCalc);
// }


//Haremos un algoritmo para saber si es par o impar

//  const valor3 = +(prompt("Ingrese valor"));


//  if(valor3 % 2 === 0) {
//      console.log("Es numero par");
//  }


 //algoritmo que pida 3 numeros que imprima el numero mayor

 const valor4 = +(prompt("Ingrese valor1"));
 const valor5 = +(prompt("Ingrese valor2"));
 const valor6 = +(prompt("Ingrese valor3"));

 let valornum = `El valor ${valor6} es mayor`;

 if(valor4 > valor5 && valor5 > valor6){
     valornum = `El valor ${valor4} es mayor`;
 }
 else if(valor5 > valor6 && valor6 > valor4) {
     valornum = `El valor ${valor5} es mayor`;
 }
 console.log(valornum);