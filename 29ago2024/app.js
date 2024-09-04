let opciones = prompt(`Eliga una opción
    1.- Libros
    2.- Peiculas
    3.- JUegos`);

    switch(opciones){
        case "1":
            console.log("El principito");
            break;
        case "2":
            console.log("Spiderman movie");
            break;
        case "3":
            console.log("Elden RIng");
            break;
        default:
            console.log("Pero escoge algo bien");
    }