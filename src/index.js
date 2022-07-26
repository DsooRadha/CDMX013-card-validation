import validator from './validator.js';

console.log(validator);

let cardNumber= document.getElementById("botonDeValidar");

cardNumber.addEventListener("click", function (e) { //parametro de una funcion
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let cardNumber = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    if (cardNumber == "") { //si este elemento esta vacio al darle click al boton arroja un alert 
        alert("Introduce el numero de TU tarjeta. Como se muetra en la imagen de arriba")
    }

/*
 tarjetaInvalida = document.getElementById("botonDeValidar");
        tarjetaInvalida.addEventListener("click", function (e) {
        e.preventDefault()
        document.getElementById('numeroEnmascarado').innerHTML=numerosEnmascarados

const tarjetaValida = document.getElementById("botonDeValidar");

function validacion (){
    if( true) {
        areaCambiante.style="display:none"
        pantallaDos.style="display:table"
        tarjetaValida.style="display:flex"

    }
     else {
        areaCambiante.style="display:none"
        pantallaDos.style="display:table"
        tarjetaInvalida.style="display:flex"        
     }
}
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

    let resultValid = validator.isValid(cardNumber)
    console.log(resultValid)
});

/*let numeros= (invertirElNumero(numeroDeTarjeta));*/





