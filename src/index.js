import validator from './validator.js';

console.log(validator);

let numeroDeTarjeta = document.getElementById("botonDeValidar");
numeroDeTarjeta.addEventListener("click", function (e) {
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let numeroDeTarjeta = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    if (numeroDeTarjeta == "") { //si este elemento esta vacio al darle click al boton arroja un alert 
        alert("Introduce el numero de tarjeta como se muetra en la imagen de arriba")
    }

/*
maskify.function(numeroDeTarjeta){
        let cuatroDigitos = numeroDeTarjeta.slice(-4); //cuando es negativo empieza del final de la cadena .slice()
        console.log(cuatroDigitos + "probandoslice");
        let remplazo = numeroDeTarjeta.slice(0,-4);
        let numerosEnmascarados= numeroDeTarjeta.replace(remplazo,"#".repeat(numeroDeTarjeta.length));
       // return numerosEnmascarados
        console.log(numerosEnmascarados +"numerosenmascardos");
       

*/

    let resultValid = validator.isValid(numeroDeTarjeta)
    console.log(resultValid)
});




/*let numeros= (invertirElNumero(numeroDeTarjeta));*/





