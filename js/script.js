//declaracion de constantes
$('#myModal').modal('show')
/*
 const fechaNacimiento = 2009;
 let alertaEntrada = alert("Bienvenidos a Edicion Ilimitada! (por tu seguridad, en caso de comprar props debes ser mayor de 13 años)");
 let alertBox = true;


//declaracion de variables
const accedio = localStorage.getItem("acceso-website")
console.log(accedio)
if (!accedio){
    let acceso = parseInt(prompt("Por favor ingrese su año de Nacimiento."));
    while (alertBox) {console.log(acceso)
    if (acceso<=fechaNacimiento) {
        localStorage.setItem("acceso-website", acceso)
        alert ("Si tienes alguna consulta o sugerencia, no dudes en hablarnos en la seccion Contacto!");
        alertBox= false;
        }else { 
        alert ("Lo sentimos :(, por tu seguridad necesitas si o si ser mayor de 13 para poder realizar una compra de una prop, cualquier consulta contactanos a nuestro telefono o instagram"); 
        break;
        }
      }} */   
// array con objeto
const objetoCompra = [
    {
        id: 1,
        imagen: "assets/img/HylianShield.png",
        nombre: "Escudo Hyliano",
        Precio: "$20000",
        Tamaño: "51cm x 64cm",
        Peso: "2.3 kg",
        Descripcion: "Escudo del juego The Legend of Zelda: Skyward Sword"
    },
    {
        id: 2,
        imagen: "assets/img/ghostpokemon.png",
        nombre: "Figura Pokemon Fantasmas",
        Precio: "$25000",
        Tamaño: "25cm x 25cm x 27cm",
        Peso: "1 kg",
        Descripcion: "Figura/Estatua de Resina de Pokemon tipo Fantasmas con luces"
    },
    {
        id: 3,
        imagen: "assets/img/thorhammer.png",
        nombre: "Martillo de Thor",
        Precio: "$10000",
        Tamaño: "44cm x 21.9cm x 14cm",
        Peso: "0.7 kg",
        Descripcion: "Replica Martillo de Thor de las peliculas de Marvel Studios"
    },
 ];

//metodo de busqueda con find
let valorBuscado = "Figura Pokemon Fantasmas"
const busqueda = objetoCompra.find(objetoCompra => objetoCompra.nombre === valorBuscado)
console.log(busqueda)

const list = document.getElementById("itemlist");


objetoCompra.forEach(elemento => {
    list.innerHTML += `<div class="flexColumn col-12 col-lg-4">
<img class="col-12 col-lg-12" src="${elemento.imagen}" alt="${elemento.Descripcion}">
<h4>${elemento.nombre}</h4>
 <button class="primaryButton">Comprar</button> <br>
</div>`
});