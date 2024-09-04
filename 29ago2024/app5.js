let frutas = ["Manzana", "Pera", "Kiwi", "Durazno"];
console.log(frutas[1]);
console.log(frutas.length)

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
console.log("..............................")
for(let fruta of frutas){
    console.log(fruta);
}
console.log("..............................")
for( let fruta in frutas){
    console.log(fruta)
}