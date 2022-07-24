// toda la logica 
const validator = {
  isValid: function (numeroDeTarjeta) {
    let numeroInvertido = numeroDeTarjeta.split("").reverse().join(""); //
    const arregloCadena = [...numeroInvertido]; /*Spreadarray solo estoy clonando. Si no lo usas y solo v1=v2 tu array original se ve afectado. 
    Tiene mas uso: Fusionar, clonar, Iterables a matriz, puede convertir un objeto-set- a matriz*,___otroque no recuerd*/
    console.log(arregloCadena);
    let character = ''; //se escribe asi cuando va a ser un string con corchetes cuando es de number
    for (let i = 0; i < numeroInvertido.length; i++) { //la estructura de los for es ([espresiónInicial]; [expresionCondicional]; [expresiondeActualización]) es decir desde donde va empezar a contar, la condicion y como va a ir avanzando
      character = numeroInvertido.charAt(i); // devuelve en un nuevo String el carácter UTF-16 de una cadena. En este caso la posición
      let numero = parseInt(character) //lo vuelve numero al valor de character
      if (i % 2 == 0) { //aca es la condicion "si" la posicion la divides entre dos ===0 es par 
        arregloCadena[i] = "PAR";
        var pares = numero * 2;
        if (pares > 9) {
          pares = pares - 9;
        } // Si tu imprimes la consola ante de darle todas las intrucciones te va imprimiendo hasta los pasos anteriores no el paso final
        console.log(pares +"par");
      }
      else {   //todo lo que no entra en la condicion if lo escupe acá
        console.log(numero +"impar");
          //YA INTENTE ESTAS DOSS FORMAS DE ABAJO O Y NO FUNCIONA O___o
        //let todosLosNumeros=[...numeros, ...pares];
        //let todosLosNumeros=numero.concat(pares);//arr1 = [...arr1, ...arr2];
        //console.log(todosLosNumeros);
      }
    }

  
/*
    function suma ()
    */
    console.log(arregloCadena);


    /*     function sumaDePares(pares){
                    let suma=0;
                    for (let j = 0; j <pares.length; j++) { 
                      if (pares>9) { 
                        SUMA TODOS LOS ELEMENTOS XD --aqui iria la estructura de un contador--- CREO
                    }
            }
            
                    */

  },
  numFunctions: 2
}

validator.isValid('4083952015263');


// en el futuro true o false

/*
maskify.function(numeroDeTarjeta){
        let cuatroDigitos = numeroDeTarjeta.slice(-4); //cuando es negativo empieza del final de la cadena .slice()
        console.log(cuatroDigitos + "probandoslice");
        let remplazo = numeroDeTarjeta.slice(0,-4);
        let numerosEnmascarados= numeroDeTarjeta.replace(remplazo,"🐱".repeat(numeroDeTarjeta.length));
       // return numerosEnmascarados
        console.log(numerosEnmascarados +"numerosenmascardos");
       

*/


// ...


export default validator;


/*

    RESULTADO
        true=Mostar el div de Continuar con la funcion de ¡Tu tarjeta es valida
        false=Mostrar el div de Intenta con otro tarjeta
        
        Este algoritmo LUHN
        - Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]);
        - a todos los números que ocupan una posición par se les debe multiplicar por dos,
        - si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; 
        -el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.
       if resultadofinal=0 {
          funcion(tarjetavalida);
        }
      else{
          funcion(tarjetaInvalida);
        }



    FUNCION COLLBACK  ---.MAP
    Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
    sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript 
    asíncrono y nos mantiene a salvo de problemas y errores.

 */
