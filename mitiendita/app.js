let carrito = [];	// Array de productos
let total = 0;		// Variable para el total

let msg= "";

while(confirm(`Quieres agregar un producto al carrito?` + msg)){
    let producto = prompt(`Productos:
        1. Papas  $10
        2. Refresco $15
        3. Chocolates $20
        4. Galletas $5
        5. Pan $10`);
        msg = "\nProductos en el carrito: ";

        let eleccion;
        
        switch(producto){
            case "1":
              eleccion = {producto: "Papas", precio: 10};
                break;
            case "2":
               eleccion = {producto: "Refresco", precio: 15};
                break;
            case "3":
              eleccion = {producto: "Chocolates", precio: 20};
                break;
            case "4":
              eleccion = {producto: "Galletas", precio: 5};
                break;
            case "5":
              eleccion = {producto: "Pan", precio: 10};
                break;
            default:
                alert("Producto no valido");
                break;
        }
        total = 0;
        if (eleccion != undefined){
            carrito.push(eleccion);
        }
        carrito.forEach((producto, indice)=>{
            msg += `\n${indice + 1}. ${producto.producto} $${producto.precio}`;
        });
        carrito.forEach((producto)=>{
            total += producto.precio;
        });
        msg += `\n\nTotal: $${total}`;
}

alert(`Gracias por su compra! \nTotal: $${total}`);