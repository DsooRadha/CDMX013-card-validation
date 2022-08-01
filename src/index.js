import validator from './validator.js';

//console.log(validator);

let botonDeValidar = document.getElementById("botonDeValidar");

botonDeValidar.addEventListener("click", function (e) { //parametro de una funcion
    //El parámetro (e) se pasa automáticamente de javascript a su función cuando agrega un detector de eventos. 
    //Representa el elemento que se vio afectado, 
    e.preventDefault() //evita que se corra la funcion por accidente como cuando recargas la pagina XD
    let cardNumber = document.getElementById("espacioParaElNumeroDeTarjeta").value; //el valorde ese elemento, que en este caso es el inputtext
    if (cardNumber == "" ) { //si este elemento esta vacio al darle click al boton arroja un alert 
        alert("Introduce el numero de TU tarjeta. Como se muetra en la imagen de arriba");
    }
   
    if (cardNumber.length < 12 || cardNumber == 0) {
        document.getElementById("mensajeIncorrecto").innerHTML = 'Ingresa TODOS los números de TÚ tarjeta. <br> <i>Como se muetra en la imagen de arriba</i>';
    }

    document.getElementById("areaCambiante").style.display = "none";
    document.getElementById("pantallaDos").style.display = "block";

    if (validator.isValid(cardNumber)) {
        document.getElementById("tarjetaValida").style.display = "flex";
        document.getElementById("numeroEnmascaradoDos").innerHTML = validator.maskify(cardNumber);
        document.getElementById("tarjetaInvalida").style.display = "none";
    }
    else {
        document.getElementById("tarjetaInvalida").style.display = "flex";
        document.getElementById("numeroEnmascarado").innerHTML = validator.maskify(cardNumber);
    }

    let resultValid = validator.isValid(cardNumber)
    return resultValid
}

);
let botonDeReintentar = document.getElementById("reintentar");
botonDeReintentar.addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("areaCambiante").style.display = "table";
    document.getElementById("pantallaDos").style.display = "none";
}
);

let configurandoInput= document.getElementById("espacioParaElNumeroDeTarjeta");
configurandoInput.addEventListener("keypress", soloNumeros);

function soloNumeros(e){
  var key = configurandoInput.event ? e.which : e.keyCode;  //? si : sino
   //switch instrucción para seleccionar uno de los muchos bloques de código que se ejecutarán.
  if (key < 48 || key > 57) {
    e.preventDefault();
  }
}
/* 

let configurandoInput =document.getElementById("espacioParaElNumeroDeTarjeta");
configurandoInput.addEventListener("keypress", soloNumeros)
function soloNumeros(e) {
  let value = e.target.value;
  e.target.value = value.replace(/[^A-Z\d-]/g,"");
}
*/