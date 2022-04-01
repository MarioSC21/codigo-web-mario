const optionMode = document.querySelector("#option-mode");
const body = document.querySelector("body");

optionMode.onchange = function(event){
    const {value} = event.target;
    body.setAttribute("data-mode", value)

}