
let form = document.getElementById('sumForm').addEventListener('submit', function(event){
    let A = parseInt(document.getElementById('num2').value);
let B = parseInt(document.getElementById('num1').value);
let resab = A+B;
document.getElementById('res').innerText = "La suma es: "+resab})
