import validator from './validator.js';

console.log(validator);

let numeroDeTarjeta= document.getElementById("botonDeValidar");
numeroDeTarjeta.addEventListener("click", function (e) {
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let numeroDeTarjeta = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    if (numeroDeTarjeta == "") { //si este elemento esta vacio al darle click al boton arroja un alert 
        alert("Introduce el numero de TU tarjeta. Como se muetra en la imagen de arriba")
    }

/*
const tarjetaInvalida = document.getElementById("botonDeValidar");
        tarjetaInvalida.addEventListener("click", function (e) {
        e.preventDefault()
        document.getElementById('numeroEnmascarado').innerHTML=numerosEnmascarados

const tarjetaValida = document.getElementById("botonDeValidar");

        tarjetaValida.addEventListener("click", function (e) {
        e.preventDefault()
        --Enn algunlado -
        areaCambiante.style="display:none"
        pantallaDos.style="display:table"
        tarjetaValida.style="display:flex"

        document.getElementById('numeroEnmascarado').innerHTML=numerosEnmascarados
        --Enn algunlado -
        areaCambiante.style="display:none"
        pantallaDos.style="display:table"
        tarjetaInvalida.style="display:flex"
*/

    let resultValid = validator.isValid(numeroDeTarjeta)
    console.log(resultValid)
});

/*let numeros= (invertirElNumero(numeroDeTarjeta));*/





