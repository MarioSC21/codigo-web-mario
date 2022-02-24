//* Bucles estructura repetitiva
//* Usados para poder leer arrays

// todo: For (para)
// for(let i=0; i<10; i++){
//     console.log("Iterador",i);
// }

// const alumnos = ["Pepe", "Mario", "Luis", "Pepa", "Julia"];

// for (let i=0; i<alumnos.length; i++) {
//     console.log(alumnos[i]);
//}

//Escribir programa que pida una frase y escriba cuantas
//veces aparecen cada una de las vocales

// const contarVocales = (frase) => {
//     // console.log(frase.length)
//     const fraseMayuscula = frase.toUpperCase();

//     let contador = 0;

//     for (let i=0; i<fraseMayuscula.length; i++) {
//         var letra = fraseMayuscula[i];    

//         if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U" ){
//             contador++;
//         }
//     }
//     console.log(`La frase tiene ${contador} vocales`);
// }
// contarVocales("mario camna")

//Escribir un algoritmo que escriba en pantalla los de divisores de dos 
//numeros

//? problema de companero
// const numMayor = (num1, num2) => num1>num2 ? num1 : num2;
// const divisoresComunes = (num1, num2) => {
//     const divisores = [];
//     for (let i=0 ; i<numMayor(num1, num2); i++){
//         if (num1%i === 0 && num2%i===0){
//             divisores.push(i);
//         };
//     };
//     return divisores;
// };

// console.log(divisoresComunes(10, 5));


// const hallarDivisoresComun = (num1, num2) =>{
//     let mayor;
//     let numeros = [];
//     if(num1 < num2)  {
//         mayor = num2;
//     }else {
//         mayor = num1;
//     }
//     for (i=1; i <= mayor; i++) {
//         if (num1 % i === 0 && num2 % i === 0) {
//          numeros.push(i);
//         }
//     }
//     console.log(`Los divisores iguales son : ${numeros}`);
// }

// hallarDivisoresComun(20,10);

//? Problema
//? Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

const numeroPrimo = (num1) => {
    let esPrimo = true;
    for(let i=2;i<num1;i++){
        if(num1%i===0){
            esPrimo = false;
        }
    }
    return (esPrimo)? "Numero primo" : "Numero no primo";
}
console.log(numeroPrimo(5));