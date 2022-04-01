import express from "express";
import cors from "cors";

import { arrayMovies } from "./movies.js";

const app = express();
// se usa para que express pueda leer los JSON que envie el cleinte
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//crear archivo movie.js > donde guardare mos un array de objetos


app.get("/movies", (req, res)=>{
    res.json(arrayMovies);
})
//? haremos la funcion para buscar la pelicula por id
app.get("/movies/:id", (req, res)=>{
    const id = req.params.id;//params nos da el valor del id del URL
    const movies = arrayMovies.find((movie)=> {
        movie.id === +id;
    })
    res.json(movies);
})

//? Crear pelicula
app.post("./movies", (req, res)=>{
    // en req se guarda la data que le cliente manda 
    //la forma de la cual accedemos a la data que envie el cliente es con req.body
    const data = req.body;
    const id = arrayMovies.length + 1;

    data.id = id;
    arrayMovies.push(data);
    res.json({
        message: "Todo bien",
    });
});

//? actualizar
app.put("/movies/:id", (req, res)=>{
    const id = req.params.id;
    const data = req.body;

    const movieIndex = arrayMovies.findIndex((movie)=>{
        movie.id === +id;
    });
    data.id = id;

    arrayMovies[movieIndex] = data;
    res.json({
        message: "todo bien",
    })
})

//? Delete
app.delete("/movies/:id", (req, res)=> {
    const id =  req.params.id;

    arrayMovies.filter((movie)=> movie.id !== +id);
    
    // esto funciona solo que no se logra completar pq intenta cambiar una variable local
    // const newArray = arrayMovies.filter((movie)=> movie.id !== +id);
    // arrayMovies = newArray;
    res.json({
        message: "todo bien",
    })
});
app.listen(3000, ()=> console.log("Servidor iniciado en http://localhost:3000/movies"));