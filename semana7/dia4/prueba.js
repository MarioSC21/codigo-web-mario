//ahora vamosa a ver como poodemos usar la libreria que acabamos de intalar
//! Forma antigua
// const dateFormat = require("date-format");

//* Forma nueva
import format from "date-format";
import express from "express";

//para poder usar el express debe ser inicializado
const app = express();

//crear rutas en la cual queremos mostrar algo
// const router = express.Router();

//En express podemos usar los metodos http para poder mostrar algo
//?req : request, informacion que estamos obteniendo del cliente
//?res : response, lo que el servidor responde
app.get("/", (req, res)=>{
    //nuestro servidor tiene muchas formas de responder
    //res tiene la propiedad de poder responder en ese formato (JSON)
    res.json({
        message: "Hola mundo",
        error: "no hay error",
    });
});

app.get("/movies", (req, res) => {
    res.json({
      data: [
        {
          id: 1,
          name: "Batman",
        },
        {
          id: 2,
          name: "Superman",
        },
        {
          id: 3,
          name: "Superman",
        },
      ],
    });
  });
//para poder accder a la ruta de nuestro servidor debemos usar puertos
//El puerto mas usado en express es el puerto 3000
//para poder decir a nuestro servidor escuche en ese puerto debemos llamar la funcion listen
app.listen(3000, ()=> console.log("El servidor inicio"));

//Para entrar a este puesto podemos usar dos formas
// 1:localhost => http://localhost:3000
// 2: IP => 127.0.0.1:3000

//*utilizando el format
// const fechaActual = new Date();

// const fechaFormatead = format.asString("dd-MM-yyyy",fechaActual);
// console.log(fechaFormatead);
