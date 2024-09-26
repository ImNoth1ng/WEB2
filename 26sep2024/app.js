let compras = [];

let fruta = prompt("ingresa una fruta");
compras.push(fruta);


while(confirm("Agregar otra fruta?")){
    let fruta2 = prompt("ingresa una fruta");
    compras.push(fruta2);
}

console.log("las frutas que compraste son: ");
// for (let fruta of compras) {
//     console.log(fruta);
    
// }

compras.forEach((fruta)=>{
    console.log(fruta);
});