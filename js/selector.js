// Mostrar el elemento con clase .skill-row al hacer clic en el botón con id "front"
document.getElementById("front").addEventListener("click", () => {
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".skill-row").style.display = "block";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".web1").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});

// Mostrar el elemento con clase .skill-back al hacer clic en el botón con id "back"
document.getElementById("back").addEventListener("click", () => {
  document.querySelector(".skill-back").style.display = "block";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".web1").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});
document.getElementById("plus").addEventListener("click", () => {
  document.querySelector(".skill-plus").style.display = "block";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".web1").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});
document.getElementById("prodin").addEventListener("click", () => {
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".imagenes").style.display = "block";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".mailto").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});
// document.getElementById("btn-menu").addEventListener("click", () => {
//   // document.querySelector(".web1").style.display = "block";
//   document.querySelector(".skill-plus").style.display = "none";
//   document.querySelector(".skill-back").style.display = "none";
//   document.querySelector(".skill-row").style.display = "none";
//   document.querySelector(".perfil").style.display = "none";
//   document.querySelector(".contacto").style.display = "none";
// });
document.getElementById("miPerfil").addEventListener("click", () => {
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".perfil").style.display = "block";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});
document.getElementById("contacto").addEventListener("click", () => {
  document.querySelector(".presentacion").style.display = "none";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".contacto").style.display = "block";
  document.querySelector(".mailto").style.display = "block";
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";

});
document.getElementById("inicio").addEventListener("click", () => {
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".presentacion").style.display = "block";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".mailto").style.display = "none";
  document.querySelector(".CarruselData").style.display = "none";


});
document.getElementById("presentacion").addEventListener("click", () => {
  document.querySelector(".imagenes").style.display = "none";
  document.querySelector(".skill-plus").style.display = "none";
  document.querySelector(".skill-back").style.display = "none";
  document.querySelector(".skill-row").style.display = "none";
  document.querySelector(".perfil").style.display = "none";
  document.querySelector(".contacto").style.display = "none";
  document.querySelector(".mailto").style.display = "none";
  // document.querySelector(".presentacion").style.display = "block";
  // document.querySelector(".cardyo").style.display = "none";


});


// document.addEventListener("DOMContentLoaded", function () {
//   var contenedorCursor = document.getElementById("contenedorCursor");
//   var cursorPersonalizado = document.getElementById("ovni");

//   document.addEventListener("mousemove", function (event) {
//     var x = event.clientX;
//     var y = event.clientY;

//     // Establece la posición del contenedor del cursor
//     contenedorCursor.style.left = x + "px";
//     contenedorCursor.style.top = y + "px";
//   });
// });
// JavaScript para controlar el evento del mouse
function mostrarVentanaEmergente(urlImagen) {
  document.getElementById('lightbox-img').src = urlImagen;
  document.getElementById('lightbox').style.display = 'flex';
}

function cerrarVentanaEmergente() {
  document.getElementById('lightbox').style.display = 'none';
}
var myCarousel = document.querySelector('#CarruselData')
var carousel = new bootstrap.Carousel(myCarousel)
