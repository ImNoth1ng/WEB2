let tasks = [];
//funcion para mostrar nuestro menu
function mostrarmenu(){
return parseInt(prompt(`
    "Opciones disponibles"
    1.- Agregar Tarea
    2.- Ver todas las tareas
    3.- Marcar mi tarea como completada
    4.- Salir
    "Elige una opción"`));

}

function addtask(){
    nombre = prompt("Ingresa el nombre de la tarea");
    if (nombre != ""){
        let tarea= {
            nombre:nombre,
            completada: false,
            numero: parseInt(tasks.length+1)
        };

        tasks.push(tarea);
    }else{
        alert("Pero ponle nombre w, nmms")
    }
//     tasks.push( " "+ (tasks.length+1)+ ".- "+ prompt("Ingresa la tarea a agregar"));
    }

function seetasks(){
    if(tasks.length === 0){
        alert("No tienes tareas w");
    }else{
        let mensaje = "Lista de tareas\n";
        tasks.forEach((task, index) =>{
            mensaje+= `${index +1}.- ${task.nombre} [${tarea.completada ? "Completada":"Pendiente"}]`
        }) 
        alert(mensaje);
    }
}

function marktask(){
    let completed = tasks.pop(parseInt(prompt(`Dime el numero de tarea a eliminar` + tasks)))
}

function endprg(){
    continuar = false;
    alert("Adios :v")
}

//funcion para manejar el flujo del programa

let continuar = true;
function iniciarprg(){
    let opcion;
    while(continuar){
        opcion = mostrarmenu();
        switch(opcion){
            case 1:
                console.log("Escogiste la opción " + opcion);
                addtask();
                break;
            case 2:
                console.log("Escogiste la opción " + opcion);
                seetasks();
                break;
            case 3:
                console.log("Escogiste la opción " + opcion);
                marktask();
                break;
            case 4:
                endprg();
                console.log("Escogiste la opción " + opcion);
                break;
            default:
                alert("Pero escoge bien papito")
            
        }
    }
}

iniciarprg();