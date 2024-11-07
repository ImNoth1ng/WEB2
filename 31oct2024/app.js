const operacion = (numero1, numero2, op)=>{
    return console.log(op(numero1, numero2));
}

operacion(1,3,(a,b)=>a+b);

