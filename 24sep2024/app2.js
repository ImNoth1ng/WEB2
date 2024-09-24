let carrito=[];

 function pedir(){
let fruta = prompt("ingresa una fruta ");

carrito.push(fruta);

console.log(carrito)
 }
 let msg = ""
let a = true;
 while (confirm(`Productos agregados\n` + msg + "Quieres aregar otro?")){
    pedir();
    msg = ""
    
    carrito.forEach((producto, ind)=> {
       msg += `(${ind+1}).- (${producto})\n`
    })

 }
 alert(`Usted compró\n` + msg)
 confirm("si?")
