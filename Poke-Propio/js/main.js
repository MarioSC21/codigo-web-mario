//?Declaracion de variables
const container = document.querySelector("#container");
const inputSearch = document.querySelector("#inputSearch");
const search = document.querySelector("#search");
const searchNone = document.querySelector("#searchNone");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const loadPokeball = document.querySelector("#loadPokeball");
const searchResultado = document.querySelector("#searchResultado");
const pantallaIncio = document.querySelector("#inicio");

let siguiente = null;
let atras = null;
let arrayDescripcion = [];
const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
let urlImgPokemon2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const colors = {
	grass: "#A9CB90",
	poison: "#C3AFC1",
	fire: "#ffd1b5",
	flying: "#eae3ff",
	water: "#99D2C9",
	bug: "#DDE9AB",
	normal: "#e6e6c3",
	electric: "#DEE185",
	ground: "#E3C08B",
	fighting: "#fcada9",
	psychic: "#ffc9da",
	rock: "#f0e09c",
	fairy: "#ffdee5",
	steel: "#e6eaf0",
	ice: "#e8feff",
	ghost: "#dbbaff",
	dragon: "#c4bdff",
	dark: "#a9abb0"
};

//? Funciones
const capitalize = (str) => str[0].toUpperCase() + str.substr(1);

//Funcion loaderPokeball
const loaderPokeball = (display)=> {
  if(display === "remove"){
    container.innerHTML = "";
    loadPokeball.classList.remove("d-none");
  }else{
    loadPokeball.classList.add("d-none");
  }
}

//? Descripcion Pokemon
const descripcionPokemon = async(urlId)=>{
  const descripPokemon = await fetch(urlId);
  const data = await descripPokemon.json();
  return data;
};

//? Llamando al api de pokemon 
const fetchPokeApi = async (url) => {
  loaderPokeball("remove");
  await fetch(url)
    .then(reponseData => reponseData.json())
    .then(data => {
        const {next, previous, results} = data;
        siguiente = next;
        atras = previous;
        //funcion asyncrona para leer la descripcion
        results.forEach(async(result)=>{
          try {
            const descripcion = await descripcionPokemon(result.url);
            arrayDescripcion.push(descripcion);
            console.log(arrayDescripcion)
          } catch (error) {
            console.log(error.message);
          }   
        });
        setTimeout(()=>{
          pintandoPokemon(arrayDescripcion);
        },500);
    }).catch((error)=>{console.log(error.message)});
    setTimeout(()=>{
      loaderPokeball("add");
    },500);
};

//? Imprimiendo en pantalla
const pintandoPokemon = (arrayDescripcions) => {
    container.innerHTML = "";
    
    const pintandoResultado = arrayDescripcions.map((arrayDescripcion) => {
      const {id, name, abilities, sprites, types, stats} = arrayDescripcion;
      const color = types[0].type.name;
      const html = 
        `
                <div class="col-md-4 col-12 col-sm-6 col-lg-3 mb-5 card-container" id="pokemon-card">
                    <div class="card front" style = "background:${types.length > 1 ? `linear-gradient(150deg, ${colors[color]} 50%, ${colors[types[1].type.name]} 50%);`: `${colors[color]};`};">
                      <img src= '${urlImgPokemon2}${id}.png' class="card-img-top " style="height:300px; widtf:300px" alt="...">
                      <div class="card-body">
                         <h5 class="card-title text-center" >${capitalize(name)} </h5>
                         <p class="card-text text-center">
                          <button class="btn-numero" >Nro-${id}</button>
                         </p>
                      </div>
                    </div>
                    <div class="card back" style="background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);">
                      <h6 class="card-title text-start mb-0 " style="margin-left: 15px;">Nro-${id} </h6>
                      <h5 class="card-title text-center mb-0" >${capitalize(name)} </h5>
                      <div class="card-img-top text-center div-img">
                        <img src= '${sprites.front_default}' style="heigth: 30px" alt="...">
                        <img src= '${sprites.back_default}'  style="heigth: 30px" alt="...">
                      </div>
                      <div class="card-body p-1 cardBody">
                        <h6 class="card-title text-center mb-2" >Tipo</h6>
                        <div class="d-flex justify-content-center">
                          <button class="btn btn-success m-lg-1" style="background: ${colors[color]};color:black; border:none">${types[0].type.name}</button>
                          ${types.length> 1 ? `<button class="btn btn-dark m-lg-1" style="background: ${colors[types[1].type.name]};color:black; border:none">
                          ${types[1].type.name}</button>`: ""} 
                        </div>
                      <div class="card-body p-1">
                        <h6 class="card-title text-center mb-2" >Abilidades</h6>
                        <div class="d-flex justify-content-evenly">
                          <button class="btn btn-success">${abilities[0].ability.name }</button>
                          ${abilities.length> 1 ? `<button class="btn btn-dark ">${abilities[1].ability.name}</button>`: ""} 
                        </div>
                        <div class="text-start">
                        <h6 class="card-text mt-2 m-0 mb-2">HP-${stats[0].base_stat}</h6>
                        <div class="poke-stats-bar text-center" style="background: linear-gradient(to right, #D36449 ${stats[0].base_stat}%, #ffd1b571 ${stats[0].base_stat}%"></div>
                        <h6 class="card-text mt-2 m-0 mb-2">Attack-${stats[1].base_stat} </h6>
                        <div class="poke-stats-bar text-center" style="background: linear-gradient(to right, #63B8B5 ${stats[1].base_stat}%, #ffd1b571 ${stats[1].base_stat}%"></div>
                        </div>
                      </div>
                    </div>
                 </div>
        `
        container.innerHTML +=  html;
        return name;
    });
    //resultado retorna un array de nombres de los pokemones 
    buscarPokemonReal(pintandoResultado);
}

//? Funciones y eventos de los botones left y rigth
const buttonSiguientePagina = ()=>{
  if(siguiente){
    arrayDescripcion = [];
    fetchPokeApi(siguiente);
  }
}

const buttonAtrasPagina = ()=>{
  if(atras){
    arrayDescripcion = [];
    fetchPokeApi(atras);
  }
}

left.addEventListener('click', buttonAtrasPagina);
right.addEventListener('click', buttonSiguientePagina);


//? Funcion para bucar el pokemon en tiempo real > se esta llamando dentro de fetchPintandoPokemon
const buscarPokemonReal =  (resultado)=> {
  const card = document.querySelectorAll("#pokemon-card");
  //evento del input
  inputSearch.onkeyup = ()=>{
    const searchPokemon = inputSearch.value.toLowerCase();
    if(searchPokemon === " "){
      searchNone.click();
        Swal.fire({
          icon: 'error',
          title: 'Coloque una letra',
          text: 'Ingrese una letra como minimo',
        })
      return
    }
     resultado.forEach((cardName,index)=>{
      const nameCard = cardName.toLowerCase();
      card[index].style.display = "none";
      if(container.innerText === ""){
        searchResultado.classList.replace("d-none", "d-block");
        pantallaIncio.classList.replace("d-none", "d-inline-block");
      }else{
        searchResultado.classList.replace("d-block", "d-none");
      }
      if(nameCard.indexOf(searchPokemon) >= 0){
        card[index].style.display = "block";
      }
    });
  };
};


//?evento para buscar por id o nombre en toda la api
  searchNone.onclick = ()=>{
  };

//? evento busqueda de pokemon
search.onclick = async()=>{
  loaderPokeball("remove");
  const valueSearch = inputSearch.value;
  const urlIdPokemon = `https://pokeapi.co/api/v2/pokemon/${valueSearch}`
  const searchId = await descripcionPokemon(urlIdPokemon)
  arrayDescripcion = [];
  arrayDescripcion.push(searchId);
  setTimeout(()=>{
   loaderPokeball("add")
   pintandoPokemon(arrayDescripcion);
   pantallaIncio.classList.replace("d-none", "d-inline-block");
 },500);
  searchResultado.classList.replace("d-block", "d-none");
  searchNone.click();
}; 

//? evento return
pantallaIncio.onclick = ()=> {
  arrayDescripcion = [];
  fetchPokeApi(url);
  setTimeout(()=>{
    pantallaIncio.classList.replace("d-inline-block", "d-none");
  },500);  
}

//? evento enter > con error de que no se quita el mensaje de ayuda
inputSearch.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){
    event.preventDefault()
    search.click();
  }
});

//? llamando a la funcion principal
fetchPokeApi(url);