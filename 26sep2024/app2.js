
//fn declarativa
function getR(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

//console.log(getR(0,10));

//fn expresada en una variable

let EgetR = function getR(min, max){return Math.floor(Math.random()*(max-min)+min)}

//console.log(EgetR(10,20));
let getRAN = (min, max) => Math.floor(Math.random()*(max-min)+min);

console.log(getRAN(10,20));