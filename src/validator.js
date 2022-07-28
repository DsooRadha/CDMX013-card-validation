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
    // console.log(typeof cardNumber); te devuelve un Strings
    let reverseNumber = cardNumber.split("").reverse().join(""); //
    /* const arrayString = [...reverseNumber]; /*Spreadarray solo estoy clonando. Si no lo usas y solo v1=v2 tu array original se ve afectado. 
     Tiene mas uso: Fusionar, clonar, Iterables a matriz, puede convertir un objeto-set- a matriz*,___otroque no recuerdº
     console.log(arrayString);*/
    const arrayAllNumbers = [];
    let character = ''; //se escribe asi cuando va a ser un string con corchetes cuando es de number
    for (let i = 0; i < reverseNumber.length; i++) { //la estructura de los for es ([espresiónInicial]; [expresionCondicional]; [expresiondeActualización]) es decir desde donde va empezar a contar, la condicion y como va a ir avanzando
      character = reverseNumber.charAt(i); // devuelve en un nuevo String el carácter UTF-16 de una cadena. En este caso la posición
      let numberDigits = parseInt(character) //lo vuelve numero al valor de character
      if (i % 2 == 1) { //aca es la condicion "si" la posicion la divides entre dos ===0 es par 
        // arrayString[i] = "PAR";
        let pair = numberDigits * 2;
        if (pair > 9) { // o >=10
          pair = pair - 9;
        }
        //   arrayAllNumbers.push(pair);
        // } else{
        //   arrayAllNumbers.push(pair);
        // }
        arrayAllNumbers.push(pair);
        // Si tu imprimes la consola antes de darle todas las intrucciones te va imprimiendo hasta los pasos anteriores no el paso final
        //console.log(pair, "par");
      }
      else {   //todo lo que no entra en la condicion if lo escupe acá
        arrayAllNumbers.push(numberDigits);
        // console.log(numberDigits, "impar");
      }
    }
    // console.log(arrayAllNumbers, "AllNumbers");
    /*
   OTRA FORMA DE SUMAR LOS ELEMENTOS DE UN ARRAY ES CON LA FUNCION REDUCE----
   let total = arrayAllNumbers.reduce(function (a, b) {
     return a= a + b;
   });
.reduce(acumulador, item, index, array)=>{
     return -regresa el valor a acumulador para que en la siguiente operacion tenga
   },10);
   */
    let sum = 0;
    for (let i = 0; i < arrayAllNumbers.length; i++) {
      sum += arrayAllNumbers[i]; //suma = suma + arrayAllNumbers[i];
    }
    console.log(sum);
    let casiAcabamos = sum % 10;
    if (casiAcabamos == 0) {
      return true
    }
    else {
      return false
    }
  },

  maskify: function (cardNumber) {
    let otrosNumeros = cardNumber.slice(0, 12);
    //  console.log(otrosNumeros, "otronumeros");
    let remplazo = cardNumber.slice(0, -4);
    //   console.log(remplazo, "reemplazo")
    let numerosEnmascarados = cardNumber.replace(remplazo, "#".repeat(otrosNumeros.length));
    //  console.log(numerosEnmascarados);
    return numerosEnmascarados;

    /*
    PLAN B
        function (cardNumber) {
        let numerosOcultos = cardNumber.split(""); //planB separo los numeros
        let pasoDos= numerosOcultos.map ((valor, posicion) =>
        posicion<cardNumber.length-4?"#":valor).join("");
        return pasoDos
    */
  }
}

export default validator;