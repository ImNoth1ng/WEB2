function saludar(){
    console.log("Hola");
}
saludar();

function despedida(nombreUsuario){
    alert("Adios "+ nombreUsuario)
}
 let neim = prompt("ingresa tu nombre")
 despedida(neim)

function retorno(nombreUsuario){
    return "Adios popó " + nombreUsuario
}

alert(retorno("Luisito"))