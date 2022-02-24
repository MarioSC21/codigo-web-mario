//* Metodos que nos permiten leer arrays
//* .map es un bucle que sirve para poder leer arreglo y lo que lo hace
//* especial es que este retorn es un array

const productos = [
  {
    name: "monitor",
    price: 1000,
  },
  {
    name: "monitor2",
    price: 1000,
  },
  {
    name: "monitor3",
    price: 1000,
  },
  {
    name: "monitor4",
    price: 1000,
  },
];

productos.map((producto, index) => {
  console.log("Producto", producto.price);
});

const nombres = ["mario", "mario2", "mario3", "mario4"];

nombres.map((nombre, index) => {
  if (index > 1) {
    console.log(nombre);
  }
  // const nombre1= nombre.concat("Y luis");
  // console.log(nombre1);
});

//? index no es obligatorio

const places = [
  {
    name: "Tecsup",
    location: "Lima",
  },
  {
    name: "Tecsup2",
    location: "Lima2",
  },
  {
    name: "Tecsup3",
    location: "Lima3",
  },
];

places.map((place) => {
  console.log("Place", place); //imprime los objetos
});

//? Return en el map

const numeritos = [1, 2, 3, 4];

const operacion = numeritos.map((numerito) => {
  return numerito * 2;
});//retorna un array

console.log(operacion);

//? modificar le precio al doble otra forma
const ciberWows = productos.map((producto) => {
    return {
        name: `CyberWoW ${producto.name}`,
        price: producto.price * 2,
    }
})

console.log("Precio Cyber", ciberWows);

//? Creacion un array de numero y luego calcular el cubo de cada numero y guardarlo en una variable

const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = numeros1.map((numero) => Math.pow(numero,3))//Funcion inline

console.log("Numeros al cubo ",resultado);

//? Iscribir programa que muestre la tabla de multiplicar del 1 al 10

const imprimirTabla = (num) => {
    const arrayDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//crea un array con 10 elementos
    arrayDiez.map((diez, index)=> {
        console.log(num * (index+1))
        ;
    })
};

imprimirTabla(10);