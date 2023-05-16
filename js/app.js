/* lo de abajo hasta line3 corresponde a las barritas del menu hamburguesa*/
document.querySelector(".hamburguesa").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}
/*lo de abajo hasta hamburguesa corresponder a la activacion o desactivacion del despliegue de menu hamburguesa*/
let hamburguesa = document.getElementById("hamburguesa"),
  nav = document.getElementById("nav"),
  contador = "0";

function cambio() {
  if (contador == 0) {
    nav.classList.remove("ocultar");
    contador = 1;
  } else {
    nav.classList.add("ocultar");
    contador = 0;
  }
}

hamburguesa.addEventListener("click", cambio, true);
