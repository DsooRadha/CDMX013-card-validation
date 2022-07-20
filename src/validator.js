// toda la logica 
const validator = {
  isValid:function(numeroDeTarjeta){
    let numeroInvertido = numeroDeTarjeta.toString().split("").reverse().join("");
    let digitos= numeroInvertido.toString().split('');
    let numerosEnDigitos= digitos.map(Number)
    console.log(numerosEnDigitos);   
    
/*
    let Pares= numerosEnDigitos.map();
    let operacionesPares= function (numerosEnDigitos){

    }


function filtrarpares(numerosEnDigitos){
  const pares=[];

  for (let i=1; 1<numerosEnDigitos.length; i++){
    if (digitos[i]%2===0){
      pares.push(digitos)

      return pares;
    };
  }
}
*/
    for (let i = 0 ; i < digitos.length; i++) {
      if (digitos[i]%2===0);
      
     
    }
    
    
    
    // [i] %2 == 0
    // en el futuro true o false
    return true
  }

};



  // ...


export default validator;


/*

LO SIGUIENTE SERÍA...

    BUCLES
        var realDigits = digits.map(Number)
        Definiendo numeros pares if (variableDefinidaPreviamente [i] %2 == 0);
            for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
            instrucción

    Otro metodo podria ser .forEach

    variable.forEach(function(pares)){
      console.log (pares*2)
    }
       
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
        
 */
