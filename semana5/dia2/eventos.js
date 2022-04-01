//* Funciones para usar en los eventos

// function imprimir(){
//     alert("Hola mundo desde una funcion");
// }


//? Calculadora

function calculadora(operacion){
    //obetener el valor de los inputs
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;

    if (num1 === "" || num2 ===""){
        return alert("Debe completar los campos");
    }

    let resultado = 0;

    if (operacion === "+"){
        resultado =  sumar(num1, num2);
    }

    if (operacion === "-"){
        resultado =  restar(num1, num2);
    }

    if (operacion === "*"){
        resultado =  multiplicar(num1, num2);
    }

    if (operacion === "/"){
        resultado =  dividir(num1, num2);
    }

    //mostrando el resultado
    const p = document.createElement("p");
    const value = document.createTextNode(`Su resultado es ${resultado}`);
    p.appendChild(value);
    const contenedor = document.querySelector("#resultado");
    contenedor.appendChild(p);
};

  function validarSiEsNumero(numero, tipo) {
    return isNaN(numero) ? `Mensaje Error: no se puede ${tipo}` : numero;
  }
  
  function sumar(numero1, numero2) {
    const suma = +numero1 + +numero2;
  
    return validarSiEsNumero(suma, "sumar");
  }
  
  function restar(numero1, numero2) {
    const calcResta = +numero1 - +numero2;
  
    return validarSiEsNumero(calcResta, "restar");
  }
  
  function multiplicar(numero1, numero2) {
    const calcMultiplicacion = +numero1 * +numero2;
  
    return validarSiEsNumero(calcMultiplicacion, "multiplicar");
  }
  
  function dividir(numero1, numero2) {
    if (+numero2 === 0) {
      // termina la ejeccion de la funcion y retorn ese string
      return "Error: no se puede dividir por 0";
    }
  
    const calcDivision = +numero1 / +numero2;
    return validarSiEsNumero(calcDivision, "dividir");
  }