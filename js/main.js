// ------------------------------------------------------------
// DEFINIMOS LAS VARIABLES DE LOS NOMBRES CONECTADNDOLO AL HTML
// ------------------------------------------------------------
let nombreContacto = "";
let apellidoContacto = "";
let edadContacto = "";
let mailContacto = "";
// --------------------
// ESTO NO SE PORQUE SE PONE ACA PERO UENO
// ------------------------------
let boton = document.getElementsByClassName("guardar-contacto");
// --------------------------------------------------------------
// ACA PONEMOS QUE EL IMPUT DE CADA CELDA ES EL DEL HTML DESEADO
// --------------------------------------------------------------
let inputNombre = document.getElementsByClassName("nombre-contacto");
let inputApellido = document.getElementsByClassName("apellido-contacto");
let inputContacto = document.getElementsByClassName("edad-contacto");
let inputMail = document.getElementsByClassName("mail-contacto");
// --------------------------------------------
// AHORA PONEMOS EL EVENT LISTENER A LOS IMPUTS
// --------------------------------------------
// inputNombre.addEventListener("input", () => {
//   nombreContacto = inputNombre.value;
// });
// inputApellido.addEventListener("input", () => {
//   apellidoContacto = inputApellido.value;
// });
// inputContacto.addEventListener("input", () => {
//   edadContacto = edadContacto.value;
// });
// inputMail.addEventListener("input", () => {
//   mailContacto = inputMail.value;
// });
inputNombre.array.forEach((inputNombre) => {
inputNombre.addEventListener("input", () => {
    nombreContacto = inputNombre.value;
});
inputApellido.array.forEach((inputApellido) => {
    inputApellido.addEventListener("input", () => {
    apellidoContacto = inputApellido.value;
    });
inputEdad.array.forEach((inputEdad) => {
    inputEdad.addEventListener("input", () => {
        edadContacto = inputEdad.value;
    });
inputMail.array.forEach((inputMail) => {
    inputMail.addEventListener("input", () => {
        mailContacto = inputMail.value;
    });
  // -------------------------------------------
  // AHORA LE DECIMOS AL BOTON QUE HAGA LO SUYO
  // -------------------------------------------
boton.addEventListener("click", () => {
    alert(
    nombreContacto + " " + apellidoContacto + " " + edadContacto + " " + mailContacto
    );
});