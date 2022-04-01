//* LocalStorage > es una herramienta que nos permite guardar datos en el navegador
//* EL tiempo de exporiacion no existe

//* SessionStorage > tambien sirve para guardar informacion, solo que existe en la ventana q se creo,
//* solamente es por ventana y si cierro el mavegador se borra de forma automatica

const btnLogin = document.querySelector('#btn-login');

btnLogin.onclick = function(event){
    event.preventDefault();
    
    const inputs =document.querySelectorAll('input');

    console.log(inputs)
    inputs.forEach(input => {
        //* Vamos a guardar el correo y el password en localStorage
        //setItem guarda(key, value)
        localStorage.setItem(input.name, input.value);
    });
    login();
};

//? Vamos a obtner los datos de localStorage
//? La forma es usando lacalStorage.getItem(Key)

const email = localStorage.getItem('email');
const password =localStorage.getItem('password');

function login(){
    const email = localStorage.getItem('email');
    const password =localStorage.getItem('password');
    form.style.display = 'none';
    usuarioSection.style.display = 'block'
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}

const form = document.querySelector('#section-login');
const titleEmail = document.querySelector('#email');
const titlePassword = document.querySelector('#password');

const btnCerrarSesion = document.querySelector('#cerrar-session');
const usuarioSection = document.querySelector('#usuario-logged');
if(email !== null && password !== null){
    login();
}else{
    usuarioSection.style.display = "none";
}

btnCerrarSesion.onclick = function(){
    //vamos a elimar las variables de localStorage
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    //mostar el formulario y ocultar el mensaje del usuario

    form.style.display = 'block';
    usuarioSection.style.display = "none";
    const inputs =document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = "";
    })
}


