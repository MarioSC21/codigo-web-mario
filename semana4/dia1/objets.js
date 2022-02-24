//un objeto tiene propiedad y atributos
//Compuesto por un key y un value
//objeto se declara con llaver

//Objeto carro
const carro = {color:"azul", motor:1.2, modelo:"Toyota", marca:"Hyundai", nuevo:true};
//color es el key y "azul es el value"
//otra forma de agregar
carro["segundoUso"]  = true;
//acceder a los atributos y tambien cambiarlos, y agregar mas atributos
carro.modelo="Vw";
carro.velocidad = "100km";
carro.segundoUso = false;
console.log(carro.velocidad);
console.log(carro.modelo);
console.log(carro.color);

//Otra forma seria instanciando
const casa = new Object();
casa.color = "rosado";
casa.tamano = "grande";


console.log(casa.color);

const celular = {
    modelo: "samsung",
    tamano: 6.1,
    gama:"alta",
    camaras: 2,
    precio:"$ 700"
}
//crear funcion la caul me retorne el nombre de la memoria y precio del celular
const mostrarDetallesCelular = (celularObjeto) => {
    return `El modelo es ${celularObjeto.modelo} y tiene el precio de ${celularObjeto.precio}`
};
console.log("El objeto celular", mostrarDetallesCelular(celular));

//? Desestructuracion de Objetos con esto ya no es nesesario colocar la clase para poder llamar a las atributos del objeto
const mostrarDetallesCelular2 = (celularObjeto2) => {
    const {modelo, gama, precio} = celularObjeto2;
    return `El modelo es ${modelo}, de gama${gama} y tiene el precio de ${precio}`
}

//* OBJETO NUEVO
const usuario = {
    nickName: "Evil",
    email: "mariocam@gamil.com",
    password: "******",
    carnetVacunacion: true,
    location: "Chile",
    level: "Pro",
    edad: 18
}

//? Crear usuario la cual valide si el usuario es de peru 
//si es de peru imprimir nickname junto a su nivel

//? Usando desestructuracion para no llamar al objeto
const validarUsuario = (usuarioObject) => {
    const {nickName, level, location} = usuarioObject;
    return(location==="Peru")? `Tu nickName es ${nickName} y tu nivel es ${level}`: `Oye ${nickName} tu no eres Peruano`;
}

console.log(validarUsuario(usuario));
