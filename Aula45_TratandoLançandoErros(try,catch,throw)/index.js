

/*try {
    console.log(opa);
}catch(err) {
    console.log('opa não existe');
    console.log(err);
}*/

function soma(x,y) {
    if (typeof x !== 'number'|| typeof y !== 'number'){
       // throw new Error ('x e y precisam ser numero');
        throw new ReferenceError ('x e y precisam ser numero');
    }
    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(err) {
    //console.log(err);
    console.log('Algo deu errado verifique');
}