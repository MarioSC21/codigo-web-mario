//* While siempre va acompanodo de un contador

// let contador = 0;

// while(contador < 10) {
//     console.log("contador", contador);
//     contador++;
// }

//? !band --> significa si band es false

//* Hacer funcion que muestre los numeros impares de un numero dado 
//* y lo muestre separado por comas

// const sacarNumerosImpares = (num1) => {
//     if(num1 <= 0){
//         return "No se permite numeros menores que 0";
//     }
//     let numero = "";
//     let cont = 0;
//     while(cont <= num1) {
//         if(cont%2 !== 0){
//             numero += `${cont}, `;
//         }
//         cont++;    
//     }
//     //borrando la coma
//     let numero2 = numero.substring(0,numero.length - 2);
//     return numero2;
// }
// console.log(sacarNumerosImpares(11));

//*USANDO FOR
// const hallarNumerosImpares = (num1) => {
//     if(num1 <= 0){
//         return "No se permite numeros menores que 0";
//     }
//     let numero = "";
//     for(let i= 0; i<=num1; i++){
//         if(i%2 !== 0){
//             numero += `${i}, `;
//         }
//     }
//     //borrando la coma
//     let numero2 = numero.substring(0,numero.length - 2);
//     return numero2;
// }
// console.log(hallarNumerosImpares(11));

// //* Numero primos
// const numeroPrimo = (num1) => {
//     let esPrimo = true;
//     for(let i=2;i<num1;i++){
//         if(num1%i===0){
//             esPrimo = false;
//         }
//     }
//     return (esPrimo)? "Es Numero primo" : "No es numero no primo";
// }
// console.log(numeroPrimo(5));

const numeroDecimal = (num) => {
    if(num%1 == 0){
        return  `Es numero entero`
    }else{
        return `Es numero decimal`
    }
}
console.log(numeroDecimal(2));