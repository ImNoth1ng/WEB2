let sel = prompt(`Escoge el ejemplo de impresión
                  a)
                  b)
                  c)
                  d) `);

switch(sel){
    case "a":
        let op = prompt(`Escoge el formato de impresión
                  1) vertical
                  2) horizontal`);
            if(op == 1){

                alert(aVert(prompt("dime el numero de x en vertical")))
            } else if (op == 2){
                alert(aHor(prompt("dime el numero de x en horizontal")))   
            }
        
        break;
    
    case "b":
            let numV = prompt("dime el numero de x vertical");
            let numH = prompt("dime el numero de x Horizontal");
            alert(aHor(numH) + aVert(numV-1))
        break;

    case "c":
            alert(cGen(prompt("Dime la dimension del cuadro")));
        break;

    case "d":
            alert(tablasM());
}

function aVert(num){
    let msg = ""
    for (let i = 0; i < num; i++) {
        msg += `x\n`
        
    }
    return msg;
}

function aHor(num){
    let msg = ""
    for (let i = 0; i < num; i++) {
        msg += `x `
        
    }
    return msg + "\n";
}

function cGen(num){
    let msg = ""
    for (let i = 0; i < num; i++){
        msg += (aHor(num));
    }
    return msg;
}

function tablasM(){
    let msg = "";

    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            msg += `${i} x ${j} = ${i*j}\n`
        }
    }
    return msg;
}