import validator from './validator.js';

//console.log(validator);

let botonDeValidar = document.getElementById("botonDeValidar");

botonDeValidar.addEventListener("click", function (e) { //parametro de una funcion
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let cardNumber = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    if (cardNumber == "") { //si este elemento esta vacio al darle click al boton arroja un alert 
        alert("Introduce el numero de TU tarjeta. Como se muetra en la imagen de arriba");
    }



    document.getElementById("areaCambiante").style.display = "none";
    document.getElementById("pantallaDos").style.display = "block";


    if (validator.isValid(cardNumber)) {
        document.getElementById("tarjetaValida").style.display = "flex";
        document.getElementById("numeroEnmascaradoDos").innerHTML = validator.maskify(cardNumber);
    }
    else {
        document.getElementById("tarjetaInvalida").style.display = "flex";
        document.getElementById("numeroEnmascarado").innerHTML = validator.maskify(cardNumber);
    }

    let resultValid = validator.isValid(cardNumber)
    return resultValid
}

);




