//* objeto persona

const persona = {
    nombre: "Juanito",
    edad: 30,
    talla: 1.5,
    estadoCivil: "Soletero",
    calcularEdad: function(){
        console.log("Calcular la edad")
    }
};

//primera forma
persona.calcularEdad();

//Seggunda Forma -> esto funciona siempre y cuando la funcion tenga un return
//? persona.calcularEdad;

// TODO: Ejemplo
const  computadora = {
    color: "azul",
    marca: "HP",
    nuevo: true,
    mostrarDetalle: function (){
        console.log("Color", this.color);
    },
    mostrarDetalleCompleto: function () {
        //!En los arrow function el this no existe se tiene que colocar si o si function
        console.log(
            "Detalle",
            `Color ${this.color} Marca: ${this.marca} Es nuevo? ${ (this.nuevo) ? "Si"  : "No"}`
        )
    }  
}

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();

//? Objetos con array
const alumno = {
    nombre: "Juanito",
    notas: [10, 5, 8, 9],
    cursos: ["Html", "CSS", "JS", "REACT"]
};
//accediendo al array notas
console.log("Notas", alumno.notas);
console.log("Notas", alumno.notas[2]);

//?array con objetos

const alumnos2 = [
    {
        nombre: "Lucioano",
        edad: 18,
        promedi: 15,
    },
    {
        nombre: "Mario",
        edad: 21,
        promedio: 16,
        Dni: 1717171,
    },
];

//* Imprimnir los objetos
console.log(alumnos2[1].Dni);

//? Creacion de un array de laptops --> esta estructura de objetos tambien es conocida como JSON
const laptops = [
    {
        marca: "Lenovo",
        image: "Https://logo.com",
        nombre: "ide Centre AIO I3",
        vendedor: "Falabella",
        precioOferta: 1599,
        precioNormal: 3599,
        calificacion: 2,
        //! Objeto dentro de otro objeto
        caracterisiticas : {
            procesador: "i3",
            tarjetaVideo: "integrada",
            discoDuro: "1TB",
            discoDuroSolido: "no aplica"
        },
    },
    {
        marca: "Lenovo",
        image: "Https://logo.com",
        nombre: "ide Centre AIO I3",
        vendedor: "Falabella",
        precioOferta: 1599,
        precioNormal: 3599,
        calificacion: 2,
        caracterisiticas : {
            procesador: "i6",
            tarjetaVideo: "GTX1050",
            discoDuro: "2TB",
            discoDuroSolido: "no aplica"
        },
    },
];
//* Imprimiendo
console.log(laptops[0].caracterisiticas.procesador)


//? Keys con numeros
const listaUtiles = {
    1: "hojas",
    2: "Plumones",
    3: "Lapiceros",
};

//* Imprimiendo --> se usa el corchete con comillas para imprimir
console.log(listaUtiles["1"])

//?objetos dentro de objetos
const componentes = {
    nombre: "Lenovo ipad",
    caracteristicas: {
        ram: 16,
        video: "Gtx2060",
        memoria: 512,
        extra: {
            pantalla: "4K",
        },
        1: {
            teclado: "Espanol",
        },
    },
};
console.log(componentes.caracteristicas["1"].teclado);

//? Practica array de objetos

const BH = [
    {
        nombre: "Apple",
        shippingRestriction: "No shipping to PERU",
        reviews: "49 reviews",
        precio: "$2,699",
        inStock: true,
        keyFeatures: {
            procesador: "Apple M1 Pro 10-Core Chip",
            ram: "16GB Unified RAM",
            pantalla: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            Gpu : "16-Core GPU | 16-Core Neural Engine",
        },
    },
    {
        nombre: "Apple",
        shippingRestriction: "No shipping to PERU",
        reviews: "49 reviews",
        precio: "$2,699",
        inStock: true,
        keyFeatures: {
            procesador: "Apple M1 Pro 10-Core Chip",
            ram: "16GB Unified RAM",
            pantalla: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            Gpu : "16-Core GPU | 16-Core Neural Engine",
        },
    },
    {
        nombre: "Apple",
        shippingRestriction: "No shipping to PERU",
        reviews: "49 reviews",
        precio: "$2,699",
        inStock: true,
        keyFeatures: {
            procesador: "Apple M1 Pro 10-Core Chip",
            ram: "16GB Unified RAM",
            pantalla: "16.2 3456 x 2234 Liquid Retina XDR Screen",
            Gpu : "16-Core GPU | 16-Core Neural Engine",
        },
    },
];