let numeroMaquina = Math.floor(Math.random()*(11-1)+1);


let vidas = 1;

function intento(vidas){
    return prompt("Adivina el numero del 1 al 10, tienes " + vidas + "vidas" );
     
}

while (vidas > 0){
    let guess = intento(vidas)
    if( guess == numeroMaquina){
        alert("Ganaste!!");
        break;
    }else{
        vidas --;
        if(vidas == 0){break;}
        

        if (guess > numeroMaquina){
            
            alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más chico")
        }else ( alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más grande"));
    }
}

if (vidas == 0){
    alert("perdiste w, el numero era: "+ numeroMaquina);
}

