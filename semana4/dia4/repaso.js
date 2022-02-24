//* Filter es un bucle hermano de map
//* Sirve para poder filtrar elementos, aveces no tiene la necesidad de usar el if

// const mascotas = [
//     {
//         nombre: "Perro",
//         edad: 2,
//     },
//     {
//         nombre: "Gato",
//         edad: 3,
//     },
//     {
//         nombre: "Loro",
//         edad: 8,
//     },
//     {
//         nombre: "Conejo",
//         edad: 11,
//     },
// ]

//? Mascotas con edad par
// const mascotasMayores = mascotas.filter(mascota => mascota.edad % 2 === 0);
// console.log("Edades pares", mascotasMayores);

//? 
// const filtrandoMascotas = mascotas.filter((mascota, index) => {
//     if(mascota.edad > 5 ){
//         return "Mascota mayor a 5";//! no funciona el return pq no es parte del array, pero si funciona el filtro que esta haciendo
//     }else{
//         return "Mascota menor a 5";//! no funciona el return pq no es parte del array
//     }
// });

// console.log(filtrandoMascotas);

//? Const Curso

// const cursos = ["HTML", "JAVA", "CSS", "C#"];

// const filtroCursos = cursos.filter(curso => curso === "CSS" || curso === "JAVA");
// console.log(filtroCursos);

//? objetosCursos

const arregloCursos = [
    {
        nombre: "React JS",
        tec: "JS"
    },
    {
        nombre: "django",
        tec: "Python"
    },
    {
        nombre: "Angular",
        tec: "JS"
    },
    {
        nombre: "Flask",
        tec: "Python"
    },
    {
        nombre: "Laravel",
        tec: "PHP"
    },
];

//? Usando filter con funcion
const filtrarCurso = (arrayCurso, tec) => arrayCurso.filter(curso => curso.tec === tec); 

const cursosJS = filtrarCurso(arregloCursos, "JS");
const cursosPython = filtrarCurso(arregloCursos, "Python");
const cursosPhp = filtrarCurso(arregloCursos, "PHP");

console.log(cursosJS);
console.log(cursosPython);
console.log(cursosPhp);


