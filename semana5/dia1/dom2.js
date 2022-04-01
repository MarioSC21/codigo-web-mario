/**
 ** query selector y query selectorall , va un punto antes de usar la clase tipo CSS, solo los hermanos menores getElementclass , tag e ID
 *! Queryselector: solo devuelve un elemento 
 *! QueryselectorAll: devuelve mas elemento a la vez devuelve un nodeList
 */

 //? Esto es con class 
 const inputName = document.querySelector('.input_name');
 console.log(inputName.value);

 //? Esto es con ID
 const inputEmail = document.querySelector('#input_email');
 console.log(inputEmail);

 //? Esto es con tagName
 const form = document.querySelector('form');
 console.log(form);

// todo: querySelectoAll ; no hay necesidad de convertir a Array como getElementsClass o tag
const inputs = document.querySelectorAll('input');
// console.log(input);
// inputs.forEach(input => console.log(input.value));
//? quiero filtrar los input de type text
const arrayInputsText = [];
const inputText = inputs.forEach(input =>{
    if(input.type === "text"){
        arrayInputsText.push(input);
    }
} );
console.log(arrayInputsText);

//? convirtiendo a array para trabajar con filter
const arrayConvertido = Array.from(inputs);
const arrayConvertidosFilter = arrayConvertido.filter(input => input.type === "text");
console.log(arrayConvertidosFilter);


