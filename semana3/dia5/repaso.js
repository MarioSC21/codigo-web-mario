let personas = ["mario", "luis" ,"juan", "juan2", "lucho", "mario2", "mario3", "patrick", "irene", "yanet"];
//comprobar elementos
const tamano = personas.length;
console.log(tamano);

//modificar
personas[6]= "juanito";

//arreglo que tenga 5 valores distintos
let valores = [10, "mario", 10.5, true, "tipo"];
let valor1 = [3];

//funcion que retorne el segundo valor de un arreglo
function valorArreglo (valor) {
    //validar la posicion del array existe
    return (valor[1] === undefined) ? `Error: posicion no encontrada ` : `El valor es : ${valor[1]}`;
}
console.log(valorArreglo(valor1));

//lenar array desde una funcion

let carrosNuevos = [];//arra vacio

const llenarCarros = (carros) => {
    //funcion de js llamada push(parametro) > recibe un valor y lo coloca al final del arreglo
    carrosNuevos.push(carros);
}
llenarCarros("mercedes");
llenarCarros(["honda","Wbw", "bmw"])//array dentro de otro array
console.log (carrosNuevos);
console.log (carrosNuevos[1][1]);//para acceder al segundo array

//FUNCION PARA SABER SI UN NUMERO ES PARA O IMPAR
const numero1 = 4;
const numeroParOImpar = (num1) => (num1%2===0) ? `Es par` : `Es impar`;
console.log(numeroParOImpar(numero1));

