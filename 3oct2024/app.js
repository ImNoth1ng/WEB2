// console.log(document);

// msg = "test"

// console.log(document.getElementById("titulo").textContent)

// document.getElementById("titulo")

let btn = document.querySelector("#btn");
let par = document.querySelector("#par");

let change = false

btn.addEventListener("click", ()=>{ change? par.textContent= "OFF" : par.textContent = "ON";
if (change){
    change = false
}else{ change = true}
 });


 