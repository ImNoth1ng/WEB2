alert("Calcularemos tu IMC");
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let edad = prompt("Ingresa tu edad");
let peso = prompt("Ingresa tu peso en kilogramos");
let altura = prompt("Ingresa tu altura en metros");
let genero = prompt("Ingresa tu género (H o M)");

let imc = IMC(peso, altura);

if (genero === "H"){
    if (imc < 20.7){
        alert("Tu IMC es: " + imc + " Estás por debajo del peso ideal");
    } else if (imc >= 20.7 && imc <= 26.4){
        alert("Tu IMC es: " + imc + " Estás en tu peso ideal");
    } else {
        alert("Tu IMC es: " + imc + " Estás por encima de tu peso ideal");
    }
}
if (genero === "M"){
    if (imc < 19.1){
        alert("Tu IMC es: " + imc + " Estás por debajo del peso ideal");
    } else if (imc >= 19.1 && imc <= 25.8){
        alert("Tu IMC es: " + imc + " Estás en tu peso ideal");
    } else {
        alert("Tu IMC es: " + imc + " Estás por encima de tu peso ideal");
    }
}
if (genero !== "H" && genero !== "M"){
    alert("Que paso Master, ponlo bien");
}

function IMC(peso, altura) {
  return peso / (altura * altura);
}
