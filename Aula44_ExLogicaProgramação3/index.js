//ESCREVA MA FUNÇÃO QU RECEBE UM NUMERO E RETORNE O SEGUINTE
// NUMERO É DIVISIVEL POR 3 = FIZZ
// NUMERO É DIVISIVEL POR 5 = BUZZ
// NUMERO É DIVISIVEL POR 3 E 5 = FIZZBUZZ
// NUMERO NÃO É DIVISIVEL POR 3 E 5 = RETORNA O PRÓPRIO NUMERO
//CHECAR SE O NÚMERO REALMENTE É UM NUMERO SE NÃO RETORNE O PROPIO NUMERO
// USE A FUNÇÃO COM NÚMEROS DE 0 A 100

function fizzBuzz(numero) {
if(isNaN(numero)) return numero;
    if( numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 5 === 0) return 'Buzz';
    if(numero % 3 === 0)return 'Fizz';
    return numero;
    
}
for (let i = 0; i<= 100; i++){
    console.log(i,fizzBuzz(i));
}
