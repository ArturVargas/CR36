// Crear una funcion que convierta de farenheit a celcius
// pasarle los grados farenheit y los convierta a celcius
// (N °F − 32) × 5/9 = 0 °C


function farenheitToCelcius(gradosF) {
    let result = (gradosF - 32) * 5/9;
    return `Los Grados ${gradosF} Farenheit son ${result} Celcius`;
}

//console.log(farenheitToCelcius(32));
 
// Funcion que reciba como parametro cualquier letra del abecedario
// y valide si es vocal o consonante y en caso de ser vocal que
// regrese "Vocal"

const evaluateLetter = (letra) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i < vocales.length; i++){
        if(letra.toLowerCase() == vocales[i]){
            return "Vocal";
        } else {
            return "No es una vocal";
        }
    } 

}
//let input = prompt("Da una letra: ");
//console.log(evaluateLetter(input));
 
const decimalToBinary = (num) => {
   
}



// Arreglos
// let miArreglo = [1,3,4,6,8]
// let vocales = ['a', 'e', 'i', 'o', 'u'];

// miArreglo[7] = 20;
// console.log(miArreglo);
// console.log(miArreglo[6]);

let evaluateNumber = (num) => {
    if(num % 5 === 0 || num % 11 === 0) {
        return true;
        console.log("Hola");
    } 
    return false;
}

console.log(evaluateNumber(5));

let casa = {
    techo: "a dos aguas",
    color: "morado",
    area: "200mts",
    puerta: function abrir() {
        console.log("Abre puerta");
    }
}

console.log(casa["color"]);
console.log(casa.area);

