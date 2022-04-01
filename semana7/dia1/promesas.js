// Promesa sirve para poder ejecutar algo async

//?Primera forma para crear una promesa
//resolve: Encargado de retornar todo bien
//reject: Encargado de rechazar si todo esta mal
//no hay return
const promesa = new Promise((resolve, reject)=> {
    //vamnos a simular un tiempo de espera
    setTimeout(() => {
        resolve("todo bien");
    }, 3000);
});

async function geDataPromesa (){
    const respuesta = await promesa;
    console.log(respuesta);
}

//Promesa con error y verdadero
const promesaConError = (validacion)=> {
    return new Promise ((resolve, reject)=>{
        if(validacion){
            setTimeout(()=>{
                resolve("la validacion esta ok")
            }, 3000);
        }else{
            reject(new Error("Error en la validacion"))//new erro es una clase JS que nos permite retornar con mensaje
        }
    })
}

//validar error usando el asyn y await

const validacionAsync = async() => {
    try {
        const respuesta = await promesaConError(true);
        console.log(respuesta)
    } catch (error) {
        console.log(error.message);
    }
}
validacionAsync();
// then otra forma de ejecutar una promesa
promesa.then((respuesta)=> {
    console.log("then", respuesta)
})

//error usando then()
promesaConError(true).then((respuesta)=>{
    console.log(respuesta);
}).catch((error)=>{
    console.log(error.message);
})


//? Status code > lo que retorna una peticion (200, 500, 401, 403, 404, 201, 512)
// Si una peticion nos devuelve un status que sea 200, 201
// que la respuesta es ok
// 200 = ok
// 201 = ok y ademas significa que algo ha sido creado

// Si la url response un 500, 404, 512
// Hay un error
// 404 => Es el error que muestra cuando no encuentra la url, es decir la direccion no existe
// 500 => Es el error que retorna cuando hay un problema en el servidor
// 512 => Es un error de espacio en el servidor


//? GET > obtener
//? POST > enviar
//? PUT > actualizar
//? DELETE > borrar y eliminar