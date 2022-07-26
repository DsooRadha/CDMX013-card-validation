// toda la logica 

/*
let digitos = (numeroInvertido.split("")).map(Number);
console.log(digitos);
for (let i = 0; i < digitos.length; i + 2) {
  let pares = digitos[i]*2
  console.log(pares + "pares")
}
*/
const validator = {
  isValid: function (cardNumber) {
    let reverseNumber = cardNumber.split("").reverse().join(""); //
    const arrayString = [...reverseNumber]; /*Spreadarray solo estoy clonando. Si no lo usas y solo v1=v2 tu array original se ve afectado. 
    Tiene mas uso: Fusionar, clonar, Iterables a matriz, puede convertir un objeto-set- a matriz*,___otroque no recuerd*/
    console.log(arrayString);
    const arrayAllNumbers = [];
    let character = ''; //se escribe asi cuando va a ser un string con corchetes cuando es de number
    for (let i = 0; i < reverseNumber.length; i++) { //la estructura de los for es ([espresiónInicial]; [expresionCondicional]; [expresiondeActualización]) es decir desde donde va empezar a contar, la condicion y como va a ir avanzando
      character = reverseNumber.charAt(i); // devuelve en un nuevo String el carácter UTF-16 de una cadena. En este caso la posición
      let numberDigits = parseInt(character) //lo vuelve numero al valor de character
      if (i % 2 !== 0) { //aca es la condicion "si" la posicion la divides entre dos ===0 es par 
        // arrayString[i] = "PAR";
        let pair = numberDigits * 2;
        if (pair >= 10) { //acá porque 10 y no 9 sale lo mismo cuando lo cambio
          pair= pair - 9;
          arrayAllNumbers.push(pair);
        } // Si tu imprimes la consola ante de darle todas las intrucciones te va imprimiendo hasta los pasos anteriores no el paso final
        console.log(pair, "par");
      }
      else {   //todo lo que no entra en la condicion if lo escupe acá
        arrayAllNumbers.push(numberDigits);
        console.log(numberDigits, "impar");
      }
    }
    console.log(arrayAllNumbers, "AllNumbers");
         /*
        OTRA FORMA DE SUMAR LOS ELEMENTOS DE UN ARRAY ES CON LA FUNCION REDUCE----
        let total = arrayAllNumbers.reduce(function (a, b) {
          return a= a + b;
        });
    
        Explicandome la Funcion .reduce(acumulador, item, index, array)=>{
          return -regresa el valor a acumulador para que en la siguiente operacion tenga
        },10);
        */
    let sum = 0;
    for (let i = 0; i < arrayAllNumbers.length; i++) {
      sum += arrayAllNumbers[i]; //suma = suma + arrayAllNumbers[i];
    }
    console.log(sum);
    let casiAcabamos = sum % 10;
    console.log(casiAcabamos);
    
    if (sum % 10 == 0) {
      return true      
    }
    else {
      return false
    }
  }
 
}

  





/*
validator.maskify.function(numeroDeTarjeta){
        let cuatroDigitos = numeroDeTarjeta.slice(-4); //cuando es negativo empieza del final de la cadena .slice()
        console.log(cuatroDigitos + "probandoslice");
        let remplazo = numeroDeTarjeta.slice(0,-4);
        let numerosEnmascarados= numeroDeTarjeta.replace(remplazo,"🐱".repeat(numeroDeTarjeta.length));
       // return numerosEnmascarados
        console.log(numerosEnmascarados +"numerosenmascardos");
*/

export default validator;