function sumar(n1,n2){
    return parseInt(n1) + parseInt(n2);
}

let numerouno = prompt("Ingresa un numero");
let numerodos = prompt("Ingresa el segundo numero");

let resul = sumar(numerodos,numerouno);

alert("El resultado de " + numerouno +" + "+numerodos + " Es: "+ resul );