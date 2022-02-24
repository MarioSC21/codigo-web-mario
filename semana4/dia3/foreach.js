//* foreach tambien es un bucle
//* Este no retorna nada
//* Sirve para iterar numeros

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach((numero,index)=> {
    console.log(numero);
});

numeros.forEach((numero,index)=> console.log(numero)); // no retorna nada solo esta imprimiendo
