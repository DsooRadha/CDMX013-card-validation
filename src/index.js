import validator from './validator.js';

console.log(validator);

let cardNumber= document.getElementById("botonDeValidar");

cardNumber.addEventListener("click", function (e) { //parametro de una funcion
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let cardNumber = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    //if (cardNumber == "") { //si este elemento esta vacio al darle click al boton arroja un alert 
      //  alert("Introduce el numero de TU tarjeta. Como se muetra en la imagen de arriba")
   // }

// validator.maskify.function(cardNumber)
       // let cuatroDigitos = cardNumber.slice(-4); //cuando es negativo empieza del final de la cadena .slice()
        //console.log(cuatroDigitos);
      let remplazo = cardNumber.slice(0,-4);
       let numerosEnmascarados= cardNumber.replace(remplazo,"🐱".repeat(cardNumber.length));
        console.log(numerosEnmascarados)

    if (validator.isValid(cardNumber)) {
        
        document.getElementById("botonDeValidar").areaCambiante.style.display = "none";
        document.getElementById("botonDeValidar").pantallaDos.style.display="table";
        document.getElementById("botonDeValidar").tarjetaValida.style.display="flex";
            }
    else {
               document.getElementById("botonDeValidar").areaCambiante.style.display ="none";
                document.getElementById("botonDeValidar").pantallaDos.style.display="table";
                document.getElementById("botonDeValidar").tarjetaInvalida.style.display="flex";
            }
        
    
    let resultValid = validator.isValid(cardNumber)
    console.log(resultValid)
}

);




