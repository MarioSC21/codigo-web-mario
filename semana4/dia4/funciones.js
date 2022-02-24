/**
 ** Este archivo va a funcionar solo para escribir funciones
 */

 const sumar = (num1, num2) => +num1 + +num2;

 const filtrarArray = (array, filtro) => array.filter(elemento => elemento === filtro);

 const calcularAreaTriangulo = (base, altura) => (base * altura)/2;

 const contarVocales =(frase) => {
     let contador = 0;
     frase.split("").forEach(letra => {
         ["A", "E", "I", "O", "U"].includes(letra.toUpperCase()) && contador++;//&& es como el if que si se cumple eso el contador va subir
     });

     return `la frase tiene ${contador} vocales`
 }

