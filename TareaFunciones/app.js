//Programa que genera un numero aleatorio del 1 al 10 y el usuario tiene que adivinarlo
//Si el usuario adivina el numero, el programa le avisa que gano
//Si el usuario no adivina el numero, el programa le da pistas de si el numero es mas grande o mas chico
//El usuario tiene 3 vidas para adivinar el numero

let numeroMaquina = Math.floor(Math.random()*(11-1)+1);


let vidas = 3;

function intento(vidas){//funcion para pedir el numero
    return prompt("Adivina el numero del 1 al 10, tienes " + vidas + " vidas" );
     
}
function pista(numeroMaquina, guess){//funcion para dar pistas
    if (guess > numeroMaquina){
            
        alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más chico")
    }else ( alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más grande"));
}

while (vidas > 0){
    let guess = intento(vidas)
    if( guess == numeroMaquina){
        alert("Ganaste!!");
        break;
    }else{
        vidas --;
        if(vidas == 0){break;}
        pista(numeroMaquina, guess);  
    }
}

if (vidas == 0){
    alert("perdiste w, el numero era: "+ numeroMaquina);
}

