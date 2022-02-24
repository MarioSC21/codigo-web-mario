//* Find --> retorna un dato, no devuelve arrays
//* Funciona igual que filter
//* la condicion a igual que con filter es obligatoria

const edades = [10, 23, 12, 34, 83];

const mayores30 = edades.find(edad => edad > 30);

// console.log(mayores30);//! solo retorna un dato, pero solo retorna 34, pq es el primer dato que encuentra

const products = [
    {
        nombre: "Laptop", categoria: "Computo"
    },
    {
        nombre: "Laptop2", categoria: "Computo2"
    },
    {
        nombre: "Laptop3", categoria: "Computo3"
    },
    {
        nombre: "Laptop4", categoria: "Computo4"
    },
];

const filtro = products.find(product => product.categoria === "Computo");
// console.log(filtro);

//? array dentro de array

const nomArray = [
    ["mario", "luis", "julia", "pepe", "lucho"],
    ["mario2", "luis2", "julia2", "pepe2", "lucho2"]
];

const buscarAlumno = (arrayAlumno, nombre) => {

    for(let i = 0; i< arrayAlumno.length; i++){
        const filtro = arrayAlumno[i].find(alumno => alumno == nombre);
        // console.log(filtro);
        if(filtro){
            return true
        }
    }
    return false;
};
     
// console.log("buscar", buscarAlumno(nomArray, "pepe5"));

//? filter laptops

const laptops = [
    {
      marca: "Lenovo",
      imagen: "https://logo.com",
      nombre: "Ide Centre AIO I3",
      vendedor: "Falabella",
      precioOferta: 1599,
      precioNormal: 3599,
      calificacion: 2,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "integrada",
        discoDuro: "1TB",
        discoDuroSolido: "no aplica",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i5",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer 2",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i7",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
  ];

//   const filtrarLaptops = laptops.filter((laptop) => 
//     laptop.caracteristicas.procesador === 'i3' && laptop.precioOferta < 2000);
//   console.log(filtrarLaptops);

// laptops[0].hola = true; //agregar a los objetos
//console.log(laptops);
//? foreach

const arrayLaptops = [];//nuevo array con los valores nuevos de laptops

laptops.forEach((laptop, index)=> {
    laptop.vendido = index % 2 === 0? true : false;
    arrayLaptops.push(laptop);
});

console.log(arrayLaptops);

