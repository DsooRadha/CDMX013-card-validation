var numeroDeTarjeta=document.getElementById("botonDeValidar");
console.log(numeroDeTarjeta)
numeroDeTarjeta.addEventListener("click",capturandoNumeroDeTarjeta)   

function capturandoNumeroDeTarjeta(event) {
    event.preventDefault()
    var numeroDeTarjeta=document.getElementById("espacioParaElNumeroDeTarjeta").value;
     if (numeroDeTarjeta=="") {
        alert ("Introduce el numero de tarjeta como se muetra en la imagen de arriba")
        }
    console.log(numeroDeTarjeta);
    reverseNumber(numeroDeTarjeta);
    console.log( reverseNumber(numeroDeTarjeta));
}

function reverseNumber(n) {
    const numeroInvertido = n.toString().split("").reverse().join("");
  return Number(numeroInvertido);
}

/*

FUNCION BASE PARA REVERTIR NUMEROS
function reverseNumber(n) {
  const convertAndReverse = n.toString().split("").reverse().join("");
  return Number(convertAndReverse);
}

ENTONCES...

 function pruebaUnoParaInvertirUnNumero(n) {
    ->   const convertAndReverse = n.toString().split("").reverse().join("");
    n.toString() - Convierte la variable en una cadena
    split("") - Lo vuelve un arrego , un grupo de elementos. Segmenta el string
    reverse() - Invierte el string
    join("") - Vuelve a unir el string

POR LO TANTO...

    Si mi variable ya es una cadena eliminaria el paso  n.toString()
     Seccion a -->function pruebaUnoParaInvertirUnNumero(n) {

    Seccion b.1 -->    const inviertiendoElNumero= split("").reverse().join(""); 
        
        o           ACA SIGO SIN ENTENDER n

    Seccion b.2 -->    const inviertiendoElNumero= n.split("").reverse().join(""); 


     Seccion c.1 -->    return Number(inviertiendoElNumero);
     Seccion c.2 -->    return parseInt(inviertiendoElNumero);

     PODRÍA COMPROBAR EL RESULTADO CON: 

    return console.log (parceInt(inviertiendoElNumero));

SI ESTO FUNCIONA, lo siguiente sería...
    Que el resultado que me arroje...  
    volverlo una variable para poder trabajar con el
    esa variable volverla  un array  -segmentar- con :
    
             n.split("")

    es decir 
     function segmenando(n) {
        const stringInvertidoSegmentado =n.split("");
        return parseInt(stringInvertidoSegmentado);
}
LO SIGUIENTE SERÍA

    Asignar un valor a cada uno de los componentes:
    
    cadenaFinal= elemento1(1), elemento2(2),elemento3(1) ...elemento16(2)

    con IF el elemento tiene un valor= 2 --> n*2

     otro   IF el resultado de esta operacion es > 9 

        se volveria a segmentar o volver un arreglo   con   
        
                        n.split("")
        
        y el resultado= elemento1+elemento2

    LO SIGUIENTE SERIA...

        var sumarTodosLosElementos= elemento1 + elemento2 + elemento3 ...elemento16
        
            IF  sumarTodosLosElementos/10 = 0 -->True
            IF  sumarTodosLosElementos/10 ≠ 0 -->False

    RESULTADO

        true=Mostar el div de Continuar ¡Tu tarjeta es valida
        false=Mostrar el div de Intenta con otro tarjeta

        *existe  this.value?

        Este algoritmo LUHN

        - Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]);
        - a todos los números que ocupan una posición par se les debe multiplicar por dos,
        - si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; 
        -el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
        


import validator from './validator.js';

console.log(validator); */
