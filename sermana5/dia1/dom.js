/**
 ** Existe dentro de Js en DOM, este atributo de JS me va a permitir
 ** obtener los elementos de HTML
 */

//* Obteniendo los elementos en base a su tag
//* Tag = etiquetar
const inputs = document.getElementsByTagName('input');//! recordemos que input es HTML collection, pero poder ser iterado por con array normal hay q convertirlo
// console.log("inputs", inputs);//? devuelve array de input, poque hay 4 elementos de tag input,devulve Html collection
//? Array.from para convertir htmlcollection a un array normal
const newInputs = Array.from(inputs);
// console.log(newInputs);
newInputs.map(newinput => console.log(newinput));

//?probando
 const form = document.getElementsByTagName('form');
//  console.log("form",form);

 const button = document.getElementsByTagName('button');
//  console.log("button",button);

//?accediendo al DIV
const divContent = document.getElementsByTagName("div");
console.log("Div",divContent);

const newDivContent = Array.from(divContent);
console.log(newDivContent);

newDivContent.forEach((element) =>{
    console.log(element);
});


//* Otra forma de acceder al DOM es utilizando el ID
const inputEmail = document.getElementById('input_email');
inputEmail.style.backgroundColor = "red"; //cambioando el style mediante JS
inputEmail.style.color = "white";
console.log(inputEmail.value);//? usando esto puedo acceder directamente a las propiedades de mi input


//* Obteniendo elementos por su clase - retorna un HTML collection

const input_name = document.getElementsByClassName('input_name');
console.log(input_name);

const newInputNames = Array.from(input_name);
// console.log(newInputNames);
newInputNames.forEach(newInputName => console.log("Nombre y apellido",newInputName.value));
