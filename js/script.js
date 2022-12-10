const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


const fechaNacimiento = 2018;
let alertaEntrada = alert("Estas a punto de presenciar a la calculadora mas innovadora de la historia");
let alertBox = true;

const accedio = localStorage.getItem("acceso-website")
console.log(accedio)
if (!accedio){
    let acceso = parseInt(prompt("Por favor ingrese su año de Nacimiento, necesitas tener al menos 5 años para poder utilizar esta calculadora futurista."));
    while (alertBox) {console.log(acceso)
    if (acceso<=fechaNacimiento) {
        localStorage.setItem("acceso-website", acceso)
        alert ("Welcome!:D");
        alertBox= false;
        }else { 
        alert ("Lo sentimos :(, por tu seguridad necesitas si o si ser mayor de 5 para poder realizar un calculo aqui"); 
        break;
        }
    }}   