const numeros = [1,2,3,4,5,6,7,8,9,0];

//continue continua para a proxima iteração
//break sao do laço

let i = 0;
do  {
    let numero = numeros[i];

    if (numero===2 ) {
        console.log('Pulei um numero');
        i++;
        continue;
    }

    if(numero === 7) {
        console.log('numero encontrado');
        i++;
        break;
    }
    console.log(numero);
    i++
}while (i < numeros.length);
/*let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero===2 ) {
        console.log('Pulei um numero');
        i++;
        continue;
    }

    if(numero === 7) {
        console.log('numero encontrado');
        i++;
        break;
    }
    console.log(numero);
    
}*/
/*for (let i= 0;i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero===2 ) {
        console.log('Pulei um numero');
        continue;
    }

    if(numero === 7) {
        console.log('numero encontrado');
        break;
    }
    console.log(numero);
}*/
/*for (let i in numeros) {
    let numero = numeros[i];

    if (numero===2 ) {
        console.log('Pulei um numero');
        continue;
    }

    if(numero === 7) {
        console.log('numero encontrado');
        break;
    }
    console.log(numero);
}*/

/*for (let numero of numeros) {
    if (numero===2 || numero === 5) {
        console.log('Pulei um numero');
        continue;
    }

    if(numero === 7) {
        console.log('numero encontrado');
        break;
    }
    console.log(numero);
}*/



