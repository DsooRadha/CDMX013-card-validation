import validator from './validator.js';

console.log(validator);

let numeroDeTarjeta=document.getElementById("botonDeValidar");
numeroDeTarjeta.addEventListener("click",function(e){
    e.preventDefault()
    let numeroDeTarjeta=document.getElementById("espacioParaElNumeroDeTarjeta").value;
     if (numeroDeTarjeta=="") {
        alert ("Introduce el numero de tarjeta como se muetra en la imagen de arriba")
        }
        
    let resultValid= validator.isValid(numeroDeTarjeta)
    console.log(resultValid)
}); 




/*let numeros= (invertirElNumero(numeroDeTarjeta));*/





