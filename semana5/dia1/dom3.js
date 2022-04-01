/**
 ** JS tiene el poder de escribir en documento HTML
 ** Escribir , alterar, aumentar , etc
 *todo: document.write : permite escribir en el documento
 */

document.write("HOLA MUNDO");

//? vamos a crear una lista usando JS
//? 1 > insertar una lista dentro del container-list
const containerList = document.querySelector('#container-list');
// JS tiene una funcion llamada createElement > permite crear elementos de html
const ul = document.createElement("ul");
ul.className = "lista"; //poniendo una clase a una lista
const li = document.createElement("li");
const contenido = document.createTextNode("BW");
// ahora debemos agregar el contenido a li y a ul
// En JS hay un funcion appendChild > la cual permite agregar un elemento a otro
li.appendChild(contenido);
console.log(li);
ul.appendChild(li);
console.log(ul);
containerList.appendChild(ul);

//? Reto : crear una lista  que tengo en los inputs
const inputs = Array.from(document.querySelectorAll('input'));

inputs.map(input => {
    const li = document.createElement("li");
    //crear el valor del li
    const contenido = document.createTextNode(input.value);

    li.appendChild(contenido);
    ul.appendChild(li);
})

// agregar la lista en el contenedor
containerList.appendChild(ul);
// console.log(ul);

//? document.body

const body = document.body;
body.style.backgroundColor = "yellow";
body.style.fontFamily = "Helvetica"

//? document.head
const head = document.head;

//? document.title
document.title = "Hola JS";
